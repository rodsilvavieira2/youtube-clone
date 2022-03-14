import { useState } from "react";

import { Button } from "@chakra-ui/react";

type ShowLessOrMoreButtonProps = {
  onToggle: () => void;
  isShowingMore: boolean;
};

export const ShowLessOrMoreButton = ({
  onToggle,
  isShowingMore,
}: ShowLessOrMoreButtonProps) => {
  return (
    <Button
      fontSize="0.75rem"
      variant="unstyled"
      textTransform="uppercase"
      color="text.secondary"
      onClick={onToggle}
    >
      {isShowingMore ? "monstar menos" : "monstar mais"}
    </Button>
  );
};
