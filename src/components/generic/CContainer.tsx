import { BoxProps, Container, SxProps, Theme } from "@mui/material";
import React from "react";

interface props extends BoxProps {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
  testId?: string;
}

export default function CContainer({ sx, children, testId }: props) {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        ...sx,
      }}
      data-cy={testId}
    >
      {children}
    </Container>
  );
}
