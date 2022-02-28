import { HStack } from "@chakra-ui/react";
import { BasicVideoData } from "@types";

import { ThumbnailInfo, VideoPreview } from "../shared";

type HistoryThumbnailProps = Omit<BasicVideoData, "id" | "avatarUrl">;

export const HistoryThumbnail = ({
  canalName,
  postedAt,
  thumbnailUrl,
  title,
  views,
}: HistoryThumbnailProps) => {
  return (
    <HStack>
      <VideoPreview
        propsStyles={{
          w: "15.375rem",
          h: "8.625rem",
        }}
        thumbnailUrl={thumbnailUrl}
        alt={title}
      />

      <ThumbnailInfo
        title={title}
        canalName={canalName}
        views={views}
        postedAt={postedAt}
      />
    </HStack>
  );
};
