import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  BasicVideoData,
  PaginationResult,
  VideoCategory,
  VideoComment,
} from "@types";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004" }),
  tagTypes: ["videos", "explore", "tags"],
  endpoints: (builder) => ({
    getAllVideos: builder.query<
      PaginationResult<BasicVideoData>,
      { page: number }
    >({
      query: ({ page }) => `/videos?_page=${page}&_limit=20`,
      transformResponse: (data: BasicVideoData[], meta) => {
        const haveMore = !!meta?.response?.headers.get("Link");
        return {
          haveMore,
          items: data,
        };
      },
      providesTags: ["videos"],
    }),
    getVideo: builder.query<BasicVideoData, { id: string }>({
      query: ({ id }) => `/videos/${id}`,
      providesTags: (result, error, { id }) =>
        error ? [] : [{ type: "videos", id }],
    }),
    getRelatedVideos: builder.query<
      PaginationResult<BasicVideoData>,
      { category: VideoCategory; page: number }
    >({
      query: ({ category, page }) =>
        `/videos?category=${category}&_page=${page}&_limit=13`,
      transformResponse: (data: BasicVideoData[], meta) => {
        const haveMore = !!meta?.response?.headers.get("Link");
        return {
          haveMore,
          items: data,
        };
      },
    }),
    getVideoComments: builder.query<
      PaginationResult<VideoComment>,
      { videoId: string; page: number }
    >({
      query: ({ videoId, page }) =>
        `/comments?videoId=${videoId}&_page=${page}&_limit=13`,
      transformResponse: (data: VideoComment[], meta) => {
        const haveMore = !!meta?.response?.headers.get("Link");

        return {
          items: data,
          haveMore,
        };
      },
    }),
  }),
});

export const {
  useGetAllVideosQuery,
  useGetVideoQuery,
  useGetVideoCommentsQuery,
  useGetRelatedVideosQuery,
} = baseApi;
