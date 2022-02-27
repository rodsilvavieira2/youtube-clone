import { Box, Flex } from "@chakra-ui/react";

import { AccountActions } from "./account-actions";
import { Brand } from "./brand";
import { SearchInput } from "./search-input";

type HeaderProps = {
  onToggleSidebar: () => void;
};

export const Header = ({ onToggleSidebar }: HeaderProps) => {
  return (
    <Box
      w="100%"
      bg="primary"
      color="text.primary"
      px="5"
      position="sticky"
      zIndex="banner"
      top={0}
      left={0}
      right={0}
    >
      <Flex h="14" alignItems="center" justifyContent="space-between">
        <Brand onToggleSidebar={onToggleSidebar} />

        <SearchInput />

        <AccountActions />
      </Flex>
    </Box>
  );
};
