import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import { setupServer } from 'msw/node';
import MockPosts from '../dummy.json';
import { rest } from 'msw';
import nodeFetch, { Request, Response } from 'node-fetch';

expect.extend(matchers);

//@ts-ignore
global.fetch = nodeFetch;
//@ts-ignore
global.Request = Request;
//@ts-ignore
global.Response = Response;

const restHandlers = [
  rest.get('https://dummyjson.com/posts/search', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MockPosts));
  }),
  rest.get('https://dummyjson.com/posts/1', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MockPosts.posts.find((post) => post.id === 1)));
  }),
];
export const mockServer = setupServer(...restHandlers);

afterEach(() => {
  cleanup();
});
