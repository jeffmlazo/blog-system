import { useState } from "react";
import Alert from "@material-ui/lab/Alert";
// import AlertDisplay from "./AlertDisplay";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { create } from "apisauce";
import { useSnackbar } from "notistack";
import { makeStyles, Grid, DialogActions, Button } from "@material-ui/core";

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
  // cancelButton: {
  //   marginRight: "20px",
  // },
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
  const [open, setOpen] = useState(true);
  const [showAlertBox, setAlertBox] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [alertMessage, setAlertMessage] = useState({});
  const { onClose } = props;
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackbarMessage = (msg, variant) => {
    enqueueSnackbar(msg, {
      variant,
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
        autoHideDuration: 99999999,
      },
    });
    enqueueSnackbar(msg, {
      variant,
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
        autoHideDuration: 99999999,
      },
    });
    enqueueSnackbar(msg, {
      variant,
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
        autoHideDuration: 99999999,
      },
    });
  };

  // API base Url
  const api = create({
    baseURL: "http://localhost/api",
    headers: { "Content-Type": "application/json" },
  });

  // get
  // api
  //   .get("/repos/skellock/apisauce/commits")
  //   .then((response) => response.data[0].commit.message)
  //   .then(console.log);

  return (
    <div>
      <Formik
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          // Send data to the server
          api
            .post("/user", values)
            .then((response) => response.data)
            .then((data) => {
              console.log(data.status);
              console.log(data.message);
              handleSnackbarMessage(data.message, data.status);
            });
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
                <Button
                  onClick={onClose}
                  variant="contained"
                  color="primary"
                  className={classes.cancelButton}
                >
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
