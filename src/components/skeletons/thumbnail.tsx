import {
  Skeleton,
  Stack,
  SkeletonCircle,
  HStack,
  SkeletonText,
} from "@chakra-ui/react";

export const ThumbnailSkeleton = () => {
  return (
    <Stack spacing={2}>
      <Skeleton h="11.25rem" />

      <HStack>
        <SkeletonCircle w="2.25rem" h="2.25rem" />

        <SkeletonText flex={1} />
      </HStack>
    </Stack>
  );
};
