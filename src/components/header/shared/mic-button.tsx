import { IconButton } from "@chakra-ui/react";
import { YoutubeMic } from "@icons";

export const MicButton = () => {
  return (
    <IconButton
      isRound
      as="button"
      bg="bg"
      variant="activeIconButton"
      icon={<YoutubeMic />}
      aria-label="iniciar captura de áudio"
    />
  );
};
