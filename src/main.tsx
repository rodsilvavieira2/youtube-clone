/* eslint-disable no-use-before-define */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@styles";

import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
