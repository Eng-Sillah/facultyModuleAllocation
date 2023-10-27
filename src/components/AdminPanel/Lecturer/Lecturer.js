import React, { useState } from 'react';
import ModuleDetails from './ModuleDetails';

function Lecturer() {
  const [selectedLecturer, setSelectedLecturer] = useState(null);
  const [lecturers, setLecturers] = useState([
    {
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
      gender: 'Male',
      name: 'Lecturer 1',
      department: 'Department A',
    },
    {
      id: 2,
      firstname: 'Jane',
      lastname: 'Smith',
      gender: 'Female',
      name: 'Lecturer 2',
      department: 'Department B',
    },
    // Add more lecturer data as needed
  ]);

  const handleLecturerClick = (lecturer) => {
    setSelectedLecturer(lecturer);
  };

  return (
    <div className="lecturer">
      <h1>Lecturer List</h1>
      {selectedLecturer ? (
        <ModuleDetails module={selectedLecturer} />
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Lecturer Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Department</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {lecturers.map((lecturer, index) => (
                <tr key={index}>
                  <td>{lecturer.id}</td>
                  <td>{lecturer.firstname}</td>
                  <td>{lecturer.lastname}</td>
                  <td>{lecturer.gender}</td>
                  <td>{lecturer.department}</td>
                  <td>
                    <button>Edit</button>
                    <button >Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button >Add New Lecturer</button>
        </div>
      )}
    </div>
  );
}

export default Lecturer;
