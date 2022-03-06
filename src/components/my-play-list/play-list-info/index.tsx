import { Badge, Divider, Flex, Icon, Stack } from "@chakra-ui/react";
import { YoutubeLocked } from "@icons";

import { PlayListControl } from "./play-list-control";
import { PlayListInfo } from "./play-list-info";
import { PlayListPreview } from "./play-list-preview";
import { PlayListTitle } from "./play-list-title";
import { PlayListUserInfo } from "./play-list-user-info";

type PlaylistInfoProps = {
  imagePreviewUrl: string;
  avatarUrl: string;
  userName: string;
  title: string;
  amount: number;
  views: number;
  isPublic: boolean;
  updateAt: Date;
};

export const PlaylistInfo = ({
  amount,
  imagePreviewUrl,
  title,
  updateAt,
  views,
  avatarUrl,
  userName,
  isPublic,
}: PlaylistInfoProps) => {
  return (
    <Stack spacing="4">
      <PlayListPreview
        stylesProps={{
          h: "10.9375rem",
          w: "100%",
        }}
        imageUrl={imagePreviewUrl}
        playlistUrl=""
      />

      <PlayListTitle>{title}</PlayListTitle>

      <PlayListInfo amount={amount} views={views} updatedAt={updateAt} />

      <Flex>
        <Badge
          display="flex"
          alignItems="center"
          bg="badge"
          color="text.secondary"
          fontSize="0.75rem"
          textTransform="capitalize"
          fontWeight="400"
        >
          <Icon as={YoutubeLocked} fontSize="1rem" mr="0.5" />
          {isPublic ? "público" : "privado"}
        </Badge>
      </Flex>

      <PlayListControl />

      <Divider />

      <PlayListUserInfo avatarUrl={avatarUrl} userName={userName} />
    </Stack>
  );
};
