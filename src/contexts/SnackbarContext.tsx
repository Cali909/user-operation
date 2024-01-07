"use client";

import CSnackbar from "@/components/generic/CSnackbar";
import { SnackContextType, SnackType } from "@/types/generic/SnackbarType";
import React, { createContext, useContext, useState } from "react";

export const SnackbarContext = createContext<SnackContextType | null>(null);

const SnackbarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [snackState, setSnackState] = useState<SnackType>({
    open: false,
    msg: "",
    variant: "",
    duration: 4000,
  });

  const fireSnackbar = (snackStateObject: SnackType) => {
    setSnackState({
      open: true,
      variant: snackStateObject.variant,
      msg: snackStateObject.msg,
      duration: snackStateObject.duration || snackState.duration,
    });
  };

  return (
    <SnackbarContext.Provider
      value={{ fireSnackbar, snackState, setSnackState }}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement<any>)
      )}
      <CSnackbar state={snackState} setState={setSnackState} />
    </SnackbarContext.Provider>
  );
};

export const useSnackbarContext = () => useContext(SnackbarContext);

export default SnackbarContextProvider;
