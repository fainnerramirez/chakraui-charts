import { defineStyleConfig, extendTheme } from "@chakra-ui/react";
import "@fontsource/ubuntu";

const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: "bold",
    textTransform: "capitalize",
    borderRadius: "base", // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    small: {
      fontsize: "8px",
      px: 1.5,
      py: 1.5,
    },
    sm: {
      fontSize: "sm",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
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
  // The default size and variant values
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
