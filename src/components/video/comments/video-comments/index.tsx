import { Center, Spinner, Stack, StackProps } from "@chakra-ui/react";
import { VideoComment } from "@types";

import { VideoCommentItem } from "../shared";
import { VideoAddComment } from "./video-add-comment";
import { VideoCommentsHeader } from "./video-comments-header";

const onClick = () => console.log("click");

type VideoCommentsProps = {
  containerProps?: StackProps;
  comments: VideoComment[];
  isLoading?: boolean;
};

export const VideoComments = ({
  containerProps,
  comments,
  isLoading,
}: VideoCommentsProps) => {
  return isLoading ? (
    <Center p="1rem">
      <Spinner size="lg" />
    </Center>
  ) : (
    <Stack spacing={6} {...containerProps}>
      <VideoCommentsHeader />

      <VideoAddComment />

      <Stack spacing={6} mt="10">
        {comments.map((item) => (
          <VideoCommentItem key={item.id} {...item} />
        ))}
      </Stack>
    </Stack>
  );
};
