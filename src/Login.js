import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirecting
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // FontAwesome icons

const ToggleLogin = () => {
  const [isCompany, setIsCompany] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const toggleLogin = () => {
    setIsCompany(!isCompany);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault(); // Prevent page reload
    setShowForgotPassword(true); // Show the forgot password form
  };

  const handleSignUp = (e) => {
    e.preventDefault(); // Prevent page reload
    navigate("/signup"); // Redirect to the sign-up page
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="toggle-login-container">
      <div className="card">
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
          {showForgotPassword ? (
            <ForgotPasswordForm />
          ) : isCompany ? (
            <CompanyLoginForm
              passwordVisible={passwordVisible}
              togglePasswordVisibility={togglePasswordVisibility}
            />
          ) : (
            <EmployeeLoginForm
              passwordVisible={passwordVisible}
              togglePasswordVisibility={togglePasswordVisibility}
            />
          )}
        </div>

        <div className="login-options">
          {!showForgotPassword && (
            <a
              className="forgot-password-link"
              href="#"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </a>
          )}
        </div>
        <div className="account-links">
          <div className="account-question">Don't have an account?</div>
          <a className="signup-link" href="#" onClick={handleSignUp}>
            Signup
          </a>
        </div>
      </div>
    </div>
  );
};

const CompanyLoginForm = ({ passwordVisible, togglePasswordVisibility }) => (
  <form className="login-form-company">
    <h2>Company Login</h2>
    <input type="text" placeholder="Company ID" />
    <div className="password-container">
      <input
        type={passwordVisible ? "text" : "password"}
        placeholder="Password"
      />
      <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
      </span>
    </div>
    <button type="submit">Login</button>
  </form>
);

const EmployeeLoginForm = ({ passwordVisible, togglePasswordVisibility }) => (
  <form className="login-form-employee">
    <h2>Employee Login</h2>
    <input type="text" placeholder="Employee ID" />
    <div className="password-container">
      <input
        type={passwordVisible ? "text" : "password"}
        placeholder="Password"
      />
      <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
      </span>
    </div>
    <button type="submit">Login</button>
  </form>
);

const ForgotPasswordForm = () => (
  <form className="forgot-password-form">
    <h2>Reset Password</h2>
    <input type="email" placeholder="Enter your email" />
    <button type="submit">Send Reset Link</button>
  </form>
);

export default ToggleLogin;
