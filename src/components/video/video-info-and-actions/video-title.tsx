import { Heading, Skeleton } from "@chakra-ui/react";

type VideoTitleProps = {
  isLoading?: boolean;
};

export const VideoTitle: React.FC<VideoTitleProps> = ({
  children,
  isLoading,
}) => {
  return isLoading ? (
    <Skeleton w="100%" h="1.5rem" />
  ) : (
    <Heading
      mt="4"
      color="text.primary"
      w="100%"
      overflow="hidden"
      textOverflow="ellipsis"
      fontWeight="400"
      whiteSpace="nowrap"
      fontSize="1.125rem"
    >
      {children}
    </Heading>
  );
};
