import { Flex } from "@chakra-ui/react";
import { Tag } from "@types";

import { TagItem } from "./tag-item";

type TagsBarProps = {
  tags: Tag[];
};

export const TagsBar = ({ tags }: TagsBarProps) => {
  return (
    <Flex
      h="3.5rem"
      px="4"
      bg="primary"
      position="relative"
      alignItems="center"
      borderBottom="1px solid"
      borderTop="1px solid"
      borderColor="shape"
      overflow="auto"
      css={{
        touchAction: "pan-y",
        "&::-webkit-scrollbar": {
          height: "3px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "transparent",
        },
      }}
      scrollBehavior="smooth"
      scrollSnapType="x mandatory"
      w="100%"
    >
      {tags.map((item) => (
        <TagItem key={item.id} {...item} />
      ))}
    </Flex>
  );
};
