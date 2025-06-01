import { Box } from "@chakra-ui/react";
import type { PropsChildren } from "../types/PropsCharts";

const Chart: React.FC<PropsChildren> = ({ children }) => {
  return <Box width={"100%"}>{children}</Box>;
};

export default Chart;
