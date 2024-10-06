import { useColorModeValue } from "@chakra-ui/react";
import React, { useEffect } from "react";

export const ColorContext = React.createContext({});

const PalletteColorContext = ({ children }: any) => {
  const [palletteColor, setPalleteColor] = React.useState("#000000");

  useEffect(() => {
    localStorage.setItem("palletteColor", palletteColor);
  }, [palletteColor]);

  return (
    <ColorContext.Provider value={{ palletteColor, setPalleteColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export default PalletteColorContext;
