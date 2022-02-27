import { useState } from "react";

import { Button } from "@chakra-ui/react";

export const ShowLessOrMoreButton = () => {
  const [isShowingMore, setIsShowingMore] = useState(false);

  const onClick = () => setIsShowingMore((prev) => !prev);

  return (
    <Button
      fontSize="0.75rem"
      variant="unstyled"
      textTransform="uppercase"
      color="text.secondary"
      onClick={onClick}
    >
      {isShowingMore ? "monstar menos" : "monstar mais"}
    </Button>
  );
};
