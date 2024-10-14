import { useContext } from "react";
import {
  Area,
  Bar,
  ComposedChart,
  Line,
  Scatter,
  Tooltip,
  XAxis,
} from "recharts";
import { ColorContext } from "../../contexts/PalletteColorContext";
import { PropsChart } from "../../types/PropsCharts";
import { DataChart } from "../../utils/data-charts";

export const LineBarchCharts = ({ isDrawer }: PropsChart) => {
  const { palletteColor } = useContext(ColorContext);

  return (
    <ComposedChart width={isDrawer ? 600 : 350} height={250} data={DataChart}>
      <XAxis dataKey="mes" scale="band" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="visitas"
        fill={palletteColor}
        stroke={palletteColor}
      />
      <Bar dataKey="visitas" barSize={20} fill={palletteColor} radius={8} />
      <Line type="monotone" dataKey="visitas" stroke={palletteColor} />
      <Scatter dataKey="visitas" fill={"#CBD5E0"} />
    </ComposedChart>
  );
};
