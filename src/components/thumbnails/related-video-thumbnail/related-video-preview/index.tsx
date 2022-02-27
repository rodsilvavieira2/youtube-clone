/* eslint-disable no-console */
import { Box, Image } from "@chakra-ui/react";

import { PreviewActions } from "./preview-actions";

type RelatedVideoPreviewProps = {
  thumbnailUrl: string;
  alt: string;
};

const onClick = () => {
  console.log("click");
};

export const RelatedVideoPreview = ({
  alt,
  thumbnailUrl,
}: RelatedVideoPreviewProps) => {
  return (
    <Box
      h="5.75rem"
      w="10.5rem"
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
