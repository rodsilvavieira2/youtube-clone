import { lazy } from "react";

export const Home = lazy(() => import("./home"));
export const Video = lazy(() => import("./video"));
export const Library = lazy(() => import("./library"));
export const History = lazy(() => import("./history"));
export const Explore = lazy(() => import("./explore"));
export const WatchLater = lazy(() => import("./watch-later"));
