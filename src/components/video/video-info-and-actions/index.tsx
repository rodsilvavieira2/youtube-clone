import { Stack } from "@chakra-ui/react";
import { BasicVideoData } from "@types";

import { VideoActionsBar } from "./video-actions-bar";
import { VideoCanalInfo } from "./video-canal-info";
import { VideoTitle } from "./video-title";

type VideoInfoAndActionsProps = Pick<
  BasicVideoData,
  "title" | "views" | "description" | "canalName"
> & {
  isLoading: boolean;
};

export const VideoInfoAndActions = ({
  title,
  views,
  canalName,
  description,
  isLoading,
}: VideoInfoAndActionsProps) => {
  return (
    <Stack px={{ base: "0.5rem", lg: 0 }}>
      <VideoTitle isLoading={isLoading}>{title}</VideoTitle>

      <VideoActionsBar isLoading={isLoading} views={views} />

      <VideoCanalInfo
        canalName={canalName}
        description={description}
        subscriptionAmount={0}
        isLoading={isLoading}
      />
    </Stack>
  );
};
