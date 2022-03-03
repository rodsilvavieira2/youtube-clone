import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { Box } from "@chakra-ui/react";
import { selectIsDeskTopSidebarOpen } from "@redux/slices";

export const PageLayoutContentContainer = () => {
  const isSidebarDesktopOpen = useSelector(selectIsDeskTopSidebarOpen);

  return (
    <Box ml={isSidebarDesktopOpen ? "15rem" : "4.5rem"}>
      <Outlet />
    </Box>
  );
};
