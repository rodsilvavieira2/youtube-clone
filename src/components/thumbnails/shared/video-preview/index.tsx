/* eslint-disable no-console */
import { Link } from "react-router-dom";

import { Box, BoxProps, Image } from "@chakra-ui/react";

import { PreviewActions } from "./preview-actions";

type RelatedVideoPreviewProps = {
  thumbnailUrl: string;
  alt: string;
  to: string;
  styleProps?: BoxProps;
};

const onClick = () => {
  console.log("click");
};

export const VideoPreview = ({
  alt,
  thumbnailUrl,
  styleProps,
  to,
}: RelatedVideoPreviewProps) => {
  return (
    <Box
      pos="relative"
      flexShrink={0}
      as={Link}
      to={to}
      css={{
        "&:hover": {
          ".preview-action": {
            visibility: "visible",
          },
        },
        ".preview-action": {
          visibility: "hidden",
        },
      }}
      {...styleProps}
    >
      <Image src={thumbnailUrl} alt={alt} w="100%" h="100%" objectFit="fill" />

      <PreviewActions
        onAddToQueue={onClick}
        onWatchLater={onClick}
        stylesProps={{
          className: "preview-action",
        }}
      />
    </Box>
  );
};
