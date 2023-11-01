import React, { useState } from 'react';
import CreateLecturer from './CreateLecturer';

function Lecturer({ onShowCreateLecturer }) {
  const [selectedLecturer, setSelectedLecturer] = useState(null);
  const [showCreateLecturer, setShowCreateLecturer] = useState(false);
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

  // Function to show the CreateLecturer component
  const handleShowCreateLecturer = () => {
    setShowCreateLecturer(true);
  };

  // Function to reset the view when switching to the Lecturer tab
  const handleShowLecturer = () => {
    setShowCreateLecturer(false);
  };

  // Function to cancel creating a lecturer
  const cancelCreateLecturer = () => {
    setShowCreateLecturer(false);
  };

  function addNewLecturer() {
    console.log("Hello");
    // You can add your logic to add a new lecturer here.
  }

  return (
    <div className="lecturer">
      {selectedLecturer ? (
        /* Display details of selected lecturer if any */
        <div>
          {/* You can add details of the selected lecturer here */}
        </div>
      ) : showCreateLecturer ? (
        /* Display CreateLecturer component when creating a new lecturer */
        <CreateLecturer onSave={addNewLecturer} onCancelCreate={cancelCreateLecturer} />
      ) : (
        /* Display the list of lecturers */
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
