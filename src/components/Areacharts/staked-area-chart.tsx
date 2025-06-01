import React from "react";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis } from "recharts";
import type { PropsChart } from "../../types/PropsCharts";
import { DataChart } from "../../utils/data-charts";
import { usePaletteStore } from "../../store/pallette-store";

export const StakedAreaChart: React.FC<PropsChart> = ({ isDrawer }) => {
  const { paletteColor } = usePaletteStore();

  return (
    <AreaChart width={isDrawer ? 600 : 350} height={250} data={DataChart}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="mes" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="data"
        stackId="1"
        stroke={paletteColor}
        fill={paletteColor}
      />
      <Area
        type="monotone"
        dataKey="data2"
        stackId="1"
        stroke={paletteColor}
        fill={paletteColor}
      />
      <Area
        type="monotone"
        dataKey="data"
        stackId="1"
        stroke={paletteColor}
        fill={paletteColor}
      />
    </AreaChart>
  );
};
