import { useState, useEffect } from "react";

import { Box } from "@chakra-ui/react";

import { CommentItemProps } from "../../shared";
import { SliderWrapper } from "./slide-wrapper";

type CommentsSliderProps = {
  onClose: () => void;
  comments: CommentItemProps[];
};

function toggleDisableScroll() {
  const rootDiv = document.querySelector('[data-type="root-container"]');

  if (rootDiv) {
    rootDiv.classList.toggle("disable-scroll");
  }
}

export const CommentsSlider = ({ comments, onClose }: CommentsSliderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
    toggleDisableScroll();

    return () => toggleDisableScroll();
  }, []);

  return (
    <Box
      pos="fixed"
      top="calc(30vh + 3.5rem)"
      left={0}
      right={0}
      bottom={0}
      zIndex="overlay"
    >
      <SliderWrapper
        onClose={onClose}
        isLoading={isLoading}
        comments={comments}
      />
    </Box>
  );
};
