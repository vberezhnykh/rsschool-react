import { configureStore, createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchValue: '',
  },
  reducers: {
    save(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const searchReducer = searchSlice.reducer;

export const { save } = searchSlice.actions;

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
