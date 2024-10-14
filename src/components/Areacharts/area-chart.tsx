import { useContext } from "react";
import { Area, AreaChart, Tooltip, XAxis } from "recharts";
import { ColorContext } from "../../contexts/PalletteColorContext";
import { PropsChart } from "../../types/PropsCharts";
import { DataChart } from "../../utils/data-charts";

export const AreaCharts = ({ isDrawer }: PropsChart) => {
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
