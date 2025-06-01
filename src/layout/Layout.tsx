import { Box, Container } from "@chakra-ui/react";
import React from "react";
import FooterApp from "../components/footer-app";
import { NavbarApp } from "../components/navbar-app";
import type { PropsChildren } from "../types/PropsCharts";

const Layout: React.FC<PropsChildren> = ({ children }) => {
  return (
    <>
      <NavbarApp />
      <Container maxWidth={{ base: "full", md: "6xl" }}>
        {children}
      </Container>
      <FooterApp />
    </>
  );
};

export default Layout;
