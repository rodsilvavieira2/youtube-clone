import { forwardRef, ForwardRefRenderFunction, useState } from "react";

import { Box, BoxProps } from "@chakra-ui/react";

const Base: ForwardRefRenderFunction<HTMLDivElement, BoxProps> = (
  props,
  ref
) => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  return (
    <Box
      opacity={isMouseDown ? 1 : 0}
      transition="opacity 0.5s ease-in"
      position="absolute"
      onMouseDown={() => setIsMouseDown(true)}
      onMouseUp={() => setIsMouseDown(false)}
      inset={-4}
      margin={0}
      borderRadius="8px"
      pointerEvents="none"
      background="rgba(0, 0, 0, 0.1)"
      ref={ref}
      {...props}
    />
  );
};

export const VideoThumbnailInteraction = forwardRef(Base);
