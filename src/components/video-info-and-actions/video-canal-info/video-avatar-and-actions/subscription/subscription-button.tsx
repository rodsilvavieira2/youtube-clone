import { Button } from "@chakra-ui/react";

type SubscriptionButtonProps = {
  onClick: () => void;
};

export const SubscriptionButton = ({ onClick }: SubscriptionButtonProps) => {
  return (
    <Button
      fontWeight="500"
      fontSize="0.875rem"
      color="text.secondary"
      textTransform="uppercase"
      borderRadius="2px"
      onClick={onClick}
    >
      inscrito
    </Button>
  );
};
