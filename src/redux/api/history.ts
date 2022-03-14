import { BasicVideoData } from "@types";

import { baseApi } from "./base";

export const historyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getHistory: builder.query<BasicVideoData[], { page: number }>({
      query: ({ page }) => `/history?_page=${page}&_limit=20`,
    }),
  }),
});

export const { useGetHistoryQuery } = historyApi;
