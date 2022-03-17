import { Stack, StackProps } from "@chakra-ui/react";
import { useObserver } from "@hooks";
import { VideoComment } from "@types";

import { VideoCommentItem } from "../shared";
import { VideoAddComment } from "./video-add-comment";
import { VideoCommentsHeader } from "./video-comments-header";

type VideoCommentsProps = {
  containerProps?: StackProps;
  comments: VideoComment[];
  onLoadMore: () => void;
  haveMore: boolean;
};

export const VideoComments = ({
  containerProps,
  comments,
  onLoadMore,
  haveMore,
}: VideoCommentsProps) => {
  const [lastCommentRef] = useObserver({
    onVisible: onLoadMore,
  });

  return (
    <Stack spacing={6} {...containerProps}>
      <VideoCommentsHeader />

      <VideoAddComment />

      <Stack spacing={6} mt="10">
        {comments.map((item, i) => {
          if (comments.length === i + 1) {
            return (
              <VideoCommentItem
                key={item.id}
                {...item}
                ref={haveMore ? lastCommentRef : undefined}
              />
            );
          }

          return <VideoCommentItem key={item.id} {...item} />;
        })}
      </Stack>
    </Stack>
  );
};
