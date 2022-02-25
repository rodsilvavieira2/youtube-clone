import { RootState } from "@redux/store";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isDeskTopSidebarOpen: boolean;
  isMobileSidebarOpen: boolean;
};

const initialState: InitialState = {
  isDeskTopSidebarOpen: true,
  isMobileSidebarOpen: false,
};

export const macroActions = createSlice({
  initialState,
  name: "macroActions",
  reducers: {
    toggleIsDeskTopSidebarOpen: (state) => {
      state.isDeskTopSidebarOpen = !state.isDeskTopSidebarOpen;
    },
    toggleMobileSidebarOpen: (state) => {
      state.isMobileSidebarOpen = !state.isMobileSidebarOpen;
    },
  },
});

export const { toggleIsDeskTopSidebarOpen, toggleMobileSidebarOpen } =
  macroActions.actions;

export const selectIsDeskTopSidebarOpen = (state: RootState) =>
  state.macroActions.isDeskTopSidebarOpen;

export const selectIsMobileSidebarOpen = (state: RootState) =>
  state.macroActions.isMobileSidebarOpen;
