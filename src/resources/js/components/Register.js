import { useState } from "react";
import Alert from "@material-ui/lab/Alert";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  alertBox: {
    margin: theme.spacing(2),
  },
}));

export default function RegisterForm() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Form input fields useState
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [userType, setUserType] = useState("");

  // Add User
  const addUser = async (user) => {
    const res = await fetch("http://localhost/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();
    console.log(data);
    // setUsers([...users, data]);
  };

  // Form submit
  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      firstName,
      middleName,
      lastName,
      username,
      password,
      userType,
      emailAddress,
      mobile,
    };

    // Add user to the server
    addUser(userData);

    // handleClose();
    // console.log(userData);
    // if (!text) {
    //   alert("Please add a task");
    //   return;
    // }

    // onAdd({ text, day, reminder });
    // Clear the all form states
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setUsername("");
    setPassword("");
    setEmailAddress("");
    setMobile("");
    setUserType("");
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
        <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
        <DialogContent>
          <Alert severity="success" className={classes.alertBox}>
            This is a success alert — check it out!
          </Alert>
          <DialogContentText>
            Please fill up the neccessary required fields.
          </DialogContentText>
          <form
            className="sign-up-form"
            noValidate
            autoComplete="off"
            onSubmit={onSubmit}
          >
            <TextField
              autoFocus
              margin="dense"
              id="first_name"
              label="First Name"
              type="text"
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              margin="dense"
              id="middle_name"
              label="Middle Name"
              type="text"
              fullWidth
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />
            <TextField
              margin="dense"
              id="last_name"
              label="Last Name"
              type="text"
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              margin="dense"
              id="username"
              label="Username"
              type="text"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <FormControl className={classes.formControl}>
              <InputLabel id="user-type">User Type</InputLabel>
              <Select
                labelId="user-type"
                id="user-type"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="author">Author</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </FormControl>

            <TextField
              margin="dense"
              id="email-address"
              label="Email Address"
              type="email"
              fullWidth
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <TextField
              margin="dense"
              id="mobile"
              label="Mobile"
              type="text"
              fullWidth
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={onSubmit} color="primary">
                Register
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
