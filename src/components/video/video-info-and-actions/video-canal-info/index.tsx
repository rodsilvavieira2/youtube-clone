import { Flex, Stack } from "@chakra-ui/react";
import { BasicVideoData } from "@types";

import { VideoAvatarAndActions } from "./video-avatar-and-actions";
import { VideoDescription } from "./video-description";

type VideoCanalInfoProps = Pick<BasicVideoData, "canalName" | "description"> & {
  subscriptionAmount: number;
  isLoading?: boolean;
};

export const VideoCanalInfo = ({
  canalName,
  description,
  subscriptionAmount,
  isLoading,
}: VideoCanalInfoProps) => {
  return (
    <Flex
      flexDir="column"
      py={{ base: "1", lg: "3" }}
      borderTop="1px solid"
      borderBottom="1px solid"
      borderColor="shape"
    >
      <VideoAvatarAndActions
        canalName={canalName}
        subscriptionAmount={subscriptionAmount}
        isLoading={isLoading}
      />

      <VideoDescription
        containerProps={{
          display: { base: "none", lg: "block" },
        }}
        isLoading={isLoading}
        description={description}
      />
    </Flex>
  );
};
