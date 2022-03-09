import { StyledMenuItem } from "components/styled-menu-item";

import {
  IconButton,
  Menu,
  MenuButton,
  MenuButtonProps,
  MenuList,
} from "@chakra-ui/react";
import { YoutubeFlag, YoutubeHorizontalMore, YoutubeTransition } from "@icons";

type VideoActionsMoreMenuProps = {
  menuButtonProps?: MenuButtonProps;
};

export const VideoActionsMoreMenu = ({
  menuButtonProps,
}: VideoActionsMoreMenuProps) => {
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
        {...menuButtonProps}
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
