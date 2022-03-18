import { useEffect, useState } from "react";

import { Flex } from "@chakra-ui/react";
import {
  HistoryList,
  DesktopHistoryListControls,
  MobileHistoryControls,
} from "@components";
import { useGetHistoryQuery } from "@redux/api";
import { BasicVideoData } from "@types";

export default function History() {
  const [currentPage, setCurrentPage] = useState(1);

  const [currentItems, setCurrentItems] = useState<BasicVideoData[]>([]);

  const { data, isLoading, isFetching } = useGetHistoryQuery({
    page: currentPage,
  });

  const { items = [], haveMore = false } = data || {};

  useEffect(() => {
    if (items.length) setCurrentItems((prev) => [...prev, ...items]);
  }, [items]);

  const onLoadMore = () => setCurrentPage((prev) => prev + 1);

  return (
    <Flex flexWrap="wrap">
      <MobileHistoryControls />

      <HistoryList
        haveMore={haveMore}
        isFetching={isFetching}
        isLoading={isLoading}
        items={currentItems}
        onLoadMore={onLoadMore}
      />

      <DesktopHistoryListControls />
    </Flex>
  );
}
