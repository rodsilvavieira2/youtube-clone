/* eslint-disable import/no-extraneous-dependencies */
import { Flex, Heading, Stack } from "@chakra-ui/react";
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
}));

export default function History() {
  return (
    <Flex>
      <Stack w="60%" p="3">
        <Heading fontWeight="500" size="md" mb="6">
          Hístorico de exibição
        </Heading>

        <Stack>
          {items.map((item) => (
            <HistoryThumbnail key={item.id} {...item} />
          ))}
        </Stack>
      </Stack>

      <Stack w="40%" bg="bgSecondary" p="6">
        <HistoryInput />

        <HistoryRadioGroup />

        <HistoryActions />
      </Stack>
    </Flex>
  );
}
