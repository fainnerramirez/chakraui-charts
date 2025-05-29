import { Button, Stack, Tooltip } from "@chakra-ui/react";
import { usePaletteStore } from "../store/pallette-store";

const PalletteThemeColor: React.FC = () => {
  const { setPaletteColor } = usePaletteStore();
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
          onClick={() => setPaletteColor("#6A9C89")}
        ></Button>
      </Tooltip>
      <Tooltip label="Púrpura" placement="right">
        <Button
          bg={"#7A1CAC"}
          onClick={() => setPaletteColor("#7A1CAC")}
        ></Button>
      </Tooltip>
      <Tooltip label="Azul oscuro" placement="right">
        <Button
          bg={"#1F2544"}
          onClick={() => setPaletteColor("#1F2544")}
        ></Button>
      </Tooltip>
      <Tooltip label="Naranja" placement="right">
        <Button
          bg={"#FC6736"}
          onClick={() => setPaletteColor("#FC6736")}
        ></Button>
      </Tooltip>
      <Tooltip label="Grís" placement="right">
        <Button
          bg={"#7C93C3"}
          onClick={() => setPaletteColor("#7C93C3")}
        ></Button>
      </Tooltip>
      <Tooltip label="Amarillo" placement="right">
        <Button
          bg={"#FBA834"}
          onClick={() => setPaletteColor("#FBA834")}
        ></Button>
      </Tooltip>
      <Tooltip label="Azul celeste" placement="right">
        <Button
          bg={"#3182ce"}
          onClick={() => setPaletteColor("#3182ce")}
        ></Button>
      </Tooltip>
    </Stack>
  );
};

export default PalletteThemeColor;
