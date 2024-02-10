import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import { loginSchema } from './schemas/LoginValidation';
import FormError from '../error/FormError';

const defaultTheme = createTheme();

export default function LoginDashboard() {
const initialValues={
    email:"",
    password:"",
}
const {
    handleBlur,
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    resetForm,
  } = useFormik({
    initialValues:initialValues,
    validationSchema:loginSchema,
    onSubmit:(values,{resetForm})=>{
           email:values.email;
           password:values.password;
           resetForm();    
    },
})
console.log(values);


  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 1 }}>
              {/* <Box> */}
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
              {errors.email && touched ? (
                  <FormError setErr={errors.email} />
                ) : null}
                {/* </Box> */}
                {/* <Box sx={{width:'100%'}}> */}
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
               {errors.password && touched ? (
                  <FormError setErr={errors.password} />
                ) : null}
                {/* </Box> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                 <NavLink to='/register'>Don't have an account Sign up</NavLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}