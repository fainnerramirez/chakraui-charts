import React, { useContext } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis } from "recharts";
import { ColorContext } from "../../contexts/PalletteColorContext";
import { PropsChart } from "../../types/PropsCharts";
import { DataChart } from "../../utils/data-charts";

export const StakedBarChart: React.FC<PropsChart> = ({ isDrawer }) => {
  const { palletteColor } = useContext(ColorContext);
  return (
    <BarChart width={isDrawer ? 600 : 350} height={250} data={DataChart}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="mes" />
      <Tooltip />
      <Legend />
      <Bar dataKey="data" stackId="a" fill={palletteColor} />
      <Bar dataKey="data2" stackId="a" fill={"gray"} />
    </BarChart>
  );
};
