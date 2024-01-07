import { Controller, useForm } from "react-hook-form";
import CBox from "../generic/CBox";
import CTextField from "../generic/CTextField";
import { UserDataType } from "@/types/auth/Login";

const UserEditForm = ({ data }: { data: UserDataType }) => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      Name: data.Name,
      Username: data.Username,
      Mobile: data.Mobile,
    },
  });

  return (
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
  );
};

export default UserEditForm;
