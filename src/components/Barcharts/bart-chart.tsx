import { useColorModeValue } from "@chakra-ui/react";
import { Bar, BarChart, Tooltip, XAxis } from "recharts";
import { PropsChart } from "../../types/PropsCharts";
import { DataChart } from "../../utils/data-charts";
import { usePaletteStore } from "../../store/pallette-store";

export const BarCharts: React.FC<PropsChart> = ({ isDrawer }) => {
  const tooltipColor = useColorModeValue("#000000", "white");
  const tooltipBg = useColorModeValue("#ffffff", "gray");
  const { paletteColor } = usePaletteStore();

  return (
    <BarChart
      width={isDrawer ? 600 : 350}
      height={250}
      accessibilityLayer
      data={DataChart}
    >
      <Tooltip
        contentStyle={{
          color: tooltipColor,
          backgroundColor: tooltipBg,
          borderRadius: 10,
        }}
      />
      <XAxis
        dataKey="mes"
        tickLine={false}
        tickMargin={10}
        axisLine={false}
        tickFormatter={(value: any) => value.slice(0, 3)}
      />
      <Bar dataKey="data" fill={paletteColor} strokeWidth={2} radius={8} />
    </BarChart>
  );
};
