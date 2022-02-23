import { RootState } from "@redux/store";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isDeskTopSidebarOpen: boolean;
};

const initialState: InitialState = {
  isDeskTopSidebarOpen: true,
};

export const macroActions = createSlice({
  initialState,
  name: "macroActions",
  reducers: {
    toggleIsDeskTopSidebarOpen: (state) => {
      state.isDeskTopSidebarOpen = !state.isDeskTopSidebarOpen;
    },
  },
});

export const { toggleIsDeskTopSidebarOpen } = macroActions.actions;

export const selectIsDeskTopSidebarOpen = (state: RootState) =>
  state.macroActions.isDeskTopSidebarOpen;
