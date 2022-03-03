import { useState } from "react";

import { HStack, Button } from "@chakra-ui/react";

import { AlertButton } from "./alert-button";
import { SubscriptionButton } from "./subscription-button";

export const Subscription = () => {
  const [isSubscription, setIsSubscription] = useState(false);

  const onClick = () => setIsSubscription((prev) => !prev);

  return (
    <HStack>
      {isSubscription ? (
        <>
          <SubscriptionButton onClick={onClick} />

          <AlertButton />
        </>
      ) : (
        <Button
          onClick={onClick}
          textTransform="uppercase"
          bg="error"
          color="#ffff"
          borderRadius="2px"
          fontWeight="500"
          fontSize="0.875rem"
          _hover={{}}
          _active={{}}
          _focus={{}}
        >
          inscrever-se
        </Button>
      )}
    </HStack>
  );
};
