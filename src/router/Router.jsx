import React from "react";
import { Route, Routes } from "react-router-dom";
import RegistrationPage from "../pages/RegistrationPage";
import FormTable from "../pages/FormTable";
import UserData from "../components/UserData";
import LogIn from "../pages/LogIn";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RegistrationPage />}></Route>
        <Route path="/form-table" element={<FormTable />}></Route>
        <Route path='/form-table/:id' element={<UserData/>}></Route>
        <Route path='/login' element={<LogIn/>}/>
      </Routes>
    </div>
  );
}

export default Router;
