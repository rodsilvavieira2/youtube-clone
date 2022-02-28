import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Avatar, Box, HStack, Stack } from "@chakra-ui/react";

import { ThumbnailInfo } from "../shared";
import { ThumbnailActions } from "./thumbnail-actions";
import { ThumbnailPhoto } from "./thumbnail-photo";

type VideoThumbnailProps = {
  thumbnailUrl: string;
  title: string;
  views: number;
  canalName: string;
  postedAt: Date;
  avatarUrl: string;
};

export const VideoThumbnail = ({
  avatarUrl,
  canalName,
  postedAt,
  thumbnailUrl,
  title,
  views,
}: VideoThumbnailProps) => {
  const [isHover, setIsHover] = useState(false);
  const [timeId, setTimeId] = useState<number>(0);

  const onHoverStart = () => {
    const currentTimeId = setTimeout(() => setIsHover(true), 2000);

    setTimeId(currentTimeId);
  };

  const onHoverEnd = () => {
    window.clearTimeout(timeId);
    setIsHover(false);
  };

  return (
    <Box as={Link} to="/:video" position="relative" minH="18rem">
      <motion.div
        transition={{
          stiffness: 0,
          bounce: 0,
        }}
        style={{
          overflow: "hidden",
          position: "absolute",
          inset: 0,
          backgroundColor: "#ffff",
        }}
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
        animate={{
          transition: {
            stiffness: 0,
            bounce: 0,
          },
          ...(isHover && {
            scale: 1.1,
            zIndex: 2,
            y: 30,
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            height: "23rem",
          }),
        }}
      >
        <ThumbnailPhoto thumbnailUrl={thumbnailUrl} alt={title} />

        <Stack mt="3">
          <HStack>
            <Avatar
              w="2.25rem"
              h="2.25rem"
              src={avatarUrl}
              alignSelf="flex-start"
            />

            <ThumbnailInfo
              title={title}
              canalName={canalName}
              views={views}
              postedAt={postedAt}
            />
          </HStack>

          {isHover && <ThumbnailActions />}
        </Stack>
      </motion.div>
    </Box>
  );
};
