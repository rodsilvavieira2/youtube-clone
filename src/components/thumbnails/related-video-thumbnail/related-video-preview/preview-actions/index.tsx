import { Stack } from "@chakra-ui/react";

import { AddToQueueButton } from "./add-to-queue-button";
import { WatchLaterButton } from "./watch-latter-button";

type PreviewActionsProps = {
  position?: {
    left?: number | string;
    right?: number | string;
    top?: number | string;
    bottom?: number | string;
  };
  className?: string;
  onWatchLater: () => void;
  onAddToQueue: () => void;
};

export const PreviewActions = ({
  position,
  onAddToQueue,
  onWatchLater,
  className,
}: PreviewActionsProps) => {
  const { bottom, right = "0.3rem", left, top = "0.3rem" } = position || {};

  return (
    <Stack
      position="absolute"
      spacing={1}
      left={left}
      top={top}
      right={right}
      bottom={bottom}
      className={className}
    >
      <WatchLaterButton onClick={onWatchLater} />

      <AddToQueueButton onClick={onAddToQueue} />
    </Stack>
  );
};
