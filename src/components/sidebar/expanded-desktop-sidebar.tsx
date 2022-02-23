import { v4 } from "uuid";

import { Flex, Divider } from "@chakra-ui/react";
import {
  YoutubeHome,
  YoutubeExplore,
  YouTubeInscriptions,
  YoutubeLib,
  YoutubeHistory,
  YoutubeMyVideo,
  YoutubeWatchLater,
  YoutubeLike,
} from "@icons";

import { MoreYoutube } from "./more-youtube";
import { Registrations } from "./registrations";
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

export const guideConfig = [
  {
    id: v4(),
    text: "Blibioteca",
    to: "/lib",
    icon: YoutubeLib,
  },
  {
    id: v4(),
    text: "Histórico",
    to: "/history",
    icon: YoutubeHistory,
  },
  {
    id: v4(),
    text: "Seus videos",
    to: "/my-videos",
    icon: YoutubeMyVideo,
  },
  {
    id: v4(),
    text: "Assitir mais tarde",
    to: "/watch-later",
    icon: YoutubeWatchLater,
  },
  {
    id: v4(),
    text: "Videos marcados como gostei",
    to: "/liked-videos",
    icon: YoutubeLike,
  },
];

export const ExpandedDesktopSidebar = () => {
  return (
    <Flex w="14.5rem" flexDir="column">
      <Flex flexDir="column">
        {libConfig.map((item) => (
          <SidebarItem key={item.id} {...item} />
        ))}
      </Flex>

      <Divider my="2" />

      <Flex flexDir="column">
        {guideConfig.map((item) => (
          <SidebarItem key={item.id} {...item} />
        ))}
      </Flex>

      <Divider my="2" />

      <Registrations />

      <Divider my="2" />

      <MoreYoutube />
    </Flex>
  );
};
