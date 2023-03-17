import { App } from "./app";
import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </ChakraProvider>
);
