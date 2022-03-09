import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { Avatar, Box, HStack, Text } from "@chakra-ui/react";

import "dayjs/locale/pt";
import { Comment } from "./comment";
import { VideoCommentItemDislikeButton } from "./video-comment-item-dislike-button";
import { VideoCommentItemLikeButton } from "./video-comment-item-like-button";

dayjs.locale("pt");

dayjs.extend(relativeTime);

export type CommentItemProps = {
  id: string;
  userName: string;
  comment: string;
  likes: number;
  avatarUrl: string;
  isDisliked: boolean;
  responses: CommentItemProps[];
  commentedAt: Date;
  onIncrementLike: () => void;
};

export const VideoCommentItem = ({
  userName,
  comment,
  avatarUrl,
  isDisliked,
  likes,
  responses,
  commentedAt,
  onIncrementLike,
}: CommentItemProps) => {
  return (
    <HStack w="100%">
      <Avatar
        name="rodrigo silva"
        size="md"
        src={avatarUrl}
        alignSelf="flex-start"
      />

      <Box>
        <HStack>
          <Text as="strong" fontSize="xs">
            {userName}
          </Text>

          <Text as="time" fontSize="xs" color="text.secondary">
            {dayjs(commentedAt).fromNow()}
          </Text>
        </HStack>

        <Comment comment={comment} />

        <HStack>
          <VideoCommentItemLikeButton
            onIncrementLike={onIncrementLike}
            likes={likes}
          />

          <VideoCommentItemDislikeButton />
        </HStack>
      </Box>
    </HStack>
  );
};
