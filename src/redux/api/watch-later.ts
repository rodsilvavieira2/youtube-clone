import { BasicVideoData } from "@types";

import { baseApi } from "./base";

export const watchLater = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWatchLater: builder.query<BasicVideoData[], void>({
      query: () => "/watch-later",
      providesTags: ["watch-late"],
    }),
  }),
});

export const { useGetWatchLaterQuery } = watchLater;
