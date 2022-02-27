import { HStack, IconButton, Text, Icon } from "@chakra-ui/react";
import { YoutubeLike } from "@icons";

type VideoCommentItemLikeButtonProps = {
  likes: number;
  onIncrementLike: () => void;
};

export const VideoCommentItemLikeButton = ({
  likes,
  onIncrementLike,
}: VideoCommentItemLikeButtonProps) => {
  return (
    <HStack>
      <IconButton
        onClick={onIncrementLike}
        aria-label="like"
        icon={<Icon as={YoutubeLike} h="16px" w="16px" />}
        variant="mutedIconButton"
        size="xs"
        isRound
      />

      <Text fontSize="0.75rem" color="text.secondary">
        {likes}
      </Text>
    </HStack>
  );
};
