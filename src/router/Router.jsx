import React from "react";
import { Route, Routes } from "react-router-dom";
import RegistrationPage from "../pages/RegistrationPage";
import FormTable from "../pages/FormTable";
import UserData from "../components/UserData";
import LoginDashboard from "../pages/LoginDashboard";

function Router() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<LoginDashboard/>}></Route>
        <Route path="/register" element={<RegistrationPage />}></Route>
        <Route path="/form-table" element={<FormTable />}></Route>
        <Route path='/form-table/:id' element={<UserData/>}></Route>
 
      </Routes>
    </div>
  );
}

export default Router;
