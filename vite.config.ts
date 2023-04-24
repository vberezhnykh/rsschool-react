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
        'src/types',
        '*.cjs',
        '*/vite-env.d.ts',
        'src/tests/*',
        'src/main.tsx',
        'dist',
        '**/entry-client.tsx',
        '**/entry-server.tsx',
        '**/*.d.ts',
        'server.ts',
        'vite.config.ts',
        'src/app.tsx',
      ],
    },
  },
});
