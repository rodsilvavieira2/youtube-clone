import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import { baseApi } from "./api";
import { macroActions } from "./slices";

export const store = configureStore({
  reducer: {
    macroActions: macroActions.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
