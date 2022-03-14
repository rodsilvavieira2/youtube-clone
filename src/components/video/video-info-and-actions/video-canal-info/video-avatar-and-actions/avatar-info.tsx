import {
  Avatar,
  HStack,
  Skeleton,
  SkeletonCircle,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BasicVideoData } from "@types";
import { viewsTransform } from "@util";

type AvatarInfoProps = Pick<BasicVideoData, "canalName"> & {
  subscriptionAmount: number;
  isLoading?: boolean;
};

export const AvatarInfo = ({
  canalName,
  subscriptionAmount,
  isLoading,
}: AvatarInfoProps) => {
  const isOnMobileView = useBreakpointValue({
    base: true,
    lg: false,
  });

  return isLoading ? (
    <HStack>
      <SkeletonCircle h="3.5rem" w="3.5rem" flexShrink={0} />

      <Skeleton w="5rem" h=".8rem" />
    </HStack>
  ) : (
    <HStack>
      <Avatar size={isOnMobileView ? "sm" : "md"} name="rodrigo silva" />

      <Stack spacing={0}>
        <Text
          as="strong"
          fontWeight="500"
          fontSize="0.875rem"
          overflow="hidden"
          textOverflow="ellipsis"
          maxW="20ch"
          whiteSpace="nowrap"
          title={canalName}
        >
          {canalName}
        </Text>

        <Text
          display={{ base: "none" }}
          as="small"
          fontSize="0.75rem"
          color="text.secondary"
        >
          {viewsTransform(subscriptionAmount)}
        </Text>
      </Stack>
    </HStack>
  );
};
