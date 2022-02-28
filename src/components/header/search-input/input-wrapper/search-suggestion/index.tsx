import { List, ListIcon, ListItem, ListProps } from "@chakra-ui/react";
import { YoutubeSearch, YoutubeWatchLater } from "@icons";

type SuggestionsItem = {
  id: string;
  type: "search" | "recent";
  text: string;
};

type SearchSuggestionProps = {
  styleProps?: ListProps;
  items: SuggestionsItem[];
};

export const SearchSuggestion = ({
  styleProps,
  items,
}: SearchSuggestionProps) => {
  return (
    <List
      boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
      position="absolute"
      bg="primary"
      minH="15rem"
      zIndex="tooltip"
      pr="6"
      pl="2"
      py="5"
      {...styleProps}
    >
      {items.map((item) => (
        <ListItem
          key={item.id}
          display="flex"
          alignItems="center"
          h="8"
          w="100%"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          <ListIcon
            fontSize="1.3rem"
            as={item.type === "recent" ? YoutubeWatchLater : YoutubeSearch}
          />
          {item.text}
        </ListItem>
      ))}
    </List>
  );
};
