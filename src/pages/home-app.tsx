import { Box, Stack } from "@chakra-ui/react";
import ChartsOptions from "../components/charts-options";
import HeaderApp from "../components/header-app";

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
