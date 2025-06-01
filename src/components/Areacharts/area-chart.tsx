import { Area, AreaChart, Tooltip, XAxis } from "recharts";
import type { PropsChart } from "../../types/PropsCharts";
import { DataChart } from "../../utils/data-charts";
import { usePaletteStore } from "../../store/pallette-store";

export const AreaCharts: React.FC<PropsChart> = ({ isDrawer }) => {
  const { paletteColor } = usePaletteStore();

  return (
    <AreaChart
      data={DataChart}
      width={isDrawer ? 600 : 350}
      height={250}
      accessibilityLayer
    >
      <XAxis dataKey="mes" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="data"
        stroke={paletteColor}
        fill={paletteColor}
      />
    </AreaChart>
  );
};
