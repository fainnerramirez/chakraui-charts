import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FaRegChartBar } from "react-icons/fa";
import { IoMdCopy } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import { TypeCharts } from "../utils/data-charts";
import { AreaCharts } from "./Areacharts/area-chart";
import { PercentChartArea } from "./Areacharts/percent-chart";
import { StakedAreaChart } from "./Areacharts/staked-area-chart";
import { BarCharts } from "./Barcharts/bart-chart";
import { CustomBarChart } from "./Barcharts/custom-bar-chart";
import { DobleBarChart } from "./Barcharts/doble-bar-chart";
import { StakedBarChart } from "./Barcharts/staked-bar-chart";
import { VerticalBarChart } from "./Barcharts/vertical-bar-chart";
import Chart from "./chart";
import DrawerCodeDemostration from "./drawer-code-demostration";
import { LineBarchCharts } from "./LineBarcharts/line-bar-charts";
import { PieChartCustomizable } from "./PieCharts/pie-chart-customizable";

const data = {
  presentation: [
    {
      id: uuidv4(),
      titleChart: "Titulo de ejemplo",
      description: "Lorem ipsum dolor sit amet, consectetur",
      titleDetails: "Detalles de la gráfica",
      descriptionDetails: "Lorem ipsum dolor sit amet, consectet",
      code: TypeCharts.BAR.code,
      component: <BarCharts />,
    },
    {
      id: uuidv4(),
      titleChart: "Titulo de ejemplo",
      description: "Lorem ipsum dolor sit amet, consectetur",
      titleDetails: "Detalles de la gráfica",
      descriptionDetails: "Lorem ipsum dolor sit amet, consectet",
      code: TypeCharts.AREA.code,
      component: <AreaCharts />,
    },
    {
      id: uuidv4(),
      titleChart: "Titulo de ejemplo",
      description: "Lorem ipsum dolor sit amet, consectetur",
      titleDetails: "Detalles de la gráfica",
      descriptionDetails: "Lorem ipsum dolor sit amet, consectet",
      code: TypeCharts.PIE.code,
      component: <PieChartCustomizable />,
    },
  ],
  bar: [
    {
      id: uuidv4(),
      titleChart: "Titulo de ejemplo",
      description: "Lorem ipsum dolor sit amet, consectetur",
      titleDetails: "Detalles de la gráfica",
      descriptionDetails: "Lorem ipsum dolor sit amet, consectet",
      code: TypeCharts.BAR.code,
      component: <DobleBarChart />,
    },
    {
      id: uuidv4(),
      titleChart: "Titulo de ejemplo",
      description: "Lorem ipsum dolor sit amet, consectetur",
      titleDetails: "Detalles de la gráfica",
      descriptionDetails: "Lorem ipsum dolor sit amet, consectet",
      code: TypeCharts.BAR.code,
      component: <CustomBarChart />,
    },
    {
      id: uuidv4(),
      titleChart: "Titulo de ejemplo",
      description: "Lorem ipsum dolor sit amet, consectetur",
      titleDetails: "Detalles de la gráfica",
      descriptionDetails: "Lorem ipsum dolor sit amet, consectet",
      code: TypeCharts.BAR.code,
      component: <StakedBarChart />,
    },
    {
      id: uuidv4(),
      titleChart: "Titulo de ejemplo",
      description: "Lorem ipsum dolor sit amet, consectetur",
      titleDetails: "Detalles de la gráfica",
      descriptionDetails: "Lorem ipsum dolor sit amet, consectet",
      code: TypeCharts.BAR.code,
      component: <VerticalBarChart />,
    },
    {
      id: uuidv4(),
      titleChart: "Titulo de ejemplo",
      description: "Lorem ipsum dolor sit amet, consectetur",
      titleDetails: "Detalles de la gráfica",
      descriptionDetails: "Lorem ipsum dolor sit amet, consectet",
      code: TypeCharts.BAR.code,
      component: <LineBarchCharts />,
    },
  ],
  area: [
    {
      id: uuidv4(),
      titleChart: "Titulo de ejemplo",
      description: "Lorem ipsum dolor sit amet, consectetur",
      titleDetails: "Detalles de la gráfica",
      descriptionDetails: "Lorem ipsum dolor sit amet, consectet",
      code: TypeCharts.AREA.code,
      component: <StakedAreaChart />,
    },
    {
      id: uuidv4(),
      titleChart: "Titulo de ejemplo",
      description: "Lorem ipsum dolor sit amet, consectetur",
      titleDetails: "Detalles de la gráfica",
      descriptionDetails: "Lorem ipsum dolor sit amet, consectet",
      code: TypeCharts.AREA.code,
      component: <PercentChartArea />,
    },
  ],
  pie: [
    {
      id: uuidv4(),
      titleChart: "Titulo de ejemplo",
      description: "Lorem ipsum dolor sit amet, consectetur",
      titleDetails: "Detalles de la gráfica",
      descriptionDetails: "Lorem ipsum dolor sit amet, consectet",
      code: TypeCharts.PIE.code,
      component: <PieChartCustomizable />,
    },
  ],
};

const CardChart = () => {
  const toast = useToast();

  const handleCopyCode = (code: string) => {
    return navigator.clipboard
      .writeText(code)
      .then(() => {
        toast({
          title: "Código copiado",
          status: "info",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: "Error al copiar código",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Stack
        id="presentationchart"
        direction={{ base: "column", md: "row" }}
        wrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {data.presentation.map((item) => {
          return (
            <Card key={item.id}>
              <CardHeader padding={2}>
                <HStack justifyContent={"space-between"}>
                  <HStack>
                    {" "}
                    <FaRegChartBar />
                    <Text>Gráfica</Text>
                  </HStack>
                  <ButtonGroup>
                    <Button
                      variant={"outline"}
                      size={"small"}
                      onClick={() => handleCopyCode(item.code)}
                    >
                      <IoMdCopy />
                    </Button>
                    <DrawerCodeDemostration
                      title={item.titleChart}
                      code={item.code}
                      children={item.component}
                    />
                  </ButtonGroup>
                </HStack>
              </CardHeader>
              <Divider color={"gray"} />
              <CardBody>
                <Box>
                  <Heading as={"h6"} size={"sm"}>
                    {item.titleChart}
                  </Heading>
                  <Text>{item.description}</Text>
                </Box>
                <Chart children={item.component} />
              </CardBody>
              <CardFooter>
                <Box>
                  <Heading as={"h6"} size={"sm"} fontWeight={500}>
                    {item.titleDetails}
                  </Heading>
                  <Text>{item.descriptionDetails}</Text>
                </Box>
              </CardFooter>
            </Card>
          );
        })}
      </Stack>
      <Divider />
      <Stack
        id="barchart"
        direction={{ base: "column", md: "row" }}
        spacing={5}
        wrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {data.bar.map((item) => {
          return (
            <Card key={item.id}>
              <CardHeader padding={2}>
                <HStack justifyContent={"space-between"}>
                  <HStack>
                    {" "}
                    <FaRegChartBar />
                    <Text>Gráfica</Text>
                  </HStack>
                  <ButtonGroup>
                    <Button
                      variant={"outline"}
                      size={"small"}
                      onClick={() => handleCopyCode(item.code)}
                    >
                      <IoMdCopy />
                    </Button>
                    <DrawerCodeDemostration
                      title={item.titleChart}
                      code={item.code}
                      children={item.component}
                    />
                  </ButtonGroup>
                </HStack>
              </CardHeader>
              <Divider color={"gray"} />
              <CardBody>
                <Box>
                  <Heading as={"h6"} size={"sm"}>
                    {item.titleChart}
                  </Heading>
                  <Text>{item.description}</Text>
                </Box>
                <Chart children={item.component} />
              </CardBody>
              <CardFooter>
                <Box>
                  <Heading as={"h6"} size={"sm"} fontWeight={500}>
                    {item.titleDetails}
                  </Heading>
                  <Text>{item.descriptionDetails}</Text>
                </Box>
              </CardFooter>
            </Card>
          );
        })}
      </Stack>
      <Divider padding={10} />
      <Stack
        id="areachart"
        direction={{ base: "column", md: "row" }}
        spacing={5}
        wrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {data.area.map((item) => {
          return (
            <Card key={item.id}>
              <CardHeader padding={2}>
                <HStack justifyContent={"space-between"}>
                  <HStack>
                    {" "}
                    <FaRegChartBar />
                    <Text>Gráfica</Text>
                  </HStack>
                  <ButtonGroup>
                    <Button
                      variant={"outline"}
                      size={"small"}
                      onClick={() => handleCopyCode(item.code)}
                    >
                      <IoMdCopy />
                    </Button>
                    <DrawerCodeDemostration
                      title={item.titleChart}
                      code={item.code}
                      children={item.component}
                    />
                  </ButtonGroup>
                </HStack>
              </CardHeader>
              <Divider color={"gray"} />
              <CardBody>
                <Box>
                  <Heading as={"h6"} size={"sm"}>
                    {item.titleChart}
                  </Heading>
                  <Text>{item.description}</Text>
                </Box>
                <Chart children={item.component} />
              </CardBody>
              <CardFooter>
                <Box>
                  <Heading as={"h6"} size={"sm"} fontWeight={500}>
                    {item.titleDetails}
                  </Heading>
                  <Text>{item.descriptionDetails}</Text>
                </Box>
              </CardFooter>
            </Card>
          );
        })}
      </Stack>
      <Divider />
      <Stack
        id="areachart"
        direction={{ base: "column", md: "row" }}
        spacing={5}
        wrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {data.pie.map((item) => {
          return (
            <Card key={item.id}>
              <CardHeader padding={2}>
                <HStack justifyContent={"space-between"}>
                  <HStack>
                    {" "}
                    <FaRegChartBar />
                    <Text>Gráfica</Text>
                  </HStack>
                  <ButtonGroup>
                    <Button
                      variant={"outline"}
                      size={"small"}
                      onClick={() => handleCopyCode(item.code)}
                    >
                      <IoMdCopy />
                    </Button>
                    <DrawerCodeDemostration
                      title={item.titleChart}
                      code={item.code}
                      children={item.component}
                    />
                  </ButtonGroup>
                </HStack>
              </CardHeader>
              <Divider color={"gray"} />
              <CardBody>
                <Box>
                  <Heading as={"h6"} size={"sm"}>
                    {item.titleChart}
                  </Heading>
                  <Text>{item.description}</Text>
                </Box>
                <Chart children={item.component} />
              </CardBody>
              <CardFooter>
                <Box>
                  <Heading as={"h6"} size={"sm"} fontWeight={500}>
                    {item.titleDetails}
                  </Heading>
                  <Text>{item.descriptionDetails}</Text>
                </Box>
              </CardFooter>
            </Card>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default CardChart;
