import React from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis } from "recharts";
import type { PropsChart } from "../../types/PropsCharts";
import { DataChart } from "../../utils/data-charts";
import { usePaletteStore } from "../../store/pallette-store";

export const StakedBarChart: React.FC<PropsChart> = ({ isDrawer }) => {
  const { paletteColor } = usePaletteStore();
  return (
    <BarChart width={isDrawer ? 600 : 350} height={250} data={DataChart}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="mes" />
      <Tooltip />
      <Legend />
      <Bar dataKey="data" stackId="a" fill={paletteColor} />
      <Bar dataKey="data2" stackId="a" fill={"gray"} />
    </BarChart>
  );
};
