// import { createSlice } from '@reduxjs/toolkit';
import * as toolkitRaw from '@reduxjs/toolkit';
export type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { createSlice } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;
import { FormCardData } from '../../types/types';

type FormState = {
  cards: FormCardData[];
};

const initialState: FormState = {
  cards: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    saveCard(state, action) {
      state.cards.push(action.payload);
    },
    removeCard(state, action) {
      state.cards = state.cards.filter((card) => card.id !== action.payload.id);
    },
  },
});

export const formReducer = formSlice.reducer;

export const { saveCard, removeCard } = formSlice.actions;
