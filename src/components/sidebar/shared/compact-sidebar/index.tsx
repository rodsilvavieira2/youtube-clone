import { Flex } from "@chakra-ui/react";

import { CompactSidebarItem } from "./compact-sidebar-item";
import { itemsConfig } from "./config";

export const CompactSidebar = () => {
  return (
    <Flex flexDir="column" w="4.5rem">
      {itemsConfig.map((item) => (
        <CompactSidebarItem key={item.id} {...item} />
      ))}
    </Flex>
  );
};
