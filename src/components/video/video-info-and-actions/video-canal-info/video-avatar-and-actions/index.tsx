import { Flex } from "@chakra-ui/react";

import { AvatarInfo } from "./avatar-info";
import { Subscription } from "./subscription";

export const VideoAvatarAndActions = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <AvatarInfo />

      <Subscription />
    </Flex>
  );
};
