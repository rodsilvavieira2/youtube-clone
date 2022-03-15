import { Box, HStack, Skeleton, Text } from "@chakra-ui/react";
import {
  YoutubeClip,
  YoutubeDislike,
  YoutubeFlag,
  YoutubeLike,
  YoutubeSaveList,
  YoutubeShare,
} from "@icons";
import { BasicVideoData } from "@types";
import { viewsTransform } from "@util";

import { ActionButton } from "./action-button";
import { VideoActionsMoreMenu } from "./video-actions-more-menu";

type VideoActionsBarProps = Pick<BasicVideoData, "views"> & {
  isLoading?: boolean;
};

export const VideoActionsBar = ({ views, isLoading }: VideoActionsBarProps) => {
  return (
    <Box py="3">
      {isLoading ? (
        <Skeleton w="100%" h="1.5rem" />
      ) : (
        <HStack alignItems="center" justifyContent="space-between">
          <Text
            display={{ base: "none", lg: "inline-flex" }}
            as="small"
            color="text.secondary"
            fontSize="0.875rem"
          >
            {viewsTransform(views)}
          </Text>

          <ActionButton
            buttonProps={{
              "aria-label": "marcar como gostei",
              icon: <YoutubeLike />,
            }}
          >
            5,7 mil
          </ActionButton>

          <ActionButton
            buttonProps={{
              "aria-label": "marcar como não gostei",
              icon: <YoutubeDislike />,
              fontSize: ["sm"],
            }}
          >
            não gostei
          </ActionButton>

          <ActionButton
            buttonProps={{
              "aria-label": "compartilhar video",
              icon: <YoutubeShare />,
            }}
          >
            compartilhar
          </ActionButton>

          <ActionButton
            containerProps={{
              display: { base: "none", lg: "inline-flex" },
            }}
            buttonProps={{
              "aria-label": "fazer um clipe dp video",
              icon: <YoutubeClip />,
            }}
          >
            clipe
          </ActionButton>

          <ActionButton
            buttonProps={{
              "aria-label": "salve o video em uma lista",
              icon: <YoutubeSaveList />,
            }}
          >
            salvar
          </ActionButton>

          <ActionButton
            buttonProps={{
              "aria-label": "deunciar video",
              icon: <YoutubeFlag />,
            }}
          >
            salvar
          </ActionButton>

          <VideoActionsMoreMenu
            menuButtonProps={{
              display: { base: "none", lg: "inline-flex" },
            }}
          />
        </HStack>
      )}
    </Box>
  );
};
