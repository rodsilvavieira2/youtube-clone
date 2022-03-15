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
    <Flex bg="bgSecondary" h="100%" flexWrap={{ base: "wrap", md: "nowrap" }}>
      <Box w={{ base: "100%", md: "22rem" }} bg="bg" flexShrink={0}>
        <Box
          position={{ base: "relative", md: "fixed" }}
          w={{ base: "100%", md: "22rem" }}
          h={{ base: "auto", md: "100%" }}
          p="1rem"
          bg="primary"
        >
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
