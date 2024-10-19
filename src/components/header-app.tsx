import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Link,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { Github, Linkedin } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";

const HeaderApp: React.FC = () => {
  return (
    <Box
      as="header"
      lineHeight={10}
      width={{ base: "85%", md: "100%" }}
      margin={"auto"}
    >
      <Heading mt={10}>Gráficos Atractívos</Heading>
      <Box>
        <Text lineHeight={5}>
          Construido con Chakra UI y Recharts , para proyectos React open source
        </Text>
      </Box>
      <Box mt={5} display={"flex"} flexDir={"column"}>
        <ButtonGroup>
          <Button variant={"secondary"}>
            <Link href="https://v2.chakra-ui.com/getting-started" isExternal>
              Chakra UI <ExternalLinkIcon mx="2px" />
            </Link>
          </Button>
          <Button variant={"primary"}>
            <Link href="https://recharts.org/en-US/api" isExternal>
              Recharts
              <ExternalLinkIcon mx="2px" />
            </Link>
          </Button>
        </ButtonGroup>
        <ButtonGroup mt={5}>
          <Tooltip label="Github">
            <Button
              variant={"outline"}
              size={"sm"}
              onClick={() => window.open("https://github.com/fainnerramirez")}
            >
              <Github />
            </Button>
          </Tooltip>
          <Tooltip label="LinkedIn">
            <Button
              variant={"outline"}
              size={"sm"}
              onClick={() =>
                window.open("https://www.linkedin.com/in/fainnerramirez/")
              }
            >
              <Linkedin />
            </Button>
          </Tooltip>
          <Tooltip label="Twitter">
            <Button
              variant={"outline"}
              size={"sm"}
              onClick={() => window.open("https://x.com/FainnerR")}
            >
              <BsTwitterX />
            </Button>
          </Tooltip>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default HeaderApp;
