import React, { useState } from "react";
import "./companydashboard.css";
import "./employeedashboard.css";

const CompanyDashboard = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        <aside className="sidebar">
          <div className="sidebar-logo">
            <img src={require("/src/images/download.png")} alt="Gemhire Logo" />
          </div>
          <nav className="sidebar-nav">
            <ul>
              <li
                className={activeItem === "Dashboard" ? "active" : ""}
                onClick={() => handleItemClick("Dashboard")}
              >
                <a href="#">Profile</a>
              </li>
              <li
                className={activeItem === "Employees" ? "active" : ""}
                onClick={() => handleItemClick("Employees")}
              >
                <a href="#">Find Job</a>
              </li>
              <li
                className={activeItem === "Time Attendance" ? "active" : ""}
                onClick={() => handleItemClick("Time Attendance")}
              >
                <a href="#">Previous Work</a>
              </li>
              <li
                className={activeItem === "Payroll" ? "active" : ""}
                onClick={() => handleItemClick("Payroll")}
              >
                <a href="#">Logout</a>
              </li>
            </ul>
          </nav>
        </aside>

        <div className="main">
          <header className="main-header">
            <div className="search-bar">
              <input type="text" placeholder="Search" />
            </div>
            <div className="user-profile">
              <img src={require("/src/images/pic.jpg")} alt="Gemhire Logo" />
            </div>
          </header>
          <main className="main-content">
            <div className="employee-section">
              <div className="personal-details">
                <img src={require("/src/images/pic.jpg")} alt="Employee" />
                <div className="employee-info">
                  <h2>Thalat Hamdi</h2>
                  <p>Thalathamdi@yoyo.com</p>

                  <h3>Basic Information</h3>
                  <div className="info-list">
                    <div className="info-item">
                      <span className="info-label">Hire Date:</span>
                      <span className="info-value">August 28, 2013</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Worked for:</span>
                      <span className="info-value">7 Years, 2 months</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Employee ID:</span>
                      <span className="info-value">JSI082802</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Company Name:</span>
                      <span className="info-value">Mahavir Brothers</span>
                    </div>
                  </div>

                  <h3>Personal Information</h3>
                  <div className="info-list">
                    <div className="info-item">
                      <span className="info-label">BPJS Ketenagakerjaan:</span>
                      <span className="info-value">7971787278288</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Birth Date:</span>
                      <span className="info-value">22 December 1990</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Address:</span>
                      <span className="info-value">
                        Jl.Sawo 2 No 75, RT01...
                      </span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Gender:</span>
                      <span className="info-value">Male</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Email:</span>
                      <span className="info-value">ThalatHamdi@gmail.com</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Aadhaar No:</span>
                      <span className="info-value">8762541311</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Phone No.:</span>
                      <span className="info-value">0888908008</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">ID Number:</span>
                      <span className="info-value">37800918293</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">NPWP:</span>
                      <span className="info-value">477847828278</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="news-calendar">
                <div className="calendar-section">
                  {" "}
                  News
                  {/* Calendar Component can go here */}
                </div>
                <div className="calendar-section">
                  {" "}
                  Calendar
                  {/* Calendar Component can go here */}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
