import { Icon, IconButton } from "@chakra-ui/react";
import { YoutubeDislike } from "@icons";

export const VideoCommentItemDislikeButton = () => {
  return (
    <IconButton
      aria-label="dislike"
      size="xs"
      fontSize=""
      icon={<Icon as={YoutubeDislike} h="16px" w="16px" />}
      isRound
      variant="mutedIconButton"
    />
  );
};
