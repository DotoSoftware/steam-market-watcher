import { extendTheme } from "@chakra-ui/react";

// example theme
export const customTheme = extendTheme({
  fonts: {
    body: "Inter,sans-serif",
    heading: "Inter,sans-serif",
    mono: "Menlo, monospace",
  },
  styles: {
    global: {
      a: {
        fontWeight: "medium",
      },
    },
  },
});
