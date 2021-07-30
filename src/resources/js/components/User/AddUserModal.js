import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  LinearProgress,
} from "@material-ui/core";
import { SnackbarProvider } from "notistack";
import AddUserForm from "./AddUserForm";

export default function AddUserModal() {
  const [open, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);

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
        {isLoading ? <LinearProgress /> : undefined}
        <DialogContent>
          <DialogContentText>
            Please fill up the neccessary required fields.
          </DialogContentText>
          <AddUserForm
            isLoading={isLoading}
            setLoading={setLoading}
            onClose={handleClose}
          />
        </DialogContent>
      </Dialog>
    </SnackbarProvider>
  );
}
