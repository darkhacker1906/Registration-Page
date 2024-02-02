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
import FormError from "../error/FormError";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirm_password: "",
  age: "",
  gender: "",
  comments: "",
  mobileNo: "",
};

function RegistrationPage() {
  const { handleBlur, handleSubmit, handleChange, values, touched, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log(values);
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
                <FormError setErr={errors.firstName} />
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
                <FormError setErr={errors.lastName} />
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
                <FormError setErr={errors.email} />
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
                <FormError setErr={errors.password} />
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
                <FormError setErr={errors.confirm_password} />
              ) : null}
            </Grid>

            <Grid container gap={6} sx={{ ml: "16px", mt: 1 }}>
              <Box>
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
                    <MenuItem value={20}>18-23</MenuItem>
                    <MenuItem value={25}>23-28</MenuItem>
                    <MenuItem value={30}>28-33</MenuItem>
                  </Select>
                  {errors.age && touched.age ? (
                    <FormError setErr={errors.age} />
                  ) : null}
                </FormControl>
              </Box>
              <Box>
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
                    <FormError setErr={errors.gender} />
                  ) : null}
                </FormControl>
              </Box>
            </Grid>

            <TextField
              type="name"
              autoComplete="off"
              name="comment"
              id="comment"
              label="Enter the comments"
              fullWidth
              value={values.comments}
              onChange={handleChange}
              onBlur={handleBlur}
              sx={{ marginTop: 2,ml: "16px" }}
            />
            {errors.comments && touched.comments ? (
              <FormError setErr={errors.comments} />
            ) : null}
            <TextField
              type="name"
              autoComplete="off"
              name="mobileNo"
              id="mobileNo"
              label="Enter Mobile Number"
              fullWidth
              value={values.mobileNo}
              onChange={handleChange}
              onBlur={handleBlur}
              sx={{ marginTop: 2,ml: "16px"}}
            />
            {errors.mobileNo && touched.mobileNo ? (
              <FormError setErr={errors.mobileNo} />
            ) : null}

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
