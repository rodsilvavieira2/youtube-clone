import { Link } from "react-router-dom";

import { Avatar, Box, HStack, Stack } from "@chakra-ui/react";

import { ThumbnailInfo } from "../shared";
import { ThumbnailPhoto } from "./thumbnail-photo";

type VideoThumbnailProps = {
  thumbnailUrl: string;
  title: string;
  views: number;
  canalName: string;
  postedAt: Date;
  avatarUrl: string;
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
    <Box as={Link} to="/:video" position="relative" minH="18rem">
      <ThumbnailPhoto thumbnailUrl={thumbnailUrl} alt={title} />

      <Stack mt="3">
        <HStack spacing="3">
          <Avatar
            w="2.25rem"
            h="2.25rem"
            src={avatarUrl}
            alignSelf="flex-start"
          />

          <ThumbnailInfo
            title={title}
            canalName={canalName}
            views={views}
            postedAt={postedAt}
          />
        </HStack>
      </Stack>
    </Box>
  );
};
