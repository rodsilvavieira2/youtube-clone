import { Box, Flex, HStack, StackProps } from "@chakra-ui/react";

import { MicButton, SearchButton } from "../shared";
import { InputWrapper } from "./input-wrapper";

type SearchInputProps = {
  containerProps?: StackProps;
};

export const SearchInput = ({ containerProps }: SearchInputProps) => {
  return (
    <HStack flex="0 1 45.5rem" {...containerProps}>
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
