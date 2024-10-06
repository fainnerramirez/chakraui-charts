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
  useToast,
  VStack,
} from "@chakra-ui/react";
import { BarCharts } from "./Barcharts/bart-chart";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { IoMdCopy } from "react-icons/io";

const DrawerCodeDemostration = ({ code, children, title }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
    <>
      <Button variant={"outline"} size={"small"} onClick={onOpen}>
        Ver código
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"lg"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{title}</DrawerHeader>
          <DrawerBody>
            <Card
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {children}
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
                  <Button
                    variant={"outline"}
                    size={"sm"}
                    fontSize={20}
                    onClick={() => handleCopyCode(code)}
                  >
                    <IoMdCopy />
                  </Button>
                </Flex>
                <Box width={"98%"}>
                  <SyntaxHighlighter language="javascript" style={atomOneDark}>
                    {code}
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
