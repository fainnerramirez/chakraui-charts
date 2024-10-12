import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { DataChart, DataChartPie } from "../../utils/data-charts";
import { ColorContext } from "../../contexts/PalletteColorContext";
import { useContext } from "react";

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const PieChartCustomizable = ({ isDrawer }: any) => {
  const { palletteColor } = useContext(ColorContext);

  return (
    <PieChart width={isDrawer ? 600 : 350} height={250}>
      <Pie
        data={DataChartPie}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill={"#ffffff"}
        dataKey="visitas"
      >
        {DataChart.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={palletteColor} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};
