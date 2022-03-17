import { Box, Flex } from "@chakra-ui/react";
import { PlaylistInfo } from "@components";
import { LikedVideosListContainer } from "@containers";
import faker from "@faker-js/faker";

export default function LikedVideos() {
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

      <LikedVideosListContainer />
    </Flex>
  );
}
