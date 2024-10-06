import { Button, Stack, Tooltip } from "@chakra-ui/react";
import React from "react";

const PalletteThemeColor = () => {
  return (
    <Stack direction={"column"} spacing={3}>
      <Tooltip label="Verde" placement="right">
        <Button bg={"#6A9C89"} width={3} height={3}></Button>
      </Tooltip>
      <Tooltip label="Morado" placement="right">
        <Button bg={"#7A1CAC"} width={3} height={3}></Button>
      </Tooltip>
      <Tooltip label="Azul oscuro" placement="right">
        <Button bg={"#1F2544"} width={3} height={3}></Button>
      </Tooltip>
      <Tooltip label="Naranja" placement="right">
        <Button bg={"#FC6736"} width={3} height={3}></Button>
      </Tooltip>
      <Tooltip label="Gris" placement="right">
        <Button bg={"#7C93C3"} width={3} height={3}></Button>
      </Tooltip>
      <Tooltip label="Amarillo" placement="right">
        <Button bg={"#FBA834"} width={3} height={3}></Button>
      </Tooltip>
      <Tooltip label="Marrón" placement="right">
        <Button bg={"#750E21"} width={3} height={3}></Button>
      </Tooltip>
    </Stack>
  );
};

export default PalletteThemeColor;
