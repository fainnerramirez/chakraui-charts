import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  StepSeparator,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  Label,
  CartesianGrid,
  XAxis,
  YAxis,
  Rectangle,
} from "recharts";
import PalletteColorContext, {
  ColorContext,
} from "../../contexts/PalletteColorContext";

const getRamdom = () => {
  return Math.floor(Math.random() * 10000);
};

const data = [
  { mes: "Ene", visitas: getRamdom() },
  { mes: "Feb", visitas: getRamdom() },
  { mes: "Mar", visitas: getRamdom() },
  { mes: "Abr", visitas: getRamdom() },
  { mes: "May", visitas: getRamdom() },
  { mes: "Jun", visitas: getRamdom() },
  { mes: "Jul", visitas: getRamdom() },
  { mes: "Ago", visitas: getRamdom() },
  { mes: "Sep", visitas: getRamdom() },
  { mes: "Oct", visitas: getRamdom() },
  { mes: "Nov", visitas: getRamdom() },
  { mes: "Dic", visitas: getRamdom() },
];

export const BarCharts = (props: any) => {
  const { isDrawer } = props;
  const color = useColorModeValue("#000000", "white");
  const tooltipColor = useColorModeValue("#000000", "white");
  const tooltipBg = useColorModeValue("#ffffff", "gray");
  const { palletteColor } = useContext(ColorContext);

  return (
    <BarChart
      width={isDrawer ? 600 : 350}
      height={250}
      accessibilityLayer
      data={data}
    >
      <Tooltip
        contentStyle={{
          color: tooltipColor,
          backgroundColor: tooltipBg,
          borderRadius: 10,
        }}
      />
      <XAxis
        dataKey="mes"
        tickLine={false}
        tickMargin={10}
        axisLine={false}
        tickFormatter={(value: any) => value.slice(0, 3)}
      />
      <Bar dataKey="visitas" fill={palletteColor} strokeWidth={2} radius={8} />
    </BarChart>
  );
};
