// App.js
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel/AdminPanel ';
import LecturerPanel from './components/AdminPanel/LecturerPanel';


function App() {

  const [user, setUser] = useState(null);
  const [sampleLecturerData , setSampleLecturerData ] = useState([
    {
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
      gender: 'Male',
      name: 'Lecturer 1',
      department: 'Department A',
      address: 'Shell Old Road',
      dateOfBirth: "", // New field for date of birth
      qualification: "", // New field for lecturer's qualification
      email: "john@gmail.com",
      password: "12345", // New field for lecturer's email
      contact: "", // New field for lecturer's contact
      modules: [],
    },
    {
      id: 2,
      firstname: 'Jane',
      lastname: 'Smith',
      gender: 'Female',
      name: 'Lecturer 2',
      department: 'Department B',
      address: 'Shell Old Road',
      dateOfBirth: "", // New field for date of birth
      qualification: "", // New field for lecturer's qualification
      email: "jane@gmail.com",
      password: "12345", // New field for lecturer's email
      contact: "", // New field for lecturer's contact
      modules: [],
    },
    // Add more lecturer data as needed
  ]);

  // Function to add a new lecturer to the sampleLecturerData state.
  const addNewLecturer = (newLecturer) => {
    // Update the sampleLecturerData state by appending the new lecturer.
    console.log(newLecturer)
    setSampleLecturerData([newLecturer, ...sampleLecturerData]);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={<Login sampleLecturerData={sampleLecturerData} addNewLecturer={addNewLecturer} />}
        />
        <Route path="/admin" element={<AdminPanel sampleLecturerData={sampleLecturerData} addNewLecturer={addNewLecturer}/>} />
        <Route path="/lecturer" element={<LecturerPanel sampleLecturerData={sampleLecturerData}/>} />

        <Route index element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;







