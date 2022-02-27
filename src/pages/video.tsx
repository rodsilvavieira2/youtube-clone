import { useMemo } from "react";

import { Stack, Flex } from "@chakra-ui/react";
import {
  RelatedVideoThumbnail,
  TagBar,
  VideoComments,
  VideoInfoAndActions,
} from "@components";
// eslint-disable-next-line import/no-extraneous-dependencies
import faker from "@faker-js/faker";

const relatedVideos = Array.from({ length: 50 }, () => ({
  id: faker.datatype.uuid(),
  title: faker.lorem.words(3),
  views: faker.datatype.number(),
  canalName: faker.name.findName(),
  avatarUrl: faker.internet.avatar(),
  thumbnailUrl: faker.image.city(),
  postedAt: faker.date.past(),
}));

export const Video = () => {
  const relatedVideosRendered = useMemo(() => {
    return relatedVideos.map((item) => (
      <RelatedVideoThumbnail key={item.id} {...item} />
    ));
  }, []);

  return (
    <Flex bg="bg">
      <Stack w={{ base: "100%", lg: "65%", xl: "70%" }} p="1.5rem">
        <Flex
          h="68vh"
          border="1px solid"
          borderColor="black"
          borderStyle="dotted"
          flexShrink={0}
        />

        <VideoInfoAndActions />

        <Stack spacing={6} display={{ base: "flex", lg: "none" }}>
          <TagBar />

          <Stack>{relatedVideosRendered}</Stack>
        </Stack>

        <VideoComments />
      </Stack>

      <Stack
        display={{ base: "none", lg: "flex" }}
        w={{ base: "35%", xl: "30%" }}
        p="1.5rem"
        pl="0"
      >
        <TagBar />

        <Stack>{relatedVideosRendered}</Stack>
      </Stack>
    </Flex>
  );
};
