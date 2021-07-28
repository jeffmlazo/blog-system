import { useState } from "react";
import EditPostForm from "../Post/EditPostForm";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  LinearProgress,
} from "@material-ui/core";
import { SnackbarProvider } from "notistack";

export default function EditPostModal(props) {
  const [open, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { postId } = props;

  // console.log(postId);
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
            {isLoading ? <LinearProgress /> : undefined}
            <DialogContentText>
              Please fill up the neccessary required fields.
            </DialogContentText>
            <EditPostForm
              isLoading={isLoading}
              setLoading={setLoading}
              onClose={handleClose}
              postId={postId}
            />
          </DialogContent>
        </Dialog>
      </SnackbarProvider>
    </>
  );
}