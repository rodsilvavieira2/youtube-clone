import { Flex } from "@chakra-ui/react";
import { BasicVideoData } from "@types";

import { AvatarInfo } from "./avatar-info";
import { Subscription } from "./subscription";

type VideoAvatarAndActionsProps = Pick<BasicVideoData, "canalName"> & {
  subscriptionAmount: number;
  isLoading?: boolean;
};

export const VideoAvatarAndActions = ({
  canalName,
  subscriptionAmount,
  isLoading,
}: VideoAvatarAndActionsProps) => {
  return (
    <Flex alignItems="center" justifyContent="space-between" px="0.5rem">
      <AvatarInfo
        canalName={canalName}
        subscriptionAmount={subscriptionAmount}
        isLoading={isLoading}
      />

      <Subscription />
    </Flex>
  );
};
