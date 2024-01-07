"use client";

import { SnackbarContext } from "@/contexts/SnackbarContext";
import { UserDataType } from "@/types/auth/Login";
import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import CBox from "../generic/CBox";
import CButton from "../generic/CButton";
import CTextField from "../generic/CTextField";
import { Typography } from "@mui/material";
import useUser from "@/hooks/useUser";

const Login = () => {
  const { fireSnackbar }: any = useContext(SnackbarContext);
  const { createUser } = useUser();

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      Name: "",
      Username: "",
      Mobile: "",
    },
  });

  const onSubmit = async (data: UserDataType) => {
    let id = Number((Math.random() * 10000).toFixed(5));
    data = { id, ...data };

    await createUser(data);

    fireSnackbar({
      msg: "User created successfully",
      variant: "success",
    });
    reset();
  };

  return (
    <CBox
      col
      customPadding={3}
      mediumGap
      w100
      sx={{ backgroundColor: "white", maxWidth: "350px" }}
    >
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        Create User
      </Typography>
      <Controller
        name="Name"
        control={control}
        rules={{
          minLength: 1,
          required: true,
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <CTextField
            fullWidth
            placeholder="Name"
            error={error ? true : false}
            onChange={onChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit(onSubmit)();
              }
            }}
            value={value ? value : ""}
            helperText={error ? "Enter your Name" : ""}
          />
        )}
      />
      <Controller
        name="Username"
        control={control}
        rules={{
          minLength: 1,
          required: true,
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <CTextField
            fullWidth
            placeholder="Username"
            error={error ? true : false}
            onChange={onChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit(onSubmit)();
              }
            }}
            value={value ? value : ""}
            helperText={error ? "Enter your Username" : ""}
            type="text"
          />
        )}
      />

      <Controller
        name="Mobile"
        control={control}
        rules={{
          minLength: 1,
          required: true,
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <CTextField
            fullWidth
            placeholder="Mobile"
            error={error ? true : false}
            onChange={onChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit(onSubmit)();
              }
            }}
            value={value ? value : ""}
            helperText={error ? "Enter your Mobile" : ""}
            type="text"
          />
        )}
      />

      <CButton fullWidth variant="contained" onClick={handleSubmit(onSubmit)}>
        Submit
      </CButton>
    </CBox>
  );
};

export default Login;
