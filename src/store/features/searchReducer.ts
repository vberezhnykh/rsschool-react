import { Posts } from '../../types';
import { createSlice } from '@reduxjs/toolkit';

type SearchState = {
  value: string;
  posts: Posts | null;
};

const initialState: SearchState = {
  value: '',
  posts: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    saveValue(state, action) {
      state.value = action.payload;
    },
    savePosts(state, action) {
      state.posts = action.payload;
    },
  },
});

export const searchReducer = searchSlice.reducer;

export const { saveValue, savePosts } = searchSlice.actions;
