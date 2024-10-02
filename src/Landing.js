import React from "react";
import { useNavigate } from "react-router-dom";
import "./landing.css";

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLoginClick = () => {
    navigate("/Login"); // Navigate to the login page when Log In is clicked
  };

  const handleSignupClick = () => {
    navigate("/Signup"); // Navigate to the login page when Log In is clicked
  };

  return (
    <div className="landing-container">
      <header className="landing-main-header">
        <div className="logo">
          <img src={require("/src/images/download.png")} alt="logo" />
        </div>
        <nav className="header-links">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About Us
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
          <button className="sign-in" onClick={handleSignupClick}>
            Register
          </button>
        </nav>
      </header>

      <div className="landing-main-content">
        <h1>Get the right jobs</h1>
        <p>
          Create an account or sign in. By continuing, you agree to our{" "}
          <a href="#">Terms of Use</a> and acknowledge our{" "}
          <a href="#">Privacy Policy</a>.
        </p>

        <div className="auth-buttons">
          <button className="auth-button google-btn">
            <img src={require("/src/images/google.png")} alt="Google" />{" "}
            Continue with Google
          </button>
        </div>

        <div className="email-section">
          <span>or</span>
          <button className="auth-button google-btn" onClick={handleLoginClick}>
            Continue with Web
          </button>
        </div>
      </div>
      <footer className="landing-footer">
        <div className="footer-links">
          <span>Browse by:</span>
          <a href="#">Companies</a>, <a href="#">Jobs</a>,{" "}
          <a href="#">Locations</a>,<a href="#">Communities</a>,{" "}
          <a href="#">Recent posts</a>
        </div>
        <div className="footer-copyright">
          <p>
            &copy; 2010-2024 Glassdoor LLC. "GemHire," and it's logos are
            proprietary trademarks of GemHire LLC.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
