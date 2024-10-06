import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { DataChart } from "../../utils/data-charts";
import { useContext } from "react";
import { ColorContext } from "../../contexts/PalletteColorContext";

export const AreaCharts = ({ isDrawer }: any) => {
  const { palletteColor } = useContext(ColorContext);

  return (
    <AreaChart
      data={DataChart}
      width={isDrawer ? 600 : 350}
      height={250}
      accessibilityLayer
    >
      <XAxis dataKey="mes" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="visitas"
        stroke={palletteColor}
        fill={palletteColor}
      />
    </AreaChart>
  );
};
