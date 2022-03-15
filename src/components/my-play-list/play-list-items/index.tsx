import { Reorder } from "framer-motion";
import { useState } from "react";

import { PlayListItem, PlayListItemProps } from "../play-list-item";

type PlayListItemsProps = {
  items: PlayListItemProps[];
};

export const PlayListItems = ({ items }: PlayListItemsProps) => {
  const [currentItems, setCurrentItems] = useState(items);

  return (
    <Reorder.Group
      axis="y"
      style={{
        flexDirection: "column",
        listStyle: "none",
        overflowY: "auto",
        width: "100%",
      }}
      layoutScroll
      values={items}
      onReorder={(data) => console.log("order", data)}
    >
      {currentItems.map((item) => (
        <PlayListItem key={item.id} {...item} />
      ))}
    </Reorder.Group>
  );
};
