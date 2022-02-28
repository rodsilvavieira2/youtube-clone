import { Suspense } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { Box, useBreakpointValue } from "@chakra-ui/react";
import { FallBack, Header } from "@components";
import { PrimaryPageLayout } from "@layouts";
import { Home, Library, Video, History } from "@pages";
import {
  toggleIsDeskTopSidebarOpen,
  toggleMobileSidebarOpen,
} from "@redux/slices/macro-actions";

export const App = () => {
  const dispatch = useDispatch();

  const isOnMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <Box h="100vh" w="100vw" pos="relative" overflow="auto">
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
            <Route path="feed/history" element={<History />} />s
          </Route>

          <Route path="/:video" element={<Video />} />
        </Routes>
      </Suspense>
    </Box>
  );
};
