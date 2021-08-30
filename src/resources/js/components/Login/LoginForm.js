import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { create } from 'apisauce';
import { useSnackbar } from 'notistack';
import { makeStyles, Grid, DialogActions, Button } from '@material-ui/core';
import PropTypes from 'prop-types';

import Textfield from '../FormsUI/Textfield';
import ButtonForm from '../FormsUI/Button';
// import Dashboard from "../Dashboard/Dashboard";
// import Dashboard from "../Dashboard/DashboardV2";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const INITIAL_FORM_STATE = {
  username: '',
  password: '',
};

const FORM_VALIDATION = Yup.object().shape({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

export default function LoginForm(props) {
  const classes = useStyles();
  const { onClose } = props;
  const { enqueueSnackbar } = useSnackbar();

  const handleSnackbarMessage = (msg, variant) => {
    if (variant === 'success' && typeof msg === 'string') {
      // Success Message
      enqueueSnackbar(msg, {
        variant,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
          autoHideDuration: 3000,
        },
      });
    } else if (variant === 'error') {
      // Error Message
      enqueueSnackbar(msg, {
        variant,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
          autoHideDuration: 3000,
        },
      });
    } else {
      // Server or SQL Messages
      enqueueSnackbar(msg, {
        variant: 'info',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
          autoHideDuration: 3000,
        },
      });
    }
  };

  // Get the token
  const token = document.head
    .querySelector('meta[name="csrf-token"]')
    .getAttribute('content');

  // API base Url
  const api = create({
    // eslint-disable-next-line no-undef
    baseURL: baseUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': token,
    },
  });

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
            .post('/user/login', values)
            .then((response) => response.data)
            .then((data) => {
              // console.log(data.userData);
              // sessionStorage.setItem("user", JSON.stringify(data.userData));
              handleSnackbarMessage(data.message, data.status);

              if (data.status === 'success') {
                // eslint-disable-next-line no-undef
                window.location.replace(`${baseUrl}/dashboard`);
              }
              // const userObj = JSON.parse(sessionStorage.getItem("user"));
              // console.log(userObj.id);
              // console.log(userObj.user_type);
            });
        }}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Textfield
                autoFocus
                name="username"
                label="Username"
                type="text"
              />
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
              <DialogActions>
                <Button
                  onClick={onClose}
                  variant="contained"
                  color="secondary"
                  className={classes.cancelButton}
                >
                  Cancel
                </Button>
                <ButtonForm>Login</ButtonForm>
              </DialogActions>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
}

LoginForm.propTypes = {
  onClose: PropTypes.func,
};
