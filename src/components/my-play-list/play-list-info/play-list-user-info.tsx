import { Avatar, HStack, Text } from "@chakra-ui/react";

type PlayListUserInfoProps = {
  avatarUrl: string;
  userName: string;
};

export const PlayListUserInfo = ({
  avatarUrl,
  userName,
}: PlayListUserInfoProps) => {
  return (
    <HStack>
      <Avatar src={avatarUrl} name={userName} />

      <Text fontSize="sm" fontWeight="500">
        {userName}
      </Text>
    </HStack>
  );
};
