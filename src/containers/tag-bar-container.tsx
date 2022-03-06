import { useSelector } from "react-redux";

import { Box } from "@chakra-ui/react";
import { TagBar } from "@components";
import { selectIsDeskTopSidebarOpen } from "@redux/slices";

export const TagBarContainer = () => {
  const isDesktopSidebarOpen = useSelector(selectIsDeskTopSidebarOpen);

  return (
    <Box h="3.5rem">
      <Box position="fixed" zIndex="1">
        <TagBar />
      </Box>
    </Box>
  );
};
