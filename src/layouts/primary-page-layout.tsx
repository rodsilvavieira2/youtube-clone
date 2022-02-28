import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { Box } from "@chakra-ui/react";
import { DesktopSidebarContainer, MobileSidebarContainer } from "@containers";
import { selectIsDeskTopSidebarOpen } from "@redux/slices";

const ContentContainer = () => {
  const isSidebarDesktopOpen = useSelector(selectIsDeskTopSidebarOpen);

  return (
    <Box ml={isSidebarDesktopOpen ? "15rem" : "4.5rem"}>
      <Outlet />
    </Box>
  );
};

export const PrimaryPageLayout = () => {
  return (
    <>
      <DesktopSidebarContainer />

      <MobileSidebarContainer />

      <ContentContainer />
    </>
  );
};
