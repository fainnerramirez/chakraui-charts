import { defineStyleConfig, extendTheme } from "@chakra-ui/react";
import "@fontsource/ubuntu";

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: "bold",
    textTransform: "capitalize",
    borderRadius: "base",
  },
  sizes: {
    small: {
      fontsize: "8px",
      px: 1.5,
      py: 1.5,
    },
    sm: {
      fontSize: "sm",
      px: 4, 
      py: 3,
    },
    md: {
      fontSize: "md",
      px: 6,
      py: 4,
    },
  },
  variants: {
    primary: {
      bg: "blackAlpha.900",
      color: "white",
      borderRadius: 10,
    },
    secondary: {
      bg: "white",
      color: "blackAlpha.900",
      borderRadius: 10,
      border: "2px solid black",
    },
  },
  defaultProps: {
    size: "md",
    variant: "primary",
  },
});

export const theme = extendTheme({
  fonts: {
    heading: `'Ubuntu', sans-serif;`,
    body: `'Ubuntu', sans-serif;`,
  },
  components: {
    Button,
  },
});
