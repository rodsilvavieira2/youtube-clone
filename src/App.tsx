import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Box } from "@chakra-ui/react";
import { FallBack } from "@components";
import { HeaderContainer } from "@containers";
import { PrimaryPageLayout } from "@layouts";
import {
  Home,
  Library,
  Video,
  History,
  Explore,
  WatchLater,
  LikedVideos,
} from "@pages";

export const App = () => {
  return (
    <Box
      h="100vh"
      w="100vw"
      pos="relative"
      overflow="auto"
      data-type="root-container"
    >
      <HeaderContainer />

      <Suspense fallback={<FallBack />}>
        <Routes>
          <Route path="/" element={<PrimaryPageLayout />}>
            <Route element={<Home />} index />

            <Route path="feed/library" element={<Library />} />

            <Route path="feed/history" element={<History />} />

            <Route path="feed/explore" element={<Explore />} />

            <Route path="feed/watch-later" element={<WatchLater />} />

            <Route path="feed/liked-videos" element={<LikedVideos />} />
          </Route>

          <Route path="/video/:id" element={<Video />} />
        </Routes>
      </Suspense>
    </Box>
  );
};
