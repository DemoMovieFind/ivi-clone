import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import axios from 'axios';
import { api } from '../services/HttpService';
import { Genre } from '../types/entities/FilmMainCard';

export type GenresState = {
  status: null | 'loading' | 'resolved' | 'rejected',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: null | any,
  genres:Array<string>,
}

const initialState: GenresState = {
  status:null,
  error:null,
  genres:[],
};

export const getGenres = createAsyncThunk(
  'genres/getGenres',
  async (_,{ rejectWithValue }) => {
    try {
      const response = await api.get('/genres');
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return  rejectWithValue(error.response?.data?.message ? error.response?.data?.message : error.message);
      }
    }
  }
)

export const genresReducer = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    clearError:(state)=>{
      state.error = null;
      state.status = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getGenres.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    }),
    builder.addCase(getGenres.fulfilled, (state,action) => {
      state.status = 'resolved';
      if (action.payload !== null) {
        state.genres = action.payload?.data.map((genre:Genre)=>genre.name);
      }
    }),
    builder.addCase(getGenres.rejected, (state,action) => {
      state.status = 'rejected';
      state.error = action.payload;
    })
  },
});

export const { clearError } = genresReducer.actions;

export const selectGenres = (state: RootState) => state.genres;

export default genresReducer.reducer;
