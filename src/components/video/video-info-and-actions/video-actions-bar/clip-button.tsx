import { HStack, IconButton, Text } from "@chakra-ui/react";
import { YoutubeClip } from "@icons";

export const ClipButton = () => {
  return (
    <HStack spacing={["1"]}>
      <IconButton
        flexShrink={0}
        aria-label="fazer um clipe do video"
        icon={<YoutubeClip />}
        variant="mutedIconButton"
        size="sm"
        isRound
      />

      <Text fontWeight="500" textTransform="uppercase">
        clipe
      </Text>
    </HStack>
  );
};
