import * as toolkitRaw from '@reduxjs/toolkit';
export type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { createSlice } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;

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
