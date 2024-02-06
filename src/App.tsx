import React from "react";
import RegistrationPage from "./pages/RegistrationPage";
import { Box } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";

function App() {
  return (
    <BrowserRouter>
       <Router/>
       </BrowserRouter>
  );
}
export default App;
