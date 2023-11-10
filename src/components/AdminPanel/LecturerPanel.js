import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LecturerPanel.css'

function LecturerPanel({ lecturerData }) {
  const {lecturer} = lecturerData;
  const lectData = [lecturer];
// Sample modules data
console.log(lectData)
const sampleModules = [
  // {
  //   code: 'PROG01',
  //   name: 'Introduction to Programming',
  //   creditHours: 3,
  //   classes: [
  //     { name: 'BSEM101', day: 'Monday', time: '9:00 AM', room: 'Room A', hours: 1 },
  //     { name: 'BBIT201', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //     { name: 'BICT310', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //     { name: 'BSEM101', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //     { name: 'BIT101', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //   ],
  // },
  // {
  //   code: 'DAT201',
  //   name: 'Data Structures and Algorithms',
  //   creditHours: 4,
  //   classes: [
  //     { name: 'BIT102', day: 'Monday', time: '9:00 AM', room: 'Room A', hours: 1 },
  //     { name: 'BBIT201', day: 'Tuesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //     { name: 'BSEM201', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //     { name: 'BSEM101', day: 'Thusday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //     { name: 'BIT101', day: 'Friday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //   ],
  // },
  // {
  //   code: 'PROG301',
  //   name: 'Web Development',
  //   creditHours: 3,
  //   classes: [
  //     { name: 'BSEM101', day: 'Monday', time: '9:00 AM', room: 'Room A', hours: 1 },
  //     { name: 'BBIT201', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //     { name: 'BICT310', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //     { name: 'BSEM101', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //     { name: 'BIT101', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //   ],
  // },
  // {
  //   code: 'PROG211',
  //   name: 'Database Management',
  //   creditHours: 3,
  //   classes: [
  //     { name: 'BSEM101', day: 'Monday', time: '9:00 AM', room: 'Room A', hours: 1 },
  //     { name: 'BBIT201', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //     { name: 'BICT310', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //     { name: 'BSEM101', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //     { name: 'BIT101', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //   ],
  // },
  // {
  //   code: 'PROG311',
  //   name: 'Artificial Intelligence',
  //   creditHours: 4,
  //   classes: [
  //     { name: 'BSEM101', day: 'Monday', time: '9:00 AM', room: 'Room A', hours: 1 },
  //     { name: 'BBIT201', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //     { name: 'BICT310', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //     { name: 'BSEM101', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //     { name: 'BIT101', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //   ],
  // },
  // {
  //   code: 'PROG02',
  //   name: 'Software Engineering',
  //   creditHours: 3,
  //   classes: [
  //     { name: 'BSEM101', day: 'Monday', time: '9:00 AM', room: 'Room A', hours: 1 },
  //     { name: 'BBIT201', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //     { name: 'BICT310', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //     { name: 'BSEM101', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //     { name: 'BIT101', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //   ],
  // },
  // {
  //   code: 'CN003',
  //   name: 'Computer Networks',
  //   creditHours: 4,
  //   classes: [
  //     { name: 'BSEM101', day: 'Monday', time: '9:00 AM', room: 'Room A', hours: 1 },
  //     { name: 'BBIT201', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //     { name: 'BICT310', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //     { name: 'BSEM101', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //     { name: 'BIT101', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //   ],
  // },
  // {
  //   code: 'CBS021',
  //   name: 'Cybersecurity',
  //   creditHours: 3,
  //   classes: [
  //     { name: 'BSEM101', day: 'Monday', time: '9:00 AM', room: 'Room A', hours: 1 },
  //     { name: 'BBIT201', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //     { name: 'BICT310', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //     { name: 'BSEM101', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //     { name: 'BIT101', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
  //   ],
  // },
  lecturer
];

console.log(sampleModules)
  const [selectedModule, setSelectedModule] = useState(null);
  
  const navigate = useNavigate()

  const handleLogout = () => {
      navigate('/login');
  };
// console.log(lecturer)

  return (
    <div className="lecturer">
      <div className="navbar">
        <span className="admin-name">{lecturer.lastname}</span>
        <button className="logout-button" type='button' onClick={handleLogout}>
          Log Out
        </button>
      </div>
      <h1>Welcome!!  {lecturer.firstname} {lecturer.lastname}</h1>
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
            {sampleModules.map((modules) => (
              modules.modules.map(module => (
                <tr key={module.code} onClick={() => setSelectedModule(module)}>
                <td>{module.moduleCode}</td>
                <td>{module.moduleName}</td>
                <td>{module.creditHours}</td>
              </tr>
              ))
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
                <th colSpan="5" className='selectedModule'>{selectedModule.moduleName}</th>
              </tr>
              <tr>
                <th>Program</th>
                <th>Semester</th>
                <th>Time</th>
                <th>Room</th>
                <th>Hours</th>
              </tr>
            </thead>
            <tbody>
              {selectedModule.details.classes.map((classDetail, index) => (
                         <tr key={index}>
                         <td>{classDetail|| 'DefaultClassName'}</td>
                         <td>{selectedModule.details.semester|| 'DefaultDay'}</td>
                         <td>{classDetail.time || 'DefaultTimee'}</td>
                         <td>{classDetail.room || 'DefaultRoom'}</td>
                         <td>{classDetail.hours || 'DefaultHours'}</td>
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
