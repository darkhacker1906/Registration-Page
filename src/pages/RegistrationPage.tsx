import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { signUpSchema } from "./schemas";
import FormError from "../error/FormError";
import { LockOutlined } from "@mui/icons-material";
import InputComp from "../components/Select";
import { FormField, FormValues } from "../components/TypeInterface";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import ButtonDash from "../components/ButtonDash";

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
  { name: "comment", label: "Comments", type: "textarea" },
  { name: "mobileNo", label: "Mobile Number", type: "name" },
];

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
  const [inputdata, setInputData] = useState({});
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "forms"), (snapshot) => {
      setInputData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          email: doc.data().email,
          age: doc.data().age,
          gender: doc.data().gender,
          mobileNo: doc.data().mobileNo,
        }))
      );
    });
    return () => unsubscribe();
  }, []);

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
      width={"50%"}
      minWidth={"290px"}
      sx={{ margin: "auto", marginTop: "30px", p: "15px" }}
    >
      <NavLink to="/form-table" style={{ textDecoration: "none" }}>
        <ButtonDash />
      </NavLink>
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
        <FormControl component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {formFields.map((field) => (
              <Grid
                key={field.name}
                item
                xs={12}
                sm={field.type === "select" ? 6 : 12}
              >
                {field.type === "select" ? (
                  <InputComp
                    field={field}
                    values={values}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                ) : field.type === "textarea" ? (
                  <TextField
                    multiline
                    rows={2}
                    name={field.name}
                    id={field.name}
                    label={field.label}
                    fullWidth
                    value={values[field.name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                ) : (
                  <TextField
                    type={field.type}
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
        </FormControl>
      </Box>
    </Stack>
  );
};

export default RegistrationPage;
