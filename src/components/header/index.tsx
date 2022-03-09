import { useState } from "react";

import { Box, Flex } from "@chakra-ui/react";

import { AccountActions } from "./account-actions";
import { Brand } from "./brand";
import { MobileSearchInput } from "./mobile-search-input";
import { SearchInput } from "./search-input";

type HeaderProps = {
  onToggleSidebar: () => void;
};

export const Header = ({ onToggleSidebar }: HeaderProps) => {
  const [shouldShowMobileInput, setShouldShowMobileInput] = useState(false);

  return (
    <Box
      w="100%"
      bg="primary"
      color="text.primary"
      px={["2", "2", "4"]}
      position="sticky"
      zIndex="banner"
      top={0}
      left={0}
      right={0}
    >
      <Flex h="14" alignItems="center" justifyContent="space-between">
        <Brand onToggleSidebar={onToggleSidebar} />

        <SearchInput
          containerProps={{
            display: { base: "none", lg: "flex" },
          }}
        />

        <AccountActions
          onOpenMobileSearch={() => setShouldShowMobileInput(true)}
        />

        {shouldShowMobileInput && (
          <MobileSearchInput onClose={() => setShouldShowMobileInput(false)} />
        )}
      </Flex>
    </Box>
  );
};
