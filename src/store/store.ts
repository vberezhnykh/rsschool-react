import { configureStore } from '@reduxjs/toolkit';
import { searchReducer } from './features/searchReducer';
import { modalReducer } from './features/modalReducer';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
