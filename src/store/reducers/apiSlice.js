import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ['Comments', 'Products', 'Blogs'],
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: (query) => `blog${query}`,
      providesTags: ['Blogs']
    }),
    getBlogById: builder.query({
      query: (id) => `blog/${id}`,
      providesTags: (result, error, id) => [{ type: 'Blogs', id }]
    }),
    getBlogCategories: builder.query({
      query: () => "blog-category",
    }),
    getProducts: builder.query({
      query: () => "products",
      keepUnusedDataFor: 600,
      providesTags: ['Products']
    }),
    getProductsByText: builder.query({
      query: (params) => {
        return `products/${params.toString()}`;
      },
      keepUnusedDataFor: 600,
    }),
    // Sacados del endpoints anidado y movidos al nivel correcto
    getProductComments: builder.query({
      query: (productId) => `/product-comments?productId=${productId}`,
      providesTags: ['Comments']
    }),
    addProductComment: builder.mutation({
      query: (comment) => ({
        url: '/product-comments',
        method: 'POST',
        body: comment
      }),
      invalidatesTags: ['Comments']
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
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "users/forgot-password",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data), 
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: "users/reset-password", 
        method: "POST",
        body: data, 
      }),
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetBlogByIdQuery,
  useGetBlogCategoriesQuery,
  useGetProductsQuery,
  useGetProductsByTextQuery,
  useGetProductCommentsQuery,
  useAddProductCommentMutation,
  useLoginUserMutation,
  useRegisterUserMutation,
  useForgotPasswordMutation, 
  useResetPasswordMutation,
} = apiSlice;