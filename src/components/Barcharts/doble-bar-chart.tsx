import { Bar, BarChart, Rectangle, Tooltip, XAxis } from "recharts";
import { PropsChart } from "../../types/PropsCharts";
import { DataChart } from "../../utils/data-charts";
import { usePaletteStore } from "../../store/pallette-store";

export const DobleBarChart: React.FC<PropsChart> = ({ isDrawer }) => {
  const { paletteColor } = usePaletteStore();
  return (
    <BarChart width={isDrawer ? 600 : 350} height={250} data={DataChart}>
      <XAxis dataKey="mes" />
      <Tooltip />
      <Bar
        dataKey="data"
        fill={paletteColor}
        activeBar={<Rectangle fill="gray" stroke="blue" />}
        radius={8}
      />
      <Bar
        dataKey="data2"
        fill={paletteColor}
        activeBar={<Rectangle fill="gray" stroke="purple" />}
        radius={8}
      />
    </BarChart>
  );
};
