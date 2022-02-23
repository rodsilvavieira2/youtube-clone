import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import { macroActions } from "./slices";

export const store = configureStore({
  reducer: {
    macroActions: macroActions.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
