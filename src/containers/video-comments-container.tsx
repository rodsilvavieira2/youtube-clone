import { useCallback, useEffect, useState } from "react";

import { Center, Spinner, useBreakpointValue } from "@chakra-ui/react";
import { MobileVideoComments, VideoComments } from "@components";
import { useObserver } from "@hooks";
import { useGetVideoCommentsQuery } from "@redux/api";
import { VideoComment } from "@types";

type VideoCommentsContainerProps = {
  id: string;
};

type CommentsLoaderProps = {
  videoId: string;
};

const CommentsLoader = ({ videoId }: CommentsLoaderProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<VideoComment[]>([]);

  const { data, isFetching } = useGetVideoCommentsQuery({
    videoId,
    page: currentPage,
  });

  const isOnDesktopView = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { items = [], haveMore = true } = data || {};

  const onLoadMore = useCallback(() => {
    if (!isFetching && haveMore) setCurrentPage((prev) => prev + 1);
  }, [isFetching, haveMore]);

  useEffect(() => {
    if (items.length) setCurrentItems((prev) => [...prev, ...items]);
  }, [data]);

  return (
    <>
      <MobileVideoComments
        containerProps={{
          mt: "0 !important",
          display: { base: "block", lg: "none" },
        }}
        comments={currentItems}
      />

      {isOnDesktopView && (
        <VideoComments
          comments={currentItems}
          onLoadMore={onLoadMore}
          haveMore={haveMore}
        />
      )}

      {isFetching && (
        <Center p="1rem">
          <Spinner size="lg" />
        </Center>
      )}
    </>
  );
};

export const VideoCommentsContainer = ({ id }: VideoCommentsContainerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const [renderCommentsRef] = useObserver({
    onVisible: () => {
      setIsVisible(true);
    },
    config: {
      unobserveOnIntersect: true,
    },
  });

  return isVisible ? (
    <CommentsLoader videoId={id} />
  ) : (
    <div
      style={{ margin: "0 !important", visibility: "hidden" }}
      tabIndex={-1}
      ref={renderCommentsRef}
    />
  );
};
