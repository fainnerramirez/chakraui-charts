import React, { useEffect } from "react";

type typeColorContext = {
  palletteColor: string;
  setPalleteColor: Function;
};

export const ColorContext = React.createContext<typeColorContext>({
  palletteColor: "",
  setPalleteColor: () => {},
});

const PalletteColorContext = ({ children }: any) => {
  const [palletteColor, setPalleteColor] = React.useState<string>("#000000");

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
