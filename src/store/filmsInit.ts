import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import axios from 'axios';
import { api } from '../services/HttpService';
import { FilmMainCard } from '../types/entities/FilmMainCard';

export type FilmInitState = {
  status: null | 'loading' | 'resolved' | 'rejected',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: null | any,
  isInitialized:boolean,
  films:FilmMainCard[]
}

const initialState: FilmInitState = {
  status:null,
  error:null,
  isInitialized: false,
  films:[],
};

export const initFilms = createAsyncThunk(
  'films/initFilms',
  async (_,{ rejectWithValue }) => {
    try {
      const response = await api.get('/films/?page=1&take=20');
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message ? error.response?.data?.message : error.message);
      }
    }
  }
)

export const deleteFilmFromServer = createAsyncThunk(
  'films/deleteFilm',
  async (payload:{id:number},{ rejectWithValue,dispatch }) => {
    const {id}= payload;
    const token = localStorage.getItem('token');
    try {
      const response = await api.delete(`/films/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      console.log(response)
      if (response.status === 200) {
        dispatch(deleteFilm({id}));
      }
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message ? error.response?.data?.message : error.message);
      }
    }
  }
)

export const filmsInitReducer = createSlice({
  name: 'films',
  initialState,
  reducers: {
    updateFilm:(state,action) => {
      const { id, name, name_en, genre } = action.payload;
      const film = state.films.find(film=>film.id === id);
      if (film) {
        film.name = name;
        film.name_en = name_en;
        film.genres = genre.map((genre:string)=>{
          return {
            name:genre,
          }
        })
      }
    },
    deleteFilm:(state,action) => {
      const { id } = action.payload;
      const filmIndex = state.films.findIndex(film=>film.id === id);
      if (filmIndex>=1) {
        state.films.slice(filmIndex,1);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initFilms.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    }),
    builder.addCase(initFilms.fulfilled, (state,action) => {
      if (action.payload?.status === 200) {
        state.status = 'resolved';
        state.isInitialized = true;
        state.error = null;
        state.films = action.payload.data;
      }
    }),
    builder.addCase(initFilms.rejected, (state,action) => {
      state.status = 'rejected';
      state.error = action.payload;
      state.isInitialized = false;
    }),
    builder.addCase(deleteFilmFromServer.rejected, (state,action) => {
      state.status = 'rejected';
      state.error = action.payload;
    }),
    builder.addCase(deleteFilmFromServer.pending, (state,action) => {
      state.status = 'loading';
      state.error = action.payload;
    }),
    builder.addCase(deleteFilmFromServer.fulfilled, (state) => {
      console.log('resolved deleteFilmFromServer.fulfilled');
      state.status = 'resolved';
      state.error = null;
    })
  },
});

export const selectFilm = (state: RootState) => state.filmsInit;

export const { updateFilm,deleteFilm } = filmsInitReducer.actions;

export default filmsInitReducer.reducer;
