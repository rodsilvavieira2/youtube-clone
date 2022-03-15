import {
  Skeleton,
  Stack,
  SkeletonCircle,
  HStack,
  SkeletonText,
  SkeletonProps,
} from "@chakra-ui/react";

type VerticalThumbnailSkeletonProps = {
  thumbnailProps?: SkeletonProps;
};

export const VerticalThumbnailSkeleton = ({
  thumbnailProps,
}: VerticalThumbnailSkeletonProps) => {
  return (
    <Stack spacing={2}>
      <Skeleton {...thumbnailProps} />

      <HStack>
        <SkeletonCircle w="2.25rem" h="2.25rem" />

        <SkeletonText flex={1} />
      </HStack>
    </Stack>
  );
};
