import { HStack, IconButton, Text } from "@chakra-ui/react";
import { YoutubeDislike } from "@icons";

export const DislikeButton = () => {
  return (
    <HStack spacing={["1"]}>
      <IconButton
        flexShrink={0}
        aria-label="dislike button"
        icon={<YoutubeDislike fontSize="1.5rem" />}
        variant="mutedIconButton"
        size="sm"
        isRound
      />

      <Text fontWeight="500" textTransform="uppercase">
        não gostei
      </Text>
    </HStack>
  );
};
