import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <h2>Total Modules</h2>
        <p>50</p> {/* Replace with the actual total */}
      </div>
      <div className="dashboard-card">
        <h2>Total Faculties</h2>
        <p>10</p> {/* Replace with the actual total */}
      </div>
      <div className="dashboard-card">
        <h2>Total Lecturers</h2>
        <p>30</p> {/* Replace with the actual total */}
      </div>
      <div className="dashboard-card">
        <h2>Total Department</h2>
        <p>30</p> {/* Replace with the actual total */}
      </div>
      <div className="dashboard-card">
        <h2>Total Program</h2>
        <p>30</p> {/* Replace with the actual total */}
      </div>
      <div className="dashboard-card">
        <h2>Total Students</h2>
        <p>30</p> {/* Replace with the actual total */}
      </div>
    </div>
  );
}

export default Dashboard;
