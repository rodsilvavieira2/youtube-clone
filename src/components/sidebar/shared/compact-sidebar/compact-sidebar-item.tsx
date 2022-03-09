import { IconType } from "react-icons";
import { Link } from "react-router-dom";

import { Icon, Stack, StackProps, Text } from "@chakra-ui/react";

type CompactSidebarItemProps = {
  icon: IconType;
  text: string;
  to: string;
  containerProps?: StackProps;
};

export const CompactSidebarItem = ({
  icon,
  text,
  to,
  containerProps,
}: CompactSidebarItemProps) => {
  return (
    <Stack
      spacing={2}
      as={Link}
      to={to}
      justifyContent="center"
      alignItems="center"
      padding="1rem 0 0.875rem"
      outline="none"
      _hover={{
        bg: "button.bg",
      }}
      _focus={{
        bg: "button.bg",
      }}
      {...containerProps}
    >
      <Icon as={icon} flexShrink={0} fontSize="1.5rem" />

      <Text
        whiteSpace="nowrap"
        fontSize="0.625rem"
        overflow="hidden"
        textOverflow="ellipsis"
        textAlign="center"
        w="100%"
      >
        {text}
      </Text>
    </Stack>
  );
};
