import React from "react";
import { Route, Routes } from "react-router-dom";
import RegistrationPage from "../pages/RegistrationPage";
import FormTable from "../pages/FormTable";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RegistrationPage />}></Route>
        <Route path="/form-table" element={<FormTable />}></Route>
      </Routes>
    </div>
  );
}

export default Router;
