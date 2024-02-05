import React from "react";
import { useFormik } from "formik";
import {
  Avatar,
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
import { LockOutlined } from "@mui/icons-material";
interface FormField {
  name: string;
  label: string;
  type: string;
  options?: string[];
}

const formFields: FormField[] = [
  { name: "firstName", label: "First Name", type: "name" },
  { name: "lastName", label: "Last Name", type: "name" },
  { name: "email", label: "Email", type: "email" },
  { name: "password", label: "Password", type: "password" },
  { name: "confirm_password", label: "Confirm Password", type: "password" },
  {
    name: "age",
    label: "Age",
    type: "select",
    options: [
      "18-23",
      "23-28",
      "28-33",
      "33-38",
      "38-43",
      "43-48",
      "48-53",
      "53-58",
      "58-60",
    ],
  },
  {
    name: "gender",
    label: "Gender",
    type: "select",
    options: ["Male", "Female"],
  },
  { name: "comment", label: "Comments", type: "name" },
  { name: "mobileNo", label: "Mobile Number", type: "name" },
];

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirm_password: string;
  age: string;
  gender: string;
  comment: string;
  mobileNo: string;
}
const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirm_password: "",
  age: "",
  gender: "",
  comment: "",
  mobileNo: "",
};

const RegistrationPage: React.FC = () => {
  const { handleBlur, handleSubmit, handleChange, values, touched, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <Stack
      minWidth={"300px"}
      maxWidth={"600px"}
      sx={{ margin: "auto", marginTop: "30px", p: "15px" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h4">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {formFields.map((field) => (
              <Grid
                key={field.name}
                item
                xs={12}
                sm={field.type === "select" ? 6 : 12}
              >
                {field.type === "select" ? (
                  <FormControl sx={{ minWidth: 180 }}>
                    <InputLabel id={field.name}>{field.label}</InputLabel>
                    <Select
                      name={field.name}
                      labelId={field.name}
                      id={field.name}
                      value={values[field.name]}
                      label={field.label}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {field.options?.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                ) : (
                  <TextField
                    type={field.type}
                    autoComplete="off"
                    name={field.name}
                    id={field.name}
                    label={field.label}
                    fullWidth
                    value={values[field.name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    sx={{ ml: field.type === "select" ? "16px" : "0" }}
                  />
                )}
                {errors[field.name] && touched[field.name] ? (
                  <FormError setErr={errors[field.name]} />
                ) : null}
              </Grid>
            ))}
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
};

export default RegistrationPage;
