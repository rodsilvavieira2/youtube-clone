import { Box } from "@chakra-ui/react";
import { TagBar } from "@components";
import { ThumbnailContainer } from "@containers";

export default function Home() {
  return (
    <>
      <Box w="100%" h="3.5rem">
        <Box position="fixed" zIndex="banner">
          <TagBar />
        </Box>
      </Box>

      <ThumbnailContainer />
    </>
  );
}
