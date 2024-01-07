"use client";

import { UserDataType } from "@/types/auth/Login";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CBox from "../generic/CBox";
import UserRow from "./UserRow";

const UsersList = () => {
  const [users, setUsers] = useState<UserDataType[]>([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    start();
    setRefresh(false);

  }, [refresh]);

  async function start() {
    let res = await fetch("http://localhost:8000/users");
    let data = await res.json();
    setUsers(data);
  }

  return (
    <CBox col mediumGap siPadding NoXPadding>
      {users.length !== 0 ? (
        users.map((item, i) => (
          <UserRow key={i} data={item} setState={setRefresh} />
        ))
      ) : (
        <Typography variant="h2" sx={{ color: "black", textAlign: "center" }}>
          No User Found!
        </Typography>
      )}
    </CBox>
  );
};

export default UsersList;
