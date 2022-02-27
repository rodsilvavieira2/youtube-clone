import { useEffect, useState } from "react";
import { v4 } from "uuid";

import { SimpleGrid } from "@chakra-ui/react";
import { ThumbnailSkeleton, VideoThumbnail } from "@components";
// eslint-disable-next-line import/no-extraneous-dependencies
import faker from "@faker-js/faker";

const thumbnails = Array.from({ length: 12 }, () => ({
  id: v4(),
  thumbnailUrl: faker.image.city(),
  title: faker.lorem.sentences(10),
  views: faker.datatype.number(),
  canalName: faker.lorem.words(25),
  postedAt: faker.date.past(),
  avatarUrl: faker.internet.avatar(),
}));

export const ThumbnailContainer = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  });

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
      {isLoading ? (
        <>
          {Array.from({ length: 9 }, () => (
            <ThumbnailSkeleton />
          ))}
        </>
      ) : (
        <>
          {thumbnails.map((item) => (
            <VideoThumbnail key={item.id} {...item} />
          ))}
        </>
      )}
    </SimpleGrid>
  );
};
