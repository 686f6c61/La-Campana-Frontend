import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = import.meta.env.VITE_BACKEND_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const apiSlice = createApi({
  reducerPath: 'apiSlice', 
  baseQuery: fetchBaseQuery({ 
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      if (API_KEY) {
        headers.set('x-api-key', API_KEY);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => 'blog',
    }),
  }),
});

export const { useGetBlogsQuery } = apiSlice;
