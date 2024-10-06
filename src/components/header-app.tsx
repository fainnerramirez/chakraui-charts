import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";

const HeaderApp = () => {
  return (
    <Box as="header" lineHeight={10} marginTop={10}>
      <Heading>Gráficos Atractívos</Heading>
      <Box>
        <Text>
          Construido con Chakra UI y Recharts , para proyectos React open source
        </Text>
      </Box>
      <ButtonGroup>
        <Button variant={"secondary"}>
          <Link href="https://v2.chakra-ui.com/getting-started" isExternal>
            Documentación de Chakra UI <ExternalLinkIcon mx="2px" />
          </Link>
        </Button>
        <Button variant={"primary"}>
          <Link href="https://recharts.org/en-US/api" isExternal>
            Documentación de Recharts <ExternalLinkIcon mx="2px" />
          </Link>
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default HeaderApp;
