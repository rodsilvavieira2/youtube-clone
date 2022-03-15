import { Avatar, Box, HStack, StackProps, Text } from "@chakra-ui/react";
import { BasicVideoData } from "@types";
import { viewsTransform } from "@util";

import { VideoInfoCanalName, VideoInfoTitle } from "../shared";

type RelatedVideoMobileInfoProps = Pick<
  BasicVideoData,
  "canalName" | "title" | "views"
> & {
  containerProps?: StackProps;
};

export const RelatedVideoMobileInfo = ({
  canalName,
  title,
  views,
  containerProps,
}: RelatedVideoMobileInfoProps) => {
  return (
    <HStack {...containerProps} alignItems="normal">
      <Avatar size="sm" name={canalName} />

      <Box>
        <VideoInfoTitle>{title}</VideoInfoTitle>

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
