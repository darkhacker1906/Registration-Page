import React from "react";
// import RegistrationPage from "./pages/RegistrationPage";
import { Box } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
// import { UserIdProvider } from "./FormContext";

function App() {
  return (
    // <UserIdProvider>
    <BrowserRouter>
       <Router/>
       </BrowserRouter>
      //  </UserIdProvider>
  );
}
export default App;
