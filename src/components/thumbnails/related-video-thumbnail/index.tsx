import { forwardRef, ForwardRefRenderFunction } from "react";

import { HStack } from "@chakra-ui/react";
import { BasicVideoData } from "@types";

import { VideoPreview } from "../shared";
import { RelatedVideoDesktopInfo } from "./related-video-desktop-info";
import { RelatedVideoMobileInfo } from "./related-video-mobile-info";

type RelatedVideoThumbnailProps = Pick<
  BasicVideoData,
  "canalName" | "thumbnailUrl" | "title" | "views" | "postedAt" | "id"
>;

const Base: ForwardRefRenderFunction<
  HTMLDivElement,
  RelatedVideoThumbnailProps
> = ({ id, canalName, thumbnailUrl, title, views, postedAt }, ref) => {
  return (
    <HStack
      position="relative"
      alignItems="normal"
      flexDir={{ base: "column", sm: "row", lg: "row" }}
      css={{
        ".thumbnailMenu": {
          visibility: "hidden",
        },
        "&:hover": {
          ".thumbnailMenu": {
            visibility: "visible",
          },
        },
      }}
      ref={ref}
    >
      <VideoPreview
        styleProps={{
          w: { base: "100%", sm: "14.5rem", lg: "10.5rem" },
          h: { base: "10rem", sm: "7.5rem", lg: "5.875rem" },
        }}
        to={`/video/${id}`}
        alt={title}
        thumbnailUrl={thumbnailUrl}
      />

      <RelatedVideoDesktopInfo
        canalName={canalName}
        title={title}
        views={views}
        postedAt={postedAt}
        containerProps={{
          display: { base: "none", lg: "flex" },
        }}
      />

      <RelatedVideoMobileInfo
        canalName={canalName}
        title={title}
        views={views}
        containerProps={{
          pt: "0.8rem",
          display: { base: "flex", lg: "none" },
        }}
      />
    </HStack>
  );
};

export const RelatedVideoThumbnail = forwardRef(Base);
