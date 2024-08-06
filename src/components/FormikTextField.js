import React from "react";
import { useField } from "formik";
import TextField from "@mui/material/TextField";

const FormikTextField = ({ inputRef, ...props }) => {
  const [field, meta, helpers] = useField(props);
  let errorText = meta.error && meta.touched ? meta.error : "";
  if (props.errortext) errorText = props.errortext;
  const showError = (meta.error && meta.touched) || errorText;

  return (
    <TextField
      variant="standard"
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
      {...field}
      onChange={(event) => {
        helpers.setTouched(field.name, true);
        field.onChange(event);
      }}
      ref={inputRef}
      {...props}
      helperText={errorText}
      error={!!showError}
    />
  );
};

export default FormikTextField;
