import {
  Box,
  Button,
  Card,
  Code,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Input,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { BarCharts } from "./Barcharts/bart-chart";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { IoMdCopy } from "react-icons/io";

const DrawerCodeDemostration = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button variant={"outline"} size={"small"} onClick={onOpen}>
        Ver código
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"lg"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Gráfica Barra Simple</DrawerHeader>
          <DrawerBody>
            <Card>
              <BarCharts isDrawer={true} />
            </Card>
            <Divider orientation="horizontal" padding={3} />
            <Box marginTop={7}>
              <VStack width={"100%"}>
                <Flex
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  width={"100%"}
                >
                  <Button variant={"primary"} size={"small"}>
                    Código
                  </Button>
                  <Button variant={"outline"} size={"sm"} fontSize={20}>
                    <IoMdCopy />
                  </Button>
                </Flex>
                <Box width={"98%"}>
                  <SyntaxHighlighter language="javascript" style={atomOneDark}>
                    {`import {
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
};`}
                  </SyntaxHighlighter>
                </Box>
              </VStack>
            </Box>
          </DrawerBody>
          <DrawerFooter textAlign={"center"}>
            <Code>Hecho Por Fainner Ramirez</Code>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerCodeDemostration;
