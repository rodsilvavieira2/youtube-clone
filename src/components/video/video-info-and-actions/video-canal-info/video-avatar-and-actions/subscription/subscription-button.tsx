import { Button, useBreakpointValue } from "@chakra-ui/react";

type SubscriptionButtonProps = {
  onClick: () => void;
};

export const SubscriptionButton = ({ onClick }: SubscriptionButtonProps) => {
  const isOnMobileView = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <Button
      fontWeight="500"
      fontSize="0.875rem"
      color="text.secondary"
      textTransform="uppercase"
      borderRadius="2px"
      onClick={onClick}
      variant={isOnMobileView ? "ghost" : "solid"}
    >
      inscrito
    </Button>
  );
};
