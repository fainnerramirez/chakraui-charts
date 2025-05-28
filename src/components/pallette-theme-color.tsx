import { Button, Stack, Tooltip } from "@chakra-ui/react";
import { useContext } from "react";
import { ColorContext } from "../contexts/PalletteColorContext";

const PalletteThemeColor: React.FC = () => {
  const { setPalleteColor } = useContext(ColorContext);
  return (
    <Stack
      direction={"column"}
      spacing={3}
      position={"sticky"}
      top={10}
      display={{ base: "none", md: "none", lg: "inline-flex" }}
    >
      <Tooltip label="Verde" placement="right">
        <Button
          bg={"#6A9C89"}
          onClick={() => setPalleteColor("#6A9C89")}
        ></Button>
      </Tooltip>
      <Tooltip label="Púrpura" placement="right">
        <Button
          bg={"#7A1CAC"}
          onClick={() => setPalleteColor("#7A1CAC")}
        ></Button>
      </Tooltip>
      <Tooltip label="Azul oscuro" placement="right">
        <Button
          bg={"#1F2544"}
          onClick={() => setPalleteColor("#1F2544")}
        ></Button>
      </Tooltip>
      <Tooltip label="Naranja" placement="right">
        <Button
          bg={"#FC6736"}
          onClick={() => setPalleteColor("#FC6736")}
        ></Button>
      </Tooltip>
      <Tooltip label="Grís" placement="right">
        <Button
          bg={"#7C93C3"}
          onClick={() => setPalleteColor("#7C93C3")}
        ></Button>
      </Tooltip>
      <Tooltip label="Amarillo" placement="right">
        <Button
          bg={"#FBA834"}
          onClick={() => setPalleteColor("#FBA834")}
        ></Button>
      </Tooltip>
      <Tooltip label="Azul celeste" placement="right">
        <Button
          bg={"#3182ce"}
          onClick={() => setPalleteColor("#3182ce")}
        ></Button>
      </Tooltip>
    </Stack>
  );
};

export default PalletteThemeColor;
