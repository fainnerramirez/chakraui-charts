import { Heading, HStack } from "@chakra-ui/react";

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
      <Heading as="h1" size={"md"}>
        Hecho por Fainner Ramirez
      </Heading>
    </HStack>
  );
};

export default FooterApp;
