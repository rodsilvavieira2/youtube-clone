import { extendTheme } from "@chakra-ui/react";

import { lightColors } from "./colors";
import { Button, Icon, Divider } from "./components";

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
    Divider,
  },
  styles: {
    global: {
      body: {
        fontFamily: "'Roboto', sans-serif;",
        color: "text.primary",
      },
    },
  },
});
