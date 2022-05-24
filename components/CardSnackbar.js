import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Typography } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({
  snackFlag,
  setSnackFlag,
  heartStatus,
}) {
  const [open, setOpen] = React.useState(false);

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackFlag(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={snackFlag} autoHideDuration={1000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={heartStatus ? "warning" : "success"}
          sx={{ width: "100%" }}
        >
          {!heartStatus && (
            <Typography fontFamily={"Vazir"}>
              به علاقه مندی ها اضافه شد
            </Typography>
          )}
          {heartStatus && (
            <Typography fontFamily={"Vazir"}>
              از علاقه مندی ها حذف شد
            </Typography>
          )}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
