import { Avatar, HStack, Input } from "@chakra-ui/react";

export const CommentInput = () => {
  return (
    <HStack
      p="0.5rem"
      pt="1rem"
      pb="1rem"
      borderBottom="1px solid"
      borderColor="border.primary"
    >
      <Avatar />

      <Input
        borderRadius="3px"
        minH="3rem"
        px="0.5rem"
        placeholder="Adicione um comentário..."
      />
    </HStack>
  );
};
