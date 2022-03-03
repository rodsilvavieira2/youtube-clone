import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuButtonProps,
  MenuDivider,
  MenuList,
  BoxProps,
} from "@chakra-ui/react";
import { StyledMenuItem } from "@components";
import {
  YoutubeBock,
  YoutubeFlag,
  YoutubePartialCircle,
  YouTubeQueue,
  YoutubeSaveList,
  YoutubeVerticalMore,
  YoutubeWatchLater,
} from "@icons";
import { preventDefaultClick } from "@util";

type ThumbnailMenuProps = {
  containerProps?: BoxProps;
  buttonProps?: MenuButtonProps;
};

export const ThumbnailMenu = ({
  buttonProps,
  containerProps,
}: ThumbnailMenuProps) => {
  const { onClick, ...restButtonProps } = buttonProps || {};

  return (
    <Menu>
      <Box
        display="inline-block"
        onClick={preventDefaultClick(onClick)}
        position="absolute"
        {...containerProps}
      >
        <MenuButton
          aria-label="mais opções"
          as={IconButton}
          size="md"
          isRound
          variant="mutedIconButton"
          icon={<YoutubeVerticalMore />}
          {...restButtonProps}
        />
      </Box>

      <MenuList>
        <StyledMenuItem icon={<YouTubeQueue />}>Adiconar à fila</StyledMenuItem>

        <StyledMenuItem icon={<YoutubeWatchLater />}>
          Salvar em &quot; Assistir mais tarder &quot;
        </StyledMenuItem>

        <StyledMenuItem icon={<YoutubeSaveList />}>
          Salvar na playslist
        </StyledMenuItem>

        <MenuDivider borderColor="border.primary" />

        <StyledMenuItem icon={<YoutubeBock />}>
          Não tenho interesse
        </StyledMenuItem>

        <StyledMenuItem icon={<YoutubePartialCircle />}>
          Não recomendar o canal
        </StyledMenuItem>

        <StyledMenuItem icon={<YoutubeFlag />}>Denuciar</StyledMenuItem>
      </MenuList>
    </Menu>
  );
};
