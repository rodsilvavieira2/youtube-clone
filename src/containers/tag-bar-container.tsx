import { useSelector } from "react-redux";

import { Box } from "@chakra-ui/react";
import { TagsBar } from "@components";
import { selectIsDeskTopSidebarExpanded } from "@redux/slices";

export const TagsBarContainer = () => {
  const isDeskTopSidebarExpanded = useSelector(selectIsDeskTopSidebarExpanded);

  return (
    <Box h="3.5rem" w="100%">
      <Box
        position="fixed"
        zIndex="1"
        w={{
          base: "97.5%",
          lg: isDeskTopSidebarExpanded
            ? "calc(100vw - 16rem)"
            : "calc(100vw - 5.5rem)",
        }}
      >
        <TagsBar />
      </Box>
    </Box>
  );
};
