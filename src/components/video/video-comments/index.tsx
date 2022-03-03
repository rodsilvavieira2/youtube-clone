/* eslint-disable import/no-extraneous-dependencies */
import { v4 } from "uuid";

import { Stack } from "@chakra-ui/react";
import faker from "@faker-js/faker";

import { VideoAddComment } from "./video-add-comment";
import { VideoCommentItem } from "./video-comment-item";
import { VideoCommentsHeader } from "./video-comments-header";

export const comments = Array.from({ length: 50 }, () => ({
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

export const VideoComments = () => {
  return (
    <Stack spacing={6}>
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
