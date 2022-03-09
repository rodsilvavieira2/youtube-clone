import { Stack } from "@chakra-ui/react";

import { VideoAvatarAndActions } from "./video-avatar-and-actions";
import { VideoDescription } from "./video-description";

export const VideoCanalInfo = () => {
  return (
    <Stack
      py={{ base: "1", lg: "3" }}
      borderTop="1px solid"
      borderBottom="1px solid"
      borderColor="shape"
    >
      <VideoAvatarAndActions />

      <VideoDescription />
    </Stack>
  );
};
