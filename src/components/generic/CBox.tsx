import { Box, BoxProps, SxProps, Theme } from "@mui/material";
import React from "react";

interface props extends BoxProps {
  col?: boolean;
  children: React.ReactNode;
  NoGap?: boolean;
  smallGap?: boolean;
  mediumGap?: boolean;
  largeGap?: boolean;
  customGap?: number | { xs?: number; sm?: number; md?: number };
  siPadding?: boolean;
  smallPadding?: boolean;
  mediumPadding?: boolean;
  largePadding?: boolean;
  NoXPadding?: boolean;
  NoYPadding?: boolean;
  NoTopPadding?: boolean;
  NoBottomPadding?: boolean;
  customPadding?: number | { xs?: number; sm?: number; md?: number };
  round?: boolean;
  sx?: SxProps<Theme>;
  className?: string;
  clickable?: boolean;
  ac?: boolean;
  jc?: boolean;
  jsb?: boolean;
  shadow?: number;
  w100?: boolean;
  testID?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const CBox = ({
  col,
  children,
  NoGap,
  smallGap,
  mediumGap,
  largeGap,
  customGap,
  siPadding,
  smallPadding,
  mediumPadding,
  largePadding,
  NoXPadding,
  NoYPadding,
  NoTopPadding,
  NoBottomPadding,
  customPadding,
  round,
  sx,
  className,
  clickable,
  ac,
  jc,
  jsb,
  shadow,
  testID,
  w100,
  ...props
}: props) => {
  let gap = { xs: 2, sm: 2, md: 3 };
  if (NoGap) {
    gap = { xs: 0, sm: 0, md: 0 };
  } else if (smallGap) {
    gap = { xs: 1, sm: 1, md: 1 };
  } else if (mediumGap) {
    gap = { xs: 2, sm: 2, md: 2 };
  } else if (largeGap) {
    gap = { xs: 3, sm: 3, md: 3 };
  } else if (customGap) {
    gap =
      typeof customGap === "number"
        ? { xs: customGap, sm: customGap, md: customGap }
        : {
            xs: customGap.xs || 0,
            sm: customGap.sm || customGap.xs || 0,
            md: customGap.md || 0,
          };
  }

  let padding = { xs: 0, sm: 0, md: 0 };
  if (siPadding) {
    padding = { xs: 2, sm: 2, md: 3 };
  } else if (smallPadding) {
    padding = { xs: 1, sm: 1, md: 1 };
  } else if (mediumPadding) {
    padding = { xs: 2, sm: 2, md: 2 };
  } else if (largePadding) {
    padding = { xs: 3, sm: 3, md: 3 };
  } else if (customPadding) {
    padding =
      typeof customPadding === "number"
        ? {
            xs: customPadding,
            sm: customPadding,
            md: customPadding,
          }
        : {
            xs: customPadding.xs || 0,
            sm: customPadding.sm || customPadding.xs || 0,
            md: customPadding.md || 0,
          };
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: col ? "column" : "row",
        gap: gap,
        px: NoXPadding ? "0 !important" : "unset",
        py: NoYPadding ? "0 !important" : "unset",
        pt: NoTopPadding ? "0 !important" : "unset",
        pb: NoBottomPadding ? "0 !important" : "unset",
        p: padding,
        cursor: clickable ? "pointer" : "dafault",
        alignItems: ac ? "center" : "unset",
        justifyContent: jc ? "center" : jsb ? "space-between" : "unset",
        boxShadow: shadow || "unset",
        width: w100 ? "100%" : "unset",
        ...sx,
      }}
      className={className}
      data-cy={testID ? testID : undefined}
      {...props}
    >
      {children}
    </Box>
  );
};

export default CBox;
