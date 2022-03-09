import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

import { Box, Button } from "@chakra-ui/react";
import faker from "@faker-js/faker";

import { CommentsSlider } from "./comments-slider";

const comments = Array.from({ length: 50 }, () => ({
  id: v4(),
  userName: faker.name.findName(),
  likes: faker.datatype.number(),
  isDisliked: faker.datatype.boolean(),
  comment: faker.lorem.paragraph(15),
  avatarUrl: faker.internet.avatar(),
  commentedAt: faker.date.past(),
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onIncrementLike: () => {},
  responses: [],
}));

export const MobileVideoComments = () => {
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
    <Box borderBottom="1px solid" borderColor="border.secondary">
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
