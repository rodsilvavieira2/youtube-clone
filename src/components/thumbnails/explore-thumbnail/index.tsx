import { HStack } from "@chakra-ui/react";
import { BasicVideoData } from "@types";

import { ThumbnailInfo, VideoPreview } from "../shared";

export type ExploreThumbnailProps = Pick<
  BasicVideoData,
  "canalName" | "postedAt" | "thumbnailUrl" | "title" | "views"
>;

export const ExploreThumbnail = ({
  canalName,
  postedAt,
  thumbnailUrl,
  title,
  views,
}: ExploreThumbnailProps) => {
  return (
    <HStack alignItems="flex-start">
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
