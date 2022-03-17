import { PlayListItems } from "@components";
import { useGetLikedVideosQuery } from "@redux/api/liked-videos";

export const LikedVideosListContainer = () => {
  const { data = [], isLoading } = useGetLikedVideosQuery();

  console.log(data);

  return <PlayListItems items={data} isLoading={isLoading} />;
};
