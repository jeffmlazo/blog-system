import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { create } from 'apisauce';
import { useSnackbar } from 'notistack';
import { makeStyles, Grid, DialogActions, Button } from '@material-ui/core';

import Textfield from '../FormsUI/Textfield';
import Select from '../FormsUI/Select';
import ButtonForm from '../FormsUI/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  // root: {
  //   position: 'fixed',
  //   zIndex: 9000,
  // },
}));

export default function AddUserForm(props) {
  const INITIAL_FORM_STATE = {
    firstName: '',
    middleName: '',
    lastName: '',
    username: '',
    password: '',
    userType: '',
    emailAddress: '',
    mobile: '',
  };

  const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    middleName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    userType: Yup.string().required('Required'),
    emailAddress: Yup.string()
      .email('Invalid email address.')
      .required('Required'),
    mobile: Yup.number()
      .integer()
      .typeError('Please enter a valid mobile number')
      .required('Required'),
  });

  const classes = useStyles();
  const { onClose, isLoading, setLoading } = props;
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
          // classes: classes.root,
        },
      });
    } else if (variant === 'error' && typeof msg === 'object') {
      // Error Messages
      Array.from(msg).forEach((msg, index) => {
        enqueueSnackbar(msg, {
          variant,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
            autoHideDuration: 3000,
            // classes: classes.root,
          },
        });
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
    baseURL: `${baseUrl}/api`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': token,
    },
  });

  // const testNotif = () => {
  //   enqueueSnackbar('Test Notification for Us', {
  //     variant: 'error',
  //     anchorOrigin: {
  //       vertical: 'top',
  //       horizontal: 'center',
  //       // autoHideDuration: 3000,
  //       persist: true,
  //       classes: classes.test,
  //     },
  //   });
  // };

  return (
    <div>
      <Formik
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={async (values) => {
          setLoading(true);

          // Send data to the server
          const post = await api.post('/user/store', values);
          setLoading(false);
          if (post.ok && post.data) {
            handleSnackbarMessage(post.data.message, post.data.status);
            // setTimeout(() => {
            //   onClose();
            // }, 4000);
          }
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
                disabled={isLoading}
              />
            </Grid>
            <Grid item xs={12}>
              <Textfield
                name="middleName"
                label="Middle Name"
                type="text"
                disabled={isLoading}
              />
            </Grid>
            <Grid item xs={12}>
              <Textfield
                name="lastName"
                label="Last Name"
                type="text"
                disabled={isLoading}
              />
            </Grid>
            <Grid item xs={12}>
              <Textfield
                name="username"
                label="Username"
                type="text"
                disabled={isLoading}
              />
            </Grid>
            <Grid item xs={12}>
              <Textfield
                name="password"
                label="Password"
                type="password"
                autoComplete="new-password"
                disabled={isLoading}
              />
            </Grid>
            <Grid item xs={12}>
              <Select
                name="userType"
                label="User Type"
                options={[
                  { id: 1, option: 'user' },
                  { id: 2, option: 'author' },
                  { id: 3, option: 'admin' },
                ]}
                disabled={isLoading}
              />
            </Grid>
            <Grid item xs={12}>
              <Textfield
                name="emailAddress"
                label="Email Address"
                type="email"
                disabled={isLoading}
              />
            </Grid>
            <Grid item xs={12}>
              <Textfield
                name="mobile"
                label="Mobile"
                type="text"
                disabled={isLoading}
              />
            </Grid>
            <Grid item xs={12}>
              <DialogActions>
                <Button
                  onClick={onClose}
                  // onClick={testNotif}
                  variant="contained"
                  color="primary"
                  className={classes.cancelButton}
                  disabled={isLoading}
                >
                  Cancel
                </Button>
                <ButtonForm disabled={isLoading}>Add</ButtonForm>
              </DialogActions>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
}
