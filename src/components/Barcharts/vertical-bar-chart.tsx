import React, { PureComponent, useContext } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { DataChart } from "../../utils/data-charts";
import { ColorContext } from "../../contexts/PalletteColorContext";

export const VerticalBarChart = () => {
  const { palletteColor } = useContext(ColorContext);
  return (
    <ComposedChart
      layout="vertical"
      width={350}
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
      <Area dataKey="visitas" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="visitas" barSize={20} fill={palletteColor} />
      <Line dataKey="visitas2" stroke={palletteColor} />
    </ComposedChart>
  );
};
