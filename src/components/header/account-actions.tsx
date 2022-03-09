import { Avatar, Center, HStack, IconButton } from "@chakra-ui/react";
import {
  YoutubeAddVideo,
  YoutubeGrid,
  YoutubeBell,
  YoutubeSearch,
} from "@icons";

type AccountActionsProps = {
  onOpenMobileSearch: () => void;
};

export const AccountActions = ({ onOpenMobileSearch }: AccountActionsProps) => {
  return (
    <HStack spacing={2}>
      <IconButton
        isRound
        variant="mutedIconButton"
        icon={<YoutubeAddVideo />}
        aria-label="manipule videos"
        display={{ base: "none", lg: "inline-flex" }}
      />

      <IconButton
        isRound
        variant="mutedIconButton"
        icon={<YoutubeGrid />}
        aria-label="ver outras áreas"
        display={{ base: "none", lg: "inline-flex" }}
      />

      <IconButton
        isRound
        variant="mutedIconButton"
        icon={<YoutubeBell />}
        aria-label="ver notificações"
        display={{ base: "none", lg: "inline-flex" }}
      />

      <IconButton
        isRound
        variant="mutedIconButton"
        icon={<YoutubeSearch />}
        aria-label="ver notificações"
        display={{ base: "inline-flex", lg: "none" }}
        onClick={onOpenMobileSearch}
      />

      <Center h="2.5rem" w="3.75rem">
        <Avatar size="sm" name="rodrigo silva" />
      </Center>
    </HStack>
  );
};
