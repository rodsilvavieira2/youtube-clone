import { useEffect, useMemo, useState } from "react";

import { Stack } from "@chakra-ui/react";
import {
  RelatedVideoThumbnail,
  HorizontalThumbnailSkeleton,
} from "@components";
import { useObserver } from "@hooks";
import { useGetRelatedVideosQuery } from "@redux/api/base";
import { BasicVideoData } from "@types";

type RelatedVideosContainerProps = Pick<BasicVideoData, "category"> & {
  isLoading?: boolean;
};

export const RelatedVideosContainer = ({
  category,
  isLoading,
}: RelatedVideosContainerProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<BasicVideoData[]>([]);

  const { data, isFetching } = useGetRelatedVideosQuery({
    category,
    page: currentPage,
  });

  const { haveMore, items = [] } = data || {};

  useEffect(() => {
    if (items.length) setCurrentItems((prev) => [...prev, ...items]);
  }, [items]);

  const [latVideoRef] = useObserver({
    onVisible: () => setCurrentPage((prev) => prev + 1),
  });

  const loadingSkeletons = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => {
        return (
          <HorizontalThumbnailSkeleton
            key={i}
            thumbnailProps={{
              w: "10.5rem",
              h: "5.875rem",
              flexShrink: 0,
            }}
          />
        );
      }),
    []
  );

  return (
    <Stack w="100%" spacing={4}>
      {isLoading ? (
        loadingSkeletons
      ) : (
        <>
          {currentItems.map((item, i) => {
            if (currentItems.length === i + 1) {
              return (
                <RelatedVideoThumbnail
                  key={item.id}
                  {...item}
                  ref={haveMore ? latVideoRef : undefined}
                />
              );
            }

            return <RelatedVideoThumbnail key={item.id} {...item} />;
          })}

          {isFetching && loadingSkeletons}
        </>
      )}
    </Stack>
  );
};
