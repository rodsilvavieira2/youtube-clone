/* eslint-disable import/no-extraneous-dependencies */
import { useState } from "react";

import { Box, BoxProps, Skeleton, Text } from "@chakra-ui/react";
import { BasicVideoData } from "@types";

import { ShowLessOrMoreButton } from "./show-less-or-more";

type VideoDescriptionProps = Pick<BasicVideoData, "description"> & {
  isLoading?: boolean;
  containerProps?: BoxProps;
};

export const VideoDescription = ({
  description,
  isLoading,
  containerProps,
}: VideoDescriptionProps) => {
  const [isShowingMore, setIsShowingMore] = useState(false);

  const onToggle = () => setIsShowingMore((prev) => !prev);

  return (
    <Box {...containerProps}>
      {isLoading ? (
        <Skeleton w="100%" h="8rem" />
      ) : (
        <Box pl="14" display={{ base: "none", lg: "block" }}>
          <Box
            display="-webkit-box"
            fontSize="0.875rem"
            overflow="hidden"
            css={{
              ...(!isShowingMore && {
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "4",
              }),
            }}
          >
            <Text>{description}</Text>
          </Box>

          <Box>
            <ShowLessOrMoreButton
              isShowingMore={isShowingMore}
              onToggle={onToggle}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};
