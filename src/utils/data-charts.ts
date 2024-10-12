const getRamdom = () => {
  return Math.floor(Math.random() * 10000);
};

export const DataChart = [
  { mes: "Ene", visitas: getRamdom(), visitas2: getRamdom() },
  { mes: "Feb", visitas: getRamdom(), visitas2: getRamdom() },
  { mes: "Mar", visitas: getRamdom(), visitas2: getRamdom() },
  { mes: "Abr", visitas: getRamdom(), visitas2: getRamdom() },
  { mes: "May", visitas: getRamdom(), visitas2: getRamdom() },
  { mes: "Jun", visitas: getRamdom(), visitas2: getRamdom() },
  { mes: "Jul", visitas: getRamdom(), visitas2: getRamdom() },
  { mes: "Ago", visitas: getRamdom(), visitas2: getRamdom() },
  { mes: "Sep", visitas: getRamdom(), visitas2: getRamdom() },
  { mes: "Oct", visitas: getRamdom(), visitas2: getRamdom() },
  { mes: "Nov", visitas: getRamdom(), visitas2: getRamdom() },
  { mes: "Dic", visitas: getRamdom(), visitas2: getRamdom() },
];

export const DataChartPie = [
  { mes: "Ene", visitas: getRamdom() },
  { mes: "Feb", visitas: getRamdom() },
  { mes: "Mar", visitas: getRamdom() },
  { mes: "Abr", visitas: getRamdom() },
  { mes: "May", visitas: getRamdom() },
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
            Visitas Mensuales
          </Heading>
        </CardHeader>
        <CardBody>
          <BarChart width={700} height={500} accessibilityLayer data={data}>
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="visitas"
              fill={COLORS[Math.floor(Math.random() * COLORS.length)]}
              strokeWidth={2}
              radius={8}
            />
          </BarChart>
        </CardBody>
        <Divider />
        <CardFooter width={"100%"}>
          <Text textAlign={"center"} width={"100%"}>
            Resumen mensual del número de visitas de tus publicaciones en
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

export const LineBarchCharts = ({ isDrawer }: any) => {

  return (
    <ComposedChart width={isDrawer ? 600 : 350} height={250} data={DataChart}>
      <XAxis dataKey="mes" scale="band" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="visitas"
        fill={"#000000"}
        stroke={"#000000"}
      />
      <Bar dataKey="visitas" barSize={20} fill={"#000000"} radius={8} />
      <Line type="monotone" dataKey="visitas" stroke={"#000000"} />
      <Scatter dataKey="visitas" fill={"#CBD5E0"} />
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
        dataKey="visitas"
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
        dataKey="visitas1"
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
