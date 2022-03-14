import { forwardRef, ForwardRefRenderFunction } from "react";

import { Avatar, Box, HStack, Stack } from "@chakra-ui/react";
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
      flexDir={{ base: "column", sm: "row" }}
    >
      <VideoPreview
        styleProps={{
          w: { base: "100%", sm: "15.375rem" },
          h: { base: "13rem", sm: "8.625rem" },
        }}
        to="/"
        thumbnailUrl={thumbnailUrl}
        alt={title}
      />

      <HStack alignItems="normal">
        <Avatar
          size="sm"
          mt="0.6rem"
          name={canalName}
          display={{ base: "inline-flex", sm: "none" }}
        />

        <Stack mt={{ base: "0.5rem !important", sm: "0 !important" }}>
          <VideoInfoTitle fontWeight="400" fontSize="large">
            {title}
          </VideoInfoTitle>

          <HStack alignItems="center" mt="1" flexWrap="wrap">
            <VideoInfoCanalName>{canalName}</VideoInfoCanalName>

            <VideoInfoViewsAndTimeFromNow views={views} postedAt={postedAt} />
          </HStack>

          <VideoInfoDescription display={{ base: "none", sm: "-webkit-box" }}>
            {description}
          </VideoInfoDescription>
        </Stack>

        <ThumbnailBasicMenu
          styleProps={{
            className: "explore-thumbnail-more-menu",
            opacity: { base: "1", lg: 0 },
            _focus: {
              opacity: "1",
            },
            "aria-label": "mais opções",
          }}
        />
      </HStack>
    </HStack>
  );
};

export const ExploreThumbnail = forwardRef(Base);
