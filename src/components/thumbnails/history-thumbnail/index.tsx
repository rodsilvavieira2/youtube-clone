import { forwardRef, ForwardRefRenderFunction } from "react";

import { Box, HStack } from "@chakra-ui/react";
import { BasicVideoData } from "@types";

import {
  ThumbnailBasicMenu,
  VideoInfoCanalName,
  VideoInfoTitle,
  VideoInfoViewsAndTimeFromNow,
  VideoPreview,
} from "../shared";
import { RemoveButton } from "./remove-button";

type HistoryThumbnailProps = Pick<
  BasicVideoData,
  "canalName" | "thumbnailUrl" | "title" | "views"
>;

const Base: ForwardRefRenderFunction<HTMLDivElement, HistoryThumbnailProps> = (
  { canalName, thumbnailUrl, title, views },
  ref
) => {
  return (
    <HStack
      alignItems="flex-start"
      position="relative"
      _hover={{
        ".history-button-action": {
          opacity: 1,
        },
      }}
      ref={ref}
    >
      <VideoPreview
        styleProps={{
          w: { base: "9rem", lg: "15.375rem" },
          h: { base: "6rem", lg: "8.625rem" },
        }}
        thumbnailUrl={thumbnailUrl}
        alt={title}
        to="/"
      />
      <HStack alignItems="normal" justifyContent="space-between">
        <Box>
          <VideoInfoTitle>{title}</VideoInfoTitle>

          <VideoInfoCanalName>{canalName}</VideoInfoCanalName>

          <VideoInfoViewsAndTimeFromNow views={views} />
        </Box>

        <HStack alignItems="normal">
          <RemoveButton display={{ base: "none", md: "inline-flex" }} />

          <ThumbnailBasicMenu
            containerProps={{
              className: "history-button-action",
              opacity: {
                base: 1,
                lg: 0,
              },
              _focusWithin: {
                opacity: 1,
              },
            }}
          />
        </HStack>
      </HStack>
    </HStack>
  );
};

export const HistoryThumbnail = forwardRef(Base);
