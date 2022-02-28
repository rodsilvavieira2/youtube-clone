import { Center, Spinner } from "@chakra-ui/react";

export const FallBack = () => {
  return (
    <Center w="100vw" h="calc(100vh - 3.5rem)">
      <Spinner size="xl" />
    </Center>
  );
};
