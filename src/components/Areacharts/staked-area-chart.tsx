import React, { PureComponent, useContext } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { DataChart } from "../../utils/data-charts";
import { ColorContext } from "../../contexts/PalletteColorContext";

export const StakedAreaChart = () => {
  const { palletteColor } = useContext(ColorContext);
  return (
    <AreaChart width={350} height={250} data={DataChart}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="mes" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="visitas"
        stackId="1"
        stroke={palletteColor}
        fill={palletteColor}
      />
      <Area
        type="monotone"
        dataKey="visitas2"
        stackId="1"
        stroke={palletteColor}
        fill={palletteColor}
      />
      <Area
        type="monotone"
        dataKey="visitas"
        stackId="1"
        stroke={palletteColor}
        fill={palletteColor}
      />
    </AreaChart>
  );
};
