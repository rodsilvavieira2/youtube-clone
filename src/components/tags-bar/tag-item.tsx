import { Flex, Text } from "@chakra-ui/react";

export type TagItemProps = {
  tagName: string;
  onClick: () => void;
};

export const TagItem = ({ onClick, tagName }: TagItemProps) => {
  return (
    <Flex
      role="tab"
      h="2rem"
      minW="0.75rem"
      bg="shape"
      px="3"
      py="2"
      onClick={onClick}
      borderRadius="full"
      alignItems="center"
      flexShrink={0}
      css={{
        counterIncrement: "item",
      }}
    >
      <Text
        whiteSpace="nowrap"
        maxW="20rem"
        overflow="hidden"
        textOverflow="ellipsis"
      >
        {tagName}
      </Text>
    </Flex>
  );
};
