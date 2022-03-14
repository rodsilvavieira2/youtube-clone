import { createEntityAdapter, EntityState } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BasicVideoData, VideoCategory, VideoComment } from "@types";

const videosAdapter = createEntityAdapter<BasicVideoData>({
  selectId: (data) => data.id,
});

const initialState = videosAdapter.getInitialState();

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004" }),
  tagTypes: ["videos", "explore", "tags"],
  endpoints: (builder) => ({
    getAllVideos: builder.query<EntityState<BasicVideoData>, { page: number }>({
      query: ({ page }) => `/videos?_page=${page}&_limit=20`,
      transformResponse: (data: BasicVideoData[]) => {
        return videosAdapter.setAll(initialState, data);
      },
      providesTags: ["videos"],
    }),
    getVideo: builder.query<BasicVideoData, { id: string }>({
      query: ({ id }) => `/videos/${id}`,
      providesTags: (result, error, { id }) =>
        error ? [] : [{ type: "videos", id }],
    }),
    getRelatedVideos: builder.query<
      BasicVideoData[],
      { category: VideoCategory }
    >({
      query: ({ category }) => `/videos?category=${category}`,
    }),
    getVideoComments: builder.mutation<VideoComment[], { videoId: string }>({
      query: ({ videoId }) => `/comments?videoId=${videoId}`,
    }),
  }),
});

export const {
  useGetAllVideosQuery,
  useGetVideoQuery,
  useGetVideoCommentsMutation,
  useGetRelatedVideosQuery,
} = baseApi;

export const { selectAll: selectAllVideos } = videosAdapter.getSelectors();
