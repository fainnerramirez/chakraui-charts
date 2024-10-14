import { useContext } from "react";
import { Bar, BarChart, Rectangle, Tooltip, XAxis } from "recharts";
import { ColorContext } from "../../contexts/PalletteColorContext";
import { PropsChart } from "../../types/PropsCharts";
import { DataChart } from "../../utils/data-charts";

export const DobleBarChart = ({ isDrawer }: PropsChart) => {
  const { palletteColor } = useContext(ColorContext);
  return (
    <BarChart width={isDrawer ? 600 : 350} height={250} data={DataChart}>
      <XAxis dataKey="mes" />
      <Tooltip />
      <Bar
        dataKey="visitas"
        fill={palletteColor}
        activeBar={<Rectangle fill="gray" stroke="blue" />}
        radius={8}
      />
      <Bar
        dataKey="visitas2"
        fill={palletteColor}
        activeBar={<Rectangle fill="gray" stroke="purple" />}
        radius={8}
      />
    </BarChart>
  );
};
