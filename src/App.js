// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ToggleLogin from "./Login";
import SignUp from "./Signup"; // Assuming you have a SignUp component
import CompanyDashboard from "./companydashboard";
import EmployeeDashboard from "./employeedashboard";
import Jobs from "./Jobs";
import LandingPage from "./Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<ToggleLogin />} />
        <Route path="/employeedashboard" element={<EmployeeDashboard />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/" element={<CompanyDashboard />} />
        <Route path="/Jobs" element={<Jobs />} />
      </Routes>
    </Router>
  );
}

export default App;
