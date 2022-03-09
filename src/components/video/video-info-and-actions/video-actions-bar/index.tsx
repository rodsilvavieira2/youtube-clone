import { HStack, Text } from "@chakra-ui/react";
import { YoutubeClip, YoutubeDislike, YoutubeLike, YoutubeShare } from "@icons";

import { ActionButton } from "./action-button";
import { VideoActionsMoreMenu } from "./video-actions-more-menu";

export const VideoActionsBar = () => {
  return (
    <HStack alignItems="center" justifyContent="space-between">
      <Text
        display={{ base: "none", lg: "inline-flex" }}
        as="small"
        color="text.secondary"
        fontSize="0.875rem"
      >
        4.500 visualizações
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
        containerProps={{
          display: { base: "none", lg: "inline-flex" },
        }}
        buttonProps={{
          "aria-label": "salve o video em uma lista",
          icon: <YoutubeClip />,
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
  );
};
