import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";

const Input = ({
  half,
  name,
  label,
  handleChange,
  autoFocus,
  type,
  handleShowPassword,
}) => {
  return (
    <Grid xs={6} md={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        margin="dense"
        label={label}
        onChange={(e) => handleChange(e)}
        autoFocus={autoFocus}
        xs={6}
        required
        fullWidth
        variant="outlined"
        type={type}
        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === "password" ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};

export default Input;
