import { Stack } from "@chakra-ui/react";
import { RelatedVideoThumbnail, HorizontalThumbnail } from "@components";
import { useGetRelatedVideosQuery } from "@redux/api/base";
import { BasicVideoData } from "@types";

type RelatedVideosContainerProps = Pick<BasicVideoData, "category"> & {
  isLoading?: boolean;
};

export const RelatedVideosContainer = ({
  category,
  isLoading,
}: RelatedVideosContainerProps) => {
  const { data = [], isFetching } = useGetRelatedVideosQuery({
    category,
  });

  return (
    <Stack w="100%" spacing={4}>
      {isLoading || isFetching ? (
        <>
          {Array.from({ length: 6 }).map((_, k) => {
            return (
              <HorizontalThumbnail
                thumbnailProps={{
                  w: "10.5rem",
                  h: "5.875rem",
                  flexShrink: 0,
                }}
                // eslint-disable-next-line react/no-array-index-key
                key={k}
              />
            );
          })}
        </>
      ) : (
        <>
          {data.map((item) => (
            <RelatedVideoThumbnail key={item.id} {...item} />
          ))}
        </>
      )}
    </Stack>
  );
};
