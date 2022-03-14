import { Avatar, Box, Flex, HStack, Stack } from "@chakra-ui/react";
import { BasicVideoData } from "@types";

import {
  VideoInfoCanalName,
  VideoInfoTitle,
  VideoInfoViewsAndTimeFromNow,
  VideoPreview,
} from "../shared";

type RelatedVideoThumbnailProps = Pick<
  BasicVideoData,
  "canalName" | "thumbnailUrl" | "title" | "views" | "postedAt"
>;

export const RelatedVideoThumbnail = ({
  canalName,
  thumbnailUrl,
  title,
  views,
  postedAt,
}: RelatedVideoThumbnailProps) => {
  return (
    <HStack
      position="relative"
      alignItems="normal"
      flexDir={{ base: "column", sm: "row", lg: "row" }}
      css={{
        ".thumbnailMenu": {
          visibility: "hidden",
        },
        "&:hover": {
          ".thumbnailMenu": {
            visibility: "visible",
          },
        },
      }}
    >
      <VideoPreview
        styleProps={{
          w: { base: "100%", sm: "14.5rem", lg: "10.5rem" },
          h: { base: "10rem", sm: "7.5rem", lg: "5.875rem" },
        }}
        to="/"
        alt={title}
        thumbnailUrl={thumbnailUrl}
      />

      <HStack
        mt={{ base: "0.5rem !important", lg: "0" }}
        spacing={2}
        position="relative"
        alignItems="normal"
      >
        <Avatar
          size="sm"
          name={canalName}
          display={{ base: "inline-flex", sm: "none" }}
        />

        <Stack w={{ base: "100%" }} flexShrink={1}>
          <VideoInfoTitle fontWeight="500">{title}</VideoInfoTitle>

          <HStack display={{ base: "none", sm: "flex", lg: "none" }}>
            <VideoInfoCanalName>{canalName}</VideoInfoCanalName>

            <VideoInfoViewsAndTimeFromNow views={views} />
          </HStack>

          <Avatar
            size="sm"
            name={canalName}
            display={{ base: "none", sm: "flex", lg: "none" }}
          />

          <Stack display={{ base: "flex", sm: "none", lg: "flex" }}>
            <VideoInfoCanalName>{canalName}</VideoInfoCanalName>

            <VideoInfoViewsAndTimeFromNow views={views} postedAt={postedAt} />
          </Stack>
        </Stack>
      </HStack>
    </HStack>
  );
};
