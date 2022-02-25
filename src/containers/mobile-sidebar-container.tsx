import { useDispatch, useSelector } from "react-redux";

import { useBreakpointValue } from "@chakra-ui/react";
import { CompactSidebar, MobileSidebar } from "@components";
import {
  selectIsMobileSidebarOpen,
  toggleMobileSidebarOpen,
} from "@redux/slices";

export const MobileSidebarContainer = () => {
  const isMobileSidebarOpen = useSelector(selectIsMobileSidebarOpen);

  const dispatch = useDispatch();

  const onClose = () => dispatch(toggleMobileSidebarOpen());

  const isOnMobileView = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isOnMobileView) {
    return (
      <>
        <CompactSidebar />

        <MobileSidebar isOpen={isMobileSidebarOpen} onClose={onClose} />
      </>
    );
  }

  return null;
};
