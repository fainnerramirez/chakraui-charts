import React, { PureComponent, useContext } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { DataChart } from "../../utils/data-charts";
import { ColorContext } from "../../contexts/PalletteColorContext";

export const DobleBarChart = ({ isDrawer }: any) => {
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
