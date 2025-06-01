import {
  Area,
  Bar,
  ComposedChart,
  Line,
  Scatter,
  Tooltip,
  XAxis,
} from "recharts";
import type { PropsChart } from "../../types/PropsCharts";
import { DataChart } from "../../utils/data-charts";
import { usePaletteStore } from "../../store/pallette-store";

export const LineBarchCharts: React.FC<PropsChart> = ({ isDrawer }) => {
  const { paletteColor } = usePaletteStore();

  return (
    <ComposedChart width={isDrawer ? 600 : 350} height={250} data={DataChart}>
      <XAxis dataKey="mes" scale="band" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="data"
        fill={paletteColor}
        stroke={paletteColor}
      />
      <Bar dataKey="data" barSize={20} fill={paletteColor} radius={8} />
      <Line type="monotone" dataKey="data" stroke={paletteColor} />
      <Scatter dataKey="data" fill={"#CBD5E0"} />
    </ComposedChart>
  );
};
