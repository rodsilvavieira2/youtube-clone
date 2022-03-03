import { HStack, IconButton, Text } from "@chakra-ui/react";
import { YoutubeLike } from "@icons";

export const LikeButton = () => {
  return (
    <HStack spacing={["1"]}>
      <IconButton
        flexShrink={0}
        aria-label="botão de like"
        icon={<YoutubeLike />}
        variant="mutedIconButton"
        size="sm"
        isRound
      />

      <Text fontWeight="500" textTransform="uppercase">
        1,9 MIL
      </Text>
    </HStack>
  );
};
