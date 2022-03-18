import { HorizontalThumbnailSkeleton } from "components/skeletons";
import { HistoryThumbnail } from "components/thumbnails";
import { useMemo } from "react";

import { Stack, Heading } from "@chakra-ui/react";
import { useObserver } from "@hooks";
import { BasicVideoData } from "@types";

type DesktopHistoryListProps = {
  isLoading: boolean;
  isFetching: boolean;
  haveMore: boolean;
  items: BasicVideoData[];
  onLoadMore: () => void;
};

export const HistoryList = ({
  isFetching,
  isLoading,
  haveMore,
  onLoadMore,
  items,
}: DesktopHistoryListProps) => {
  const loadingSkeletons = useMemo(
    () =>
      Array.from({ length: 10 }, (_, k) => {
        return (
          <HorizontalThumbnailSkeleton
            key={k}
            thumbnailProps={{
              w: "15.375rem",
              flexShrink: 0,
            }}
          />
        );
      }),
    []
  );

  const [lastItemRef] = useObserver({
    onVisible: () => {
      if (!isFetching && haveMore) onLoadMore();
    },
  });

  return (
    <Stack w={{ base: "100%", lg: "60%" }} pl="18px" py="25px">
      <Heading fontWeight="600" fontSize="md" mb="6" w="100%">
        Hístorico de exibição
      </Heading>

      <Stack spacing={4}>
        {isLoading ? (
          loadingSkeletons
        ) : (
          <>
            {items.map((item, k) => {
              if (items.length === k + 1) {
                return (
                  <HistoryThumbnail
                    key={item.id}
                    ref={haveMore ? lastItemRef : undefined}
                    {...item}
                  />
                );
              }

              return <HistoryThumbnail key={item.id} {...item} />;
            })}

            {isFetching && loadingSkeletons}
          </>
        )}
      </Stack>
    </Stack>
  );
};
