import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx";
import { theme } from "./utils/theme-extends.ts";
import PalletteColorContext from "./contexts/PalletteColorContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <PalletteColorContext>
        <App />
      </PalletteColorContext>
    </ChakraProvider>
  </StrictMode>
);
