import { Box, HStack, Text } from "@chakra-ui/react";
import { dateFromNow, viewsTransform } from "@util";

type PlayListInfoProps = {
  amount: number;
  views: number;
  updatedAt: Date;
};

export const PlayListInfo = ({
  amount,
  updatedAt,
  views,
}: PlayListInfoProps) => {
  return (
    <HStack
      alignItems="center"
      flexWrap="wrap"
      fontSize="sm"
      color="text.secondary"
    >
      <Text>{amount} Videos</Text> <Box>•</Box>
      <Text>{views ? viewsTransform(views) : "Nenhuma visualização"}</Text>{" "}
      <Box>•</Box>
      <Text>{dateFromNow(updatedAt)}</Text>
    </HStack>
  );
};
