/* eslint-disable import/no-extraneous-dependencies */
import { Box, Flex, Stack } from "@chakra-ui/react";
import { LibrarySection, LibrarySectionUserData } from "@components";
import faker from "@faker-js/faker";
import {
  YoutubeHistory,
  YoutubeLike,
  YoutubeSaveList,
  YoutubeWatchLater,
} from "@icons";
import { BasicVideoData } from "@types";

const items: BasicVideoData[] = Array.from({ length: 50 }, () => ({
  avatarUrl: faker.internet.avatar(),
  canalName: faker.lorem.words(5),
  id: faker.datatype.uuid(),
  postedAt: faker.date.past(),
  thumbnailUrl: faker.image.abstract(),
  title: faker.lorem.words(10),
  views: faker.datatype.number(),
}));

export default function Library() {
  return (
    <Flex>
      <Stack spacing="8" w="80%" pl="5" py="4">
        <LibrarySection
          icon={YoutubeHistory}
          items={items}
          title="Histórico"
          maxItems={8}
        />

        <LibrarySection
          icon={YoutubeWatchLater}
          items={items}
          title="Assistir mais tarde"
          maxItems={4}
          amount={items.length}
        />

        <LibrarySection
          icon={YoutubeSaveList}
          items={items}
          title="Playlists"
          maxItems={4}
        />

        <LibrarySection
          icon={YoutubeLike}
          items={items}
          title="Vídeos marcados como 'Gosteis'"
          maxItems={4}
          amount={items.length}
        />
      </Stack>

      <Box w="20%" pr="6" pl="2rem">
        <LibrarySectionUserData avatarUrl="" userName="Rodrigo silva" />
      </Box>
    </Flex>
  );
}
