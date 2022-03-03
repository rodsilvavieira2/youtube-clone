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

export const VideoThumbnail = ({
  avatarUrl,
  canalName,
  postedAt,
  thumbnailUrl,
  title,
  views,
}: VideoThumbnailProps) => {
  return (
    <Stack
      as={Link}
      to="/:video"
      position="relative"
      minH="18rem"
      _hover={{
        ".video-menu": {
          opacity: 1,
        },
      }}
    >
      <ThumbnailPhoto thumbnailUrl={thumbnailUrl} alt={title} />

      <HStack spacing="3">
        <Avatar
          w="2.25rem"
          h="2.25rem"
          src={avatarUrl}
          alignSelf="flex-start"
        />

        <Box overflow="hidden">
          <Flex flexDir="column" w="100%">
            <VideoInfoTitle w="90%">{title}</VideoInfoTitle>

            <VideoInfoCanalName mt="1">{canalName}</VideoInfoCanalName>

            <VideoInfoViewsAndTimeFromNow postedAt={postedAt} views={views} />
          </Flex>
        </Box>
      </HStack>

      <ThumbnailMenu
        containerProps={{
          className: "video-menu",
          top: "8.6rem",
          left: "89%",
          margin: 0,
          opacity: "0",
          _focus: {
            opacity: "1",
          },
        }}
      />
    </Stack>
  );
};
