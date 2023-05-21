import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from './authState';
import langReducer from './langState';
import filmsReducer from './filmsState';
import searchReducer from './searchState';

export const store = configureStore({
  reducer: {
    auth:authReducer,
    lang:langReducer,
    films:filmsReducer,
    search:searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: [
          'payload.headers',
          'payload.config.transformRequest',
          'payload.config.transformResponse',
          'payload.config.env.FormData',
          'payload.config.env.Blob',
          'payload.config.validateStatus',
          'payload.config.headers',
          'payload.request',
        ],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
