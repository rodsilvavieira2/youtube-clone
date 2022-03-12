import { createEntityAdapter, EntityState } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BasicVideoData } from "@types";

const videosAdapter = createEntityAdapter<BasicVideoData>({
  selectId: (data) => data.id,
});

const initialState = videosAdapter.getInitialState();

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004" }),
  tagTypes: ["videos", "explore"],
  endpoints: (builder) => ({
    getAllVideos: builder.query<EntityState<BasicVideoData>, { page: number }>({
      query: ({ page }) => `/videos?_page=${page}&_limit=20`,
      transformResponse: (data: BasicVideoData[]) => {
        return videosAdapter.setAll(initialState, data);
      },
      providesTags: ["videos"],
    }),
  }),
});

export const { useGetAllVideosQuery } = baseApi;
export const { selectAll: selectAllVideos } = videosAdapter.getSelectors();
