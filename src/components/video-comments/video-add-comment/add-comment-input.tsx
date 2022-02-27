import { forwardRef, ForwardRefRenderFunction } from "react";

import { Input, InputGroup } from "@chakra-ui/react";

type AddCommentInputProps = {
  onFocus?: (status: boolean) => void;
};

const Base: ForwardRefRenderFunction<HTMLInputElement, AddCommentInputProps> = (
  { onFocus },
  ref
) => {
  return (
    <InputGroup
      _focusWithin={{
        _after: {
          transform: "scale(1)",
        },
      }}
      position="relative"
      _after={{
        content: "''",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        h: "2px",
        bg: "text.primary",
        transform: "scale(0)",
        transition: "all 0.3s",
      }}
    >
      <Input
        borderBottom="1px solid"
        borderColor="border.secondary"
        onFocus={() => onFocus?.(true)}
        borderRadius={0}
        variant="unstyled"
        placeholder="Adicione um comentário..."
        _placeholder={{
          color: "text.secondary",
          fontSize: "0.875rem",
        }}
        ref={ref}
      />
    </InputGroup>
  );
};

export const AddCommentInput = forwardRef(Base);
