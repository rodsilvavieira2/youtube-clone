import { Outlet } from "react-router-dom";

import { Box, Flex } from "@chakra-ui/react";
import { DesktopSidebarContainer, MobileSidebarContainer } from "@containers";

export const PrimaryPageLayout = () => {
  return (
    <Flex h="calc(100vh - 3.5rem)">
      <DesktopSidebarContainer />

      <MobileSidebarContainer />

      <Box flex={1}>
        <Outlet />
      </Box>
    </Flex>
  );
};
