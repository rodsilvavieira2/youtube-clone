import { useMemo } from "react";

import { Stack, Flex, Button } from "@chakra-ui/react";
import {
  RelatedVideoThumbnail,
  TagBar,
  VideoComments,
  MobileVideoComments,
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

export default function Video() {
  const relatedVideosRendered = useMemo(() => {
    return relatedVideos.map((item) => (
      <RelatedVideoThumbnail key={item.id} {...item} />
    ));
  }, []);

  return (
    <Flex bg="bg" flexDir="column">
      <Flex
        alignItems="center"
        justifyContent="center"
        h={["30vh", "68vh"]}
        border="1px solid"
        borderColor="black"
        borderStyle="dotted"
        flexShrink={0}
      >
        Um video incrivel
        <Button>click</Button>
      </Flex>

      <Stack spacing={0} w={{ base: "100%", lg: "65%", xl: "70%" }} pt={0}>
        <VideoInfoAndActions />

        <MobileVideoComments />

        <Stack mt="0.3rem !important">{relatedVideosRendered}</Stack>

        <VideoComments
          containerProps={{
            display: { base: "none", lg: "flex" },
          }}
        />
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
}
