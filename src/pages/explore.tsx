import { v4 } from "uuid";

import { Flex, Heading, Stack } from "@chakra-ui/react";
import { ExploreCard } from "@components";
import { ExploreContainer } from "@containers";

const category = [
  {
    id: v4(),
    category: "Em alta",
    imageUrl: "/trending_category.png",
  },
  {
    id: v4(),
    category: "Música",
    imageUrl: "/music_category.png",
  },
  {
    id: v4(),
    category: "Filmes",
    imageUrl: "/movies_category.png",
  },
  {
    id: v4(),
    category: "Ao vivo",
    imageUrl: "/live_category.png",
  },
  {
    id: v4(),
    category: "Jogos",
    imageUrl: "/gaming_category.png",
  },
  {
    id: v4(),
    category: "Notícias",
    imageUrl: "/news_category.png",
  },
  {
    id: v4(),
    category: "Esportes",
    imageUrl: "/sports_category.png",
  },
  {
    id: v4(),
    category: "Aprender",
    imageUrl: "/learning_category.png",
  },
];

export default function Explore() {
  return (
    <Stack padding={{ base: 0, sm: "1.5rem" }} py="1rem">
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
        {category.map((item) => (
          <ExploreCard key={item.id} {...item} />
        ))}
      </Flex>

      <Heading pt="8" pb="4" fontSize="md" px={{ base: "0.5rem", sm: 0 }}>
        Vídeos em alta
      </Heading>

      <ExploreContainer />
    </Stack>
  );
}
