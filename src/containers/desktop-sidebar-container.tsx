import { useSelector } from "react-redux";

import { useBreakpointValue } from "@chakra-ui/react";
import { DesktopSidebar } from "@components";
import { selectIsDeskTopSidebarOpen } from "@redux/slices";

export const DesktopSidebarContainer = () => {
  const isDeskTopSidebarOpen = useSelector(selectIsDeskTopSidebarOpen);

  const isOnDesktopView = useBreakpointValue({
    base: false,
    lg: true,
  });

  if (isOnDesktopView) {
    return <DesktopSidebar isOpen={isDeskTopSidebarOpen} />;
  }

  return null;
};
