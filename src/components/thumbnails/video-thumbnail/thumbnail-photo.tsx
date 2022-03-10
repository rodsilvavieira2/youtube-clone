import { useState } from "react";

import { Box, BoxProps, Image, Skeleton } from "@chakra-ui/react";

type ThumbnailPhotoProps = {
  thumbnailUrl: string;
  alt: string;
  containerStyles?: BoxProps;
};

export const ThumbnailPhoto = ({
  thumbnailUrl,
  alt,
  containerStyles,
}: ThumbnailPhotoProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Box {...containerStyles} position="relative">
      <Image
        w="100%"
        h="100%"
        objectFit="fill"
        src={thumbnailUrl}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        visibility={isLoading ? "hidden" : "visible"}
      />
      {isLoading && <Skeleton position="absolute" inset={0} />}
    </Box>
  );
};
