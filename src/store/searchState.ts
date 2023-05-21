import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export type SearchState = {
  search: string,
}

const initialState: SearchState = {
  search: '',
};

if (localStorage.getItem('state')!== undefined) {
  const search = localStorage.getItem('search')??'';
  if (search.length>0) {
    initialState.search = search;
  }
}

export const searchReducer = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state,action)=> {
      state.search = action.payload;
      localStorage.setItem('search',action.payload);
    },
  },
});

export const { setSearch } = searchReducer.actions;

export const selectSearch = (state: RootState) => state.search;

export default searchReducer.reducer;
