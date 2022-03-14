import { createEntityAdapter, EntityState } from "@reduxjs/toolkit";
import { Tag } from "@types";

import { baseApi } from "./base";

const tagsAdapter = createEntityAdapter<Tag>({
  selectId: (data) => data.id,
});

const initialState = tagsAdapter.getInitialState();

export const tagsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTags: builder.query<EntityState<Tag>, void>({
      query: () => `/tags`,
      providesTags: ["tags"],
      transformResponse: (data: Tag[]) => {
        return tagsAdapter.setAll(initialState, data);
      },
    }),
  }),
});

export const { selectAll: selectAllTags } = tagsAdapter.getSelectors();

export const { useGetAllTagsQuery } = tagsApi;
