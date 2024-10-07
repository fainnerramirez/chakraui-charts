import React, { PureComponent, useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { DataChart } from "../../utils/data-charts";
import { ColorContext } from "../../contexts/PalletteColorContext";

export const StakedBarChart = () => {
  const { palletteColor } = useContext(ColorContext);
  return (
    <BarChart width={350} height={250} data={DataChart}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="mes" />
      <Tooltip />
      <Legend />
      <Bar dataKey="visitas" stackId="a" fill={palletteColor} />
      <Bar dataKey="visitas2" stackId="a" fill={"gray"} />
    </BarChart>
  );
};
