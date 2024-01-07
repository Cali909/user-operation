"use client";

import { Typography } from "@mui/material";
import CBox from "../generic/CBox";
import CButton from "../generic/CButton";
import { UserDataType } from "@/types/auth/Login";
import { useRouter } from "next/navigation";
import useUser from "@/hooks/useUser";
import { SnackbarContext } from "@/contexts/SnackbarContext";
import { SetStateAction, useContext } from "react";

const UserRow = ({
  data,
  setState,
}: {
  data: UserDataType;
  setState: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  const { fireSnackbar }: any = useContext(SnackbarContext);
  const { deleteUser } = useUser();

  const handleUserEdit = () => {
    data.id ? router.push(`/users/${data.id}`) : null;
  };

  const handleDeleteUser = async () => {
    await deleteUser(data);
    setState(true);

    fireSnackbar({
      msg: "User deleted successfully",
      variant: "success",
    });
  };

  return (
    <CBox ac jsb mediumPadding sx={{ backgroundColor: "white" }}>
      <CBox ac>
        <Typography
          variant="body1"
          sx={{ color: "black" }}
          className="one-line-text"
        >
          {data.Name}
        </Typography>
        -
        <Typography
          variant="body2"
          sx={{ color: "black" }}
          className="one-line-text"
        >
          {data.Username}
        </Typography>
        -
        <Typography
          variant="body2"
          sx={{ color: "black" }}
          className="one-line-text"
        >
          {data.Mobile}
        </Typography>
      </CBox>
      <CBox ac>
        <CButton
          variant="contained"
          color="secondary"
          sx={{ color: "white" }}
          onClick={handleUserEdit}
        >
          Edit
        </CButton>
        <CButton
          variant="contained"
          color="error"
          sx={{ color: "white" }}
          onClick={handleDeleteUser}
        >
          Delete
        </CButton>
      </CBox>
    </CBox>
  );
};

export default UserRow;
