import { v4 } from "uuid";

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
    to: "/feed/library",
    icon: YoutubeLib,
  },
  {
    id: v4(),
    text: "Histórico",
    to: "/feed/history",
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
