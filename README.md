# Chakra UI + Recharts

Construido con la libreria de UI [@ChakraUI](https://v2.chakra-ui.com/) y [@Recharts](https://recharts.org/en-US/) para generar gráfico de diferente estilos para proyectos React open source.

## Copiar y pegar en tus proyectos

Es tan sencillo como copiar y pegar el code en tu proyecto y darle la forma que quieras.
Habrá un ejemplo real de la implementación que podrás visualizar en la app.

- Ejemplo de código:

```js
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
            <XAxis
              dataKey="mes"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis />
            <Tooltip />
            <Legend />
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
};
```

## Autor

Hecho por [@Fainner Ramirez](https://v2.chakra-ui.com/)

- ¿Quieres ser sponsor? [sponsorsup](https://link.mercadopago.com.co/sponsorsup)
