import { Link } from "react-router-dom";

import { Box, HStack, Icon, IconButton } from "@chakra-ui/react";
import { YoutubeBrandLogo, YoutubeMenu } from "@icons";

type BrandProps = {
  onToggleSidebar: () => void;
};

export const Brand = ({ onToggleSidebar }: BrandProps) => {
  return (
    <HStack spacing={4} alignItems="center">
      <IconButton
        onClick={onToggleSidebar}
        isRound
        variant="mutedIconButton"
        icon={<YoutubeMenu />}
        aria-label="exmpandir ou retrair menu"
      />

      <Box flexShrink={0} w="24" as={Link} to="/">
        <Icon as={YoutubeBrandLogo} />
      </Box>
    </HStack>
  );
};
