import { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
  LinearProgress,
} from "@material-ui/core";
import { useSnackbar } from "notistack";
import { create } from "apisauce";

export default function DeletePostModal(prop) {
  const [open, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { postId } = prop;

  const { enqueueSnackbar } = useSnackbar();

  // Get the token
  const token = document.head
    .querySelector('meta[name="csrf-token"]')
    .getAttribute("content");

  const api = create({
    baseURL: `${baseUrl}/api`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-CSRF-TOKEN": token,
    },
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
    setLoading(true);
    // 2. apisauce will fetch from the server asynchronously
    const post = await api.delete(`/post/${postId}`);
    setLoading(false);
    // 3. on awaiting successfully the next code will run
    if (post.ok && post.data) {
      handleSnackbarMessage(post.data.message, post.data.status);
      setTimeout(() => {
        window.location.href = baseUrl;
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
          {isLoading ? <LinearProgress /> : undefined}
          <DialogContentText>
            Are you sure you want to delete this post?.
          </DialogContentText>
          <DialogActions>
            <Button
              onClick={handleClose}
              variant="contained"
              color="primary"
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              onClick={deletePost}
              variant="contained"
              color="secondary"
              disabled={isLoading}
            >
              Delete
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
}
