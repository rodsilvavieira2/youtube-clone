import { HStack, StackProps, Text } from "@chakra-ui/react";
import { dateFromNow, viewsTransform } from "@util";

type VideoInfoViewsAndTimeFromNowProps = {
  views: number;
  postedAt?: Date | string;
  containerProps?: StackProps;
};

export const VideoInfoViewsAndTimeFromNow = ({
  views,
  postedAt,
  containerProps,
}: VideoInfoViewsAndTimeFromNowProps) => {
  return (
    <HStack
      fontSize="0.75rem"
      color="text.secondary"
      alignItems="center"
      flexWrap="wrap"
      spacing={1}
      {...containerProps}
    >
      <Text
        fontSize="inherit"
        as="small"
        _after={{
          content: "'•'",
          margin: "0 4px",
        }}
      >
        {viewsTransform(views)}
      </Text>

      {postedAt && (
        <Text
          fontSize="inherit"
          as="time"
          dateTime={
            typeof postedAt === "string" ? postedAt : postedAt.toISOString()
          }
        >
          {dateFromNow(postedAt)}
        </Text>
      )}
    </HStack>
  );
};
