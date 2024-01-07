import { UserDataType } from "@/types/auth/Login";

export default function useUser() {
  const createUser = async (data: UserDataType) => {
    let myData = data;

    try {
      const response = await fetch("/api/user/create", {
        method: "POST",
        body: JSON.stringify(myData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      return data;
    } catch (error) {
      console.error(error);
      throw new Error("create user failed");
    }
  };

  const updateUser = async (data: UserDataType) => {
    let myData = data;

    try {
      const response = await fetch("/api/user/edit", {
        method: "PATCH",
        body: JSON.stringify(myData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      return data;
    } catch (error) {
      console.error(error);
      throw new Error("update user failed");
    }
  };

  const deleteUser = async (data: UserDataType) => {
    let myData = data;

    try {
      const response = await fetch("/api/user/delete", {
        method: "DELETE",
        body: JSON.stringify(myData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      return data;
    } catch (error) {
      console.error(error);
      throw new Error("delete user failed");
    }
  };

  const fetchAllUsers = async () => {
    try {
      const response = await fetch("/api/user/fetch");
      const data = await response.json();

      return data;
    } catch (error) {
      console.error(error);
      throw new Error("delete user failed");
    }
  };

  return { createUser, updateUser, deleteUser, fetchAllUsers };
}
