import { GridProps, SxProps, Theme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";

interface CGridContainer extends GridProps {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
}

const CGridContainer = ({ children, sx }: CGridContainer) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 2, md: 3, lg: 3 }}
      columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
      sx={{ flex: 1, alignItems: "center", ...sx }}
    >
      {children}
    </Grid>
  );
};

export default CGridContainer;
