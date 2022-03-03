import { useRef, useState } from "react";

import { Avatar, Button, HStack, Stack } from "@chakra-ui/react";

import { AddCommentInput } from "./add-comment-input";

export const VideoAddComment = () => {
  const [isOnFocus, setIsOnFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onFocus = (status: boolean) => {
    setIsOnFocus(status);
  };

  const onCancel = () => {
    setIsOnFocus(false);

    if (inputRef.current && inputRef.current.value) {
      inputRef.current.value = "";
    }
  };

  return (
    <Stack>
      <HStack>
        <Avatar size="md" name="rodrigo silva" />

        <AddCommentInput onFocus={onFocus} ref={inputRef} />
      </HStack>
      {isOnFocus && (
        <HStack justifyContent="flex-end">
          <Button
            fontWeight="500"
            textTransform="uppercase"
            color="text.secondary"
            variant="ghost"
            onClick={onCancel}
            borderRadius={0}
          >
            cancelar
          </Button>

          <Button
            fontWeight="500"
            textTransform="uppercase"
            color="text.secondary"
            bg="shape"
            borderRadius={0}
            size="md"
          >
            comentar
          </Button>
        </HStack>
      )}
    </Stack>
  );
};
