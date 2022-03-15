import { Reorder, useDragControls } from "framer-motion";
import { useState } from "react";

import { HStack, Stack } from "@chakra-ui/react";
import { VideoInfoCanalName, VideoInfoTitle } from "@components";

import { DragAndDropControl } from "./drag-and-drop-control";
import { ItemPreview } from "./item-preview";
import { PlayListItemMenu } from "./play-list-item-menu";

export type PlayListItemProps = {
  id: string;
  thumbUrl: string;
  canalName: string;
  title: string;
};

export const PlayListItem = ({
  id,
  canalName,
  thumbUrl,
  title,
}: PlayListItemProps) => {
  const [isHovingContent, setIsHovingContent] = useState(false);
  const [isHovingDragContent, setIsHovingDragContent] = useState(false);

  const controls = useDragControls();

  return (
    <Reorder.Item
      value={{ id, canalName, thumbUrl, title }}
      dragListener={false}
      dragControls={controls}
      id={id}
    >
      <HStack
        alignItems="normal"
        bg={isHovingContent || isHovingDragContent ? "button.focus" : undefined}
        boxShadow={
          isHovingDragContent ? "0 2px 8px rgb(0 0 0 / 40%)" : undefined
        }
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
            onPointerDown: (e) => controls.start(e),
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
          <ItemPreview
            styleProps={{
              w: "7.5rem",
              h: "4.25rem",
              flexShrink: 0,
            }}
            previewUrl={thumbUrl}
          />

          <Stack>
            <VideoInfoTitle>{title}</VideoInfoTitle>

            <VideoInfoCanalName>{canalName}</VideoInfoCanalName>
          </Stack>
        </HStack>

        <PlayListItemMenu
          containerProps={{
            className: "play-list-menu",
            opacity: 0,
            _focus: {
              opacity: 1,
            },
          }}
        />
      </HStack>
    </Reorder.Item>
  );
};
