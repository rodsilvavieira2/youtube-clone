import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { YoutubeBell } from "@icons";

export const AlertButton = (props?: IconButtonProps) => {
  return (
    <IconButton
      variant="mutedIconButton"
      aria-label="sininho"
      icon={<YoutubeBell />}
      isRound
      {...props}
    />
  );
};
