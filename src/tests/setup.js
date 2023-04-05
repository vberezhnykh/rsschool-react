import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import { setupServer } from 'msw/node';
import MockPosts from '../dummy.json';
import rest from 'msw';

expect.extend(matchers);

export const restHandlers = [
  rest.get('https://dummyjson.com/posts/search?q=&limit=0', (req, res, ctx) => {
    return res(ctx.status(200), ctx.data(MockPosts));
  }),
];
const server = setupServer(...restHandlers);
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

afterAll(() => server.close());

afterEach(() => {
  server.resetHandlers();
  cleanup();
});
