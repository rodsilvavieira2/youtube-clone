import "dayjs/locale/pt";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { forwardRef, ForwardRefRenderFunction } from "react";

import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
import { VideoComment } from "@types";

import { Comment } from "./comment";
import { VideoCommentItemDislikeButton } from "./video-comment-item-dislike-button";
import { VideoCommentItemLikeButton } from "./video-comment-item-like-button";

dayjs.locale("pt");

dayjs.extend(relativeTime);

export type CommentItemProps = VideoComment;

const Base: ForwardRefRenderFunction<HTMLDivElement, CommentItemProps> = (
  { userName, comment, avatarUrl, likes, commentedAt },
  ref
) => {
  return (
    <HStack w="100%">
      <Avatar
        name="rodrigo silva"
        size="md"
        src={avatarUrl}
        alignSelf="flex-start"
        ref={ref}
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
            onIncrementLike={() => console.log("click")}
            likes={likes}
          />

          <VideoCommentItemDislikeButton />
        </HStack>
      </Box>
    </HStack>
  );
};

export const VideoCommentItem = forwardRef(Base);
