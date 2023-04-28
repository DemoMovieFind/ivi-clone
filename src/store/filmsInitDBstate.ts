import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import { api } from '../services/AuthService';
import axios from 'axios';

export type FilmUploadState = {
  status: null | 'loading' | 'resolved' | 'rejected',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: null | any,
  uploaded:boolean,
}

const initialState: FilmUploadState = {
  status:null,
  error:null,
  uploaded: false,
};

export type PayloadType = {
  file:any
}

export const uploadFilms = createAsyncThunk(
  'films/uploadFilms',
  async (payload:PayloadType,{ rejectWithValue }) => {
    const {file} = payload;
    try {
      const response = await api.post('/fill-db',file);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return  rejectWithValue(error.message);
      }
      return  rejectWithValue(error);
    }
  }
)

export const filmsUploadReducer = createSlice({
  name: 'filmsUpload',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(uploadFilms.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    }),
    builder.addCase(uploadFilms.fulfilled, (state,action) => {
      state.status = 'resolved';
      state.uploaded = true;
      state.error = null;
    }),
    builder.addCase(uploadFilms.rejected, (state,action) => {
      state.status = 'rejected';
      state.error = action.payload;
    })
  },
});

export const selectFileUpload = (state: RootState) => state.filmsUpload;

export default filmsUploadReducer.reducer;
