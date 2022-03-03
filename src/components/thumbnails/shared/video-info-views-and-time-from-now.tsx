import { Box, HStack, Text } from "@chakra-ui/react";
import { BasicVideoData } from "@types";
import { dateFromNow, viewsTransform } from "@util";

type VideoInfoViewsAndTimeFromNowProps = Pick<
  BasicVideoData,
  "views" | "postedAt"
>;

export const VideoInfoViewsAndTimeFromNow = ({
  views,
  postedAt,
}: VideoInfoViewsAndTimeFromNowProps) => {
  return (
    <HStack
      fontSize="0.75rem"
      color="text.secondary"
      alignItems="center"
      spacing={1}
    >
      <Text fontSize="inherit" as="small">
        {viewsTransform(views)}
      </Text>

      <Box as="span" h="5px" w="5px" bg="text.secondary" borderRadius="full" />

      <Text fontSize="inherit" as="time">
        {dateFromNow(postedAt)}
      </Text>
    </HStack>
  );
};
