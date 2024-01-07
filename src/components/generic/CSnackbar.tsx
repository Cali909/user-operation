"use client";
import { SnackType } from "@/types/generic/SnackbarType";
import { Alert, Slide, Snackbar, Typography } from "@mui/material";
import React from "react";
import CBox from "./CBox";
import CIcon from "./CIcon";

type props = {
  state: SnackType;
  setState: React.Dispatch<React.SetStateAction<SnackType>>;
};

const CSnackbar = ({ state, setState }: props) => {
  const handleClose = () => {
    setState({ ...state, open: false, variant: undefined });
  };

  let icon = {
    src: "",
    alt: "",
  };
  let backgroundColor = "";
  let color = "";
  if (state.variant === "error") {
    icon = {
      src: "/icons/error.svg",
      alt: "error-icon",
    };
    backgroundColor = "error.main";
    color = "white";
  } else if (state.variant === "success") {
    icon = {
      src: "/icons/check.svg",
      alt: "check-icon",
    };
    backgroundColor = "success.main";
    color = "white";
  } else if (state.variant === "warning") {
    icon = {
      src: "/icons/warning.svg",
      alt: "warning-icon",
    };
    backgroundColor = "warning.main";
    color = "white";
  } else if (state.variant === "info") {
    icon = {
      src: "/icons/info.svg",
      alt: "info-icon",
    };
    backgroundColor = "white";
    color = "white";
  } else {
    icon = {
      src: "",
      alt: "",
    };
    backgroundColor = "";
    color = "";
  }

  let duration: number | string | null = 4000;
  if (typeof state.duration === "number") {
    duration = state.duration;
  } else if (state.duration === "infinite") {
    duration = null;
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={state.open}
      autoHideDuration={duration}
      onClose={handleClose}
      sx={{ zIndex: 4000, bottom: 16, left: 16 }}
      TransitionComponent={(props) => <Slide {...props} direction="right" />}
      key={Math.random()}
    >
      <Alert icon={false} sx={{ p: 0, "& .MuiAlert-message": { p: 0 } }}>
        <CBox
          ac
          siPadding
          largeGap
          sx={{
            backgroundColor: backgroundColor,
          }}
        >
          <Typography sx={{ color: color, typography: "h6-50" }}>
            {state.variant === "loading" ? "Loading data" : state.msg}
          </Typography>
          {state.variant !== "loading" && (
            <CIcon
              clickable
              src="/icons/close.svg"
              alt="close-icon"
              onClick={handleClose}
              sx={{ cursor: "pointer" }}
              className="white-filter"
            />
          )}
        </CBox>
      </Alert>
    </Snackbar>
  );
};

export default CSnackbar;
