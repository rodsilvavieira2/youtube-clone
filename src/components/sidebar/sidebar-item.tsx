import { IconType } from "react-icons/lib";
import { Link } from "react-router-dom";

import { Flex, HStack, Icon, Text } from "@chakra-ui/react";

export type SidebarItem = {
  to: string;
  text: string;
  icon: IconType;
};

export const SidebarItem = ({ to, icon, text }: SidebarItem) => {
  return (
    <Flex to={to} as={Link}>
      <HStack alignItems="center" px="1.5rem" h="3rem">
        <Icon fontSize="1.5rem" as={icon} />

        <Text>{text}</Text>
      </HStack>
    </Flex>
  );
};
