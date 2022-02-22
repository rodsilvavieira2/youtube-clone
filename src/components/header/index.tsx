import { Box, Flex } from "@chakra-ui/react";

import { AccountActions } from "./account-actions";
import { Brand } from "./brand";
import { SearchInput } from "./search-input";

export const Header = () => {
  return (
    <Box
      borderBottom="1px solid"
      borderColor="shape"
      w="100%"
      bg="primary"
      color="text.primary"
      px="5"
    >
      <Flex h="14" alignItems="center" justifyContent="space-between">
        <Brand />

        <SearchInput />

        <AccountActions />
      </Flex>
    </Box>
  );
};
