import { TextField, MenuItem, capitalize } from "@material-ui/core";
import { useField, useFormikContext } from "formik";

const SelectWrapper = ({ name, options, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (evt) => {
    const { value } = evt.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    // variant: "outlined",
    fullWidth: true,
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <TextField {...configSelect}>
      {options.map((obj, pos) => {
        // console.log(obj.id + obj.title);

        return (
          <MenuItem key={pos} value={obj.id}>
            {capitalize(obj.option)}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default SelectWrapper;
