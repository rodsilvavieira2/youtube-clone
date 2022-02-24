import { Box } from "@chakra-ui/react";

import { CollapsedDesktopSidebar } from "./collapsed-desktop-sidebar";
import { ExpandedDesktopSidebar } from "./expanded-desktop-sidebar";

type SidebarProps = {
  isSidebarOpen: boolean;
};

export const Sidebar = ({ isSidebarOpen }: SidebarProps) => {
  return (
    <Box
      as="aside"
      overflowY="auto"
      pr="3"
      flexShrink={0}
      position="static"
      left={0}
      bottom={0}
    >
      {isSidebarOpen ? <ExpandedDesktopSidebar /> : <CollapsedDesktopSidebar />}
    </Box>
  );
};
