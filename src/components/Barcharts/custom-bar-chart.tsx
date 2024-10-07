import React, { useContext } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { DataChart } from "../../utils/data-charts";
import { ColorContext } from "../../contexts/PalletteColorContext";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props: any) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export const CustomBarChart = () => {
  const { palletteColor } = useContext(ColorContext);
  return (
    <BarChart width={350} height={250} data={DataChart}>
      <XAxis dataKey="mes" />
      <Bar
        dataKey="visitas"
        fill="#8884d8"
        shape={<TriangleBar />}
        label={{ position: "top" }}
      >
        {DataChart.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={palletteColor} />
        ))}
      </Bar>
    </BarChart>
  );
};
