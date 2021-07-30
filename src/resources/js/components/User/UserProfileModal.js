import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  LinearProgress,
  Badge,
} from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

// import UserProfileForm from './UserProfileForm';
import UserProfileTab from './UserProfileTab';

export default function UserProfileModal() {
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
      <Badge
        badgeContent={'My Profile'}
        overlap={'circle'}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        color="primary"
        invisible
      >
        <IconButton onClick={handleClickOpen}>
          <AccountCircleIcon fontSize="small" />
        </IconButton>
      </Badge>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">My Profile Settings</DialogTitle>
        {isLoading ? <LinearProgress /> : undefined}
        <DialogContent>
          <UserProfileTab
            isLoading={isLoading}
            setLoading={setLoading}
            onClose={handleClose}
          />
        </DialogContent>
      </Dialog>
    </SnackbarProvider>
  );
}
