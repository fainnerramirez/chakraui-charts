import { Box, Divider, Heading, Link, Stack, Text } from "@chakra-ui/react";
import HeaderApp from "../components/header-app";
import ChartsOptions from "../components/charts-options";
import PalletteThemeColor from "../components/pallette-theme-color";

const HomeApp = () => {
  return (
    <Box>
      <HeaderApp />
      <Stack direction={"row"} width={"100%"}>
        <ChartsOptions />
      </Stack>
    </Box>
  );
};

export default HomeApp;
