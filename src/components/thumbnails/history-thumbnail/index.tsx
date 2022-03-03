import { Box, HStack, IconButton } from "@chakra-ui/react";
import { YoutubeClose } from "@icons";
import { BasicVideoData } from "@types";

import {
  ThumbnailBasicMenu,
  VideoInfoCanalName,
  VideoInfoTitle,
  VideoInfoViewsAndTimeFromNow,
  VideoPreview,
} from "../shared";

type HistoryThumbnailProps = Omit<BasicVideoData, "id" | "avatarUrl">;

export const HistoryThumbnail = ({
  canalName,
  postedAt,
  thumbnailUrl,
  title,
  views,
}: HistoryThumbnailProps) => {
  return (
    <HStack
      alignItems="flex-start"
      position="relative"
      _hover={{
        ".history-button-action": {
          opacity: 1,
        },
      }}
    >
      <VideoPreview
        styleProps={{
          w: "15.375rem",
          h: "8.625rem",
        }}
        thumbnailUrl={thumbnailUrl}
        alt={title}
        to="/"
      />

      <Box>
        <VideoInfoTitle>{title}</VideoInfoTitle>

        <VideoInfoCanalName>{canalName}</VideoInfoCanalName>

        <VideoInfoViewsAndTimeFromNow postedAt={postedAt} views={views} />
      </Box>

      <IconButton
        aria-label="remover do historico de exibição"
        icon={<YoutubeClose />}
        variant="mutedIconButton"
        position="absolute"
        top={0}
        isRound
        right="3.5rem"
        className="history-button-action"
        opacity={0}
        _focus={{
          opacity: 1,
          bg: "button.focus",
        }}
      />

      <ThumbnailBasicMenu
        containerProps={{
          className: "history-button-action",
          position: "absolute",
          top: "0",
          right: "0.3rem",
          opacity: 0,
          _focusWithin: {
            opacity: 1,
          },
        }}
      />
    </HStack>
  );
};
