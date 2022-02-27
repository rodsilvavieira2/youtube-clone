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
  fontSizes: {
    xs: "0.8125rem",
  },
  styles: {
    global: {
      body: {
        fontFamily: "'Roboto', sans-serif;",
        color: "text.primary",
        bg: "bg",
      },
    },
  },
});
