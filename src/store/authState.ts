import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import { OutputAuthForm } from '../components/AuthForm/AuthForm';

export type AuthState = {
  auth: string,
  status: null | 'loading' | 'resolved' | 'rejected',
  error: null | string,
  isAuthenticated:boolean
}

const initialState: AuthState = {
  auth: '',
  status:null,
  error:null,
  isAuthenticated: false,
};

export const sendAuth = createAsyncThunk(
  'auth/sendAuth',
  async (payload:OutputAuthForm,{ rejectWithValue }) => {
    const {email,password,typeOfData} = payload;
    const url = typeOfData ==='signin'? 'http://localhost:3000/login' : 'http://localhost:3000/registration'
    try {
      const response = await fetch(url,{
        method:'POST',
        body:JSON.stringify({ email, password })
      });
      const data  = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      return  rejectWithValue(error)
    }
  }
)


export const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state,action: PayloadAction<string>) => {
      state.auth = action.payload
    },
    logOut: (state)=> {
      state.auth = ''
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendAuth.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    }),
    builder.addCase(sendAuth.fulfilled, (state) => {
      state.status = 'resolved';
    }),
    builder.addCase(sendAuth.rejected, (state,action) => {
      state.status = 'rejected';
      state.error = action.error.message ?? '';
    })
  },
});

export const { setAuth, logOut } = authReducer.actions;

export const selectAuth = (state: RootState) => state.auth.auth;

export default authReducer.reducer;
