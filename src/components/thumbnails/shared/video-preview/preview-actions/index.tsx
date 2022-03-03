import { Stack, StackProps } from "@chakra-ui/react";

import { AddToQueueButton } from "./add-to-queue-button";
import { WatchLaterButton } from "./watch-latter-button";

type PreviewActionsProps = {
  stylesProps?: StackProps;
  onWatchLater: () => void;
  onAddToQueue: () => void;
};

export const PreviewActions = ({
  onAddToQueue,
  onWatchLater,
  stylesProps,
}: PreviewActionsProps) => {
  return (
    <Stack
      position="absolute"
      right="0.3rem"
      top="0.3rem"
      spacing={1}
      {...stylesProps}
    >
      <WatchLaterButton onClick={onWatchLater} />

      <AddToQueueButton onClick={onAddToQueue} />
    </Stack>
  );
};
