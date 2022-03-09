import { useState, useEffect } from "react";

import { Box } from "@chakra-ui/react";

import { CommentItemProps } from "../../shared";
import { SliderWrapper } from "./slide-wrapper";

type CommentsSliderProps = {
  onClose: () => void;
  comments: CommentItemProps[];
};

export const CommentsSlider = ({ comments, onClose }: CommentsSliderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <Box
      pos="fixed"
      top="3.3rem"
      left={0}
      right={0}
      bottom={0}
      zIndex="overlay"
    >
      <Box h="30vh" />

      <SliderWrapper
        onClose={onClose}
        isLoading={isLoading}
        comments={comments}
      />
    </Box>
  );
};
