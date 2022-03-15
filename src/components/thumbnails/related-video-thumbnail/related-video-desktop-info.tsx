import { Flex, StackProps } from "@chakra-ui/react";
import { BasicVideoData } from "@types";

import {
  VideoInfoCanalName,
  VideoInfoTitle,
  VideoInfoViewsAndTimeFromNow,
} from "../shared";

type DesktopInfoProps = Pick<
  BasicVideoData,
  "canalName" | "title" | "views" | "postedAt"
> & {
  containerProps?: StackProps;
};

export const RelatedVideoDesktopInfo = ({
  canalName,
  postedAt,
  title,
  views,
  containerProps,
}: DesktopInfoProps) => {
  return (
    <Flex flexDir="column" {...containerProps}>
      <VideoInfoTitle>{title}</VideoInfoTitle>

      <VideoInfoCanalName>{canalName}</VideoInfoCanalName>

      <VideoInfoViewsAndTimeFromNow views={views} postedAt={postedAt} />
    </Flex>
  );
};
