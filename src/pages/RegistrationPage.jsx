import React from "react";
import { useFormik } from "formik";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirm_password: "",
};

function RegistrationPage() {
  const { handleBlur, handleSubmit, handleChange, values } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      values;
    },
  });
  return (
    <Stack width={"50%"} sx={{ margin: "auto" }}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                type="name"
                autoComplete="off"
                name="firstName"
                id="firstName"
                label="First Name"
                required
                fullWidth
                autoFocus
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="name"
                autoComplete="off"
                name="lastName"
                id="lastName"
                label="Last Name"
                required
                fullWidth
                autoFocus
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                autoComplete="off"
                name="email"
                id="email"
                label="email"
                required
                fullWidth
                autoFocus
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                autoComplete="off"
                name="password"
                id="password"
                label="Password"
                required
                fullWidth
                autoFocus
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                autoComplete="off"
                name="confirm_password"
                id="confirm_password"
                label="Confirm Password"
                required
                fullWidth
                autoFocus
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, ml: "16px" }}
            >
              Sign Up
            </Button>
          </Grid>
        </Box>
      </Box>
    </Stack>
  );
}

export default RegistrationPage;
