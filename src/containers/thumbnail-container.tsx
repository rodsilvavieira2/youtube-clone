/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from "react";

import { Flex } from "@chakra-ui/react";
import { ThumbnailSkeleton, VideoThumbnail } from "@components";
import { useObserver } from "@hooks";
import { selectAllVideos, useGetAllVideosQuery } from "@redux/api";
import { BasicVideoData } from "@types";

export const ThumbnailContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentVideos, setCurrentVideos] = useState<BasicVideoData[]>([]);

  const { videos, isLoading, isFetching } = useGetAllVideosQuery(
    { page: currentPage },
    {
      selectFromResult: ({
        data = { entities: [], ids: [] } as any,
        ...rest
      }) => {
        return {
          videos: selectAllVideos(data),
          ...rest,
        };
      },
    }
  );

  const [lastVideoRef] = useObserver({
    onVisible: () => {
      if (!isFetching) setCurrentPage((prev) => prev + 1);
    },
  });

  const videoSkeletons = useMemo(
    () => Array.from({ length: 8 }, (_, k) => <ThumbnailSkeleton key={k} />),
    []
  );

  useEffect(() => {
    if (videos.length) setCurrentVideos((prev) => [...prev, ...videos]);
  }, [videos]);

  return (
    <Flex
      css={{
        "& > *": {
          flex: "1 1 14.9375rem",
          height: "100%",
        },
      }}
      px={["0", "0", "4"]}
      pt="1.5rem"
      pb="5rem"
      gap="1rem"
      flexWrap="wrap"
      w="100%"
      overflow="hidden"
    >
      {isLoading ? (
        videoSkeletons
      ) : (
        <>
          {currentVideos.map((item, i) => {
            if (i + 1 === currentVideos.length) {
              return (
                <VideoThumbnail ref={lastVideoRef} key={item.id} {...item} />
              );
            }

            return <VideoThumbnail key={item.id} {...item} />;
          })}
          {isFetching && !isLoading && videoSkeletons}
        </>
      )}
    </Flex>
  );
};
