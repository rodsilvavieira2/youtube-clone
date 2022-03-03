import { MouseEvent } from "react";

import { IconButton } from "@chakra-ui/react";
import { YoutubeWatchLater } from "@icons";

type WatchLaterButtonProps = {
  onClick?: () => void;
};

export const WatchLaterButton = ({ onClick }: WatchLaterButtonProps) => {
  const _onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    onClick?.();
  };

  return (
    <IconButton
      aria-label="assistir mais tarde"
      bg="rgba(3,3,3, 0.8)"
      icon={<YoutubeWatchLater fill="#fff" />}
      borderRadius="2px"
      size="sm"
      onClick={_onClick}
      _hover={{}}
      _active={{}}
    />
  );
};
