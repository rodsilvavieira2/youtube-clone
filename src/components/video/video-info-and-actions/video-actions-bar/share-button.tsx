import { YoutubeShare } from "icons/youtube-share";

import { HStack, IconButton, Text } from "@chakra-ui/react";

export const ShareButton = () => {
  return (
    <HStack spacing={["1"]}>
      <IconButton
        flexShrink={0}
        aria-label="compartilhar"
        icon={<YoutubeShare />}
        variant="mutedIconButton"
        size="sm"
        isRound
      />

      <Text fontWeight="500" textTransform="uppercase">
        compartilhar
      </Text>
    </HStack>
  );
};
