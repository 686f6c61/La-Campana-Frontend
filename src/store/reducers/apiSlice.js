import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "blog",
    }),
    getProducts: builder.query({
      query: () => "products",
      keepUnusedDataFor: 600,
    }),
    getProductComments: builder.query({
      query: () => "product-comments",
    }),
    addProductComment: builder.mutation({
      query: (newComment) => ({
        url: "product-comments",
        method: "POST",
        body: newComment,
      }),
    }),

    // Cambia el endpoint a una mutación
    registerUser: builder.mutation({
      query: (newUser) => ({
        url: "users/register",
        method: "POST",
        body: newUser,
      }),
    }),

    loginUser: builder.mutation({
      query: (data) => ({
        url: "users/login",
        method: "POST",
        body: data,
      }),
    }),

    // forgotPassword: builder.mutation({
    //   query: (data) => ({
    //     url: "users/forgot-password",
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetProductsQuery,
  useGetProductCommentsQuery,
  useAddProductCommentMutation,
  useLoginUserMutation,
  useRegisterUserMutation, // Exporta el hook correctamente
} = apiSlice;
