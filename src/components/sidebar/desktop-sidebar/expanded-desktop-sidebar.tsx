import { Box } from "@chakra-ui/react";

import { SidebarContent } from "../shared/sidebar-content";

export const ExpandedDesktopSidebar = () => {
  return (
    <Box
      h="100%"
      overflow="auto"
      pt="12px"
      css={{
        "&::-webkit-scrollbar-thumb": {
          background: "transparent",
        },
        "&:hover::-webkit-scrollbar-thumb": {
          background: "#909090",
        },
      }}
    >
      <SidebarContent />
    </Box>
  );
};
