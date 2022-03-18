import { Link } from "react-router-dom";

import { Flex } from "@chakra-ui/react";
import { BasicVideoData } from "@types";

import {
  VideoInfoCanalName,
  VideoInfoTitle,
  VideoInfoViewsAndTimeFromNow,
} from "../shared";

type DesktopInfoProps = Pick<
  BasicVideoData,
  "canalName" | "title" | "views" | "postedAt" | "id"
>;

export const RelatedVideoDesktopInfo = ({
  canalName,
  postedAt,
  title,
  views,
  id,
}: DesktopInfoProps) => {
  return (
    <Flex flexDir="column" display={{ base: "none", lg: "flex" }}>
      <Link to={`/video/${id}`}>
        <VideoInfoTitle>{title}</VideoInfoTitle>
      </Link>

      <VideoInfoCanalName>{canalName}</VideoInfoCanalName>

      <VideoInfoViewsAndTimeFromNow views={views} postedAt={postedAt} />
    </Flex>
  );
};
