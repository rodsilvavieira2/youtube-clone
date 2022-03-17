import { UserInfo } from "@types";

import { baseApi } from "./base";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query<UserInfo, void>({
      query: () => "/users",
    }),
  }),
});

export const { useGetUserInfoQuery } = userApi;
