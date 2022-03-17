import { v4 } from "uuid";

import { Heading, Stack } from "@chakra-ui/react";
import { VideosCategory } from "@components";
import { ExploreContainer } from "@containers";

const categoryCards = [
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
      <VideosCategory items={categoryCards} />

      <Heading pt="8" pb="4" fontSize="md" px={{ base: "0.5rem", sm: 0 }}>
        Vídeos em alta
      </Heading>

      <ExploreContainer />
    </Stack>
  );
}
