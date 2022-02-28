import { Avatar, Center, HStack, IconButton } from "@chakra-ui/react";
import { YoutubeAddVideo, YoutubeGrid, YoutubeBell } from "@icons";

export const AccountActions = () => {
  return (
    <HStack spacing={2}>
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

      <Center h="2.5rem" w="3.75rem">
        <Avatar size="sm" name="rodrigo silva" />
      </Center>
    </HStack>
  );
};
