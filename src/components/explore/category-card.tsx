import { Image, Stack, Text } from "@chakra-ui/react";

type ExploreCardProps = {
  imageUrl: string;
  category: string;
};

export const ExploreCard = ({ category, imageUrl }: ExploreCardProps) => {
  return (
    <Stack
      spacing={6}
      bg="primary"
      p="6"
      w="13.125rem"
      flexShrink={0}
      _hover={{
        bg: "activeLink",
      }}
      borderRadius="8px"
      scrollSnapAlign="start"
    >
      <Image alt={category} src={imageUrl} h="2rem" w="2rem" />

      <Text fontSize="1rem" color="highlight" fontWeight="600">
        {category}
      </Text>
    </Stack>
  );
};
