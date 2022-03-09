import { Box, Flex } from "@chakra-ui/react";
import { PlaylistInfo, PlayListItem } from "@components";
import faker from "@faker-js/faker";

const playListItems = Array.from({ length: 10 }, () => ({
  id: faker.datatype.uuid(),
  thumbUrl: faker.image.abstract(),
  canalName: faker.lorem.words(10),
  title: faker.lorem.words(10),
}));

export default function LikedVideos() {
  return (
    <Flex bg="bgSecondary">
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

      <Box flex={1}>
        <Flex py="5" flexDir="column">
          {playListItems.map((item) => (
            <PlayListItem key={item.id} {...item} />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}
