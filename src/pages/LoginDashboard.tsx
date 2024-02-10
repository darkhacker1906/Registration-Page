import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { loginSchema } from "./schemas/LoginValidation";
import FormError from "../error/FormError";
import LoginImg from "../IMG/LoginImg.jpeg";
import { Stack } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../firebase";
import { CircularProgress } from "@mui/material";

const defaultTheme = createTheme();

export default function LoginDashboard() {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const { handleBlur, handleSubmit, handleChange, values, touched, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: async (values, { resetForm }) => {
        setLoading(true);
        try {
          await signInWithEmailAndPassword(
            firebaseAuth,
            values.email,
            values.password
          ).then(async (res) => {
            navigate("/form-table");
          });
        } catch (error) {
          console.log(error.message, "errrrrrrrrr");
        }
        resetForm();
        setLoading(false);
      },
    });
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Stack
          sx={{
            backgroundImage: `url(${LoginImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
            minHeight: "100vh",
            minWidth: "100vw",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            width={"45%"}
            square
          >
            <Stack
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                width={"100%"}
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={values.email}
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <FormError setErr={errors.email} />
                ) : null}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <FormError setErr={errors.password} />
                ) : null}
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => handleSubmit()}
              >
                Sign In
              </Button>
              <Grid container>
                {loading && <CircularProgress />}
                <Grid item xs></Grid>
                <Grid item>
                  <NavLink to="/register"> Sign up</NavLink>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Stack>
      </Grid>
    </ThemeProvider>
  );
}
