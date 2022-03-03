import { MouseEvent } from "react";

import { IconButton } from "@chakra-ui/react";
import { YouTubeQueue } from "@icons";

type AddToQueueButtonProps = {
  onClick?: () => void;
};

export const AddToQueueButton = ({ onClick }: AddToQueueButtonProps) => {
  const _onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    onClick?.();
  };

  return (
    <IconButton
      aria-label="assistir mais tarde"
      bg="rgba(3,3,3, 0.8)"
      icon={<YouTubeQueue fill="#fff" />}
      borderRadius="2px"
      size="sm"
      onClick={_onClick}
      _hover={{}}
      _active={{}}
    />
  );
};
