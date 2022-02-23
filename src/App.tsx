import { SidebarContainer } from "containers";
import { useDispatch } from "react-redux";

import { Box, Flex } from "@chakra-ui/react";
import { Header } from "@components";
import { toggleIsDeskTopSidebarOpen } from "@redux/slices/macro-actions";

export const App = () => {
  const dispatch = useDispatch();

  return (
    <Box h="100vh" w="100vw">
      <Header onToggleSidebar={() => dispatch(toggleIsDeskTopSidebarOpen())} />

      <Flex h="calc(100vh - 3.5rem)" overflow="hidden">
        <SidebarContainer />

        <Box maxW="100%" overflow="hidden" />
      </Flex>
    </Box>
  );
};
