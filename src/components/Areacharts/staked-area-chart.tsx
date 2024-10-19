import React, { useContext } from "react";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis } from "recharts";
import { ColorContext } from "../../contexts/PalletteColorContext";
import { PropsChart } from "../../types/PropsCharts";
import { DataChart } from "../../utils/data-charts";

export const StakedAreaChart: React.FC<PropsChart> = ({ isDrawer }) => {
  const { palletteColor } = useContext(ColorContext);

  return (
    <AreaChart width={isDrawer ? 600 : 350} height={250} data={DataChart}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="mes" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="data"
        stackId="1"
        stroke={palletteColor}
        fill={palletteColor}
      />
      <Area
        type="monotone"
        dataKey="data2"
        stackId="1"
        stroke={palletteColor}
        fill={palletteColor}
      />
      <Area
        type="monotone"
        dataKey="data"
        stackId="1"
        stroke={palletteColor}
        fill={palletteColor}
      />
    </AreaChart>
  );
};
