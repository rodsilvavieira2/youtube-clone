import { Link } from "react-router-dom";

import { Box, Stack } from "@chakra-ui/react";
import { BasicVideoData } from "@types";

import {
  VideoInfoCanalName,
  VideoInfoTitle,
  VideoInfoViewsAndTimeFromNow,
  VideoPreview,
} from "./shared";

type LibraryThumbnailProps = Pick<
  BasicVideoData,
  "canalName" | "postedAt" | "thumbnailUrl" | "title" | "views" | "id"
>;

export const LibraryThumbnail = ({
  canalName,
  postedAt,
  thumbnailUrl,
  title,
  views,
  id,
}: LibraryThumbnailProps) => {
  return (
    <Stack>
      <VideoPreview
        styleProps={{ w: "100%", h: "7.375rem" }}
        thumbnailUrl={thumbnailUrl}
        alt={title}
        to={`/video/${id}`}
      />

      <Box>
        <Link to={`/video/${id}`}>
          <VideoInfoTitle>{title}</VideoInfoTitle>
        </Link>

        <VideoInfoCanalName>{canalName}</VideoInfoCanalName>

        <VideoInfoViewsAndTimeFromNow postedAt={postedAt} views={views} />
      </Box>
    </Stack>
  );
};
