import { IconType } from "react-icons";
import { Link } from "react-router-dom";

import { Icon, Stack, Text } from "@chakra-ui/react";

type CollapsedDesktopSidebarProps = {
  icon: IconType;
  text: string;
  to: string;
};

export const CollapsedDesktopSidebarItem = ({
  icon,
  text,
  to,
}: CollapsedDesktopSidebarProps) => {
  return (
    <Stack
      spacing={2}
      as={Link}
      to={to}
      justifyContent="center"
      alignItems="center"
      padding="16px 0 14px"
      outline="none"
      _hover={{
        bg: "button.bg",
      }}
      _focus={{
        bg: "button.bg",
      }}
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
