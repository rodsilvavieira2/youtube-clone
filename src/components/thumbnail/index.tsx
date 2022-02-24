/* eslint-disable react/no-unused-prop-types */
import { motion } from "framer-motion";
import { useState } from "react";

import {
  Avatar,
  Box,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  Button,
  Icon,
} from "@chakra-ui/react";
import { YouTubeQueue, YoutubeWatchLater } from "@icons";

type ThumbnailProps = {
  thumbnailUrl: string;
  title: string;
  views: number;
  canalName: string;
  postedAt: Date;
  avatarUrl: string;
};

export const Thumbnail = ({
  avatarUrl,
  canalName,
  thumbnailUrl,
  title,
}: ThumbnailProps) => {
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
    <Box as={motion.div} position="relative" h="18rem">
      <motion.div
        transition={{
          stiffness: 0,
          bounce: 0,
        }}
        style={{
          height: "100%",
          overflow: "hidden",
          position: "absolute",
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
            scale: 1.2,
            zIndex: 99999,
            y: 30,
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",

            height: "23rem",
          }),
        }}
      >
        <Box h="11.25rem">
          <Image w="100%" h="100%" src={thumbnailUrl} alt={title} />
        </Box>

        <HStack py="3" px={isHover ? 1 : 0}>
          <Avatar
            w="2.25rem"
            h="2.25rem"
            src={avatarUrl}
            alignSelf="flex-start"
          />

          <Flex flexDir="column">
            <Text
              fontSize="0.875rem"
              maxH="2.5rem"
              whiteSpace="normal"
              textTransform="capitalize"
              overflow="hidden"
              textOverflow="ellipsis"
              lineHeight="1.25rem"
              as="strong"
            >
              {title}
            </Text>

            <Text
              mt="1.5"
              color="text.secondary"
              w="100%"
              textAlign="left"
              as="small"
            >
              {canalName}
            </Text>

            <Flex color="text.secondary" w="100%" alignItems="center">
              <Text as="small">33 mil visualizações</Text>

              <Box
                mx="1"
                bg="text.secondary"
                h="2px"
                w="2px"
                borderRadius="full"
              />

              <Text as="small">há 2 dias</Text>
            </Flex>
          </Flex>
        </HStack>

        <Stack px="2">
          <Button
            size="sm"
            textTransform="uppercase"
            bg="shape"
            color="button.text"
            borderRadius="none"
            leftIcon={
              <Icon
                fontSize="1.3rem"
                as={YoutubeWatchLater}
                fill="button.text"
              />
            }
          >
            assistir mais tarde
          </Button>

          <Button
            size="sm"
            textTransform="uppercase"
            bg="shape"
            color="button.text"
            borderRadius="none"
            leftIcon={
              <Icon fontSize="1.3rem" as={YouTubeQueue} fill="button.text" />
            }
          >
            adicionar à fila
          </Button>
        </Stack>
      </motion.div>
    </Box>
  );
};
