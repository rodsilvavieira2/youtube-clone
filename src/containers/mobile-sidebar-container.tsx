import { useDispatch, useSelector } from "react-redux";

import { Box, useBreakpointValue } from "@chakra-ui/react";
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
        <Box as="aside" w="4.5rem" h="100%">
          <Box h="100%" w="100%" position="fixed">
            <CompactSidebar />
          </Box>
        </Box>

        <MobileSidebar isOpen={isMobileSidebarOpen} onClose={onClose} />
      </>
    );
  }

  return null;
};
