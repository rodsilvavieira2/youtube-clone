export type VideoCategory =
  | "movie"
  | "music"
  | "game"
  | "sport"
  | "news"
  | "learn";

export type Tag = {
  id: string;
  tagName: string;
};

export type BasicVideoData = {
  id: string;
  title: string;
  canalName: string;
  description: string;
  views: number;
  tags: Tag[];
  thumbnailUrl: string;
  avatarUrl: string;
  category: VideoCategory;
  postedAt: Date;
};

export type VideoComment = {
  id: string;
  userName: string;
  comment: string;
  likes: number;
  avatarUrl: string;
  isDisliked: boolean;
  responses: VideoComment[];
  commentedAt: Date;
};
