import { createSlice } from '@reduxjs/toolkit';

type ModalState = {
  isOpened: boolean;
  id: number;
};

const initialState: ModalState = {
  isOpened: false,
  id: 1,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleIsOpened(state) {
      state.isOpened = !state.isOpened;
    },
    saveId(state, action) {
      state.id = action.payload.id;
    },
  },
});

export const modalReducer = modalSlice.reducer;

export const { toggleIsOpened, saveId } = modalSlice.actions;
