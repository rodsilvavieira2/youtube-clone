import { Box } from "@chakra-ui/react";
import { TagBar } from "@components";

export const TagBarContainer = () => {
  return (
    <Box h="3.5rem">
      <Box position="fixed" zIndex="1">
        <TagBar />
      </Box>
    </Box>
  );
};
