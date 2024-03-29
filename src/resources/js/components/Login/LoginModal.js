import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
} from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import LoginForm from './LoginForm';

const useStyles = makeStyles((theme) => ({
  // alertBox: {
  //   margin: theme.spacing(2),
  // },
}));

export default function LoginModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <SnackbarProvider>
        <div>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={handleClickOpen}
          >
            Login
          </Button>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Login</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please fill up the neccessary required fields.
              </DialogContentText>
              <LoginForm onClose={handleClose} />
            </DialogContent>
          </Dialog>
        </div>
      </SnackbarProvider>
    </div>
  );
}
