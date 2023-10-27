import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LecturerPanel.css'

function LecturerPanel() {
// Sample modules data
const sampleModules = [
  {
    code: 'MOD001',
    name: 'Introduction to Programming',
    creditHours: 3,
    classes: [
      { name: 'Lecture 1', day: 'Monday', time: '9:00 AM', room: 'Room A', hours: 1 },
      { name: 'Lab 1', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
      { name: 'Lab 4', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
      { name: 'Lab 1', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
      { name: 'Lab 3', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
    ],
  },
  {
    code: 'MOD002',
    name: 'Data Structures and Algorithms',
    creditHours: 4,
    classes: [
      { name: 'Lecture 1', day: 'Tuesday', time: '10:00 AM', room: 'Room B', hours: 1 },
      { name: 'Lab 1', day: 'Thursday', time: '2:00 PM', room: 'Lab 2', hours: 2 },
    ],
  },
  {
    code: 'MOD003',
    name: 'Web Development',
    creditHours: 3,
    classes: [
      { name: 'Lecture 1', day: 'Monday', time: '1:00 PM', room: 'Room C', hours: 1 },
      { name: 'Lab 1', day: 'Wednesday', time: '4:00 PM', room: 'Lab 3', hours: 2 },
    ],
  },
  {
    code: 'MOD004',
    name: 'Database Management',
    creditHours: 3,
    classes: [
      { name: 'Lecture 1', day: 'Tuesday', time: '2:00 PM', room: 'Room D', hours: 1 },
      { name: 'Lab 1', day: 'Thursday', time: '4:00 PM', room: 'Lab 4', hours: 2 },
    ],
  },
  {
    code: 'MOD005',
    name: 'Artificial Intelligence',
    creditHours: 4,
    classes: [
      { name: 'Lecture 1', day: 'Wednesday', time: '11:00 AM', room: 'Room E', hours: 1 },
      { name: 'Lab 1', day: 'Friday', time: '3:00 PM', room: 'Lab 5', hours: 2 },
    ],
  },
  {
    code: 'MOD006',
    name: 'Software Engineering',
    creditHours: 3,
    classes: [
      { name: 'Lecture 1', day: 'Thursday', time: '1:00 PM', room: 'Room F', hours: 1 },
      { name: 'Lab 1', day: 'Saturday', time: '10:00 AM', room: 'Lab 6', hours: 2 },
    ],
  },
  {
    code: 'MOD007',
    name: 'Computer Networks',
    creditHours: 4,
    classes: [
      { name: 'Lecture 1', day: 'Monday', time: '3:00 PM', room: 'Room G', hours: 1 },
      { name: 'Lab 1', day: 'Wednesday', time: '5:00 PM', room: 'Lab 7', hours: 2 },
    ],
  },
  {
    code: 'MOD008',
    name: 'Cybersecurity',
    creditHours: 3,
    classes: [
      { name: 'Lecture 1', day: 'Tuesday', time: '4:00 PM', room: 'Room H', hours: 1 },
      { name: 'Lab 1', day: 'Thursday', time: '6:00 PM', room: 'Lab 8', hours: 2 },
    ],
  },
];

  const [selectedModule, setSelectedModule] = useState(null);
  const navigate = useNavigate()

  const handleLogout = () => {
      navigate('/login');
  };


  return (
    <div className="lecturer">
      <div className="navbar">
        <span className="admin-name">User</span>
        <button className="logout-button" onClick={handleLogout}>
          Log Out
        </button>
      </div>
      <h1>Lecturer Panel</h1>
      <div className="module-list">
        <table>
          <thead>
            <tr>
              <th>Module Code</th>
              <th>Module Name</th>
              <th>Credit Hours</th>
            </tr>
          </thead>
          <tbody>
            {sampleModules.map((module) => (
              <tr key={module.code} onClick={() => setSelectedModule(module)}>
                <td>{module.code}</td>
                <td>{module.name}</td>
                <td>{module.creditHours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedModule && (
        <div className="module-details">
          <h2>Module Details</h2>
          <table>
            <thead>
              <tr>
                <th colSpan="5" className='selectedModule'>{selectedModule.name}</th>
              </tr>
              <tr>
                <th>Class Name</th>
                <th>Day</th>
                <th>Time</th>
                <th>Room</th>
                <th>Hours</th>
              </tr>
            </thead>
            <tbody>
              {selectedModule.classes.map((classDetail, index) => (
                <tr key={index}>
                  <td>{classDetail.name}</td>
                  <td>{classDetail.day}</td>
                  <td>{classDetail.time}</td>
                  <td>{classDetail.room}</td>
                  <td>{classDetail.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default LecturerPanel;
