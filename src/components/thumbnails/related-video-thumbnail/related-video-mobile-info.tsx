import { Link } from "react-router-dom";

import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
import { BasicVideoData } from "@types";
import { viewsTransform } from "@util";

import { VideoInfoCanalName, VideoInfoTitle } from "../shared";

type RelatedVideoMobileInfoProps = Pick<
  BasicVideoData,
  "canalName" | "title" | "views" | "id"
>;

export const RelatedVideoMobileInfo = ({
  canalName,
  title,
  views,
  id,
}: RelatedVideoMobileInfoProps) => {
  return (
    <HStack display={{ base: "flex", lg: "none" }} alignItems="normal">
      <Avatar size="sm" name={canalName} />

      <Box>
        <Link to={`/video/${id}`}>
          <VideoInfoTitle>{title}</VideoInfoTitle>
        </Link>

        <HStack flexWrap="wrap" color="text.secondary">
          <VideoInfoCanalName fontSize="sm">{canalName}</VideoInfoCanalName>

          <Box as="span" mx="4px">
            •
          </Box>

          <Text fontSize="sm" as="small">
            {viewsTransform(views)}
          </Text>
        </HStack>
      </Box>
    </HStack>
  );
};
