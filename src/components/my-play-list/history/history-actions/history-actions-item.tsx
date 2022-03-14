import { Button } from "@chakra-ui/react";

type HistoryActionsItemProps = {
  children: string;
  icon: JSX.Element;
};

export const HistoryActionsItem = ({
  icon,
  children,
}: HistoryActionsItemProps) => {
  return (
    <Button
      display="flex"
      justifyContent="flex-start"
      fontWeight="500"
      fontSize="sm"
      alignItems="center"
      variant="unstyled"
      color="text.secondary"
      w="100%"
      textTransform="uppercase"
      leftIcon={icon}
    >
      {children}
    </Button>
  );
};
