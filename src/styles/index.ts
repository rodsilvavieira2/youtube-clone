import { extendTheme } from "@chakra-ui/react";

import { lightColors } from "./colors";
import { Button, Icon } from "./components";

const lightMode = {
  colors: {
    ...lightColors,
  },
};

export const theme = extendTheme({
  ...lightMode,
  components: {
    Button,
    Icon,
  },
  styles: {
    global: {
      body: {
        fontFamily: "'Roboto', sans-serif;",
      },
    },
  },
});
