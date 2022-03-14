import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { Box, BoxProps, Button } from "@chakra-ui/react";
import { VideoComment } from "@types";

import { CommentsSlider } from "./comments-slider";

type MobileVideoCommentsProps = {
  comments: VideoComment[];
  containerProps?: BoxProps;
};

export const MobileVideoComments = ({
  comments,
  containerProps,
}: MobileVideoCommentsProps) => {
  const [isCommentsSlideVisible, setIsCommentsSlideVisible] = useState(false);
  const [rootContainer, setRootContainer] = useState<
    Element | null | undefined
  >(null);

  useEffect(() => {
    const el = document.getElementById("root")?.firstChild;

    setRootContainer(el as Element);
  }, []);

  const onShowComments = () => {
    if (rootContainer) rootContainer.scrollTo({ top: 0 });
    setIsCommentsSlideVisible(true);
  };

  return (
    <Box
      borderBottom="1px solid"
      borderColor="border.secondary"
      {...containerProps}
    >
      <Button
        isFullWidth
        variant="ghost"
        onClick={onShowComments}
        fontWeight="400"
        fontSize="sm"
        color="text.primary"
        justifyContent="flex-start"
        _focus={{
          boxShadow: "none",
        }}
      >
        Comentários • {comments.length}
      </Button>

      <AnimatePresence>
        {isCommentsSlideVisible && (
          <CommentsSlider
            comments={comments}
            onClose={() => setIsCommentsSlideVisible(false)}
          />
        )}
      </AnimatePresence>
    </Box>
  );
};
