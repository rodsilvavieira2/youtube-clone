import { Box, HStack, IconButton, Image } from "@chakra-ui/react";
import { YoutubeMenu } from "@icons";

type BrandProps = {
  onToggleSidebar: () => void;
};

export const Brand = ({ onToggleSidebar }: BrandProps) => {
  return (
    <HStack>
      <IconButton
        onClick={onToggleSidebar}
        isRound
        variant="mutedIconButton"
        icon={<YoutubeMenu />}
        aria-label="exmpandir ou retrair menu"
      />

      <Box flexShrink={0} w="24">
        <Image maxH="100%" maxW="100%" alt="youtube" src="/logo.png" />
      </Box>
    </HStack>
  );
};
