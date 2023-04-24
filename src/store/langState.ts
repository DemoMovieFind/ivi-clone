import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export type LangState = {
  lang: 'ru-RU'|'en-US',
}

const initialState: LangState = {
  lang: 'ru-RU',
};

if (localStorage.getItem('lang')!== undefined) {
  const lang = localStorage.getItem('lang')??'ru-RU';
  if (lang.length>0) {
    initialState.lang = lang as 'ru-RU'|'en-US';
  }
}

export const langReducer = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLang: (state,action)=> {
      state.lang = action.payload
      localStorage.setItem('lang',action.payload);
    },
  },
});

export const { setLang } = langReducer.actions;

export const selectLang = (state: RootState) => state.lang;

export default langReducer.reducer;
