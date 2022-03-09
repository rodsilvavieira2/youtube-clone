import { Avatar, Box, HStack } from "@chakra-ui/react";
import { BasicVideoData } from "@types";

import {
  VideoInfoCanalName,
  VideoInfoTitle,
  VideoInfoViewsAndTimeFromNow,
  VideoPreview,
} from "../shared";

type RelatedVideoThumbnailProps = Pick<
  BasicVideoData,
  "canalName" | "thumbnailUrl" | "title" | "views"
>;

export const RelatedVideoThumbnail = ({
  canalName,
  thumbnailUrl,
  title,
  views,
}: RelatedVideoThumbnailProps) => {
  return (
    <HStack
      position="relative"
      alignItems="flex-start"
      flexWrap="wrap"
      css={{
        ".thumbnailMenu": {
          visibility: "hidden",
        },
        "&:hover": {
          ".thumbnailMenu": {
            visibility: "visible",
          },
        },
      }}
    >
      <VideoPreview
        styleProps={{
          w: { base: "100%", lg: "10.5rem" },
          h: { base: "10rem", lg: "5.875rem" },
        }}
        to="/"
        alt={title}
        thumbnailUrl={thumbnailUrl}
      />

      <HStack spacing={2} position="relative">
        <Avatar size="sm" />

        <Box w={{ base: "100%" }} p="0.5rem" pl="0">
          <VideoInfoTitle fontWeight="500">{title}</VideoInfoTitle>

          <HStack>
            <VideoInfoCanalName>{canalName}</VideoInfoCanalName>

            <VideoInfoViewsAndTimeFromNow views={views} />
          </HStack>
        </Box>
      </HStack>
    </HStack>
  );
};
