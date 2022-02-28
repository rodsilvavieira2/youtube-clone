import { Avatar, Stack, Text, Box, Flex } from "@chakra-ui/react";

import { UserDataItem } from "./user-data-item";

type LibrarySectionUserDataProps = {
  avatarUrl: string;
  userName: string;
};

export const LibrarySectionUserData = ({
  avatarUrl,
  userName,
}: LibrarySectionUserDataProps) => {
  return (
    <Stack>
      <Flex h="13rem" alignItems="center" justifyContent="center">
        <Stack alignItems="center" justifyContent="center" alignSelf="flex-end">
          <Avatar h="5rem" w="5rem" src={avatarUrl} size="lg" name={userName} />

          <Text>{userName}</Text>
        </Stack>
      </Flex>

      <Box
        w="100%"
        css={{
          "div + div": {
            borderTop: "1px solid",
            borderColor: "border.secondary",
          },
          "div:last-child": {
            borderBottom: "1px solid",
          },
        }}
      >
        <UserDataItem amount={3000} info="Inscrições" />

        <UserDataItem amount={0} info="Envios" />

        <UserDataItem amount={5000} info="Marcações 'Gostei'" />
      </Box>
    </Stack>
  );
};
