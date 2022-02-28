import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { FallBack } from "@components";
import { PrimaryPageLayout } from "@layouts";
import { Library, Video, Home } from "@pages";

export const RoutesContainer = () => {
  return (
    <Suspense fallback={<FallBack />}>
      <Routes>
        <Route path="/" element={<PrimaryPageLayout />}>
          <Route element={<Home />} index />

          <Route path="feed/library" element={<Library />} />
        </Route>

        <Route path="/:video" element={<Video />} />
      </Routes>
    </Suspense>
  );
};
