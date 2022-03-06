import { StyledMenuItem } from "components/styled-menu-item";

import {
  Box,
  BoxProps,
  IconButton,
  Menu,
  MenuButton,
  MenuButtonProps,
  MenuDivider,
  MenuList,
} from "@chakra-ui/react";
import {
  YouTubeQueue,
  YoutubeSaveList,
  YoutubeTrash,
  YoutubeVerticalMore,
} from "@icons";
import { preventDefaultClick } from "@util";

type PlayListItemMenuProps = {
  menuButtonProps?: MenuButtonProps;
  containerProps?: BoxProps;
};

export const PlayListItemMenu = ({
  containerProps,
  menuButtonProps,
}: PlayListItemMenuProps) => {
  const { onClick, ...containerPropsRest } = containerProps || {};

  return (
    <Menu>
      <Box
        as="span"
        {...containerPropsRest}
        onClick={preventDefaultClick(onClick)}
      >
        <MenuButton
          as={IconButton}
          aria-label="mais opções"
          icon={<YoutubeVerticalMore />}
          variant="mutedIconButton"
          isRound
          {...menuButtonProps}
        />
      </Box>

      <MenuList>
        <StyledMenuItem icon={<YouTubeQueue />}>
          Adicionar à fila
        </StyledMenuItem>

        <StyledMenuItem icon={<YoutubeSaveList />}>
          Salvar na playlist
        </StyledMenuItem>

        <MenuDivider />

        <StyledMenuItem icon={<YoutubeTrash />}>
          remover de Assitir mais tarde
        </StyledMenuItem>

        <StyledMenuItem>mover para o início</StyledMenuItem>

        <StyledMenuItem>mover para o fim</StyledMenuItem>
      </MenuList>
    </Menu>
  );
};
