import { MdMenu } from "react-icons/md";

import { Box, HStack, IconButton, Image } from "@chakra-ui/react";

export const Brand = () => {
  return (
    <HStack>
      <IconButton
        isRound
        variant="mutedIconButton"
        icon={<MdMenu />}
        aria-label="exmpandir ou retrair menu"
      />

      <Box flexShrink={0} w="24">
        <Image maxH="100%" maxW="100%" alt="youtube" src="/logo.png" />
      </Box>
    </HStack>
  );
};
