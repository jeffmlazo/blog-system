import { Formik, Form } from "formik";
import * as Yup from "yup";
import { create } from "apisauce";
import { useSnackbar } from "notistack";
import {
  makeStyles,
  Grid,
  DialogActions,
  Button,
  // TextField,
} from "@material-ui/core";

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

const INITIAL_FORM_STATE = {
  title: "",
  summary: "",
  content: "",
  imgUrl: "",
  imgText: "",
  tag: "",
  category: "",
  authorId: "1",
  publishedAt: "",
};

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

export default function PostForm(props) {
  const classes = useStyles();
  const { onClose } = props;
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
      Array.from(msg).forEach(function (msg, index) {
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
            .post("/post/store", values)
            .then((response) => response.data)
            .then((data) => {
              handleSnackbarMessage(data.message, data.status);
              setTimeout(() => {
                onClose();
              }, 4000);
            });
        }}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Textfield autoFocus name="title" label="Title" type="text" />
            </Grid>
            <Grid item xs={12}>
              <Textfield
                multiline
                name="summary"
                label="Summary"
                type="text"
                rows={5}
              />
            </Grid>
            <Grid item xs={12}>
              <Textfield
                multiline
                name="content"
                label="Content"
                type="text"
                rows={5}
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
              />
            </Grid>
            <Grid item xs={12}>
              <Textfield name="imgUrl" label="Image Url" type="text" />
            </Grid>
            <Grid item xs={12}>
              <Textfield name="imgText" label="Image Text" type="text" />
            </Grid>
            <Grid item xs={12}>
              <Textfield name="tag" label="Tag" type="text" />
            </Grid>
            <Grid item xs={12}>
              <DateTimePicker name="publishedAt" label="Publish Date" />
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
                <ButtonForm>Post</ButtonForm>
              </DialogActions>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
}
