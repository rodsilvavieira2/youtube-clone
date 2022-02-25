import { Flex, Stack, Box, HStack } from "@chakra-ui/react";

export const Video = () => {
  return (
    <HStack spacing={6} h="calc(100vh - 3.5rem)" px="12" py="6" overflow="auto">
      <Stack w="64%">
        <Box w="49.5625rem" bg="red" h="27.875rem" />

        <Box h="5rem" bg="yellow" />

        <Box h="13rem" bg="green" />
      </Stack>

      <Flex w="36%" bg="blue" h="100%" />
    </HStack>
  );
};
