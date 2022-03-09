import { Box } from "@chakra-ui/react";

import { CompactSidebar } from "../shared/compact-sidebar";
import { ExpandedDesktopSidebar } from "./expanded-desktop-sidebar";

type SidebarProps = {
  isExpanded: boolean;
};

export const DesktopSidebar = ({ isExpanded }: SidebarProps) => {
  return (
    <Box w={isExpanded ? "15rem" : "4.5rem"} h="100%" flexShrink={0}>
      <Box
        as="aside"
        overflow="hidden"
        position="fixed"
        top="3.5rem"
        bg="primary"
        flexShrink={0}
        left={0}
        bottom={0}
        zIndex="banner"
      >
        {isExpanded ? <ExpandedDesktopSidebar /> : <CompactSidebar />}
      </Box>
    </Box>
  );
};
