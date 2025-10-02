import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    getAllPosts: build.query({
      query: () => ({
        url: "/posts",
      }),
    }),
    getPostById: build.query({
      query: (postId) => ({
        url: `/posts/${postId}`,
      }),
    }),
  }),
});

export const { useGetAllPostsQuery, useGetPostByIdQuery } = postApi;
