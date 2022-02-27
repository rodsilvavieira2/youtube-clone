import { StyledMenuItem } from "components/styled-menu-item";

import { IconButton, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { YoutubeFlag, YoutubeHorizontalMore, YoutubeTransition } from "@icons";

export const VideoActionsMoreMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        flexShrink={0}
        aria-label="mais opções"
        icon={<YoutubeHorizontalMore />}
        variant="mutedIconButton"
        size="sm"
        isRound
      />

      <MenuList>
        <StyledMenuItem icon={<YoutubeFlag />}>Deunciar</StyledMenuItem>
        <StyledMenuItem icon={<YoutubeTransition />}>
          Abrir transcrição
        </StyledMenuItem>
      </MenuList>
    </Menu>
  );
};
