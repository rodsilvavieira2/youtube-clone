import { Box, Image } from "@chakra-ui/react";

type ThumbnailPhotoProps = {
  thumbnailUrl: string;
  alt: string;
};

export const ThumbnailPhoto = ({ thumbnailUrl, alt }: ThumbnailPhotoProps) => {
  return (
    <Box h="11.25rem" w="100%">
      <Image w="100%" h="100%" objectFit="fill" src={thumbnailUrl} alt={alt} />
    </Box>
  );
};
