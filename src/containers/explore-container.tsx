import { useEffect, useMemo, useState } from "react";

import { Stack } from "@chakra-ui/react";
import { ExploreThumbnail, HorizontalThumbnail } from "@components";
import { useObserver } from "@hooks";
import {
  selectAllExploreVideos,
  useGetAllExploreVideosQuery,
} from "@redux/api";
import { BasicVideoData } from "@types";

export const ExploreContainer = () => {
  const [currentVideos, setCurrentVideos] = useState<BasicVideoData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { videos, isFetching } = useGetAllExploreVideosQuery(
    { page: currentPage },
    {
      selectFromResult: ({
        data = { entities: [], ids: [] } as any,
        ...rest
      }) => {
        return {
          videos: selectAllExploreVideos(data),
          ...rest,
        };
      },
    }
  );

  const [lastVideoRef] = useObserver({
    onVisible: () => {
      setCurrentPage((prev) => prev + 1);
    },
  });

  useEffect(() => {
    if (videos.length) {
      setCurrentVideos((prev) => [...prev, ...videos]);
    }
  }, [videos]);

  const videoSkeletons = useMemo(
    () =>
      Array.from({ length: 8 }, (_, k) => (
        <HorizontalThumbnail
          key={k}
          containerProps={{
            maxW: "53.875rem",
          }}
          thumbnailProps={{
            flexShrink: 0,
          }}
        />
      )),
    []
  );

  return (
    <Stack spacing={4}>
      {currentVideos.map((item, i) => {
        if (currentVideos.length === i + 1) {
          return (
            <ExploreThumbnail key={item.id} {...item} ref={lastVideoRef} />
          );
        }

        return <ExploreThumbnail key={item.id} {...item} />;
      })}

      {isFetching && videoSkeletons}
    </Stack>
  );
};
