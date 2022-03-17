import { Reorder } from "framer-motion";
import { useEffect, useState } from "react";

import { Center, Spinner, useBreakpointValue } from "@chakra-ui/react";

import { PlayListItem, PlayListItemProps } from "../play-list-item";

type PlayListItemsProps = {
  items: PlayListItemProps[];
  isLoading?: boolean;
};

export const PlayListItems = ({ items, isLoading }: PlayListItemsProps) => {
  const [currentItems, setCurrentItems] = useState(items);

  useEffect(() => {
    setCurrentItems(items);
  }, [items]);

  const isOnMobileView = useBreakpointValue({
    base: true,
    lg: false,
  });

  return isLoading ? (
    <Center py="3" w="100%">
      <Spinner size="lg" />
    </Center>
  ) : (
    <Reorder.Group
      style={{
        flexDirection: "column",
        listStyle: "none",
        overflowY: "auto",
        width: "100%",
        height: "100%",
        paddingBottom: isOnMobileView ? "3.8rem" : 0,
      }}
      layoutScroll
      values={items}
      onReorder={setCurrentItems}
    >
      {currentItems.map((item) => (
        <Reorder.Item key={item.id} value={item} id={item.id}>
          <PlayListItem {...item} />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};
