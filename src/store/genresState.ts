import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import axios from 'axios';
import { api } from '../services/HttpService';
import { Genre } from '../types/entities/FilmMainCard';

export type GenresState = {
  status: null | 'loading' | 'resolved' | 'rejected',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: null | any,
  genres:Array<Genre>,
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

export const addGenreOnServer = createAsyncThunk(
  'genres/addGenreOnServer',
  async (payload:{genre_ru:string,genre_en:string},{ rejectWithValue }) => {
    try {
      const {genre_ru,genre_en} = payload;
      const token = localStorage.getItem('token');
      const response = await api.post(`/genres`,
          {
            "name": genre_ru,
            "name_en": genre_en
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          },
        );
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return  rejectWithValue(error.response?.data?.message ? error.response?.data?.message : error.message);
      }
    }
  }
)

export const deleteGenre = createAsyncThunk(
  'genres/deleteGenre',
  async (payload:{id:number},{ rejectWithValue }) => {
    try {
      const {id} = payload;
      const token = localStorage.getItem('token');
      const response = await api.delete(`/genres/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          },
        );
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
        state.genres = action.payload?.data;
      }
    }),
    builder.addCase(getGenres.rejected, (state,action) => {
      state.status = 'rejected';
      state.error = action.payload;
    }),
    builder.addCase(addGenreOnServer.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    }),
    builder.addCase(addGenreOnServer.fulfilled, (state) => {
      state.status = 'resolved';
    }),
    builder.addCase(addGenreOnServer.rejected, (state,action) => {
      state.status = 'rejected';
      state.error = action.payload;
    }),
    builder.addCase(deleteGenre.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    }),
    builder.addCase(deleteGenre.fulfilled, (state) => {
      state.status = 'resolved';
    }),
    builder.addCase(deleteGenre.rejected, (state,action) => {
      state.status = 'rejected';
      state.error = action.payload;
    })
  },
});

export const { clearError } = genresReducer.actions;

export const selectGenres = (state: RootState) => state.genres;

export default genresReducer.reducer;
