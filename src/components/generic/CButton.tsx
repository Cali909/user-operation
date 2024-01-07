import { Button, ButtonProps } from "@mui/material";

export interface CButton extends ButtonProps {
  testID?: string;
  pill?: boolean;
}

const CButton = ({ pill, children, testID, sx, ...props }: CButton) => {
  let padding = { xs: "6px 12px", md: "8px 16px" };

  return (
    <Button
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        p: padding,
        width: props.fullWidth ? 1 : "fit-content",
        whiteSpace: "nowrap",
        borderRadius: pill ? "200px" : "0px",
        textTransform: "none",
        minWidth: 0,
        typography: "body-50",
        fontWeight: 500,
        ...sx,
      }}
      data-cy={testID ? testID : undefined}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CButton;
