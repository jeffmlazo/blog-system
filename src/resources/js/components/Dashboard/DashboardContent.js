import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Box, TextField } from '@material-ui/core';
import { Autocomplete } from 'formik-material-ui-lab';

const options = [{ title: 'The Shawshank Redemption', year: 1994 }];

const DashboardContent = () => (
  <div>
    <h1>Any place in your apps</h1>

    <Formik
      initialValues={{ email: '', password: '', name: '' }}
      validate={(values) => {
        const errors = {};

        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        if (!values.name) {
          errors.name = 'Required';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));

          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting, touched, errors }) => (
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <Box margin={1}>
            <Field
              name="name"
              component={Autocomplete}
              options={options}
              getOptionLabel={(option) => option.title}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={touched.name && !!errors.name}
                  helperText={errors.name}
                  label="Autocomplete"
                  variant="outlined"
                />
              )}
            />
          </Box>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default DashboardContent;
