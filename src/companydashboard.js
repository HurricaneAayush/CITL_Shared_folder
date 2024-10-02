import React, { useState } from "react";
import "./companydashboard.css";
import CreateJobModal from "./CreateJobModal"; // Import the modal component

const CompanyDashboard = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle the modal on/off
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
              <a href="#">Dashboard</a>
            </li>
            <li
              className={activeItem === "Employees" ? "active" : ""}
              onClick={() => handleItemClick("Employees")}
            >
              <a href="#">Employees</a>
            </li>
            <li
              className={activeItem === "Time Attendance" ? "active" : ""}
              onClick={() => handleItemClick("Time Attendance")}
            >
              <a href="#">Time Attendance</a>
            </li>
            <li
              className={activeItem === "Payroll" ? "active" : ""}
              onClick={() => handleItemClick("Payroll")}
            >
              <a href="#">Payroll</a>
            </li>
            <li
              className={activeItem === "Create Jobs" ? "active" : ""}
              onClick={() => {
                handleItemClick("Create Jobs");
                toggleModal();
              }}
            >
              <a href="#">Create Jobs</a>
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
          <div className="welcome-section">
            <h2>Welcome Mahvir Brothers</h2>
            <p>Curve yourself like a Diamond and shine</p>
            <button className="create-work-button">Create Work</button>
          </div>

          <div className="dashboard-overview">
            <div className="overview-card">
              <div className="overview-title">Total Employee</div>
              <div className="overview-value">
                <span>550</span>
                <img src={require("/src/images/1.png")} alt="Icon" />
              </div>
            </div>
            <div className="overview-card">
              <div className="overview-title">Present</div>
              <div className="overview-value">
                <span>525</span>
                <img src={require("/src/images/2.png")} alt="Icon" />
              </div>
            </div>
            <div className="overview-card">
              <div className="overview-title">Late</div>
              <div className="overview-value">
                <span>20</span>
                <img src={require("/src/images/3.png")} alt="Icon" />
              </div>
            </div>
            <div className="overview-card">
              <div className="overview-title">Annual Leave</div>
              <div className="overview-value">
                <span>5</span>
                <img src={require("/src/images/4.png")} alt="Icon" />
              </div>
            </div>
          </div>

          <div className="employee-section">
            <div className="employee-list">
              <h3>Employees</h3>
              <ul>
                <li>
                  <div className="employee-profile">
                    <img src="profile1.png" alt="Yuraj Doshi" />
                    <div>
                      <div className="employee-name">Yuraj Doshi</div>
                      <div className="employee-role">Accountant</div>
                    </div>
                    <div className="employee-date">18/03/2022</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="calendar-section"></div>
          </div>
          {isModalOpen && <CreateJobModal closeModal={toggleModal} />}
        </main>
      </div>
    </div>
  );
};

export default CompanyDashboard;
