import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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

if (localStorage.getItem('token')!== undefined) {
  const token = localStorage.getItem('token')??'';
  if (token.length>0) {
    initialState.token = token;
    initialState.decoded = AuthService.getDecodedToken(token);
    initialState.isAuthenticated = true;
    initialState.status = 'resolved';
  }
}

export const sendAuth = createAsyncThunk(
  'auth/sendAuth',
  async (payload:OutputAuthForm,{ rejectWithValue }) => {
    const {email,password,typeOfData,userType} = payload;
    try {
      const response = await AuthService.getTokenOrNull(email,password,typeOfData,userType);
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
    logOut: (state)=> {
      state.isAuthenticated = false;
      state.decoded = null;
      state.token = '';
      state.status = null;
      state.error = null;
      localStorage.setItem('token','');
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
        if (action.payload.status === 201) {
          state.token = action.payload.token??'';
          state.decoded = action.payload.decoded;
          state.isAuthenticated = true;
          state.error = null;
          localStorage.setItem('token',action.payload.token??'');
        } 
      }
    }),
    builder.addCase(sendAuth.rejected, (state,action) => {
      state.status = 'rejected';
      state.error = action.payload;
    })
  },
});

export const { logOut } = authReducer.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authReducer.reducer;
