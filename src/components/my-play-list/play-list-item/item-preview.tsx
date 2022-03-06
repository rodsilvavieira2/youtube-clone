import { Box, BoxProps, Image } from "@chakra-ui/react";

type ItemPreviewProps = {
  previewUrl: string;
  styleProps?: BoxProps;
};

export const ItemPreview = ({ previewUrl, styleProps }: ItemPreviewProps) => {
  return (
    <Box {...styleProps}>
      <Image src={previewUrl} h="100%" w="100%" alt="item preview" />
    </Box>
  );
};
