import { useState } from "react";
import RegisterForm from "../User/AddUserForm";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { SnackbarProvider } from "notistack";

export default function RegisterModal() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SnackbarProvider>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        onClick={handleClickOpen}
      >
        Add User
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add User</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill up the neccessary required fields.
          </DialogContentText>
          <RegisterForm onClose={handleClose} />
        </DialogContent>
      </Dialog>
    </SnackbarProvider>
  );
}
