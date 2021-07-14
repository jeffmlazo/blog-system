import { useState } from "react";
// import Alert from "@material-ui/lab/Alert";
// import AlertDisplay from "./AlertDisplay";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  // TextField,
  // FormControl,
  // InputLabel,
  // Select,
  // MenuItem,
  makeStyles,
  // Snackbar,
  Grid,
  DialogActions,
  Button,
} from "@material-ui/core";

import Textfield from "../FormsUI/Textfield";
import Select from "../FormsUI/Select";
import ButtonForm from "../FormsUI/Button";

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  // alertBox: {
  //   margin: theme.spacing(2),
  // },
}));

const INITIAL_FORM_STATE = {
  firstName: "",
  middleName: "",
  lastName: "",
  username: "",
  password: "",
  userType: "",
  emailAddress: "",
  mobile: "",
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  middleName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  userType: Yup.string().required("Required"),
  emailAddress: Yup.string()
    .email("Invalid email address.")
    .required("Required"),
  mobile: Yup.number()
    .integer()
    .typeError("Please enter a valid mobile number")
    .required("Required"),
});

export default function RegisterForm(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [showAlertBox, setAlertBox] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [alertMessage, setAlertMessage] = useState({});
  const { onClose } = props;

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
    setSeverity(data.status);
    setAlertMessage(data.message);
    // console.log(data.status);
    // console.log(data.message);
    // const data = await res.json();
    // setUsers([...users, data]);

    // Show alert box
    // setAlertBox(true);
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

    // Reset alert box useStates
    // setAlertBox(false);
    // setSeverity("success");
    // setAlertMessage({});
  };

  return (
    <div>
      <Formik
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Textfield
                autoFocus
                name="firstName"
                label="First Name"
                type="text"
              />
            </Grid>

            <Grid item xs={12}>
              <Textfield name="middleName" label="Middle Name" type="text" />
            </Grid>

            <Grid item xs={12}>
              <Textfield name="lastName" label="Last Name" type="text" />
            </Grid>

            <Grid item xs={12}>
              <Textfield name="username" label="Username" type="text" />
            </Grid>

            <Grid item xs={12}>
              <Textfield
                name="password"
                label="Password"
                type="password"
                autoComplete="new-password"
              />
            </Grid>

            <Grid item xs={12}>
              <Select
                name="userType"
                label="User Type"
                options={["user", "author", "admin"]}
              />
            </Grid>

            <Grid item xs={12}>
              <Textfield
                name="emailAddress"
                label="Email Address"
                type="email"
              />
            </Grid>

            <Grid item xs={12}>
              <Textfield name="mobile" label="Mobile" type="text" />
            </Grid>

            <Grid item xs={12}>
              <DialogActions>
                <Button onClick={onClose} variant="contained" color="primary">
                  Cancel
                </Button>
                <ButtonForm>Register</ButtonForm>
              </DialogActions>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
}
