import {
  Avatar,
  Center,
  HStack,
  IconButton,
  SkeletonCircle,
} from "@chakra-ui/react";
import {
  YoutubeAddVideo,
  YoutubeGrid,
  YoutubeBell,
  YoutubeSearch,
} from "@icons";
import { UserInfo } from "@types";

type AccountActionsProps = {
  onOpenMobileSearch: () => void;
  isLoading?: boolean;
} & Partial<Pick<UserInfo, "userName" | "avatarUrl">>;

export const AccountActions = ({
  onOpenMobileSearch,
  isLoading,
  avatarUrl,
  userName,
}: AccountActionsProps) => {
  return (
    <HStack spacing={2}>
      {isLoading ? (
        Array.from({ length: 4 }, (_, i) => <SkeletonCircle key={i} />)
      ) : (
        <>
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

          <Center h="2.5rem" w={{ base: "fit-content", lg: "3.75rem" }}>
            <Avatar size="sm" name={userName} src={avatarUrl} />
          </Center>
        </>
      )}
    </HStack>
  );
};
