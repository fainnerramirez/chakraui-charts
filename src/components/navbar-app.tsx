import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaRegChartBar } from "react-icons/fa";

export const NavbarApp: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.900", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack>
            <Button
              padding={0}
              variant={"outline"}
              border={"none"}
              color={"#fff"}
              fontSize={30}
            >
              <FaRegChartBar />
            </Button>
            <Heading as="h1" size={"md"} color={"#ffffff"}>
              Chakraui-Charts
            </Heading>
          </HStack>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
