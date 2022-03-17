import { useParams } from "react-router-dom";

import { Flex, Stack } from "@chakra-ui/react";
import { VideoDisplay, VideoInfoAndActions } from "@components";
import { RelatedVideosContainer, VideoCommentsContainer } from "@containers";
import { useGetVideoQuery } from "@redux/api";

type UrlParams = {
  id: string;
};

export default function Video() {
  const { id = "" } = useParams<UrlParams>();

  const { data: videoData, isLoading: isLoadingVideoData } = useGetVideoQuery({
    id,
  });

  const {
    title = "",
    views = 0,
    description = "",
    canalName = "",
    category = "game",
    postedAt = new Date(),
  } = videoData || {};

  return (
    <Flex
      w="100%"
      p={{ base: 0, lg: "1.5rem" }}
      css={{
        "& > div": {
          flex: "0 1 auto",
        },
      }}
      flexWrap={{ base: "wrap", lg: "nowrap" }}
    >
      <Stack
        p={{ base: 0, lg: "1.5rem" }}
        w={{ base: "100%", lg: "67%" }}
        h="100%"
      >
        <VideoDisplay />

        <VideoInfoAndActions
          isLoading={isLoadingVideoData}
          title={title}
          views={views}
          description={description}
          canalName={canalName}
          postedAt={postedAt}
        />

        <VideoCommentsContainer id={id} />
      </Stack>

      <Flex
        p={{ base: "0.5rem", lg: "1.5rem" }}
        w={{ base: "100%", lg: "33%" }}
        h="100%"
      >
        <RelatedVideosContainer
          isLoading={isLoadingVideoData}
          category={category}
        />
      </Flex>
    </Flex>
  );
}
