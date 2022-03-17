import { useEffect, useMemo, useState } from "react";

import { Stack } from "@chakra-ui/react";
import { ExploreThumbnail, HorizontalThumbnailSkeleton } from "@components";
import { useObserver } from "@hooks";
import { useGetAllExploreVideosQuery } from "@redux/api";
import { BasicVideoData } from "@types";

export const ExploreContainer = () => {
  const [currentItems, setCurrentItems] = useState<BasicVideoData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isFetching } = useGetAllExploreVideosQuery({
    page: currentPage,
  });

  const { items = [], haveMore } = data || {};

  const [lastVideoRef] = useObserver({
    onVisible: () => {
      if (!isFetching && haveMore) {
        setCurrentPage((prev) => prev + 1);
      }
    },
  });

  useEffect(() => {
    if (items.length) {
      setCurrentItems((prev) => [...prev, ...items]);
    }
  }, [items]);

  const videoSkeletons = useMemo(
    () =>
      Array.from({ length: 8 }, (_, k) => (
        <HorizontalThumbnailSkeleton
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
      {currentItems.map((item, i) => {
        if (currentItems.length === i + 1) {
          return (
            <ExploreThumbnail
              key={item.id}
              {...item}
              ref={haveMore ? lastVideoRef : undefined}
            />
          );
        }

        return <ExploreThumbnail key={item.id} {...item} />;
      })}

      {isFetching && videoSkeletons}
    </Stack>
  );
};
