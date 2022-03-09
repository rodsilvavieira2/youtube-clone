import { Flex } from "@chakra-ui/react";

import { CompactSidebarItem } from "../shared/compact-sidebar/compact-sidebar-item";
import { compactSidebarItems } from "../shared/config";

export const CompactMobileSidebar = () => {
  return (
    <Flex
      display={{ base: "flex", lg: "none" }}
      bg="primary"
      position="fixed"
      zIndex="1000"
      bottom={0}
      left={0}
      right={0}
      boxShadow="base"
      css={{
        "& > *": {
          flex: "1",
        },
      }}
    >
      {compactSidebarItems.map((item) => (
        <CompactSidebarItem
          containerProps={{
            py: 1,
          }}
          key={item.id}
          {...item}
        />
      ))}
    </Flex>
  );
};
