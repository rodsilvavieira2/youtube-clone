import { Heading, Stack } from "@chakra-ui/react";
// eslint-disable-next-line import/no-extraneous-dependencies
import faker from "@faker-js/faker";

import { VideoActionsBar } from "./video-actions-bar";
import { VideoCanalInfo } from "./video-canal-info";

export const VideoInfoAndActions = () => {
  return (
    <Stack>
      <Heading
        mt="4"
        color="text.primary"
        w="100%"
        overflow="hidden"
        textOverflow="ellipsis"
        fontWeight="400"
        whiteSpace="nowrap"
        fontSize="1.125rem"
      >
        {faker.lorem.words(10)}
      </Heading>

      <VideoActionsBar />

      <VideoCanalInfo />
    </Stack>
  );
};
