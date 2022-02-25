import { Flex, Box } from "@chakra-ui/react";
import { TagBar } from "@components";
import {
  MobileSidebarContainer,
  DesktopSidebarContainer,
  ThumbnailContainer,
} from "@containers";

export const Home = () => {
  return (
    <Flex h="calc(100vh - 3.5rem)" overflow="hidden">
      <DesktopSidebarContainer />

      <MobileSidebarContainer />

      <Box w="100%" h="100%" overflow="hidden">
        <TagBar />

        <ThumbnailContainer />
      </Box>
    </Flex>
  );
};
