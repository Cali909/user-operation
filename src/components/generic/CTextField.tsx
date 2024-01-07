import { TextField, TextFieldProps } from "@mui/material";

const CTextField = (props: TextFieldProps) => {
  return (
    <TextField
      variant="filled"
      sx={{
        "& .MuiInputBase-root": {
          backgroundColor: "grey.100",
          ":hover": {
            backgroundColor: "grey.100",
          },
          "&.Mui-focused": {
            backgroundColor: "grey.100",
          },

          p: 0,
          borderRadius: "0px",
          typography: "body-50",
          "& > fieldset": {
            border: "1px solid",
            borderColor: props.error ? "error.main" : "neutral.200",
          },
        },
        input: {
          typography: "h6-50",
          p: "12px",
          "&::placeholder": {
            color: "neutral.700",
            opacity: "0.7",
            typography: "body-50",
          },
        },
        textarea: {
          typography: "h6-50",
          p: "12px",
          "&::placeholder": {
            color: "neutral.700",
            opacity: "0.8",
            typography: "body-50",
          },
        },
        ".MuiFormHelperText-root": {
          m: 0,
        },
        ...props.sx,
      }}
      {...props}
    />
  );
};

export default CTextField;
