import { BasicVideoData } from "@types";

import { baseApi } from "./base";

export const likedVideos = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLikedVideos: builder.query<BasicVideoData[], void>({
      query: () => "/liked-videos",
      providesTags: ["liked-videos"],
    }),
  }),
});

export const { useGetLikedVideosQuery } = likedVideos;
