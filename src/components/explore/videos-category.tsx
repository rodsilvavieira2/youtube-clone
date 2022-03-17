import { Flex } from "@chakra-ui/react";
import { ExploreCard } from "@components";

type CategoryItem = {
  id: string;
  category: string;
  imageUrl: string;
};

type VideosCategoryProps = {
  items: CategoryItem[];
};

export const VideosCategory = ({ items }: VideosCategoryProps) => {
  return (
    <Flex
      flexWrap={{ base: "nowrap", lg: "wrap" }}
      maxWidth={{ base: "93vw", lg: "100%" }}
      overflowX="auto"
      gap="1"
      css={{
        "&::-webkit-scrollbar": {
          height: "3px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "transparent",
        },
      }}
      scrollBehavior="smooth"
      scrollSnapType="x mandatory"
    >
      {items.map((item) => (
        <ExploreCard key={item.id} {...item} />
      ))}
    </Flex>
  );
};
