import { forwardRef, ForwardRefRenderFunction, memo } from "react";
import { Link } from "react-router-dom";

import { Avatar, Box, Flex, HStack, Stack } from "@chakra-ui/react";

import {
  ThumbnailMenu,
  VideoInfoCanalName,
  VideoInfoTitle,
  VideoInfoViewsAndTimeFromNow,
} from "../shared";
import { ThumbnailPhoto } from "./thumbnail-photo";

type VideoThumbnailProps = {
  thumbnailUrl: string;
  title: string;
  views: number;
  canalName: string;
  avatarUrl: string;
  postedAt: Date;
};

export const Base: ForwardRefRenderFunction<
  HTMLDivElement & HTMLAnchorElement,
  VideoThumbnailProps
> = ({ avatarUrl, canalName, postedAt, thumbnailUrl, title, views }, ref) => {
  return (
    <Stack
      as={Link}
      to="/:video"
      position="relative"
      _hover={{
        ".video-menu": {
          opacity: 1,
        },
      }}
      ref={ref}
    >
      <ThumbnailPhoto
        containerStyles={{
          h: "8.9375rem",
          maxW: "100%",
        }}
        thumbnailUrl={thumbnailUrl}
        alt={title}
      />
      <HStack
        spacing="3"
        alignItems="normal"
        position="relative"
        px={{ base: "3", lg: 0 }}
      >
        <HStack>
          <Avatar
            w="2.25rem"
            h="2.25rem"
            src={avatarUrl}
            alignSelf="flex-start"
          />

          <Box overflow="hidden" w="100%">
            <Flex flexDir="column">
              <VideoInfoTitle w="90%">{title}</VideoInfoTitle>

              <VideoInfoCanalName mt="1">{canalName}</VideoInfoCanalName>

              <VideoInfoViewsAndTimeFromNow postedAt={postedAt} views={views} />
            </Flex>
          </Box>
        </HStack>

        <Flex data-type="menu">
          <ThumbnailMenu
            containerProps={{
              className: "video-menu",
              position: "absolute",
              right: "-10px",
              opacity: 0,
            }}
          />
        </Flex>
      </HStack>
    </Stack>
  );
};

export const VideoThumbnail = memo(forwardRef(Base));
