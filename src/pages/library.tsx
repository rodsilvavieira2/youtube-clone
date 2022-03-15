import { Box, Flex, Stack } from "@chakra-ui/react";
import { LibrarySection, LibrarySectionUserData } from "@components";
import {
  YoutubeHistory,
  YoutubeLike,
  YoutubeSaveList,
  YoutubeWatchLater,
} from "@icons";
import { useGetLibraryQuery } from "@redux/api";

export default function Library() {
  const { data = [], isLoading } = useGetLibraryQuery();

  return (
    <Flex>
      <Stack spacing="8" w={{ base: "100%", lg: "80%" }} pl="5" py="4">
        <LibrarySection
          icon={YoutubeHistory}
          items={data}
          title="Histórico"
          maxItems={8}
          isLoading={isLoading}
        />

        <LibrarySection
          icon={YoutubeWatchLater}
          items={data}
          title="Assistir mais tarde"
          maxItems={4}
          amount={data.length}
          isLoading={isLoading}
        />

        <LibrarySection
          icon={YoutubeSaveList}
          items={data}
          title="Playlists"
          maxItems={4}
          isLoading={isLoading}
        />

        <LibrarySection
          icon={YoutubeLike}
          items={data}
          title="Vídeos marcados como 'Gosteis'"
          maxItems={4}
          amount={data.length}
          isLoading={isLoading}
        />
      </Stack>

      <Box w="20%" pr="6" pl="2rem" display={{ base: "none", lg: "block" }}>
        <LibrarySectionUserData avatarUrl="" userName="Rodrigo silva" />
      </Box>
    </Flex>
  );
}
