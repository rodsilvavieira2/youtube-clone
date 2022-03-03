/* eslint-disable import/no-extraneous-dependencies */
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import {
  HistoryActions,
  HistoryInput,
  HistoryRadioGroup,
  HistoryThumbnail,
} from "@components";
import faker from "@faker-js/faker";
import { BasicVideoData } from "@types";

const items: BasicVideoData[] = Array.from({ length: 20 }, () => ({
  id: faker.datatype.uuid(),
  avatarUrl: faker.internet.avatar(),
  canalName: faker.lorem.words(3),
  postedAt: faker.date.past(),
  thumbnailUrl: faker.image.abstract(),
  title: faker.lorem.words(5),
  views: faker.datatype.number(),
  description: faker.lorem.words(50),
}));

export default function History() {
  return (
    <Flex>
      <Stack w="60%" pl="18px" py="25px">
        <Heading fontWeight="600" fontSize="md" mb="6" w="100%">
          Hístorico de exibição
        </Heading>

        <Stack spacing={4}>
          {items.map((item) => (
            <HistoryThumbnail key={item.id} {...item} />
          ))}
        </Stack>
      </Stack>

      <Box w="40%" bg="bg" py="6" px="1.75rem">
        <Stack position="fixed">
          <HistoryInput />

          <HistoryRadioGroup />

          <HistoryActions />
        </Stack>
      </Box>
    </Flex>
  );
}
