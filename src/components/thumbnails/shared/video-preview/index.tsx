/* eslint-disable no-console */
import { Box, BoxProps, Image } from "@chakra-ui/react";

import { PreviewActions } from "./preview-actions";

type RelatedVideoPreviewProps = {
  thumbnailUrl: string;
  alt: string;
  propsStyles?: BoxProps;
};

const onClick = () => {
  console.log("click");
};

export const VideoPreview = ({
  alt,
  thumbnailUrl,
  propsStyles,
}: RelatedVideoPreviewProps) => {
  return (
    <Box
      pos="relative"
      flexShrink={0}
      css={{
        "&:hover": {
          ".previewAction": {
            visibility: "visible",
          },
        },
        ".previewAction": {
          visibility: "hidden",
        },
      }}
      {...propsStyles}
    >
      <Image src={thumbnailUrl} alt={alt} w="100%" h="100%" objectFit="fill" />

      <PreviewActions
        onAddToQueue={onClick}
        onWatchLater={onClick}
        className="previewAction"
      />
    </Box>
  );
};
