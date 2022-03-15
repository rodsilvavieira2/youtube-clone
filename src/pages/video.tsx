import { useParams } from "react-router-dom";

import { Box, Flex, HStack, Stack, useBreakpointValue } from "@chakra-ui/react";
import {
  MobileVideoComments,
  VideoComments,
  VideoDisplay,
  VideoInfoAndActions,
} from "@components";
import { RelatedVideosContainer } from "@containers";
import { useObserver } from "@hooks";
import { useGetVideoCommentsMutation, useGetVideoQuery } from "@redux/api";

type UrlParams = {
  id: string;
};

export default function Video() {
  const { id = "" } = useParams<UrlParams>();

  const { data: videoData, isLoading: isLoadingVideoData } = useGetVideoQuery({
    id,
  });

  const [getComments, { data: comments = [], isLoading: isLoadingComments }] =
    useGetVideoCommentsMutation();

  const {
    title = "",
    views = 0,
    description = "",
    canalName = "",
    category = "game",
    postedAt = new Date(),
  } = videoData || {};

  const [renderCommentsRef] = useObserver({
    onVisible: () => {
      getComments({ videoId: id });
    },
    config: {
      unobserveOnIntersect: true,
    },
  });

  const isOnDesktopView = useBreakpointValue({
    base: false,
    lg: true,
  });

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

        <Box
          m="0 !important"
          w="0"
          visibility="hidden"
          ref={renderCommentsRef}
        />

        <MobileVideoComments
          containerProps={{
            mt: "0 !important",
            display: { base: "block", lg: "none" },
          }}
          comments={comments}
        />

        {isOnDesktopView && (
          <VideoComments isLoading={isLoadingComments} comments={comments} />
        )}
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
