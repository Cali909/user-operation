"use client";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 624,
      md: 984,
      lg: 1440,
      xl: 1800,
    },
  },
  palette: {
    background: {
      default: "#ededed",
    },
    secondary: {
      main: "#41518b",
    },
    primary: {
      main: "#b64241",
    },
  },
  spacing: [0, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96],
  shape: {
    borderRadius: 4,
  },

  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          width: "40px",
          height: "40px",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        disableGutters: true,
      },
    },
  },
});
