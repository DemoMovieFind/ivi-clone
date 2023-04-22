import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import { OutputAuthForm } from '../components/AuthForm/AuthForm';
import { AuthService, JWTTokenDecodedType } from '../services/AuthService';
import axios from 'axios';

export type AuthState = {
  token: string,
  status: null | 'loading' | 'resolved' | 'rejected',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: null | any,
  isAuthenticated:boolean,
  decoded:JWTTokenDecodedType | null,
}

const initialState: AuthState = {
  token: '',
  status:null,
  error:null,
  isAuthenticated: false,
  decoded:null,
};

export const sendAuth = createAsyncThunk(
  'auth/sendAuth',
  async (payload:OutputAuthForm,{ rejectWithValue }) => {
    const {email,password,typeOfData} = payload;
    try {
      const response = await AuthService.auth(email,password,typeOfData);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return  rejectWithValue(error.message);
      }
      return  rejectWithValue(error);
    }
  }
)


export const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state,action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload
    },
    logOut: (state)=> {
      state.isAuthenticated = false;
      state.decoded = null;
      state.token = '';
      state.status = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendAuth.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    }),
    builder.addCase(sendAuth.fulfilled, (state,action) => {
      state.status = 'resolved';
      if (action.payload !== null) {
        state.token = action.payload.token;
        state.decoded = action.payload.decoded;
        state.isAuthenticated = true;
        state.error = null;
      } else {
        state.isAuthenticated = false;
        state.token = '';
        state.decoded = null;
      }
    }),
    builder.addCase(sendAuth.rejected, (state,action) => {
      state.status = 'rejected';
      state.error = action.error.message;
    })
  },
});

export const { setAuth, logOut } = authReducer.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authReducer.reducer;
