import { Avatar, HStack, IconButton } from "@chakra-ui/react";
import { YoutubeAddVideo, YoutubeGrid, YoutubeBell } from "@icons";

export const AccountActions = () => {
  return (
    <HStack>
      <IconButton
        isRound
        variant="mutedIconButton"
        icon={<YoutubeAddVideo />}
        aria-label="manipule videos"
      />

      <IconButton
        isRound
        variant="mutedIconButton"
        icon={<YoutubeGrid />}
        aria-label="ver outras áreas"
      />

      <IconButton
        isRound
        variant="mutedIconButton"
        icon={<YoutubeBell />}
        aria-label="ver notificações"
      />

      <Avatar size="sm" name="rodrigo silva" />
    </HStack>
  );
};
