"use client";

import { theme } from "@/setup/theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React from "react";

const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiThemeProvider;
