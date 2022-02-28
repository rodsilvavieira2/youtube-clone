import { Flex, Divider } from "@chakra-ui/react";

import { guideConfig, libConfig } from "./config";
import { MoreYoutube } from "./more-youtube";
import { Registrations } from "./registrations";
import { SidebarItem } from "./sidebar-item";

export const SidebarContent = () => {
  return (
    <Flex w="14.5rem" flexDir="column">
      <Flex flexDir="column">
        {libConfig.map((item) => (
          <SidebarItem key={item.id} {...item} />
        ))}
      </Flex>

      <Divider my="2" />

      <Flex flexDir="column">
        {guideConfig.map((item) => (
          <SidebarItem key={item.id} {...item} />
        ))}
      </Flex>

      <Divider my="2" />

      <Registrations />

      <Divider my="2" />

      <MoreYoutube />
    </Flex>
  );
};
