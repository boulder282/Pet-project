import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Categories } from "../../../types/types";

export const cardApi = createApi({
  reducerPath: "cardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (build) => ({
    getCategories: build.query<Categories, "">({
      query: () => ({
        url: "/categories",
      }),
    }),
    getCategoryById: build.query({
      query: (categoryId) => ({
        url: `/${categoryId}`,
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useGetCategoryByIdQuery } = cardApi;
