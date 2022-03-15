import { VideoInfoViewsAndTimeFromNow } from "components/thumbnails";

import { Flex, Stack } from "@chakra-ui/react";
import { BasicVideoData } from "@types";

import { VideoActionsBar } from "./video-actions-bar";
import { VideoCanalInfo } from "./video-canal-info";
import { VideoTitle } from "./video-title";

type VideoInfoAndActionsProps = Pick<
  BasicVideoData,
  "title" | "views" | "description" | "canalName" | "postedAt"
> & {
  isLoading: boolean;
};

export const VideoInfoAndActions = ({
  title,
  views,
  canalName,
  description,
  isLoading,
  postedAt,
}: VideoInfoAndActionsProps) => {
  return (
    <Flex flexDir="column" px={{ base: "0.8rem", lg: 0 }}>
      <VideoTitle isLoading={isLoading}>{title}</VideoTitle>

      {!isLoading && (
        <VideoInfoViewsAndTimeFromNow
          containerProps={{
            display: { base: "flex", lg: "none" },
          }}
          views={views}
          postedAt={postedAt}
        />
      )}

      <VideoActionsBar isLoading={isLoading} views={views} />

      <VideoCanalInfo
        canalName={canalName}
        description={description}
        subscriptionAmount={0}
        isLoading={isLoading}
      />
    </Flex>
  );
};
