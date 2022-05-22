import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MoodBadTwoToneIcon from "@mui/icons-material/MoodBadTwoTone";

export default function AlertDialog({ flag, setflag }) {
  const [open, setOpen] = useState(flag);

  //   if (flag) {
  //     setOpen(true);
  //   }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setflag(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Hellllooooooo
      </Button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="Agreement">
          {`مطمئن هستی ؟ `}
          <span>
            <MoodBadTwoToneIcon style={{ color: "darkred" }} />
          </span>
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText id="Agreement">آیا مطمن هستید؟</DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            خیر
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={handleClose}
            autoFocus
          >
            بله
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
