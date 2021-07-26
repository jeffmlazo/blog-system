import { useState } from "react";
import PostForm from "../Post/PostForm";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  LinearProgress,
} from "@material-ui/core";
import { SnackbarProvider } from "notistack";

export default function PostModal() {
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
      <div>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={handleClickOpen}
        >
          Add Post
        </Button>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Post</DialogTitle>
          <DialogContent>
            {isLoading ? <LinearProgress /> : undefined}
            <DialogContentText>
              Please fill up the neccessary required fields.
            </DialogContentText>
            <PostForm
              isLoading={isLoading}
              setLoading={setLoading}
              onClose={handleClose}
            />
          </DialogContent>
        </Dialog>
      </div>
    </SnackbarProvider>
  );
}
