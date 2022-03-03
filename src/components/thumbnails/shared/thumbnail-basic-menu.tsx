/* eslint-disable react/no-unescaped-entities */
import { StyledMenuItem } from "components/styled-menu-item";

import {
  Box,
  BoxProps,
  IconButton,
  IconButtonProps,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import {
  YouTubeQueue,
  YoutubeSaveList,
  YoutubeVerticalMore,
  YoutubeWatchLater,
} from "@icons";

type ThumbnailBasicMenuProps = {
  styleProps?: IconButtonProps;
  containerProps?: BoxProps;
};

export const ThumbnailBasicMenu = ({
  styleProps,
  containerProps,
}: ThumbnailBasicMenuProps) => {
  return (
    <Menu>
      <Box as="span" {...containerProps}>
        <MenuButton
          as={IconButton}
          aria-label="mais opções"
          icon={<YoutubeVerticalMore />}
          variant="mutedIconButton"
          isRound
          {...styleProps}
        />
      </Box>

      <MenuList>
        <StyledMenuItem icon={<YouTubeQueue />}>
          Acicionar à fila
        </StyledMenuItem>

        <StyledMenuItem icon={<YoutubeWatchLater />}>
          Salvar em "Assisir mais tarde"
        </StyledMenuItem>

        <StyledMenuItem icon={<YoutubeSaveList />}>
          Salvar nan playlist
        </StyledMenuItem>
      </MenuList>
    </Menu>
  );
};
