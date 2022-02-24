import { v4 } from "uuid";

import { SimpleGrid } from "@chakra-ui/react";
import { Thumbnail } from "@components";
// eslint-disable-next-line import/no-extraneous-dependencies
import faker from "@faker-js/faker";

const thumbnails = Array.from({ length: 10 }, () => ({
  id: v4(),
  thumbnailUrl: faker.image.city(),
  title: faker.lorem.sentences(10),
  views: faker.datatype.number({ min: 10000 }),
  canalName: faker.lorem.words(5),
  postedAt: faker.date.past(),
  avatarUrl: faker.internet.avatar(),
}));

export const ThumbnailContainer = () => {
  return (
    <SimpleGrid
      minChildWidth="20rem"
      gap="4"
      flexWrap="wrap"
      w="100%"
      h="calc(100% - 3.5rem)"
      px="8"
      py="6"
      overflow="auto"
    >
      {thumbnails.map((item) => (
        <Thumbnail key={item.id} {...item} />
      ))}
    </SimpleGrid>
  );
};
