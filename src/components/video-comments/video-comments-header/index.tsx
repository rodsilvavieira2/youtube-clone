import { HStack, Text } from "@chakra-ui/react";

import { OrderByButton } from "./order-by-button";

export const VideoCommentsHeader = () => {
  return (
    <HStack>
      <Text as="strong" fontWeight="500">
        255 comenatários
      </Text>

      <OrderByButton />
    </HStack>
  );
};
