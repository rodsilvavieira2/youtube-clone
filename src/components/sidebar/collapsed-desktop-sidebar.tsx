import { v4 } from "uuid";

import { Flex } from "@chakra-ui/react";
import { YoutubeExplore, YoutubeHome, YoutubeLib, YoutubeShorts } from "@icons";

import { CollapsedDesktopSidebarItem } from "./collapsed-desktop-sidebar-item";

const itemsConfig = [
  {
    id: v4(),
    text: "Inicio",
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
    text: "Shorts",
    to: "/shorts",
    icon: YoutubeShorts,
  },
  {
    id: v4(),
    text: "Iscrições",
    to: "/subscriptions",
    icon: YoutubeLib,
  },
  {
    id: v4(),
    text: "Biblioteca",
    to: "/Library",
    icon: YoutubeLib,
  },
];

export const CollapsedDesktopSidebar = () => {
  return (
    <Flex flexDir="column" w="4.5rem">
      {itemsConfig.map((item) => (
        <CollapsedDesktopSidebarItem key={item.id} {...item} />
      ))}
    </Flex>
  );
};
