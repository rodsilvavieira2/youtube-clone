import { Suspense } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { Box, useBreakpointValue } from "@chakra-ui/react";
import { FallBack, Header } from "@components";
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
import {
  toggleIsDeskTopSidebarOpen,
  toggleMobileSidebarOpen,
} from "@redux/slices";

export const App = () => {
  const dispatch = useDispatch();

  const isOnMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <Box
      h="100vh"
      w="100vw"
      pos="relative"
      overflow="auto"
      data-type="root-container"
    >
      <Header
        onToggleSidebar={() =>
          dispatch(
            isOnMobile
              ? toggleMobileSidebarOpen()
              : toggleIsDeskTopSidebarOpen()
          )
        }
      />

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
