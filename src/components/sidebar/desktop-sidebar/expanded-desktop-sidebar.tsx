import { Box } from "@chakra-ui/react";

import { SidebarContent } from "../shared/sidebar-content";

export const ExpandedDesktopSidebar = () => {
  return (
    <Box h="100%" overflow="auto">
      <SidebarContent />
    </Box>
  );
};
