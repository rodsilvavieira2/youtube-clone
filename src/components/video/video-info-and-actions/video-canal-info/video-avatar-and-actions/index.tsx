import { Flex } from "@chakra-ui/react";

import { AvatarInfo } from "./avatar-info";
import { Subscription } from "./subscription";

export const VideoAvatarAndActions = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between" px="0.5rem">
      <AvatarInfo />

      <Subscription />
    </Flex>
  );
};
