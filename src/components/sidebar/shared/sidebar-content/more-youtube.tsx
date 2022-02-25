import { Divider, Flex, Text } from "@chakra-ui/react";
// eslint-disable-next-line import/no-extraneous-dependencies
import faker from "@faker-js/faker";
import {
  YoutubeLogo,
  YoutubeMovies,
  YoutubeGames,
  YoutubeLive,
  YoutubeSport,
  YoutubeLearn,
  YoutubeSetting,
  YoutubeHelp,
  YoutubeDenunciations,
  YoutubeFeedBack,
} from "@icons";

import { SidebarItem } from "./sidebar-item";

const moreYoutube = [
  {
    id: faker.datatype.uuid(),
    to: "/premium",
    text: "Youtube Premium",
    icon: YoutubeLogo,
  },
  {
    id: faker.datatype.uuid(),
    to: "/movies",
    text: "Filmes",
    icon: YoutubeMovies,
  },
  {
    id: faker.datatype.uuid(),
    to: "/games",
    text: "Jogos",
    icon: YoutubeGames,
  },
  {
    id: faker.datatype.uuid(),
    to: "/live",
    text: "Ao vivo",
    icon: YoutubeLive,
  },
  {
    id: faker.datatype.uuid(),
    to: "/learn",
    text: "Aprender",
    icon: YoutubeLearn,
  },
  {
    id: faker.datatype.uuid(),
    to: "/sport",
    text: "Esporte",
    icon: YoutubeSport,
  },
];

export const moreYoutubeSub = [
  {
    id: faker.datatype.uuid(),
    to: "/settings",
    text: "Configurações",
    icon: YoutubeSetting,
  },
  {
    id: faker.datatype.uuid(),
    to: "/denunciations",
    text: "Historico de denuncias",
    icon: YoutubeDenunciations,
  },
  {
    id: faker.datatype.uuid(),
    to: "/hep",
    text: "Ajuda",
    icon: YoutubeHelp,
  },
  {
    id: faker.datatype.uuid(),
    to: "/feeedback",
    text: "Enviar Feedback",
    icon: YoutubeFeedBack,
  },
];

export const MoreYoutube = () => {
  return (
    <>
      <Flex flexDir="column">
        <Text
          color="text.secondary"
          textTransform="uppercase"
          px="1.5rem"
          py="0.5rem"
          fontWeight="500"
        >
          mais do youtube
        </Text>

        <Flex flexDir="column">
          {moreYoutube.map((item) => (
            <SidebarItem key={item.id} {...item} />
          ))}
        </Flex>
      </Flex>

      <Divider my="2" />

      <Flex flexDir="column">
        {moreYoutubeSub.map((item) => (
          <SidebarItem key={item.id} {...item} />
        ))}
      </Flex>
    </>
  );
};
