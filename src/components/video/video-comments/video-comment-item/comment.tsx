import { useEffect, useRef, useState } from "react";

import { Box, Button, Text } from "@chakra-ui/react";

type CommentProps = {
  comment: string;
};

export const Comment = ({ comment }: CommentProps) => {
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [shouldShowMore, setShouldShowMore] = useState(false);

  const commentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (commentRef.current && commentRef.current.offsetHeight >= 84) {
      setIsButtonVisible(true);
    }
  }, []);

  const onToggleShowMore = () => setShouldShowMore((prev) => !prev);

  return (
    <Box>
      <Text
        display="-webkit-box"
        textAlign="justify"
        fontSize="sm"
        color="text.primary"
        overflow="hidden"
        css={{
          "-webkit-box-orient": "vertical",
          "-webkit-line-clamp": shouldShowMore ? "none" : "4",
        }}
        ref={commentRef}
      >
        {comment}
      </Text>

      {isButtonVisible && (
        <Box>
          <Button
            variant="unstyled"
            onClick={onToggleShowMore}
            fontSize="sm"
            color="text.secondary"
            _focus={{}}
          >
            {shouldShowMore ? "Ler menos" : "Ler mais"}
          </Button>
        </Box>
      )}
    </Box>
  );
};
