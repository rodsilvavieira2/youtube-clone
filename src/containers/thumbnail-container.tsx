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
    <SimpleGrid minChildWidth="15.875rem" gap="4" p="6" pb="40">
      {isLoading ? (
        <>
          {Array.from({ length: 9 }, (_, k) => (
            <ThumbnailSkeleton key={k} />
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
