import { useContext } from "react";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import { ColorContext } from "../../contexts/PalletteColorContext";
import { PropsChart } from "../../types/PropsCharts";
import { DataChart, DataChartPie } from "../../utils/data-charts";

const RADIAN = Math.PI / 180;

type PropsPieChart = {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
};

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: PropsPieChart) => {
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

export const PieChartCustomizable = ({ isDrawer }: PropsChart) => {
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
