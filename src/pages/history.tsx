import { useEffect, useMemo, useState } from "react";

import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import {
  HistoryActions,
  HistoryInput,
  HistoryRadioGroup,
  HistoryThumbnail,
  HorizontalThumbnail,
  MobileHistory,
} from "@components";
import { useObserver } from "@hooks";
import { useGetHistoryQuery } from "@redux/api";
import { BasicVideoData } from "@types";

export default function History() {
  const [currentPage, setCurrentPage] = useState(1);

  const [currentHistoryItems, setCurrentHistoryItems] = useState<
    BasicVideoData[]
  >([]);

  const {
    data = [],
    isLoading,
    isFetching,
  } = useGetHistoryQuery({ page: currentPage });

  useEffect(() => {
    if (data.length) setCurrentHistoryItems((prev) => [...prev, ...data]);
  }, [data]);

  const [lastItemRef] = useObserver({
    onVisible: () => setCurrentPage((prev) => prev + 1),
  });

  const loadingSkeletons = useMemo(
    () =>
      Array.from({ length: 10 }, (_, k) => {
        return (
          <HorizontalThumbnail
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

  return (
    <Flex flexWrap="wrap">
      <MobileHistory
        containerProps={{
          display: { base: "flex", lg: "none" },
          p: "1.5rem",
        }}
      />

      <Stack w={{ base: "100%", lg: "60%" }} pl="18px" py="25px">
        <Heading fontWeight="600" fontSize="md" mb="6" w="100%">
          Hístorico de exibição
        </Heading>

        <Stack spacing={4}>
          {isLoading ? (
            loadingSkeletons
          ) : (
            <>
              {currentHistoryItems.map((item, k) => {
                if (currentHistoryItems.length === k + 1) {
                  return (
                    <HistoryThumbnail
                      key={item.id}
                      ref={lastItemRef}
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

      <Box
        display={{ base: "none", lg: "flex" }}
        w="40%"
        bg="bg"
        py="6"
        px="1.75rem"
      >
        <Stack position="fixed">
          <HistoryInput />

          <HistoryRadioGroup />

          <HistoryActions />
        </Stack>
      </Box>
    </Flex>
  );
}
