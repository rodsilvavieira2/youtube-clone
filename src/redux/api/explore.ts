import { createEntityAdapter, EntityState } from "@reduxjs/toolkit";
import { BasicVideoData } from "@types";

import { baseApi } from "./base";

const exploreAdapter = createEntityAdapter<BasicVideoData>({
  selectId: (data) => data.id,
});

const initialState = exploreAdapter.getInitialState();

export const exploreApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllExploreVideos: builder.query<
      EntityState<BasicVideoData>,
      { page: number }
    >({
      query: (page) => `/explore?_page=${page}&_limit=20`,
      transformResponse: (data: BasicVideoData[]) => {
        return exploreAdapter.setAll(initialState, data);
      },
      providesTags: ["explore"],
    }),
  }),
});

export const { useGetAllExploreVideosQuery } = exploreApi;

export const { selectAll: selectAllExploreVideos } =
  exploreAdapter.getSelectors();
