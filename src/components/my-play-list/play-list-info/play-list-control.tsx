import { HStack, IconButton } from "@chakra-ui/react";
import { YoutubeHorizontalMore, YoutubeSharePlaylist } from "@icons";

export const PlayListControl = () => {
  return (
    <HStack alignItems="center">
      <IconButton
        variant="mutedIconButton"
        icon={<YoutubeSharePlaylist />}
        aria-label="compartilhar"
        isRound
      />

      <IconButton
        variant="mutedIconButton"
        icon={<YoutubeHorizontalMore />}
        aria-label="mais opções"
        isRound
      />
    </HStack>
  );
};
