type VideoCategory = "movie" | "music" | "game" | "sport" | "news" | "learn";

export type BasicVideoData = {
  id: string;
  title: string;
  canalName: string;
  description: string;
  views: number;
  thumbnailUrl: string;
  avatarUrl: string;
  category: VideoCategory;
  postedAt: Date;
};
