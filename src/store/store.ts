import * as toolkitRaw from '@reduxjs/toolkit';
export type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { combineReducers, configureStore } = ((toolkitRaw as TypeToolkitRaw).default ??
  toolkitRaw) as typeof toolkitRaw;
import { searchReducer } from './features/searchReducer';
import { modalReducer } from './features/modalReducer';
import { formReducer } from './features/formReducer';
import { apiReducer, apiSlice } from './features/apiSlice';

const reducer = combineReducers({
  search: searchReducer,
  modal: modalReducer,
  form: formReducer,
  [apiSlice.reducerPath]: apiReducer,
});

export function initializeStore(preloadedState?: object) {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    preloadedState,
  });
}

export const initialState = initializeStore().getState();

export type InitialState = toolkitRaw.PreloadedState<RootStateFromReducers>;
export type AppStore = ReturnType<typeof initializeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type RootStateFromReducers = toolkitRaw.StateFromReducersMapObject<typeof reducer>;
export type AppDispatch = AppStore['dispatch'];
