import {
  Box,
  HStack,
  Skeleton,
  SkeletonProps,
  SkeletonText,
  StackProps,
} from "@chakra-ui/react";

type HorizontalThumbnailProps = {
  containerProps?: StackProps;
  thumbnailProps?: SkeletonProps;
};

export const HorizontalThumbnailSkeleton = ({
  containerProps,
  thumbnailProps,
}: HorizontalThumbnailProps) => {
  return (
    <HStack alignItems="normal" {...containerProps}>
      <Skeleton w="15.375rem" h="8.625rem" {...thumbnailProps} />

      <Box w="100%">
        <Box>
          <SkeletonText w="100%" h="4" />
        </Box>

        <Box mt="10">
          <SkeletonText w="100%" h="4" />
        </Box>
      </Box>
    </HStack>
  );
};
