import * as toolkitRaw from '@reduxjs/toolkit';
export type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { createSlice } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;

type SearchState = {
  value: string;
};

const initialState: SearchState = {
  value: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    saveValue(state, action) {
      state.value = action.payload;
    },
  },
});

export const searchReducer = searchSlice.reducer;

export const { saveValue } = searchSlice.actions;
