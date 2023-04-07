import { createSlice } from '@reduxjs/toolkit';
import { Post } from '../../types';

type ModalState = {
  post: Post | null;
  isOpened: boolean;
};

const initialState: ModalState = {
  post: null,
  isOpened: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    saveModalPost(state, action) {
      state.post = action.payload;
    },
    toggleIsOpened(state) {
      state.isOpened = !state.isOpened;
    },
  },
});

export const modalReducer = modalSlice.reducer;

export const { saveModalPost, toggleIsOpened } = modalSlice.actions;
