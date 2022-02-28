import { Box, Flex, HStack } from "@chakra-ui/react";

import { InputWrapper } from "./input-wrapper";
import { MicButton } from "./mic-button";
import { SearchButton } from "./search-button";

export const SearchInput = () => {
  return (
    <HStack flex="0 1 45.5rem">
      <Box flex="1" ml="2.5rem">
        <Flex h="2.5rem">
          <InputWrapper />

          <SearchButton />
        </Flex>
      </Box>

      <MicButton />
    </HStack>
  );
};
