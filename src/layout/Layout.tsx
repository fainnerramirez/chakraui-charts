import FooterApp from "../components/footer-app";
import NavbarApp from "../components/navbar-app";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }: any) => {
  return (
    <>
      <NavbarApp />
      <Box as="main" width={{ base: "100%", md: "85%" }} margin={"auto"}>
        {children}
      </Box>
      <FooterApp />
    </>
  );
};

export default Layout;
