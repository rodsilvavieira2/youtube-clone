import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "@components";
import { Home, Video } from "@pages";
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

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/:video" element={<Video />} />
      </Routes>
    </Box>
  );
};
