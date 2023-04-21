/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ fastRefresh: false }), eslint()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    coverage: {
      provider: 'c8',
      all: true,
      exclude: [
        'src/types.ts',
        'src/vite.config.ts',
        '*.cjs',
        '*/vite-env.d.ts',
        'src/tests/*',
        'src/main.tsx',
      ],
    },
  },
});
