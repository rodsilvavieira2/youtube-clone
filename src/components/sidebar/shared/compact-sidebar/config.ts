import { v4 } from "uuid";

import { YoutubeHome, YoutubeExplore, YoutubeShorts, YoutubeLib } from "@icons";

export const itemsConfig = [
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
