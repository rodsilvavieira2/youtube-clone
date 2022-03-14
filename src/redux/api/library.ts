import { BasicVideoData } from "@types";

import { baseApi } from "./base";

export const libraryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLibrary: builder.query<BasicVideoData[], void>({
      query: () => "/library",
    }),
  }),
});

export const { useGetLibraryQuery } = libraryApi;
