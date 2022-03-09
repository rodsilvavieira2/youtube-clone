import { Outlet } from "react-router-dom";

import { Box, Flex } from "@chakra-ui/react";
import { CompactMobileSidebar } from "@components";
import { DesktopSidebarContainer } from "@containers";

export const PrimaryPageLayout = () => {
  return (
    <Flex h="calc(100vh - 3.5rem)">
      <DesktopSidebarContainer />

      <CompactMobileSidebar />

      <Box flex={1}>
        <Outlet />
      </Box>
    </Flex>
  );
};
