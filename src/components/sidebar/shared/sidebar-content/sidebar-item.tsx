import { IconType } from "react-icons/lib";
import { Link } from "react-router-dom";

import { HStack, Icon, Text } from "@chakra-ui/react";

export type SidebarItem = {
  to: string;
  text: string;
  icon: IconType;
};

export const SidebarItem = ({ to, icon, text }: SidebarItem) => {
  const isActive = false;

  return (
    <HStack
      as={Link}
      _hover={{
        bg: "button.bg",
      }}
      _focus={{
        bg: "button.bg",
      }}
      outline="none"
      to={to}
      w="100%"
      maxW="100%"
      overflow="hidden"
      spacing={6}
      alignItems="center"
      px="1.5rem"
      h="2.5rem"
      bg={isActive ? "activeLink" : undefined}
    >
      <Icon
        flexShrink={0}
        fontSize="1.5rem"
        fill={isActive ? "text.primary" : undefined}
        as={icon}
      />

      <Text
        whiteSpace="nowrap"
        fontSize="0.875rem"
        lineHeight="2rem"
        overflow="hidden"
        textOverflow="ellipsis"
        w="100%"
      >
        {text}
      </Text>
    </HStack>
  );
};
