import { Box } from "@chakra-ui/react";

import { CompactSidebar } from "../shared/compact-sidebar";
import { ExpandedDesktopSidebar } from "./expanded-desktop-sidebar";

type SidebarProps = {
  isOpen: boolean;
};

export const DesktopSidebar = ({ isOpen }: SidebarProps) => {
  return (
    <Box
      display={{ base: "none", lg: "block" }}
      as="aside"
      overflowY="auto"
      pr="3"
      flexShrink={0}
      position="static"
      left={0}
      bottom={0}
    >
      {isOpen ? <ExpandedDesktopSidebar /> : <CompactSidebar />}
    </Box>
  );
};
