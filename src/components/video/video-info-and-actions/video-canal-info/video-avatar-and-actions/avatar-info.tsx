import {
  Avatar,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export const AvatarInfo = () => {
  const isOnMobileView = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <HStack>
      <Avatar size={isOnMobileView ? "sm" : "md"} name="rodrigo silva" />

      <Stack spacing={0}>
        <Text as="strong" fontWeight="500" fontSize="0.875rem">
          Rodrigo frontend
        </Text>

        <Text
          display={{ base: "none" }}
          as="small"
          fontSize="0.75rem"
          color="text.secondary"
        >
          10.2 mi de inscritos
        </Text>
      </Stack>
    </HStack>
  );
};
