import { Link } from "react-router-dom";

import { Box, Image, BoxProps, Text } from "@chakra-ui/react";

type PlayListPreviewProps = {
  imageUrl: string;
  playlistUrl: string;
  stylesProps?: BoxProps;
};

export const PlayListPreview = ({
  imageUrl,
  stylesProps,
  playlistUrl,
}: PlayListPreviewProps) => {
  return (
    <Box {...stylesProps} position="relative">
      <Image w="100%" h="100%" src={imageUrl} alt="play list preview" />

      <Text
        display="flex"
        alignItems="center"
        justifyContent="center"
        h="2.5rem"
        color="#ffff"
        textTransform="uppercase"
        as={Link}
        to={playlistUrl}
        background="rgba(0, 0, 0, 0.8)"
        position="absolute"
        left={0}
        right={0}
        bottom={0}
      >
        reproduzir tudo
      </Text>
    </Box>
  );
};
