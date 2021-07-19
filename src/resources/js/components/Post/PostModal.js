import { useState } from "react";
import PostForm from "../Post/PostForm";
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

export default function PostModal() {
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
          Add Post
        </Button>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Post</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill up the neccessary required fields.
            </DialogContentText>
            <PostForm onClose={handleClose} />
          </DialogContent>
        </Dialog>
      </div>
    </SnackbarProvider>
  );
}
