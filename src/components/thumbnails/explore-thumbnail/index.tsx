import { forwardRef, ForwardRefRenderFunction } from "react";

import { Box, HStack } from "@chakra-ui/react";
import { BasicVideoData } from "@types";

import {
  ThumbnailBasicMenu,
  VideoInfoCanalName,
  VideoInfoDescription,
  VideoInfoTitle,
  VideoInfoViewsAndTimeFromNow,
  VideoPreview,
} from "../shared";

export type ExploreThumbnailProps = Pick<
  BasicVideoData,
  "canalName" | "postedAt" | "thumbnailUrl" | "title" | "views" | "description"
>;

const Base: ForwardRefRenderFunction<HTMLDivElement, ExploreThumbnailProps> = (
  { canalName, postedAt, thumbnailUrl, title, views, description },
  ref
) => {
  return (
    <HStack
      alignItems="flex-start"
      spacing={4}
      maxW="53.875rem"
      position="relative"
      _hover={{
        ".explore-thumbnail-more-menu": {
          opacity: "1",
        },
      }}
      _active={{
        ".thumbnail-interaction": {
          opacity: 1,
          transition: "opacity 0.8s",
        },
      }}
      ref={ref}
    >
      <VideoPreview
        styleProps={{
          w: "15.375rem",
          h: "8.625rem",
        }}
        to="/"
        thumbnailUrl={thumbnailUrl}
        alt={title}
      />

      <Box>
        <VideoInfoTitle fontWeight="400" fontSize="large" w="90%">
          {title}
        </VideoInfoTitle>

        <HStack alignItems="center" mt="1">
          <VideoInfoCanalName>{canalName}</VideoInfoCanalName>

          <VideoInfoViewsAndTimeFromNow views={views} postedAt={postedAt} />
        </HStack>

        <VideoInfoDescription mt="2">{description}</VideoInfoDescription>
      </Box>

      <ThumbnailBasicMenu
        styleProps={{
          className: "explore-thumbnail-more-menu",
          opacity: "0",
          _focus: {
            opacity: "1",
          },
          "aria-label": "mais opções",
          position: "absolute",
          right: "0",
          top: 0,
        }}
      />
    </HStack>
  );
};

export const ExploreThumbnail = forwardRef(Base);
