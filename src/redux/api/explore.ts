import { BasicVideoData, PaginationResult } from "@types";

import { baseApi } from "./base";

export const exploreApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllExploreVideos: builder.query<
      PaginationResult<BasicVideoData>,
      { page: number }
    >({
      query: (page) => `/explore?_page=${page}&_limit=20`,
      transformResponse: (data: BasicVideoData[], meta) => {
        const haveMore = !!meta?.response?.headers.get("Link");

        return {
          haveMore,
          items: data,
        };
      },
      providesTags: ["explore"],
    }),
  }),
});

export const { useGetAllExploreVideosQuery } = exploreApi;
