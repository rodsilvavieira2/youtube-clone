import { Stack } from "@chakra-ui/react";
import { BasicVideoData } from "@types";

import { ThumbnailInfo, VideoPreview } from "./shared";

type LibraryThumbnailProps = Omit<BasicVideoData, "id" | "avatarUrl">;

export const LibraryThumbnail = ({
  canalName,
  postedAt,
  thumbnailUrl,
  title,
  views,
}: LibraryThumbnailProps) => {
  return (
    <Stack>
      <VideoPreview
        styleProps={{ w: "100%", h: "7.375rem" }}
        thumbnailUrl={thumbnailUrl}
        alt={title}
        to="/"
      />

      <ThumbnailInfo
        title={title}
        canalName={canalName}
        views={views}
        postedAt={postedAt}
      />
    </Stack>
  );
};
