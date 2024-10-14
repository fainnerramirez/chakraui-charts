import { useContext } from "react";
import { Bar, BarChart, Cell, XAxis } from "recharts";
import { ColorContext } from "../../contexts/PalletteColorContext";
import { DataChart } from "../../utils/data-charts";

const getPath = (x: number, y: number, width: number, height: number) => {
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
        {DataChart.map((_, index) => (
          <Cell key={`cell-${index}`} fill={palletteColor} />
        ))}
      </Bar>
    </BarChart>
  );
};
