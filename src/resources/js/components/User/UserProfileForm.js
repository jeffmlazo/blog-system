import React, { useState, useEffect } from 'react';
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

export default function UserProfileForm(props) {
  const [INITIAL_FORM_STATE, setInitial] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    emailAddress: '',
    mobile: '',
  });

  const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    middleName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
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

  const getUser = async () => {
    setLoading(true);
    // 2. apisauce will fetch from the server asynchronously
    const user = await api.get(`/user/${userId}/edit`);
    setLoading(false);
    // 3. on awaiting successfully the next code will run
    if (user.ok && user.data) {
      //   console.log(user.data);
      // Repopulate Form
      setInitial({
        firstName: user.data[0].first_name,
        middleName: user.data[0].middle_name,
        lastName: user.data[0].last_name,
        emailAddress: user.data[0].email_address,
        mobile: user.data[0].mobile,
      });
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <Formik
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
        enableReinitialize
        onSubmit={async (values) => {
          setLoading(true);
          // Send data to the server
          const user = await api.put(`/user/profile/update/${userId}`, values);
          setLoading(false);
          if (user.ok && user.data) {
            handleSnackbarMessage(user.data.message, user.data.status);
            setTimeout(() => {
              onClose();
              //   window.location.href = baseUrl;
            }, 4000);
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
