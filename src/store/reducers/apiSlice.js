import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: (query) => `blog${query}`,
    }),
    getBlogById: builder.query({
      query: (id) => `blog/${id}`,
    }),
    getBlogCategories: builder.query({
      query: () => "blog-category",
    }),
    getProducts: builder.query({
      query: () => "products",
      keepUnusedDataFor: 600,
    }),
    getProductsByText: builder.query({
      query: (params) => {
        return `products/${params.toString()}`;
      },
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
  useGetProductCommentsQuery,
  useAddProductCommentMutation,
  useLoginUserMutation,
  useRegisterUserMutation,
  useGetProductsByTextQuery,
  useForgotPasswordMutation, 
  useResetPasswordMutation,

  
} = apiSlice;
