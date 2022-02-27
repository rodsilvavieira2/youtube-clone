import type { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  variants: {
    activeIconButton: {
      fontSize: "larger",
      bg: "shape",
      color: "text.primary",
      _hover: { bg: "shape", boxShadow: "none" },
      _focus: {
        outline: "none",
        bg: "button.activate",
        boxShadow: "none",
      },
    },
    mutedIconButton: {
      fontSize: "1.5rem",
      bg: "transparent",
      color: "text.primary",
      outline: "none",
      _active: {
        bg: "shape",
      },
      _focus: {
        outline: "none",
        boxShadow: "none",
        bg: "shape",
      },
    },
    menuItem: {
      bg: "red",
      _hover: {
        bg: "bg",
      },
      _focus: {
        bg: "bg",
      },
    },
  },
};
