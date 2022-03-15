import { Box, Flex } from "@chakra-ui/react";
import { PlaylistInfo, PlayListItems } from "@components";
import faker from "@faker-js/faker";

const playListItems = Array.from({ length: 4 }, () => ({
  id: faker.datatype.uuid(),
  thumbUrl: faker.image.abstract(),
  canalName: faker.lorem.words(10),
  title: faker.lorem.words(10),
}));

export default function WatchLater() {
  return (
    <Flex bg="bgSecondary" h="100%" overflow="hidden">
      <Box w="22rem" bg="bg" flexShrink={0}>
        <Box position="fixed" w="22rem" p="1rem">
          <PlaylistInfo
            imagePreviewUrl={faker.image.abstract()}
            title={faker.lorem.words(3)}
            amount={faker.datatype.number()}
            views={faker.datatype.number()}
            updateAt={faker.date.past()}
            avatarUrl={faker.internet.avatar()}
            userName={faker.name.findName()}
            isPublic={false}
          />
        </Box>
      </Box>

      <PlayListItems items={playListItems} />
    </Flex>
  );
}
