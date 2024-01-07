import { Dispatch, SetStateAction } from "react";

export type SnackType = {
  open: boolean;
  msg: string;
  variant: string | undefined;
  duration?: string | number;
};

export type SnackContextType = {
  fireSnackbar: (SnackType) => void;
  snackState: SnackType;
  setSnackState: Dispatch<SetStateAction<SnackType>>;
};
