import { PlayListItems } from "@components";
import { useGetWatchLaterQuery } from "@redux/api/watch-later";

export const WatchLaterListContainer = () => {
  const { data = [], isLoading } = useGetWatchLaterQuery();

  return <PlayListItems items={data} isLoading={isLoading} />;
};
