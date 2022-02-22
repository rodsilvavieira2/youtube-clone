import { Header } from "components";
import { Sidebar } from "components/sidebar";

import { Flex } from "@chakra-ui/react";

export const App = () => {
  return (
    <Flex h="100vh" w="100vw" flexDir="column">
      <Header />
      <Flex h="100%">
        <Sidebar />
      </Flex>
    </Flex>
  );
};
