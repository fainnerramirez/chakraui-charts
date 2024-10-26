import { CodeTypeChartsData, DataChartType } from "../types/PropsCharts";

const getRamdom = (): number => {
  return Math.floor(Math.random() * 10000) + 1;
};

export const DataChart: Array<DataChartType> = [
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

export const DataChartPie: Array<Omit<DataChartType, "data2">> = [
  { mes: "Ene", data: getRamdom() },
  { mes: "Feb", data: getRamdom() },
  { mes: "Mar", data: getRamdom() },
  { mes: "Abr", data: getRamdom() },
  { mes: "May", data: getRamdom() },
];

// type CodeTypeChartsData = {
//   BAR: Array<TypeCodeChart>;
//   LINEBAR: Array<TypeCodeChart>;
//   AREA: Array<TypeCodeChart>;
//   PIE: Array<TypeCodeChart>;
// };

// export const DataCode: CodeTypeChartsData = {
//   BAR: [
//     {
//       nameChart: "Barras Simples",
//       code: `
//         import { useColorModeValue } from "@chakra-ui/react";
// import { useContext } from "react";
// import { Bar, BarChart, Tooltip, XAxis } from "recharts";
// import { ColorContext } from "../../contexts/PalletteColorContext";
// import { PropsChart } from "../../types/PropsCharts";
// import { DataChart } from "../../utils/data-charts";

// export const BarCharts: React.FC<PropsChart> = ({ isDrawer }) => {
//   const tooltipColor = useColorModeValue("#000000", "white");
//   const tooltipBg = useColorModeValue("#ffffff", "gray");
//   const { palletteColor } = useContext(ColorContext);

//   return (
//     <BarChart
//       width={isDrawer ? 600 : 350}
//       height={250}
//       accessibilityLayer
//       data={DataChart}
//     >
//       <Tooltip
//         contentStyle={{
//           color: tooltipColor,
//           backgroundColor: tooltipBg,
//           borderRadius: 10,
//         }}
//       />
//       <XAxis
//         dataKey="mes"
//         tickLine={false}
//         tickMargin={10}
//         axisLine={false}
//         tickFormatter={(value: any) => value.slice(0, 3)}
//       />
//       <Bar dataKey="data" fill={palletteColor} strokeWidth={2} radius={8} />
//     </BarChart>
//   );
// };

//       `,
//     },
//     {
//       nameChart: "Barras Customizable",
//       code: `
//  import { useContext } from "react";
// import { Bar, BarChart, Cell, XAxis } from "recharts";
// import { ColorContext } from "../../contexts/PalletteColorContext";
// import { PropsChart } from "../../types/PropsCharts";
// import { DataChart } from "../../utils/data-charts";

// const getPathString = (x: number, y: number, width: number, height: number) => {
//   return \`M\${x},\${y + height} C\${x + width / 3},\${y + height} \${x + width / 2},\${y + height / 3}
//           \${x + width / 2}, \${y}
//           C\${x + width / 2},\${y + height / 3} \${x + (2 * width) / 3},\${y + height}
//           \${x + width}, \${y + height} Z\`;
// };

// const TriangleBar = (props: any) => {
//   const { fill, x, y, width, height } = props;

//   // Almacenar el string del path en una variable
//   const pathString = getPathString(x, y, width, height);

//   return <path d={pathString} stroke="none" fill={fill} />;
// };

// export const CustomBarChart: React.FC<PropsChart> = ({ isDrawer }) => {
//   const { palletteColor } = useContext(ColorContext);

//   return (
//     <BarChart width={isDrawer ? 600 : 350} height={250} data={DataChart}>
//       <XAxis dataKey="mes" />
//       <Bar
//         dataKey="data"
//         fill="#8884d8"
//         shape={<TriangleBar />}
//         label={{ position: "top" }}
//       >
//         {DataChart.map((_, index) => (
//           <Cell key={\`cell-\${index}\`} fill={palletteColor} />
//         ))}
//       </Bar>
//     </BarChart>
//   );
// };
// `,
//     },
//     {
//       nameChart: "Barras Dobles",
//       code: `
//         import { useContext } from "react";
// import { Bar, BarChart, Rectangle, Tooltip, XAxis } from "recharts";
// import { ColorContext } from "../../contexts/PalletteColorContext";
// import { PropsChart } from "../../types/PropsCharts";
// import { DataChart } from "../../utils/data-charts";

// export const DobleBarChart: React.FC<PropsChart> = ({ isDrawer }) => {
//   const { palletteColor } = useContext(ColorContext);
//   return (
//     <BarChart width={isDrawer ? 600 : 350} height={250} data={DataChart}>
//       <XAxis dataKey="mes" />
//       <Tooltip />
//       <Bar
//         dataKey="data"
//         fill={palletteColor}
//         activeBar={<Rectangle fill="gray" stroke="blue" />}
//         radius={8}
//       />
//       <Bar
//         dataKey="data2"
//         fill={palletteColor}
//         activeBar={<Rectangle fill="gray" stroke="purple" />}
//         radius={8}
//       />
//     </BarChart>
//   );
// };

//       `,
//     },
//     {
//       nameChart: "Barras Verticales",
//       code: `
//         import { useContext } from "react";
// import {
//   Area,
//   Bar,
//   CartesianGrid,
//   ComposedChart,
//   Legend,
//   Line,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";
// import { ColorContext } from "../../contexts/PalletteColorContext";
// import { PropsChart } from "../../types/PropsCharts";
// import { DataChart } from "../../utils/data-charts";

// export const VerticalBarChart: React.FC<PropsChart> = ({ isDrawer }) => {
//   const { palletteColor } = useContext(ColorContext);

//   return (
//     <ComposedChart
//       layout="vertical"
//       width={isDrawer ? 600 : 350}
//       height={250}
//       data={DataChart}
//       margin={{
//         top: 20,
//         right: 20,
//         bottom: 20,
//         left: 20,
//       }}
//     >
//       <CartesianGrid stroke="#f5f5f5" />
//       <XAxis type="number" />
//       <YAxis dataKey="mes" type="category" scale="band" />
//       <Tooltip />
//       <Legend />
//       <Area dataKey="data" fill="#8884d8" stroke="#8884d8" />
//       <Bar dataKey="data" barSize={20} fill={palletteColor} />
//       <Line dataKey="data2" stroke={palletteColor} />
//     </ComposedChart>
//   );
// };

//       `,
//     },
//   ],
//   AREA: [
//     {
//       nameChart: "Área",
//       code: `
//         import { useContext } from "react";`,
//     },
//   ],
//   LINEBAR: [
//     {
//       nameChart: "Linea y Barras",
//       code: `
//         import { useContext } from "react";`,
//     },
//   ],
//   PIE: [
//     {
//       nameChart: "Torta",
//       code: `
//         import { useContext } from "react";`,
//     },
//   ],
// };

export const DataCode: CodeTypeChartsData = {
  BAR: {
    barSimple: {
      data: {
        nameChart: "Barra Simple",
        code: "",
      },
    },
    barDoble: {
      data: {
        nameChart: "Barra Simple",
        code: "",
      },
    },
  },
  AREA: {
    barSimple: {
      data: {
        nameChart: "",
        code: "",
      },
    },
  },
  LINEBAR: {
    barDoble: {
      data: {
        nameChart: "",
        code: "",
      },
    },
    barSimple: {
      data: {
        nameChart: "",
        code: "",
      },
    },
  },
  PIE: {
    barSimple: {
      data: {
        nameChart: "",
        code: "",
      },
    },
  },
};
