import { HStack, Text } from "@chakra-ui/react";
import { dateFromNow, viewsTransform } from "@util";

type VideoInfoViewsAndTimeFromNowProps = {
  views: number;
  postedAt?: Date | string;
};

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

      {postedAt && (
        <Text fontSize="inherit" as="time">
          {dateFromNow(postedAt)}
        </Text>
      )}
    </HStack>
  );
};
