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
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Chart from "./chart";
import { BarCharts } from "./Barcharts/bart-chart";
import { FaRegChartBar } from "react-icons/fa";
import { IoMdCopy } from "react-icons/io";
import DrawerCodeDemostration from "./drawer-code-demostration";

const CardChart = () => {
  return (
    <Stack
      width={"100%"}
      direction={{ base: "column", md: "row" }}
      spacing={5}
      wrap={"wrap"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Card>
        <CardHeader padding={2}>
          <HStack justifyContent={"space-between"}>
            <HStack>
              {" "}
              <FaRegChartBar />
              <Text>Gráfica</Text>
            </HStack>
            <ButtonGroup>
              <Button variant={"outline"} size={"small"}>
                <IoMdCopy />
              </Button>
              <DrawerCodeDemostration />
            </ButtonGroup>
          </HStack>
        </CardHeader>
        <Divider color={"gray"} />
        <CardBody>
          <Box>
            <Heading as={"h6"} size={"sm"}>
              Título de la gráfica
            </Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur.</Text>
          </Box>
          <Chart children={<BarCharts />} />
        </CardBody>
        <CardFooter>
          <Box>
            <Heading as={"h6"} size={"sm"} fontWeight={500}>
              Detalles de la gráfica
            </Heading>
            <Text>Lorem ipsum dolor sit amet.</Text>
          </Box>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader padding={2}>
          <HStack justifyContent={"space-between"}>
            <HStack>
              {" "}
              <FaRegChartBar />
              <Text>Gráfica</Text>
            </HStack>
            <ButtonGroup>
              <Button variant={"outline"} size={"small"}>
                <IoMdCopy />
              </Button>
              <DrawerCodeDemostration />
            </ButtonGroup>
          </HStack>
        </CardHeader>
        <Divider color={"gray"} />
        <CardBody>
          <Box>
            <Heading as={"h6"} size={"sm"}>
              Título de la gráfica
            </Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur.</Text>
          </Box>
          <Chart children={<BarCharts />} />
        </CardBody>
        <CardFooter>
          <Box>
            <Heading as={"h6"} size={"sm"} fontWeight={500}>
              Detalles de la gráfica
            </Heading>
            <Text>Lorem ipsum dolor sit amet.</Text>
          </Box>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader padding={2}>
          <HStack justifyContent={"space-between"}>
            <HStack>
              {" "}
              <FaRegChartBar />
              <Text>Gráfica</Text>
            </HStack>
            <ButtonGroup>
              <Button variant={"outline"} size={"small"}>
                <IoMdCopy />
              </Button>
              <DrawerCodeDemostration />
            </ButtonGroup>
          </HStack>
        </CardHeader>
        <Divider color={"gray"} />
        <CardBody>
          <Box>
            <Heading as={"h6"} size={"sm"}>
              Título de la gráfica
            </Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur.</Text>
          </Box>
          <Chart children={<BarCharts />} />
        </CardBody>
        <CardFooter>
          <Box>
            <Heading as={"h6"} size={"sm"} fontWeight={500}>
              Detalles de la gráfica
            </Heading>
            <Text>Lorem ipsum dolor sit amet.</Text>
          </Box>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader padding={2}>
          <HStack justifyContent={"space-between"}>
            <HStack>
              {" "}
              <FaRegChartBar />
              <Text>Gráfica</Text>
            </HStack>
            <ButtonGroup>
              <Button variant={"outline"} size={"small"}>
                <IoMdCopy />
              </Button>
              <DrawerCodeDemostration />
            </ButtonGroup>
          </HStack>
        </CardHeader>
        <Divider color={"gray"} />
        <CardBody>
          <Box>
            <Heading as={"h6"} size={"sm"}>
              Título de la gráfica
            </Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur.</Text>
          </Box>
          <Chart children={<BarCharts />} />
        </CardBody>
        <CardFooter>
          <Box>
            <Heading as={"h6"} size={"sm"} fontWeight={500}>
              Detalles de la gráfica
            </Heading>
            <Text>Lorem ipsum dolor sit amet.</Text>
          </Box>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader padding={2}>
          <HStack justifyContent={"space-between"}>
            <HStack>
              {" "}
              <FaRegChartBar />
              <Text>Gráfica</Text>
            </HStack>
            <ButtonGroup>
              <Button variant={"outline"} size={"small"}>
                <IoMdCopy />
              </Button>
              <DrawerCodeDemostration />
            </ButtonGroup>
          </HStack>
        </CardHeader>
        <Divider color={"gray"} />
        <CardBody>
          <Box>
            <Heading as={"h6"} size={"sm"}>
              Título de la gráfica
            </Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur.</Text>
          </Box>
          <Chart children={<BarCharts />} />
        </CardBody>
        <CardFooter>
          <Box>
            <Heading as={"h6"} size={"sm"} fontWeight={500}>
              Detalles de la gráfica
            </Heading>
            <Text>Lorem ipsum dolor sit amet.</Text>
          </Box>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader padding={2}>
          <HStack justifyContent={"space-between"}>
            <HStack>
              {" "}
              <FaRegChartBar />
              <Text>Gráfica</Text>
            </HStack>
            <ButtonGroup>
              <Button variant={"outline"} size={"small"}>
                <IoMdCopy />
              </Button>
              <DrawerCodeDemostration />
            </ButtonGroup>
          </HStack>
        </CardHeader>
        <Divider color={"gray"} />
        <CardBody>
          <Box>
            <Heading as={"h6"} size={"sm"}>
              Título de la gráfica
            </Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur.</Text>
          </Box>
          <Chart children={<BarCharts />} />
        </CardBody>
        <CardFooter>
          <Box>
            <Heading as={"h6"} size={"sm"} fontWeight={500}>
              Detalles de la gráfica
            </Heading>
            <Text>Lorem ipsum dolor sit amet.</Text>
          </Box>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader padding={2}>
          <HStack justifyContent={"space-between"}>
            <HStack>
              {" "}
              <FaRegChartBar />
              <Text>Gráfica</Text>
            </HStack>
            <ButtonGroup>
              <Button variant={"outline"} size={"small"}>
                <IoMdCopy />
              </Button>
              <DrawerCodeDemostration />
            </ButtonGroup>
          </HStack>
        </CardHeader>
        <Divider color={"gray"} />
        <CardBody>
          <Box>
            <Heading as={"h6"} size={"sm"}>
              Título de la gráfica
            </Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur.</Text>
          </Box>
          <Chart children={<BarCharts />} />
        </CardBody>
        <CardFooter>
          <Box>
            <Heading as={"h6"} size={"sm"} fontWeight={500}>
              Detalles de la gráfica
            </Heading>
            <Text>Lorem ipsum dolor sit amet.</Text>
          </Box>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader padding={2}>
          <HStack justifyContent={"space-between"}>
            <HStack>
              {" "}
              <FaRegChartBar />
              <Text>Gráfica</Text>
            </HStack>
            <ButtonGroup>
              <Button variant={"outline"} size={"small"}>
                <IoMdCopy />
              </Button>
              <DrawerCodeDemostration />
            </ButtonGroup>
          </HStack>
        </CardHeader>
        <Divider color={"gray"} />
        <CardBody>
          <Box>
            <Heading as={"h6"} size={"sm"}>
              Título de la gráfica
            </Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur.</Text>
          </Box>
          <Chart children={<BarCharts />} />
        </CardBody>
        <CardFooter>
          <Box>
            <Heading as={"h6"} size={"sm"} fontWeight={500}>
              Detalles de la gráfica
            </Heading>
            <Text>Lorem ipsum dolor sit amet.</Text>
          </Box>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader padding={2}>
          <HStack justifyContent={"space-between"}>
            <HStack>
              {" "}
              <FaRegChartBar />
              <Text>Gráfica</Text>
            </HStack>
            <ButtonGroup>
              <Button variant={"outline"} size={"small"}>
                <IoMdCopy />
              </Button>
              <DrawerCodeDemostration />
            </ButtonGroup>
          </HStack>
        </CardHeader>
        <Divider color={"gray"} />
        <CardBody>
          <Box>
            <Heading as={"h6"} size={"sm"}>
              Título de la gráfica
            </Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur.</Text>
          </Box>
          <Chart children={<BarCharts />} />
        </CardBody>
        <CardFooter>
          <Box>
            <Heading as={"h6"} size={"sm"} fontWeight={500}>
              Detalles de la gráfica
            </Heading>
            <Text>Lorem ipsum dolor sit amet.</Text>
          </Box>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader padding={2}>
          <HStack justifyContent={"space-between"}>
            <HStack>
              {" "}
              <FaRegChartBar />
              <Text>Gráfica</Text>
            </HStack>
            <ButtonGroup>
              <Button variant={"outline"} size={"small"}>
                <IoMdCopy />
              </Button>
              <DrawerCodeDemostration />
            </ButtonGroup>
          </HStack>
        </CardHeader>
        <Divider color={"gray"} />
        <CardBody>
          <Box>
            <Heading as={"h6"} size={"sm"}>
              Título de la gráfica
            </Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur.</Text>
          </Box>
          <Chart children={<BarCharts />} />
        </CardBody>
        <CardFooter>
          <Box>
            <Heading as={"h6"} size={"sm"} fontWeight={500}>
              Detalles de la gráfica
            </Heading>
            <Text>Lorem ipsum dolor sit amet.</Text>
          </Box>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader padding={2}>
          <HStack justifyContent={"space-between"}>
            <HStack>
              {" "}
              <FaRegChartBar />
              <Text>Gráfica</Text>
            </HStack>
            <ButtonGroup>
              <Button variant={"outline"} size={"small"}>
                <IoMdCopy />
              </Button>
              <DrawerCodeDemostration />
            </ButtonGroup>
          </HStack>
        </CardHeader>
        <Divider color={"gray"} />
        <CardBody>
          <Box>
            <Heading as={"h6"} size={"sm"}>
              Título de la gráfica
            </Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur.</Text>
          </Box>
          <Chart children={<BarCharts />} />
        </CardBody>
        <CardFooter>
          <Box>
            <Heading as={"h6"} size={"sm"} fontWeight={500}>
              Detalles de la gráfica
            </Heading>
            <Text>Lorem ipsum dolor sit amet.</Text>
          </Box>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader padding={2}>
          <HStack justifyContent={"space-between"}>
            <HStack>
              {" "}
              <FaRegChartBar />
              <Text>Gráfica</Text>
            </HStack>
            <ButtonGroup>
              <Button variant={"outline"} size={"small"}>
                <IoMdCopy />
              </Button>
              <DrawerCodeDemostration />
            </ButtonGroup>
          </HStack>
        </CardHeader>
        <Divider color={"gray"} />
        <CardBody>
          <Box>
            <Heading as={"h6"} size={"sm"}>
              Título de la gráfica
            </Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur.</Text>
          </Box>
          <Chart children={<BarCharts />} />
        </CardBody>
        <CardFooter>
          <Box>
            <Heading as={"h6"} size={"sm"} fontWeight={500}>
              Detalles de la gráfica
            </Heading>
            <Text>Lorem ipsum dolor sit amet.</Text>
          </Box>
        </CardFooter>
      </Card>
    </Stack>
  );
};

export default CardChart;
