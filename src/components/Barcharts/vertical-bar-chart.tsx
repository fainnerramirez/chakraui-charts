import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { PropsChart } from "../../types/PropsCharts";
import { DataChart } from "../../utils/data-charts";
import { usePaletteStore } from "../../store/pallette-store";

export const VerticalBarChart: React.FC<PropsChart> = ({ isDrawer }) => {
  const { paletteColor } = usePaletteStore();

  return (
    <ComposedChart
      layout="vertical"
      width={isDrawer ? 600 : 350}
      height={250}
      data={DataChart}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number" />
      <YAxis dataKey="mes" type="category" scale="band" />
      <Tooltip />
      <Legend />
      <Area dataKey="data" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="data" barSize={20} fill={paletteColor} />
      <Line dataKey="data2" stroke={paletteColor} />
    </ComposedChart>
  );
};
