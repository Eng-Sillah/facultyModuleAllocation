import React, { useState, useEffect } from 'react';
import CreateLecturer from './CreateLecturer';

function Lecturer({ onShowCreateLecturer, newLecturer, onSaveNewLecturer, handleCategoryClick }) {
  const [selectedLecturer, setSelectedLecturer] = useState(null);
  const [showCreateLecturer, setShowCreateLecturer] = useState(false);

  const sampleLecturerData = [
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
      email: "", // New field for lecturer's email
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
      email: "", // New field for lecturer's email
      contact: "", // New field for lecturer's contact
      modules: [],
    },
    // Add more lecturer data as needed
  ]
  const [lecturers, setLecturers] = useState([...newLecturer, ...sampleLecturerData]);

  // useEffect(() => {
  //   if (newLecturer) {
  //     // Append the new lecturer to the existing list of lecturers
  //     setLecturers([...lecturers, newLecturer]);
  //   }
  // }, [newLecturer]);

  // Function to show the CreateLecturer component
  const handleShowCreateLecturer = () => {
    setShowCreateLecturer(true);
  };

  // Function to reset the view when switching to the Lecturer tab
  const handleShowLecturer = () => {
    setShowCreateLecturer(false);
    onShowCreateLecturer('createLecturer');
  };

  // Function to cancel creating a lecturer
  const cancelCreateLecturer = () => {
    setShowCreateLecturer(false);
  };

  return (
    <div className="lecturer">
      {selectedLecturer ? (
        /* Display details of the selected lecturer if any */
        <div>
          {/* You can add details of the selected lecturer here */}
        </div>
      ) : showCreateLecturer ? (
        /* Display CreateLecturer component when creating a new lecturer */
        <CreateLecturer onCancel={() => onShowCreateLecturer(false)} onCancelCreate={cancelCreateLecturer}  onSaveNewLecturer={onSaveNewLecturer} />
      ) : (
        /* Display the list of lecturers */
        <div>
          <h1>Lecturer List</h1>
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
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleShowCreateLecturer}>Add New Lecturer</button>
        </div>
      )}
    </div>
  );
}

export default Lecturer;
