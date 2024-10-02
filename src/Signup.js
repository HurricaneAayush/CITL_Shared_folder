import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Signup.css";

const SignUp = () => {
  const [isCompany, setIsCompany] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const toggleLogin = () => {
    setIsCompany(!isCompany);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/signup"); // If there's a specific sign-up page
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page reload
    navigate("/"); // Redirect to the login page
  };

  return (
    <div className="toggle-signup-container">
      <div className="card signup-card">
        <div className="logo">
          <img src={require("/src/images/download.png")} alt="logo" />
        </div>
        <div className="toggle-switch">
          <label className="switch">
            <input
              type="checkbox"
              checked={!isCompany}
              onChange={toggleLogin}
            />
            <span className="slider">
              <span className="switch-text company-text">Company</span>
              <span className="switch-text employee-text">Employee</span>
            </span>
          </label>
        </div>
        <div className="login-form">
          {isCompany ? (
            <CompanySignUpForm
              passwordVisible={passwordVisible}
              confirmPasswordVisible={confirmPasswordVisible}
              togglePasswordVisibility={togglePasswordVisibility}
              toggleConfirmPasswordVisibility={toggleConfirmPasswordVisibility}
            />
          ) : (
            <EmployeeSignUpForm
              passwordVisible={passwordVisible}
              confirmPasswordVisible={confirmPasswordVisible}
              togglePasswordVisibility={togglePasswordVisibility}
              toggleConfirmPasswordVisibility={toggleConfirmPasswordVisibility}
            />
          )}
        </div>
        <div className="account-links">
          <div className="account-question">Already have an account?</div>
          <a className="login-link" href="#" onClick={handleLogin}>
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

const CompanySignUpForm = ({
  passwordVisible,
  confirmPasswordVisible,
  togglePasswordVisibility,
  toggleConfirmPasswordVisibility,
}) => (
  <form className="signup-form-company">
    <h2>Company SignUp</h2>
    <input type="text" placeholder="Company Name" />
    <input type="text" placeholder="Phone no" />
    <input type="text" placeholder="GSTIN" />
    <input type="text" placeholder="Owner" />
    <input type="email" placeholder="Email Id" />
    <div className="password-container">
      <input
        type={passwordVisible ? "text" : "password"}
        placeholder="Password"
      />
      <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
      </span>
    </div>
    <div className="password-container">
      <input
        type={confirmPasswordVisible ? "text" : "password"}
        placeholder="Confirm Password"
      />
      <span
        className="password-toggle-icon"
        onClick={toggleConfirmPasswordVisibility}
      >
        {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
      </span>
    </div>
    <button type="submit">Submit</button>
  </form>
);

const EmployeeSignUpForm = ({
  passwordVisible,
  confirmPasswordVisible,
  togglePasswordVisibility,
  toggleConfirmPasswordVisibility,
}) => (
  <form className="signup-form-employee">
    <h2>Employee SignUp</h2>
    <input type="text" placeholder="Name" />
    <input type="date" placeholder="Date of birth" />
    <input type="text" placeholder="Address" />
    <input type="text" placeholder="Phone no" />
    <input type="email" placeholder="Email Id" />
    <input type="text" placeholder="Adhaar card no" />
    <div className="tool-type-select-container">
      <select className="tool-type-select">
        <option value="">Select Type of Tool</option>
        <option value="software">Type 1</option>
        <option value="hardware">Type 2</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div className="password-container">
      <input
        type={passwordVisible ? "text" : "password"}
        placeholder="Password"
      />
      <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
      </span>
    </div>
    <div className="password-container">
      <input
        type={confirmPasswordVisible ? "text" : "password"}
        placeholder="Confirm Password"
      />
      <span
        className="password-toggle-icon"
        onClick={toggleConfirmPasswordVisibility}
      >
        {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
      </span>
    </div>
    <button type="submit">Submit</button>
  </form>
);

export default SignUp;
