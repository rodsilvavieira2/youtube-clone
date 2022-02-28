import { Flex, Text } from "@chakra-ui/react";

type UserDataItemProps = {
  amount: number;
  info: string;
};

export const UserDataItem = ({ amount, info }: UserDataItemProps) => {
  return (
    <Flex
      justifyContent="space-between"
      fontSize="0.75rem"
      py="0.625rem"
      color="text.secondary"
    >
      <Text fontSize="inherit">{info}</Text>

      <Text fontSize="inherits">{amount}</Text>
    </Flex>
  );
};
