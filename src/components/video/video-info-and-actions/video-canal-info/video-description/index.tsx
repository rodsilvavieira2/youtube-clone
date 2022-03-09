/* eslint-disable import/no-extraneous-dependencies */
import { Box, Text } from "@chakra-ui/react";
import faker from "@faker-js/faker";

import { ShowLessOrMoreButton } from "./show-less-or-more";

export const VideoDescription = () => {
  return (
    <Box pl="14" display={{ base: "none", lg: "none" }}>
      <Box fontSize="0.875rem">
        <Text>{faker.lorem.words(5)}</Text>

        <Text>{faker.lorem.words(10)}</Text>

        <Text>{faker.lorem.words(15)}</Text>
      </Box>

      <Box>
        <ShowLessOrMoreButton />
      </Box>
    </Box>
  );
};
