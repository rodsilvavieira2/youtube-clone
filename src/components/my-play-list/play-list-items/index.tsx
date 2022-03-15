import { Reorder } from "framer-motion";
import { useState } from "react";

import { useBreakpointValue } from "@chakra-ui/react";

import { PlayListItem, PlayListItemProps } from "../play-list-item";

type PlayListItemsProps = {
  items: PlayListItemProps[];
};

export const PlayListItems = ({ items }: PlayListItemsProps) => {
  const [currentItems, setCurrentItems] = useState(items);

  const isOnMobileView = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
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
