import { RootState } from "@redux/store";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isDeskTopSidebarExpanded: boolean;
  isMobileSidebarOpen: boolean;
};

const initialState: InitialState = {
  isDeskTopSidebarExpanded: true,
  isMobileSidebarOpen: false,
};

export const macroActions = createSlice({
  initialState,
  name: "macroActions",
  reducers: {
    toggleIsDeskTopSidebarOpen: (state) => {
      state.isDeskTopSidebarExpanded = !state.isDeskTopSidebarExpanded;
    },
    toggleMobileSidebarOpen: (state) => {
      state.isMobileSidebarOpen = !state.isMobileSidebarOpen;
    },
  },
});

export const { toggleIsDeskTopSidebarOpen, toggleMobileSidebarOpen } =
  macroActions.actions;

export const selectIsDeskTopSidebarExpanded = (state: RootState) =>
  state.macroActions.isDeskTopSidebarExpanded;

export const selectIsMobileSidebarOpen = (state: RootState) =>
  state.macroActions.isMobileSidebarOpen;
