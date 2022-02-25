import { Avatar, Flex, HStack, Icon, Text, Box } from "@chakra-ui/react";
import { YoutubeLive } from "@icons";

export type SubscriptionProps = {
  avatarUrl: string;
  canalName: string;
  isLive: boolean;
  isWithNewContent: boolean;
};

export const Subscription = ({
  avatarUrl,
  canalName,
  isLive,
  isWithNewContent,
}: SubscriptionProps) => {
  return (
    <Flex h="2.5rem" alignItems="center" px="1.5rem" w="100%">
      <HStack spacing={6} w="100%">
        <Avatar flexShrink={0} size="xs" name={canalName} src={avatarUrl} />

        <Text
          whiteSpace="nowrap"
          fontSize="0.875rem"
          lineHeight="2rem"
          overflow="hidden"
          textOverflow="ellipsis"
          w="100%"
        >
          {canalName}
        </Text>

        {isLive && <Icon flexShrink={0} color="red.500" as={YoutubeLive} />}

        {isWithNewContent && !isLive && (
          <Box
            display="inline-block"
            borderRadius="full"
            w="5px"
            h="5px"
            flexShrink={0}
            bg="blue.500"
          />
        )}
      </HStack>
    </Flex>
  );
};
