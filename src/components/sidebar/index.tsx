import { v4 } from "uuid";

import { Box, Divider, Flex } from "@chakra-ui/react";
import { YoutubeExplore, YoutubeHome, YouTubeInscriptions } from "@icons";

import { SidebarItem } from "./sidebar-item";

export const libConfig = [
  {
    id: v4(),
    text: "Início",
    to: "/",
    icon: YoutubeHome,
  },
  {
    id: v4(),
    text: "Explorar",
    to: "/explore",
    icon: YoutubeExplore,
  },
  {
    id: v4(),
    text: "Iscrições",
    to: "inscriptions",
    icon: YouTubeInscriptions,
  },
];

export const Sidebar = () => {
  return (
    <Box as="aside">
      <Flex flexDir="column">
        {libConfig.map((item) => (
          <SidebarItem key={item.id} {...item} />
        ))}
      </Flex>

      <Divider />
    </Box>
  );
};
