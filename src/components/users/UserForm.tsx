"use client";

import { SnackbarContext } from "@/contexts/SnackbarContext";
import useUser from "@/hooks/useUser";
import { UserDataType } from "@/types/auth/Login";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import CBox from "../generic/CBox";
import CButton from "../generic/CButton";
import CTextField from "../generic/CTextField";

const UserForm = ({ data }: { data: UserDataType }) => {
  const { fireSnackbar }: any = useContext(SnackbarContext);
  const [user, setUser] = useState({
    Name: "",
    Username: "",
    Mobile: "",
    id: undefined,
  });
  const router = useRouter();
  const { updateUser } = useUser();
  const { handleSubmit, control, reset, setValue } = useForm({
    defaultValues: {
      Name: "",
      Username: "",
      Mobile: "",
    },
  });

  useEffect(() => {
    start();
  }, []);

  async function start() {
    let res = await fetch(`http://localhost:8000/users/${data.id}`);
    let user = await res.json();
    setUser(user);
    setValue("Name", user.Name);
    setValue("Username", user.Username);
    setValue("Mobile", user.Mobile);
  }

  const onSubmit = async (userData: UserDataType) => {
    userData = { id: data.id, ...userData };

    await updateUser(userData);

    fireSnackbar({
      msg: "User edited successfully",
      variant: "success",
    });
    reset();
    router.push("/users");
  };

  return (
    <CBox ac jsb siPadding sx={{ backgroundColor: "white" }}>
      <CBox ac>
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
              placeholder="Name"
              error={error ? true : false}
              onChange={onChange}
              value={value ? value : ""}
              helperText={error ? "Enter your Name" : ""}
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
              placeholder="Name"
              error={error ? true : false}
              onChange={onChange}
              value={value ? value : ""}
              helperText={error ? "Enter your Name" : ""}
            />
          )}
        />
      </CBox>
      <CButton variant="contained" onClick={handleSubmit(onSubmit)}>
        Submit
      </CButton>
    </CBox>
  );
};

export default UserForm;
