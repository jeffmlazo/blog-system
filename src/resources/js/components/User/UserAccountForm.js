import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { create } from 'apisauce';
import { useSnackbar } from 'notistack';
import { makeStyles, Grid, DialogActions, Button } from '@material-ui/core';

import Textfield from '../FormsUI/Textfield';
import ButtonForm from '../FormsUI/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function UserAccountForm(props) {
  const INITIAL_FORM_STATE = {
    password: '',
    password_confirmation: '',
  };

  const FORM_VALIDATION = Yup.object().shape({
    password: Yup.string().required('Required'),
    password_confirmation: Yup.string()
      .required('Required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
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
          const user = await api.put(`/user/account/update/${userId}`, values);
          setLoading(false);
          if (user.ok && user.data) {
            setTimeout(() => {
              onClose();
              //   window.location.href = baseUrl;
            }, 4000);
          }
          handleSnackbarMessage(user.data.message, user.data.status);
        }}
      >
        <Form>
          <Grid container spacing={2}>
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
              <Textfield
                name="password_confirmation"
                label="Confirm Password"
                type="password"
                autoComplete="new-password"
                disabled={isLoading}
              />
            </Grid>
            <Grid item xs={12}>
              <DialogActions>
                <Button
                  onClick={onClose}
                  variant="contained"
                  color="primary"
                  className={classes.cancelButton}
                  disabled={isLoading}
                >
                  Cancel
                </Button>
                <ButtonForm disabled={isLoading}>Update</ButtonForm>
              </DialogActions>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
}
