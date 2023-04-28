import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from './authState';
import langReducer from './langState';
import filmsUploadReducer from './filmsInitDBstate';

export const store = configureStore({
  reducer: {
    auth:authReducer,
    lang:langReducer,
    filmsUpload:filmsUploadReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
