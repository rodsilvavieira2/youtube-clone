/* eslint-disable import/no-extraneous-dependencies */
import { v4 } from "uuid";

import { Stack, StackProps } from "@chakra-ui/react";
import faker from "@faker-js/faker";

import { VideoCommentItem } from "../shared";
import { VideoAddComment } from "./video-add-comment";
import { VideoCommentsHeader } from "./video-comments-header";

const comments = Array.from({ length: 50 }, () => ({
  id: v4(),
  userName: faker.name.findName(),
  likes: faker.datatype.number(),
  isDisliked: faker.datatype.boolean(),
  comment: faker.lorem.paragraph(15),
  avatarUrl: faker.internet.avatar(),
  commentedAt: faker.date.past(),
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onIncrementLike: () => {},
  responses: [],
}));

type VideoCommentsProps = {
  containerProps?: StackProps;
};

export const VideoComments = ({ containerProps }: VideoCommentsProps) => {
  return (
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
