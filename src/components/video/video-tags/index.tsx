import { HStack, Text } from "@chakra-ui/react";
import { Tag } from "@types";

type VideoTagsProps = {
  tags: Tag[];
};

export const VideoTags = ({ tags }: VideoTagsProps) => {
  return (
    <HStack
      w="100%"
      overflow="hidden"
      flexWrap="nowrap"
      whiteSpace="nowrap"
      textOverflow="ellipsis"
      padding="0.5rem"
    >
      {tags.map((item) => (
        <Text fontSize="xs" fontWeight="400" color="highlight" key={item.id}>
          #{item.tagName}
        </Text>
      ))}
    </HStack>
  );
};
