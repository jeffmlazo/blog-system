import { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";
import { useSnackbar } from "notistack";
import { create } from "apisauce";
import { useHistory } from "react-router-dom";

export default function DeletePostModal(prop) {
  let history = useHistory();
  const [open, setOpen] = useState(false);
  const { postId } = prop;
  const { enqueueSnackbar } = useSnackbar();

  const api = create({
    baseURL: "http://localhost/api",
    headers: { "Content-Type": "application/json" },
  });

  //#region FUNCTIONS

  const handleSnackbarMessage = (msg, variant) => {
    if (variant === "success" && typeof msg === "string") {
      // Success Message
      enqueueSnackbar(msg, {
        variant,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
          autoHideDuration: 3000,
        },
      });
    } else if (variant === "error" && typeof msg === "object") {
      // Error Messages
      Array.from(msg).forEach(function (msg, index) {
        enqueueSnackbar(msg, {
          variant,
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
            autoHideDuration: 3000,
          },
        });
      });
    } else {
      // Server or SQL Messages
      enqueueSnackbar(msg, {
        variant: "info",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
          autoHideDuration: 3000,
        },
      });
    }
  };

  const deletePost = async () => {
    // 2. apisauce will fetch from the server asynchronously
    const post = await api.delete(`/post/${postId}`);
    // 3. on awaiting successfully the next code will run
    if (post.ok && post.data) {
      handleSnackbarMessage(post.data.message, post.data.status);
      setTimeout(() => {
        // history.push("/");
        window.location.href = "http://localhost";
      }, 4000);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //#endregion

  return (
    <>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Delete
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Delete Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this post?.
          </DialogContentText>
          <DialogActions>
            <Button onClick={handleClose} variant="contained" color="primary">
              Cancel
            </Button>
            <Button onClick={deletePost} variant="contained" color="secondary">
              Delete
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
}
