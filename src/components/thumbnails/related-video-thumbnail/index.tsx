import { Box, HStack } from "@chakra-ui/react";
import { BasicVideoData } from "@types";

import {
  VideoInfoCanalName,
  VideoInfoTitle,
  VideoInfoViewsAndTimeFromNow,
  VideoPreview,
} from "../shared";

type RelatedVideoThumbnailProps = Pick<
  BasicVideoData,
  "canalName" | "postedAt" | "thumbnailUrl" | "title" | "views"
>;

export const RelatedVideoThumbnail = ({
  canalName,
  postedAt,
  thumbnailUrl,
  title,
  views,
}: RelatedVideoThumbnailProps) => {
  return (
    <HStack
      position="relative"
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
      <Box>
        <VideoPreview to="/" alt={title} thumbnailUrl={thumbnailUrl} />

        <VideoInfoTitle>{title}</VideoInfoTitle>

        <VideoInfoCanalName>{canalName}</VideoInfoCanalName>

        <VideoInfoViewsAndTimeFromNow postedAt={postedAt} views={views} />
      </Box>
    </HStack>
  );
};
