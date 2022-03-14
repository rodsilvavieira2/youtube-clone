import { Link } from "react-router-dom";

import { Box, BoxProps } from "@chakra-ui/react";

import { ThumbnailPhoto } from "../thumbnail-photo";
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
      <ThumbnailPhoto
        thumbnailUrl={thumbnailUrl}
        alt={alt}
        containerProps={{
          height: "100%",
        }}
      />

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
