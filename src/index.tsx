import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <ChakraProvider>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </ChakraProvider>,

  document.getElementById("root")
);
