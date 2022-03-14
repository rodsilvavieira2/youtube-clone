import { motion, PanInfo, useDragControls } from "framer-motion";
import { useState, PointerEvent } from "react";

import {
  Box,
  Center,
  Flex,
  Heading,
  IconButton,
  Spinner,
} from "@chakra-ui/react";
import { YoutubeClose } from "@icons";
import { VideoComment } from "@types";

import { CommentInput } from "./comment-input";
import { CommentsWrapper } from "./comments-wrapper";

type SliderWrapperProps = {
  onClose: () => void;
  isLoading: boolean;
  comments: VideoComment[];
};

export const SliderWrapper = ({
  onClose,
  isLoading,
  comments,
}: SliderWrapperProps) => {
  const [offsetY, setOffsetY] = useState(0.9);

  const dragControls = useDragControls();

  function startDrag(event: PointerEvent) {
    dragControls.start(event);
  }

  const onDragEnd = (
    e: MouseEvent | TouchEvent | globalThis.PointerEvent,
    i: PanInfo
  ) => {
    if (i.point.y > 400) {
      onClose();
    }
  };

  const onDrag = (
    e: MouseEvent | TouchEvent | globalThis.PointerEvent,
    i: PanInfo
  ) => {
    setOffsetY(i.point.y);
  };

  return (
    <Box h="100%" bg={`rgba(0, 0, 0, ${1 - offsetY / 1000})`}>
      <motion.div
        style={{
          height: "100%",
          backgroundColor: "#fff",
          borderTopRightRadius: "0.8rem",
          borderTopLeftRadius: "0.8rem",
        }}
        drag="y"
        dragSnapToOrigin
        dragControls={dragControls}
        onDrag={onDrag}
        onDragEnd={onDragEnd}
        dragConstraints={{ top: 0 }}
        exit={{
          y: "100%",
        }}
      >
        <Box
          p="0.5rem"
          borderBottom="1px solid"
          borderColor="border.secondary"
          onPointerDown={startDrag}
        >
          <Center>
            <Box bg="shape" h="4px" w="40px" borderRadius="full" />
          </Center>

          <Flex alignItems="center" justifyContent="space-between">
            <Heading fontSize="sm" as="h3">
              Comentários
            </Heading>

            <IconButton
              aria-label="fechar comentários"
              variant="mutedIconButton"
              icon={<YoutubeClose />}
              onClick={onClose}
              isRound
            />
          </Flex>
        </Box>

        <Flex h="100%" flexDir="column" overflow="auto">
          <CommentInput />

          {isLoading ? (
            <Center p="1rem">
              <Spinner />
            </Center>
          ) : (
            <CommentsWrapper comments={comments} />
          )}
        </Flex>
      </motion.div>
    </Box>
  );
};
