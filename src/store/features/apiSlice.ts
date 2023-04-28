import * as rtkQuery from '@reduxjs/toolkit/dist/query/react/index.js';
export type TypeRtkQuery = typeof rtkQuery & { default?: unknown };
const { fetchBaseQuery, buildCreateApi, coreModule, reactHooksModule } = ((rtkQuery as TypeRtkQuery)
  .default ?? rtkQuery) as typeof rtkQuery;
import { Post, Posts } from 'types/types';

const baseUrl = 'https://dummyjson.com/';

const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true })
);

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPosts: builder.query<Posts, string>({
      query: (searchValue) => `posts/search?q=${searchValue}&limit=0`,
    }),
    getPost: builder.query<Post, number>({
      query: (id) => `posts/${id}`,
    }),
  }),
});

export const apiReducer = apiSlice.reducer;

export const { useGetPostsQuery, useGetPostQuery } = apiSlice;
