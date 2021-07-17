import { useState } from "react";
// import Alert from "@material-ui/lab/Alert";
// import AlertDisplay from "./AlertDisplay";
import RegisterForm from "../Signup/RegisterForm";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
} from "@material-ui/core";
import { SnackbarProvider } from "notistack";

const useStyles = makeStyles((theme) => ({
  // alertBox: {
  //   margin: theme.spacing(2),
  // },
}));

export default function RegisterModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SnackbarProvider>
      <div>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={handleClickOpen}
        >
          Sign Up
        </Button>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill up the neccessary required fields.
            </DialogContentText>
            <RegisterForm onClose={handleClose} />
          </DialogContent>
        </Dialog>
      </div>
    </SnackbarProvider>
  );
}
