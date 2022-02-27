import { HStack, IconButton, Text } from "@chakra-ui/react";
import { YoutubeSaveList } from "@icons";

export const SaveOnListButton = () => {
  return (
    <HStack spacing={["1"]}>
      <IconButton
        flexShrink={0}
        aria-label="salve o video na sua lista"
        icon={<YoutubeSaveList />}
        variant="mutedIconButton"
        isRound
        size="sm"
      />

      <Text fontWeight="500" textTransform="uppercase">
        salvar
      </Text>
    </HStack>
  );
};
