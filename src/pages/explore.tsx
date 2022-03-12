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
    <Stack px="1.5rem" py="1rem">
      <Flex
        flexWrap="wrap"
        gap="1"
        css={{
          "& > div": {
            flex: "0 0 13.125rem",
          },
        }}
      >
        {category.map((item) => (
          <ExploreCard key={item.id} {...item} />
        ))}
      </Flex>

      <Heading pt="8" pb="4" fontSize="md">
        Vídeos em alta
      </Heading>

      <ExploreContainer />
    </Stack>
  );
}
