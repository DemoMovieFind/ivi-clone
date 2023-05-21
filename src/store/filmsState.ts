import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import axios from 'axios';
import { api } from '../services/HttpService';
import { FilmMainCard } from '../types/entities/FilmMainCard';

export type FilmsState = {
  status: null | 'loading' | 'resolved' | 'rejected',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: null | any,
  isInitialized:boolean,
  films:FilmMainCard[],
  totalFilms:number,
}

const initialState: FilmsState = {
  status:null,
  error:null,
  isInitialized: false,
  films:[],
  totalFilms:0,
};

export const initFilms = createAsyncThunk(
  'films/initFilms',
  async (_,{ rejectWithValue }) => {
    try {
      const response = await api.get('/films/?page=1&take=10');
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message ? error.response?.data?.message : error.message);
      }
    }
  }
)

export const getFilmsPage = createAsyncThunk(
  'films/getFilmsPage',
  async (payload:{page:number},{ rejectWithValue }) => {
    const {page} = payload;
    try {
      const response = await api.get(`/films/?page=${page}&take=10`);
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
      if (response.status === 200) {
        dispatch(initFilms());
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message ? error.response?.data?.message : error.message);
      }
    }
  }
)

export type CreateFilmType = {
  name:string,
  name_en:string,
  genre:Array<Array<string>>,
}

export const createFilmOnServer = createAsyncThunk(
  'films/createFilm',
  async (payload:CreateFilmType,{ rejectWithValue,dispatch })=>{
    const token = localStorage.getItem('token');
    try {
      const response = await api.post(`/films`,
      payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        },
      );
      if (response.status === 201) {
        dispatch(initFilms());
      }
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message ? error.response?.data?.message : error.message);
      }
    }
})

export const searchFilmOnServer = createAsyncThunk(
  'films/searchFilmOnServer',
  async (payload:{search:string},{ rejectWithValue }) => {
    try {
      const response = await api.get(`/films/search/${payload.search}`);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message ? error.response?.data?.message : error.message);
      }
    }
})

export const filmsReducer = createSlice({
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
    clearError:(state)=>{
      state.error = null;
      state.status = null;
    }
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
        state.totalFilms = action.payload.headers['x-total-count'];
      }
    }),
    builder.addCase(initFilms.rejected, (state,action) => {
      state.status = 'rejected';
      state.error = action.payload;
      state.isInitialized = false;
    }),
    builder.addCase(createFilmOnServer.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    }),
    builder.addCase(createFilmOnServer.fulfilled, (state,action) => {
      if (action.payload?.status === 201) {
        state.status = 'resolved';
        state.films.unshift(action.payload.data);
      }
    }),
    builder.addCase(deleteFilmFromServer.rejected, (state,action) => {
      state.status = 'rejected';
      state.error = action.payload;
    }),
    builder.addCase(deleteFilmFromServer.pending, (state,action) => {
      state.status = 'loading';
      state.error = action.payload;
    }),
    builder.addCase(deleteFilmFromServer.fulfilled, (state,action) => {
      state.status = 'resolved';
      state.error = null;
    }),
    builder.addCase(searchFilmOnServer.rejected, (state,action) => {
      state.status = 'rejected';
      state.error = action.payload;
    }),
    builder.addCase(searchFilmOnServer.pending, (state,action) => {
      state.status = 'loading';
      state.error = action.payload;
    }),
    builder.addCase(searchFilmOnServer.fulfilled, (state,action) => {
      state.status = 'resolved';
      state.error = null;
      if (action.payload?.status === 200) {
        state.films = action.payload.data;
        state.totalFilms = action.payload.headers['x-total-count'] ?? 1;
      }
    }),
    builder.addCase(getFilmsPage.rejected, (state,action) => {
      state.status = 'rejected';
      state.error = action.payload;
    }),
    builder.addCase(getFilmsPage.pending, (state,action) => {
      state.status = 'loading';
      state.error = action.payload;
    }),
    builder.addCase(getFilmsPage.fulfilled, (state,action) => {
      state.status = 'resolved';
      state.error = null;
      if (action.payload?.status === 200) {
        state.films = action.payload.data;
        state.totalFilms = action.payload.headers['x-total-count'];
      }
    })
  },
});

export const selectFilm = (state: RootState) => state.films;

export const { updateFilm, clearError } = filmsReducer.actions;

export default filmsReducer.reducer;
