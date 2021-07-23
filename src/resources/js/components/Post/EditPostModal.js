import { useState } from "react";
import EditPostForm from "../Post/EditPostForm";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { SnackbarProvider } from "notistack";

export default function EditPostModal() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <SnackbarProvider>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Edit Post
        </Button>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit Post</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill up the neccessary required fields.
            </DialogContentText>
            <EditPostForm onClose={handleClose} />
          </DialogContent>
        </Dialog>
      </SnackbarProvider>
    </>
  );
}
