import { forwardRef, ForwardRefRenderFunction } from "react";

import { MenuItem, MenuItemProps } from "@chakra-ui/react";

const Base: ForwardRefRenderFunction<HTMLButtonElement, MenuItemProps> = (
  props,
  ref
) => {
  return (
    <MenuItem
      _active={{ bg: "shape" }}
      _hover={{ bg: "shape" }}
      _focus={{ bg: "shape" }}
      fontSize="sm"
      {...props}
      ref={ref}
    />
  );
};

export const StyledMenuItem = forwardRef(Base);
