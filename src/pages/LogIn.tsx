import { Avatar, Box, Button, FormLabel, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { LockOutlined } from '@mui/icons-material'

function LogIn() {
  return (
    <div>
       <Stack
      width={"50%"}
      minWidth={"290px"}
      sx={{ margin: "auto", marginTop: "30px", p: "15px" }}
    >
      <NavLink to="/form-table" style={{ textDecoration: "none" }}>
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
          Login
        </Typography>
      <Grid direction={"column"} >
        <FormLabel>
        <TextField id="outlined-basic" label="Enter your email" fullWidth sx={{mb:"15px",mt:"15px"}}/>
      <TextField id="outlined-basic" label="Enter your password" variant="outlined" fullWidth sx={{mb:"15px"}}/>
      <Box display={"flex"}sx={{justifyContent:"center"}}><Button variant='contained'>Submit</Button></Box>
        </FormLabel>
      
      </Grid>
      <Box sx={{display:"flex", justifyContent:"flex-end" ,mt:"10px"}}><NavLink to='/'> Not registered Sign up</NavLink></Box>
       
      </Box>
    </Stack>
    </div>
  )
}

export default LogIn
