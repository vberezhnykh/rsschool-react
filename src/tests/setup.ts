import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import { setupServer } from 'msw/node';
import MockPosts from '../dummy.json';
import { rest } from 'msw';

expect.extend(matchers);

const restHandlers = [
  rest.get('https://dummyjson.com/posts/search?q=', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MockPosts));
  }),
];
export const mockServer = setupServer(...restHandlers);

afterEach(() => {
  cleanup();
});
