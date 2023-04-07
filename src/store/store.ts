import { configureStore } from '@reduxjs/toolkit';
import { searchReducer } from './features/searchReducer';
import { modalReducer } from './features/modalReducer';
import { formReducer } from './features/formReducer';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    modal: modalReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
