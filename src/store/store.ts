import { configureStore } from '@reduxjs/toolkit';
import { searchReducer } from './features/searchReducer';
import { modalReducer } from './features/modalReducer';
import { formReducer } from './features/formReducer';
import { apiSlice } from './features/apiSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    modal: modalReducer,
    form: formReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export const initialState = store.getState();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
