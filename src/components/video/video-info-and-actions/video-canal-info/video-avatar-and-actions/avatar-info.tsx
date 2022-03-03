import { Avatar, HStack, Stack, Text } from "@chakra-ui/react";

export const AvatarInfo = () => {
  return (
    <HStack>
      <Avatar name="rodrigo silva" />

      <Stack spacing={0}>
        <Text as="strong" fontWeight="500" fontSize="0.875rem">
          Rodrigo frontend
        </Text>

        <Text as="small" fontSize="0.75rem" color="text.secondary">
          10.2 mi de inscritos
        </Text>
      </Stack>
    </HStack>
  );
};
