import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { signUpSchema } from "./schemas";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirm_password: "",
  age: "",
  gender: "",
};

function RegistrationPage() {
  const { handleBlur, handleSubmit, handleChange, values, touched, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        values;
      },
    });
  return (
    <Stack width={"50%"} sx={{ margin: "auto" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
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
                fullWidth
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.firstName && touched.firstName ? (
                <p
                  className="form-error"
                  style={{ color: "red", margin: "0px" }}
                >
                  {errors.firstName}
                </p>
              ) : null}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="name"
                autoComplete="off"
                name="lastName"
                id="lastName"
                label="Last Name"
                fullWidth
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.lastName && touched.lastName ? (
                <p
                  className="form-error"
                  style={{ color: "red", margin: "0px" }}
                >
                  {errors.lastName}
                </p>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                autoComplete="off"
                name="email"
                id="email"
                label="email"
                fullWidth
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p
                  className="form-error"
                  style={{ color: "red", margin: "0px" }}
                >
                  {errors.email}
                </p>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                autoComplete="off"
                name="password"
                id="password"
                label="Password"
                fullWidth
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p
                  className="form-error"
                  style={{ color: "red", margin: "0px" }}
                >
                  {errors.password}
                </p>
              ) : null}
            </Grid>

            <Grid item xs={12} direction={"row"}>
              <TextField
                type="password"
                autoComplete="off"
                name="confirm_password"
                id="confirm_password"
                label="Confirm Password"
                fullWidth
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirm_password && touched.confirm_password ? (
                <p
                  className="form-error"
                  style={{ color: "red", margin: "0px" }}
                >
                  {errors.confirm_password}
                </p>
              ) : null}
            </Grid>

            <Grid container gap={"10%"} sx={{ ml: "16px", mt: 1 }}>
              <Grid>
                <FormControl sx={{ minWidth: 180, mt: 2 }} size="large">
                  <InputLabel id="age">Age</InputLabel>
                  <Select
                    name="age"
                    labelId="age"
                    id="age"
                    value={values.age}
                    label="Age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                    <MenuItem value={16}>17</MenuItem>
                  </Select>
                  {errors.age && touched.age ? (
                    <p
                      className="form-error"
                      style={{ color: "red", margin: "0px" }}
                    >
                      {errors.age}
                    </p>
                  ) : null}
                </FormControl>
              </Grid>
              <Grid>
                <FormControl sx={{ minWidth: 180, mt: 2 }} size="large">
                  <InputLabel id="gender">Gender</InputLabel>
                  <Select
                    labelId="gender"
                    id="gender"
                    name="gender"
                    value={values.gender}
                    label="Gender"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                  </Select>
                  {errors.gender && touched.gender ? (
                    <p
                      className="form-error"
                      style={{ color: "red", margin: "0px" }}
                    >
                      {errors.gender}
                    </p>
                  ) : null}
                </FormControl>
              </Grid>
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
