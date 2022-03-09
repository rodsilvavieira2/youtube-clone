import { useState } from "react";

import { HStack, Button, useBreakpointValue } from "@chakra-ui/react";

import { AlertButton } from "./alert-button";
import { SubscriptionButton } from "./subscription-button";

export const Subscription = () => {
  const [isSubscription, setIsSubscription] = useState(false);

  const onClick = () => setIsSubscription((prev) => !prev);

  const isOnMobileView = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <HStack>
      {isSubscription ? (
        <>
          <SubscriptionButton onClick={onClick} />

          <AlertButton
            aria-label="ativer notificaçõe"
            display={{ base: "none", lg: "inline-flex" }}
          />
        </>
      ) : (
        <Button
          onClick={onClick}
          textTransform="uppercase"
          bg={["transparent", "error"]}
          color={["error", "#ffff"]}
          borderRadius="2px"
          fontWeight="500"
          fontSize={{ base: "sm", lg: "0.875rem" }}
          _hover={{}}
          _active={{}}
          _focus={{}}
          variant={isOnMobileView ? "ghost" : "solid"}
        >
          inscrever-se
        </Button>
      )}
    </HStack>
  );
};
