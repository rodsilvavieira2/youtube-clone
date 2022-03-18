import {
  Box,
  BoxProps,
  IconButton,
  IconButtonProps,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { StyledMenuItem } from "@components";
import {
  YouTubeQueue,
  YoutubeSaveList,
  YoutubeVerticalMore,
  YoutubeWatchLater,
} from "@icons";

type ThumbnailBasicMenuProps = {
  buttonProps?: IconButtonProps;
  containerProps?: BoxProps;
};

export const ThumbnailBasicMenu = ({
  buttonProps,
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
          {...buttonProps}
        />
      </Box>

      <MenuList>
        <StyledMenuItem icon={<YouTubeQueue />}>
          Acicionar à fila
        </StyledMenuItem>

        <StyledMenuItem icon={<YoutubeWatchLater />}>
          Salvar em &quot; Assisir mais tarde &quot;
        </StyledMenuItem>

        <StyledMenuItem icon={<YoutubeSaveList />}>
          Salvar nan playlist
        </StyledMenuItem>
      </MenuList>
    </Menu>
  );
};
