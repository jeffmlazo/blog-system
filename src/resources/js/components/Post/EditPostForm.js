import { Formik, Form } from "formik";
import * as Yup from "yup";
import { create } from "apisauce";
import { useSnackbar } from "notistack";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { makeStyles, Grid, DialogActions, Button } from "@material-ui/core";

import Textfield from "../FormsUI/Textfield";
import ButtonForm from "../FormsUI/Button";
import Select from "../FormsUI/Select";
import DateTimePicker from "../FormsUI/DateTimePicker";

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  fieldHidden: {
    width: 0,
  },
}));

export default function EditPostForm(props) {
  const [INITIAL_FORM_STATE, setInitial] = useState({
    title: "",
    summary: "",
    content: "",
    imgUrl: "",
    imgText: "",
    tag: "",
    category: "",
    authorId: "1",
    publishedAt: "",
  });

  const FORM_VALIDATION = Yup.object().shape({
    title: Yup.string().required("Required"),
    summary: Yup.string().required("Required"),
    content: Yup.string().required("Required"),
    imgUrl: Yup.string().required("Required"),
    imgText: Yup.string().required("Required"),
    tag: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    publishedAt: Yup.string().required("Required"),
  });

  const classes = useStyles();
  const { postId, onClose, isLoading, setLoading } = props;
  const { enqueueSnackbar } = useSnackbar();

  const handleSnackbarMessage = (msg, variant) => {
    if (variant === "success" && typeof msg === "string") {
      // Success Message
      enqueueSnackbar(msg, {
        variant,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
          autoHideDuration: 3000,
        },
      });
    } else if (variant === "error" && typeof msg === "object") {
      // Error Messages
      Array.from(msg).forEach((msg, index) => {
        enqueueSnackbar(msg, {
          variant,
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
            autoHideDuration: 3000,
          },
        });
      });
    } else {
      // Server or SQL Messages
      enqueueSnackbar(msg, {
        variant: "info",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
          autoHideDuration: 3000,
        },
      });
    }
  };

  // Get the token
  const token = document.head
    .querySelector('meta[name="csrf-token"]')
    .getAttribute("content");

  // API base Url
  const api = create({
    baseURL: `${baseUrl}/api`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-CSRF-TOKEN": token,
    },
  });

  const getPost = async () => {
    setLoading(true);
    // 2. apisauce will fetch from the server asynchronously
    const post = await api.get(`/post/${postId}/edit`);
    setLoading(false);
    // 3. on awaiting successfully the next code will run
    if (post.ok && post.data) {
      // Repopulate Form
      setInitial({
        title: post.data[0].title,
        summary: post.data[0].summary,
        content: post.data[0].content,
        imgUrl: post.data[0].img_url,
        imgText: post.data[0].img_text,
        tag: post.data[0].tag,
        publishedAt: post.data[0].published_at,
        category: post.data[0].category_id,
      });
    }
  };

  useEffect(() => {
    getPost();
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
          // Send data to the server
          const post = await api.put(`/post/${id}`, values);
          if (post.ok && post.data) {
            handleSnackbarMessage(post.data.message, post.data.status);
            setTimeout(() => {
              onClose();
              window.location.href = baseUrl;
            }, 4000);
          }
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
                  { id: 1, option: "technology" },
                  { id: 2, option: "design" },
                  { id: 3, option: "culture" },
                  { id: 4, option: "business" },
                  { id: 5, option: "politics" },
                  { id: 6, option: "opinion" },
                  { id: 7, option: "science" },
                  { id: 8, option: "health" },
                  { id: 9, option: "style" },
                  { id: 10, option: "travel" },
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
              <DialogActions>
                <Button
                  onClick={onClose}
                  variant="contained"
                  color="primary"
                  className={classes.cancelButton}
                >
                  Cancel
                </Button>
                <ButtonForm>Update</ButtonForm>
              </DialogActions>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
}
