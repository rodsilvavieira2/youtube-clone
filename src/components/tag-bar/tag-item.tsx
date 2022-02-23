import { Box, Flex, Text } from "@chakra-ui/react";

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
      borderRadius="base"
      alignItems="center"
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
