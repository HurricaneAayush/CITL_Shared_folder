import React, { useState } from "react";
import "./companydashboard.css";
import "./employeedashboard.css";
import "./jobs.css";

const Jobs = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
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
              className={activeItem === "FindJob" ? "active" : ""}
              onClick={() => handleItemClick("FindJob")}
            >
              <a href="#">Find Job</a>
            </li>
            <li
              className={activeItem === "PreviousWork" ? "active" : ""}
              onClick={() => handleItemClick("PreviousWork")}
            >
              <a href="#">Previous Work</a>
            </li>
            <li
              className={activeItem === "Logout" ? "active" : ""}
              onClick={() => handleItemClick("Logout")}
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
            <img src={require("/src/images/pic.jpg")} alt="User Profile" />
          </div>
        </header>

        <main className="main-content">
          <h2>Find Jobs</h2>
          <div className="jobs-grid">
            <div className="job-card">
              <img
                //   src={require("/src/images/jobimage.png")}
                alt="Job Image"
              />
              <h3>Mahvir Brothers</h3>
              <p>
                Requirement: Lorem ipsum dolor sit amet consectetur adipiscing
                elit.
              </p>
              <p>Address: Dadar, Mumbai</p>
              <p>Available positions: 10</p>
              <p>Type of work: Bend Glass</p>
              <p>Payment: ₹1000 per day</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Jobs;
