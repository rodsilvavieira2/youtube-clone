import { useSelector } from "react-redux";

import { useBreakpointValue } from "@chakra-ui/react";
import { DesktopSidebar } from "@components";
import { selectIsDeskTopSidebarExpanded } from "@redux/slices";

export const DesktopSidebarContainer = () => {
  const isDeskTopSidebarExpanded = useSelector(selectIsDeskTopSidebarExpanded);

  const isOnDesktopView = useBreakpointValue({
    base: false,
    lg: true,
  });

  if (isOnDesktopView) {
    return <DesktopSidebar isExpanded={isDeskTopSidebarExpanded} />;
  }

  return null;
};
