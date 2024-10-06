import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Heading, HStack, Link } from "@chakra-ui/react";

const FooterApp = () => {
  return (
    <HStack
      marginTop={20}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={5}
      bg={"#000000"}
      color={"#ffffff"}
    >
      <Heading as="h1" size={"sm"}>
        Creator{" "}
        <Link href="https://github.com/fainnerramirez" isExternal>
          @Fainner Ramirez <ExternalLinkIcon mx="2px" />
        </Link>
      </Heading>
    </HStack>
  );
};

export default FooterApp;
