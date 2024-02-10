import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
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
import { useLocation } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { firebaseAuth } from "../firebase";

const RegistrationPage: React.FC = () => {
  const [loading,setLoading]=useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  let {
    firstName,
    lastName,
    email,
    age,
    gender,
    id,
    mobileNo,
    password,
    confirm_passord,
  } = location.state || {};
  const [data, setData] = useState<any>([]);
  const formFields: FormField[] = [
    {
      name: "firstName",
      label: "First Name",
      type: "name",
      value: firstName || "",
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "name",
      value: lastName || "",
    },
    { name: "email", label: "Email", type: "email", value: email || "" },
    {
      name: "password",
      label: "Password",
      type: "password",
      value: password || "",
    },
    {
      name: "confirm_password",
      label: "Confirm Password",
      type: "password",
      value: confirm_passord || "",
    },
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
      value: "",
    },
    {
      name: "gender",
      label: "Gender",
      type: "select",
      options: ["Male", "Female"],
      value: "",
    },
    { name: "comment", label: "Comments", type: "textarea", value: "" },
    { name: "mobileNo", label: "Mobile Number", type: "name", value: "" },
  ];
  const initialValues: FormValues = {
    firstName: firstName || "",
    lastName: lastName || "",
    email: email || "",
    password: password || "",
    confirm_password: "",
    age: age || "",
    gender: gender || "",
    comment: "",
    mobileNo: mobileNo || "",
  };

  const {
    handleBlur,
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        if (!id) {
          await addDoc(collection(db, "forms"), {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            confirm_password: values.confirm_password,
            age: values.age,
            gender: values.gender,
            mobileNo: values.mobileNo,
          });
        } else {
          const updatedTodoRef = doc(db, "forms", id);
          await updateDoc(updatedTodoRef, {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            confirm_password: values.confirm_password,
            age: values.age,
            gender: values.gender,
            mobileNo: values.mobileNo,
          });
        }
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
      createUserWithEmailAndPassword(
        firebaseAuth,
        values.email,
        values.password
      )
        .then((res) => {
          const user = res.user;
          console.log(user);
          updateProfile(user, {
            displayName: values.firstName,
          });
          navigate("/");
        })
        .catch((error) => {
          console.log("Error", error);
        });
      resetForm();
    },
  });

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "forms"), (snapshot) => {
      setData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          password: doc.data().password,
          confirm_passord: doc.data().confirm_passord,
          email: doc.data().email,
          age: doc.data().age,
          gender: doc.data().gender,
          mobileNo: doc.data().mobileNo,
        }))
      );
    });
    return () => unsubscribe();
  }, []);

  return (
    <Stack
      width={"50%"}
      minWidth={"290px"}
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
          Register
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
            {!id ? (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, ml: "16px" }}
              >
                Sign Up
              </Button>
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, ml: "16px" }}
              >
                Update
              </Button>
            )}
            
          </Grid>
        </FormControl>
        <NavLink to="/">Already a customer Login</NavLink>
        {
          loading && <CircularProgress/>
        }
         


      </Box>
    </Stack>
  );
};

export default RegistrationPage;
