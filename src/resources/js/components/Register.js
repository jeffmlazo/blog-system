import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function FormDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        onClick={handleClickOpen}
      >
        Sign Up
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Register</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill up the neccessary required fields.
          </DialogContentText>
          <form className="sign-up-form" noValidate autoComplete="off">
            <TextField
              autoFocus
              margin="dense"
              id="first_name"
              label="First Name"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="middle_name"
              label="Middle Name"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="last_name"
              label="Last Name"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="username"
              label="Username"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
            />

            <FormControl className={classes.formControl}>
              <InputLabel id="user-type">User Type</InputLabel>
              <Select
                labelId="user-type"
                id="user-type"
                // value={age}
                // onChange={handleChange}
              >
                <MenuItem value={1}>User</MenuItem>
                <MenuItem value={2}>Twenty</MenuItem>
                <MenuItem value={3}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <TextField
              autoFocus
              margin="dense"
              id="email-address"
              label="Email Address"
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="mobile"
              label="Mobile"
              type="text"
              fullWidth
            />
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary">
                Login
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
