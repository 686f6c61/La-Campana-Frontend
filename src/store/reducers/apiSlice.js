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
  // Configuración de reintentos
  retry: (failureCount, error) => {
    // Configurar cuántos intentos quieres hacer, por ejemplo, 3 reintentos
    if (failureCount < 3) {
      return true;  // Esto indica que se debe volver a intentar
    }
    return false;  // No hacer más reintentos después del tercer intento
  },
  refetchOnMountOrArgChange: false,
  keepUnusedDataFor: 600,
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => 'blog',
  }),
  getProducts: builder.query({
    query: () => `products`,
    keepUnusedDataFor: 600,
  })
  }),
});

export const { useGetBlogsQuery, useGetProductsQuery } = apiSlice;
