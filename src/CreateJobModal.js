// src/components/CreateJobModal.js
import React, { useState } from "react";
import "./createjobmodal.css"; // Style the modal

const CreateJobModal = ({ closeModal }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobJoining, setJobJoining] = useState("");
  const [jobStartTiming, setStartTime] = useState("");
  const [jobEndTiming, setEndTime] = useState("");
  const [jobLocation, setJobLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    console.log("Job Title:", jobTitle);
    console.log("Job Timing:", jobStartTiming);
    console.log("Job Timing:", jobEndTiming);
    console.log("Job Location :", jobLocation);
    console.log("Date of joining:", jobJoining);
    console.log("Job Description:", jobDescription);

    closeModal(); // Close the modal after submission
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>
          ✖
        </button>
        <h2>Create New Job</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Job Title:
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
          </label>
          <div className="time-container">
            <label>
              Start Time:
              <input
                type="time"
                value={jobStartTiming}
                onChange={(e) => setStartTime(e.target.value)}
                required
              />
            </label>
            <label>
              End Time:
              <input
                type="time"
                value={jobEndTiming}
                onChange={(e) => setEndTime(e.target.value)}
                required
              />
            </label>
          </div>
          <label>
            Location :
            <input
              type="text"
              value={jobLocation}
              onChange={(e) => setJobLocation(e.target.value)}
              required
            ></input>
          </label>
          <label>
            Date of joining:
            <input
              type="date"
              value={jobJoining}
              onChange={(e) => setJobJoining(e.target.value)}
              required
            ></input>
          </label>
          <label>
            Description:
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              required
            ></textarea>
          </label>
          <button className="modal-content-button" type="submit">
            Create Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateJobModal;
