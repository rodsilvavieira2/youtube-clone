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
        "*::-webkit-scrollbar": {
          width: "8px",
        },
        "*::-webkit-scrollbar-thumb": {
          height: "56px",
          width: "8px",
          borderRadius: "8px",
          bg: "scrollbarThumb",
          backgroundClip: "content-box",
          zIndex: "99999",
        },
        ".disable-scroll": {
          overflow: "hidden",
        },
      },
    },
  },
});
