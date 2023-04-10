import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post, Posts } from 'types';

const baseUrl = 'https://dummyjson.com/';

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

export const { useGetPostsQuery, useGetPostQuery } = apiSlice;
