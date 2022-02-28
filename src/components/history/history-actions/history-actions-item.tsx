import { Button } from "@chakra-ui/react";

type HistoryActionsItemProps = {
  text: string;
  icon: JSX.Element;
};

export const HistoryActionsItem = ({ icon, text }: HistoryActionsItemProps) => {
  return (
    <Button
      variant="unstyled"
      color="text.secondary"
      w="100%"
      textTransform="uppercase"
      leftIcon={icon}
    >
      {text}
    </Button>
  );
};
