import { TextField } from "@material-ui/core";
import { useField } from "formik";

const DateTimePicker = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configDateTimePicker = {
    ...field,
    ...otherProps,
    type: "date",
    // variant: "outlined",
<<<<<<< HEAD
=======
    // defaultValue: "2021-07-22",
>>>>>>> 4f5786f42415f2cd425fdf564e5a1cdb5f096475
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
  };

  if (meta && meta.touched && meta.error) {
    configDateTimePicker.error = true;
    configDateTimePicker.helperText = meta.error;
  }

  return <TextField {...configDateTimePicker} />;
};

export default DateTimePicker;
