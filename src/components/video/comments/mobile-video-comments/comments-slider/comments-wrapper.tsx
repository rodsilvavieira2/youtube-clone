import { memo } from "react";

import { Stack } from "@chakra-ui/react";

import { CommentItemProps, VideoCommentItem } from "../../shared";

type CommentsWrapperProps = {
  comments: CommentItemProps[];
};

const Base = ({ comments }: CommentsWrapperProps) => {
  return (
    <Stack p="0.5rem" py="1rem">
      {comments.map((item) => (
        <VideoCommentItem key={item.id} {...item} />
      ))}
    </Stack>
  );
};

export const CommentsWrapper = memo(Base);
