import { Box, Button, ButtonGroup, HStack, Stack } from "@chakra-ui/react";
import CardChart from "./card-chart";
import PalletteThemeColor from "./pallette-theme-color";

const ChartsOptions = () => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Stack
        direction="row"
        spacing={4}
        align="center"
        marginTop={10}
        width={{ base: "100%", md: "80%" }}
      >
        <Button variant={"outline"}>Barras</Button>
        <Button variant={"outline"}>Areas</Button>
        <Button variant={"outline"}>Lineas</Button>
        <Button variant={"outline"}>Circular</Button>
        <Button variant={"outline"}>Radar</Button>
        <Button variant={"outline"}>Radial</Button>
        <Button variant={"outline"}>Tooltip</Button>
      </Stack>
      <HStack
        alignItems={"flex-start"}
        justifyContent={"center"}
        className="barchart"
        width={{ base: "100%", md: "80%" }}
        marginTop={10}
      >
        <CardChart />
        <PalletteThemeColor />
      </HStack>
    </Box>
  );
};

export default ChartsOptions;
