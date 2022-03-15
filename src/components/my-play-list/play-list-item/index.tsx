import { useState } from "react";

import { HStack, Stack } from "@chakra-ui/react";
import {
  ThumbnailPhoto,
  VideoInfoCanalName,
  VideoInfoTitle,
} from "@components";

import { DragAndDropControl } from "./drag-and-drop-control";
import { PlayListItemMenu } from "./play-list-item-menu";

export type PlayListItemProps = {
  id: string;
  thumbUrl: string;
  canalName: string;
  title: string;
};

export const PlayListItem = (props: PlayListItemProps) => {
  const [isHovingContent, setIsHovingContent] = useState(false);
  const [isHovingDragContent, setIsHovingDragContent] = useState(false);

  const { canalName, thumbUrl, title } = props;

  return (
    <HStack
      alignItems="normal"
      bg={isHovingContent || isHovingDragContent ? "button.focus" : undefined}
      boxShadow={isHovingDragContent ? "0 2px 8px rgb(0 0 0 / 40%)" : undefined}
      transition="box-shadow 0.3s ease"
      w="100%"
      _hover={{
        ".play-list-menu": {
          opacity: 1,
        },
      }}
    >
      <DragAndDropControl
        stylesProps={{
          onMouseMove: () => setIsHovingDragContent(true),
          onMouseOut: () => setIsHovingDragContent(false),
        }}
      />

      <HStack
        borderBottom="1px solid"
        borderColor={isHovingContent ? "transparent" : "border.secondary"}
        alignItems="normal"
        onMouseMove={() => setIsHovingContent(true)}
        onMouseOut={() => setIsHovingContent(false)}
        py="4"
        w="84%"
      >
        <ThumbnailPhoto
          containerProps={{
            w: "7.5rem",
            h: "4.25rem",
            flexShrink: 0,
          }}
          thumbnailUrl={thumbUrl}
          alt={title}
        />

        <Stack>
          <VideoInfoTitle>{title}</VideoInfoTitle>

          <VideoInfoCanalName>{canalName}</VideoInfoCanalName>
        </Stack>
      </HStack>

      <PlayListItemMenu
        containerProps={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          className: "play-list-menu",
          opacity: { base: 1, lg: 0 },
          _focus: {
            opacity: 1,
          },
        }}
      />
    </HStack>
  );
};
