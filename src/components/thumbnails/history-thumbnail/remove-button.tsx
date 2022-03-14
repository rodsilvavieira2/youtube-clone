import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { YoutubeClose } from "@icons";

export const RemoveButton = (props?: Partial<IconButtonProps>) => {
  return (
    <IconButton
      aria-label="remover do historico de exibição"
      icon={<YoutubeClose />}
      variant="mutedIconButton"
      isRound
      className="history-button-action"
      opacity={{
        base: 1,
        lg: 0,
      }}
      _focus={{
        opacity: 1,
        bg: "button.focus",
      }}
      {...props}
    />
  );
};
