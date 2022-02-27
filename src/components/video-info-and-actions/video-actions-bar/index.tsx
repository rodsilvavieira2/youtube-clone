import { Flex, HStack, Text } from "@chakra-ui/react";

import { ClipButton } from "./clip-button";
import { DislikeButton } from "./dislike-button";
import { LikeButton } from "./like-button";
import { SaveOnListButton } from "./save-on-list-button";
import { ShareButton } from "./share-button";
import { VideoActionsMoreMenu } from "./video-actions-more-menu";

export const VideoActionsBar = () => {
  return (
    <HStack alignItems="center" justifyContent="space-between">
      <Text as="small" color="text.secondary" fontSize="0.875rem">
        4.500 visualizações
      </Text>

      <LikeButton />

      <DislikeButton />

      <ShareButton />

      <ClipButton />

      <SaveOnListButton />

      <VideoActionsMoreMenu />
    </HStack>
  );
};
