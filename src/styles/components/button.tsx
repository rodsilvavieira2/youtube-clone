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
        bg: "button.activate",
      },
      _focus: {
        outline: "none",
        boxShadow: "none",
        bg: "button.focus",
      },
    },
  },
};
