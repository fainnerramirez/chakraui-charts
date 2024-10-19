import { Box } from "@chakra-ui/react";
import React from "react";
import FooterApp from "../components/footer-app";
import { NavbarApp } from "../components/navbar-app";
import { PropsChildren } from "../types/PropsCharts";

const Layout: React.FC<PropsChildren> = ({ children }) => {
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
