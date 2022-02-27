/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";

import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  YoutubeBock,
  YoutubeFlag,
  YoutubePartialCircle,
  YouTubeQueue,
  YoutubeSaveList,
  YoutubeVerticalMore,
  YoutubeWatchLater,
} from "@icons";

type ThumbnailMenuProps = {
  className?: string;
  position?: {
    left?: number | string;
    right?: number | string;
    top?: number | string;
    bottom?: number | string;
  };
};

const StyledMenuItem = styled(MenuItem)`
  &:hover,
  &:focus,
  &:active {
    background-color: var(--chakra-colors-shape);
  }
`;

export const ThumbnailMenu = ({ position, className }: ThumbnailMenuProps) => {
  const { bottom, left, right, top } = position || {};

  return (
    <Menu>
      <MenuButton
        className={className}
        aria-label="mais opções"
        position="absolute"
        size="xs"
        isRound
        as={IconButton}
        left={left}
        bottom={bottom}
        right={right}
        top={top}
        icon={<YoutubeVerticalMore />}
      />

      <MenuList>
        <StyledMenuItem icon={<YouTubeQueue />} fontSize="sm">
          Adiconar à fila
        </StyledMenuItem>

        <StyledMenuItem icon={<YoutubeWatchLater />} fontSize="sm">
          Salvar em quot "Assistir mais tarder"
        </StyledMenuItem>

        <StyledMenuItem icon={<YoutubeSaveList />} fontSize="sm">
          Salvar na playslist
        </StyledMenuItem>

        <MenuDivider />

        <StyledMenuItem icon={<YoutubeBock />} fontSize="sm">
          Não tenho interesse
        </StyledMenuItem>

        <StyledMenuItem icon={<YoutubePartialCircle />} fontSize="sm">
          Não recomendar o canal
        </StyledMenuItem>

        <StyledMenuItem icon={<YoutubeFlag />} fontSize="sm">
          Denuciar
        </StyledMenuItem>
      </MenuList>
    </Menu>
  );
};
