import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import "dayjs/locale/pt";
import { Flex, Text } from "@chakra-ui/react";
import { BasicVideoData } from "@types";

dayjs.locale("pt");

dayjs.extend(relativeTime);

const transformViews = (currentViews: number): string => {
  if (currentViews >= 1000000)
    return `${currentViews.toString().slice(0, 2)} mi visualizações`;

  if (currentViews >= 1000) {
    return `${currentViews.toString().slice(0, 3)} mil visualizações`;
  }

  return `${currentViews} visualizações`;
};

type ThumbnailInfoProps = Pick<
  BasicVideoData,
  "title" | "canalName" | "views" | "postedAt"
>;

export const ThumbnailInfo = ({
  canalName,
  postedAt,
  title,
  views,
}: ThumbnailInfoProps) => {
  return (
    <Flex flexDir="column" h="100%" overflow="hidden">
      <Text
        display="-webkit-box"
        fontSize="0.875rem"
        maxH="2.5rem"
        whiteSpace="normal"
        textTransform="capitalize"
        overflow="hidden"
        textOverflow="ellipsis"
        lineHeight="1.25rem"
        as="strong"
        w="100%"
        title={title}
        css={{
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: "2",
        }}
      >
        {title}
      </Text>

      <Text
        mt="1.5"
        color="text.secondary"
        maxW="35ch"
        textAlign="left"
        as="small"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
        title={canalName}
      >
        {canalName}
      </Text>

      <Flex color="text.secondary" w="100%" alignItems="center">
        <Text as="small">
          {transformViews(views)} {dayjs(postedAt).locale("pt-br").fromNow()}
        </Text>
      </Flex>
    </Flex>
  );
};
