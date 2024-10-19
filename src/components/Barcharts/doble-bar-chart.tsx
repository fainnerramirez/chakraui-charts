import { useContext } from "react";
import { Bar, BarChart, Rectangle, Tooltip, XAxis } from "recharts";
import { ColorContext } from "../../contexts/PalletteColorContext";
import { PropsChart } from "../../types/PropsCharts";
import { DataChart } from "../../utils/data-charts";

export const DobleBarChart: React.FC<PropsChart> = ({ isDrawer }) => {
  const { palletteColor } = useContext(ColorContext);
  return (
    <BarChart width={isDrawer ? 600 : 350} height={250} data={DataChart}>
      <XAxis dataKey="mes" />
      <Tooltip />
      <Bar
        dataKey="data"
        fill={palletteColor}
        activeBar={<Rectangle fill="gray" stroke="blue" />}
        radius={8}
      />
      <Bar
        dataKey="data2"
        fill={palletteColor}
        activeBar={<Rectangle fill="gray" stroke="purple" />}
        radius={8}
      />
    </BarChart>
  );
};
