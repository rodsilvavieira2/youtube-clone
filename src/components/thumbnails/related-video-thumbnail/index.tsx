import { Omit } from "react-redux";

import { HStack } from "@chakra-ui/react";
import { BasicVideoData } from "@types";

import { ThumbnailInfo, ThumbnailMenu, VideoPreview } from "../shared";

type RelatedVideoThumbnailProps = Omit<BasicVideoData, "id" | "avatarUrl">;

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
      <VideoPreview alt={title} thumbnailUrl={thumbnailUrl} />

      <ThumbnailInfo
        title={title}
        canalName={canalName}
        views={views}
        postedAt={postedAt}
      />

      <ThumbnailMenu
        className="thumbnailMenu"
        position={{
          right: "0",
          top: "0",
        }}
      />
    </HStack>
  );
};
