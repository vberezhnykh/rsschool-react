import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { store, RootState, initialState } from '../store/store';
import { searchReducer } from '../store/features/searchReducer';
import { modalReducer } from '../store/features/modalReducer';
import { formReducer } from '../store/features/formReducer';
import { apiSlice } from '../store/features/apiSlice';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: typeof store;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = initialState,

    store = configureStore({
      reducer: {
        search: searchReducer,
        modal: modalReducer,
        form: formReducer,
        api: apiSlice.reducer,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
