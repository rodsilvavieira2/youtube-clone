import { Stack, Button, Icon } from "@chakra-ui/react";
import { YoutubeWatchLater, YouTubeQueue } from "@icons";

export const ThumbnailActions = () => {
  return (
    <Stack px="2">
      <Button
        size="sm"
        textTransform="uppercase"
        bg="shape"
        color="button.text"
        borderRadius="none"
        leftIcon={
          <Icon fontSize="1.3rem" as={YoutubeWatchLater} fill="button.text" />
        }
      >
        assistir mais tarde
      </Button>

      <Button
        size="sm"
        textTransform="uppercase"
        bg="shape"
        color="button.text"
        borderRadius="none"
        leftIcon={
          <Icon fontSize="1.3rem" as={YouTubeQueue} fill="button.text" />
        }
      >
        adicionar à fila
      </Button>
    </Stack>
  );
};
