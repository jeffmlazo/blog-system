import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import {
  makeStyles,
  Grid,
  DialogActions,
  Button,
  // TextField,
} from '@material-ui/core';

import Textfield from '../FormsUI/Textfield';
import ButtonForm from '../FormsUI/Button';
import Select from '../FormsUI/Select';
import DateTimePicker from '../FormsUI/DateTimePicker';
// eslint-disable-next-line import/named
import { addPost } from '../Service/PostService';

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  fieldHidden: {
    width: 0,
  },
}));

export default function PostForm(props) {
  const INITIAL_FORM_STATE = {
    title: '',
    summary: '',
    content: '',
    imgUrl: '',
    imgText: '',
    tag: '',
    category: '',
    // eslint-disable-next-line no-undef
    authorId: userId,
    publishedAt: '',
  };

  const FORM_VALIDATION = Yup.object().shape({
    title: Yup.string().required('Required'),
    summary: Yup.string().required('Required'),
    content: Yup.string().required('Required'),
    imgUrl: Yup.string().required('Required'),
    imgText: Yup.string().required('Required'),
    tag: Yup.string().required('Required'),
    category: Yup.string().required('Required'),
    publishedAt: Yup.string().required('Required'),
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

  return (
    <div>
      <Formik
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          setLoading(true);
          const test = addPost(values);
          console.log(test.message);
          console.log(test.status);
          // Send data to the server
          // const post = await api.post('/post/store', values);
          // setLoading(false);
          // if (post.ok && post.data) {
          //   handleSnackbarMessage(post.data.message, post.data.status);
          //   setTimeout(() => {
          //     onClose();
          //   }, 4000);
          // }
        }}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Textfield
                autoFocus
                name="title"
                label="Title"
                type="text"
                disabled={isLoading}
              />
            </Grid>
            <Grid item xs={12}>
              <Textfield
                multiline
                name="summary"
                label="Summary"
                type="text"
                rows={5}
                disabled={isLoading}
              />
            </Grid>
            <Grid item xs={12}>
              <Textfield
                multiline
                name="content"
                label="Content"
                type="text"
                rows={5}
                disabled={isLoading}
              />
            </Grid>
            <Grid item xs={12}>
              <Select
                name="category"
                label="Category"
                options={[
                  { id: 1, option: 'technology' },
                  { id: 2, option: 'design' },
                  { id: 3, option: 'culture' },
                  { id: 4, option: 'business' },
                  { id: 5, option: 'politics' },
                  { id: 6, option: 'opinion' },
                  { id: 7, option: 'science' },
                  { id: 8, option: 'health' },
                  { id: 9, option: 'style' },
                  { id: 10, option: 'travel' },
                ]}
                disabled={isLoading}
              />
            </Grid>
            <Grid item xs={12}>
              <Textfield
                name="imgUrl"
                label="Image Url"
                type="text"
                disabled={isLoading}
              />
            </Grid>
            <Grid item xs={12}>
              <Textfield
                name="imgText"
                label="Image Text"
                type="text"
                disabled={isLoading}
              />
            </Grid>
            <Grid item xs={12}>
              <Textfield
                name="tag"
                label="Tag"
                type="text"
                disabled={isLoading}
              />
            </Grid>
            <Grid item xs={12}>
              <DateTimePicker
                name="publishedAt"
                label="Publish Date"
                disabled={isLoading}
              />
            </Grid>
            <Grid item xs={12}>
              <DateTimePicker
                name="dateTime"
                label="Date"
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
                <ButtonForm disabled={isLoading}>Post</ButtonForm>
              </DialogActions>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
}
