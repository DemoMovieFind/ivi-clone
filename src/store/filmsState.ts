import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import axios from 'axios';
import { api } from '../services/HttpService';
import { FilmMainCard } from '../types/entities/FilmMainCard';

export type FilmsState = {
  status: null | 'loading' | 'resolved' | 'rejected',
  error: null | string,
  isInitialized:boolean,
  films:FilmMainCard[],
  film:FilmMainCard|null,
  totalFilms:number,
}

const initialState: FilmsState = {
  status:null,
  error:null,
  film:null,
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
      return response;
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
  genre:Array<string>,
}

export const createFilmOnServer = createAsyncThunk(
  'films/createFilm',
  async (payload:CreateFilmType,{ rejectWithValue })=>{
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
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message ? error.response?.data?.message : error.message);
      }
    }
})

export const updateFilmOnServer = createAsyncThunk(
  'films/updateFilmOnServer',
  async (payload:CreateFilmType&{id:number},{ rejectWithValue })=>{
    const token = localStorage.getItem('token');
    try {
      const response = await api.put(`/film-update`,
      payload,
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

export const getFilmFromServer = createAsyncThunk(
  'films/getFilmFromServer',
  async (payload:{id:number},{ rejectWithValue }) => {
    const {id} = payload;
    try {
      const response = await api.get(`/films/${id}`);
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
    clearError:(state) => {
      state.error = null;
      state.status = null;
    },
    clearFilm:(state) => {
      state.film = null;
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
    builder.addCase(initFilms.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload as string;
      state.isInitialized = false;
    }),
    builder.addCase(createFilmOnServer.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload as string;
    }),
    builder.addCase(createFilmOnServer.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    }),
    builder.addCase(createFilmOnServer.fulfilled, (state, action) => {
      if (action.payload?.status === 201) {
        state.status = 'resolved';
        state.films.unshift(action.payload.data);
      }
    }),
    builder.addCase(deleteFilmFromServer.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload as string;
    }),
    builder.addCase(deleteFilmFromServer.pending, (state) => {
      state.status = 'loading';
    }),
    builder.addCase(deleteFilmFromServer.fulfilled, (state) => {
      state.status = 'resolved';
      state.error = null;
    }),
    builder.addCase(searchFilmOnServer.rejected, (state,action) => {
      state.status = 'rejected';
      state.error = action.payload as string;
    }),
    builder.addCase(searchFilmOnServer.pending, (state) => {
      state.status = 'loading';
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
      state.error = action.payload as string;
    }),
    builder.addCase(getFilmsPage.pending, (state) => {
      state.status = 'loading';
    }),
    builder.addCase(getFilmsPage.fulfilled, (state,action) => {
      state.status = 'resolved';
      state.error = null;
      if (action.payload?.status === 200) {
        state.films = action.payload.data;
        state.totalFilms = action.payload.headers['x-total-count'];
      }
    }),
    builder.addCase(getFilmFromServer.rejected, (state,action) => {
      state.status = 'rejected';
      state.error = action.payload as string;
    }),
    builder.addCase(getFilmFromServer.pending, (state) => {
      state.status = 'loading';
    }),
    builder.addCase(getFilmFromServer.fulfilled, (state,action) => {
      state.status = 'resolved';
      state.error = null;
      if (action.payload?.status === 200) {
        state.film = action.payload.data;
      }
    }),builder.addCase(updateFilmOnServer.rejected, (state,action) => {
      state.status = 'rejected';
      state.error = action.payload as string;
    }),
    builder.addCase(updateFilmOnServer.pending, (state) => {
      state.status = 'loading';
    }),
    builder.addCase(updateFilmOnServer.fulfilled, (state) => {
      state.status = 'resolved';
      state.error = null;
    })
  },
});

export const selectFilm = (state: RootState) => state.films;

export const { clearError } = filmsReducer.actions;

export default filmsReducer.reducer;
