import { BasicVideoData, PaginationResult } from "@types";

import { baseApi } from "./base";

export const historyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getHistory: builder.query<
      PaginationResult<BasicVideoData>,
      { page: number }
    >({
      query: ({ page }) => `/history?_page=${page}&_limit=20`,
      transformResponse: (data: BasicVideoData[], meta) => {
        const haveMore = !!meta?.response?.headers.get("Link");

        return {
          haveMore,
          items: data,
        };
      },
    }),
  }),
});

export const { useGetHistoryQuery } = historyApi;
