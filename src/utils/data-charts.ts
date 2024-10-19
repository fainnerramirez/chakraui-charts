const getRamdom = (): number => {
  return Math.floor(Math.random() * 10000);
};

type DataChartType = {
  mes: string;
  data: number;
  data2: number;
};

export const DataChart: DataChartType[] = [
  { mes: "Ene", data: getRamdom(), data2: getRamdom() },
  { mes: "Feb", data: getRamdom(), data2: getRamdom() },
  { mes: "Mar", data: getRamdom(), data2: getRamdom() },
  { mes: "Abr", data: getRamdom(), data2: getRamdom() },
  { mes: "May", data: getRamdom(), data2: getRamdom() },
  { mes: "Jun", data: getRamdom(), data2: getRamdom() },
  { mes: "Jul", data: getRamdom(), data2: getRamdom() },
  { mes: "Ago", data: getRamdom(), data2: getRamdom() },
  { mes: "Sep", data: getRamdom(), data2: getRamdom() },
  { mes: "Oct", data: getRamdom(), data2: getRamdom() },
  { mes: "Nov", data: getRamdom(), data2: getRamdom() },
  { mes: "Dic", data: getRamdom(), data2: getRamdom() },
];

export const DataChartPie: Omit<DataChartType, "data2">[] = [
  { mes: "Ene", data: getRamdom() },
  { mes: "Feb", data: getRamdom() },
  { mes: "Mar", data: getRamdom() },
  { mes: "Abr", data: getRamdom() },
  { mes: "May", data: getRamdom() },
];

export const TypeCharts = {
  BAR: {
    code: `import {
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
import React, { PureComponent } from "react";
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

const getRamdom = () => {
  return Math.floor(Math.random() * 10000);
};

const data = [
  { mes: "Ene", data: getRamdom() },
  { mes: "Feb", data: getRamdom() },
  { mes: "Mar", data: getRamdom() },
  { mes: "Abr", data: getRamdom() },
  { mes: "May", data: getRamdom() },
  { mes: "Jun", data: getRamdom() },
  { mes: "Jul", data: getRamdom() },
  { mes: "Ago", data: getRamdom() },
  { mes: "Sep", data: getRamdom() },
  { mes: "Oct", data: getRamdom() },
  { mes: "Nov", data: getRamdom() },
  { mes: "Dic", data: getRamdom() },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
];

export const BarCharts = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignContent={"center"}
      width={{ base: "100%", md: "50%" }}
      height={"100%"}
    >
      <Card bg={useColorModeValue("gray.50", "gray.900")}>
        <CardHeader>
          <Heading as="h2" size={"md"} textAlign={"center"}>
            data Mensuales
          </Heading>
        </CardHeader>
        <CardBody>
          <BarChart width={700} height={500} accessibilityLayer data={data}>
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="data"
              fill={COLORS[Math.floor(Math.random() * COLORS.length)]}
              strokeWidth={2}
              radius={8}
            />
          </BarChart>
        </CardBody>
        <Divider />
        <CardFooter width={"100%"}>
          <Text textAlign={"center"} width={"100%"}>
            Resumen mensual del número de data de tus publicaciones en
            Unipensiones
          </Text>
        </CardFooter>
      </Card>
    </Flex>
  );
};`,
  },
  LINEBAR: {
    code: `
        import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";

export const DataChart = [
  { mes: "Ene", data: getRamdom() },
  { mes: "Feb", data: getRamdom() },
  { mes: "Mar", data: getRamdom() },
  { mes: "Abr", data: getRamdom() },
  { mes: "May", data: getRamdom() },
  { mes: "Jun", data: getRamdom() },
  { mes: "Jul", data: getRamdom() },
  { mes: "Ago", data: getRamdom() },
  { mes: "Sep", data: getRamdom() },
  { mes: "Oct", data: getRamdom() },
  { mes: "Nov", data: getRamdom() },
  { mes: "Dic", data: getRamdom() },
];

export const LineBarchCharts = ({ isDrawer }: any) => {

  return (
    <ComposedChart width={isDrawer ? 600 : 350} height={250} data={DataChart}>
      <XAxis dataKey="mes" scale="band" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="data"
        fill={"#000000"}
        stroke={"#000000"}
      />
      <Bar dataKey="data" barSize={20} fill={"#000000"} radius={8} />
      <Line type="monotone" dataKey="data" stroke={"#000000"} />
      <Scatter dataKey="data" fill={"#CBD5E0"} />
    </ComposedChart>
  );
};
    `,
  },
  AREA: {
    code: `
    import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const AreaCharts = ({ isDrawer }: any) => {

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
        dataKey="data"
        stroke={"#000000"}
        fill={"#000000"}
      />
    </AreaChart>
  );
};
    `,
  },
  PIE: {
    code: `
    import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { DataChart } from "../../utils/data-charts";
import { ColorContext } from "../../contexts/PalletteColorContext";
import { useContext } from "react";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

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
      {(percent * 100).toFixed(0)} + "%"}
    </text>
  );
};

export const PieChartCustomizable = () => {
  const { palletteColor } = useContext(ColorContext);

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={DataChart}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="data1"
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={palletteColor} />
        ))}
      </Pie>
    </PieChart>
  );
};
    `,
  },
};
