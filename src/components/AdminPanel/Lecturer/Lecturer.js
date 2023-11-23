import React, { useState, useEffect } from 'react';
import CreateLecturer from './CreateLecturer';
import LecturerPanel from '../LecturerPanel';

function Lecturer({ onShowCreateLecturer, newLecturer, handleCategoryClick, sampleLecturerData, addNewLecturer }) {
  const [selectedLecturer, setSelectedLecturer] = useState(null);
  const [showCreateLecturer, setShowCreateLecturer] = useState(false);
  const [lecturers, setLecturers] = useState([...newLecturer, ...sampleLecturerData]);

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

  // Function to view details of a lecturer
  const viewLecturerDetails = (lecturer) => {
    setSelectedLecturer(lecturer);
  };

  // Function to clear the selected lecturer details
  const clearSelectedLecturer = () => {
    setSelectedLecturer(null);
  };

  return (
    <div className="lecturer">
      {selectedLecturer ? (
        /* Display details of the selected lecturer if any */
        <div>
          <LecturerPanel lecturerData={{ lecturer: selectedLecturer }} />
          <button onClick={clearSelectedLecturer}>Back to List</button>
        </div>
      ) : showCreateLecturer ? (
        /* Display CreateLecturer component when creating a new lecturer */
        <CreateLecturer onCancel={() => onShowCreateLecturer(false)} onCancelCreate={cancelCreateLecturer} handleCategoryClick={handleCategoryClick} addNewLecturer={addNewLecturer} />
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
                    <button onClick={() => viewLecturerDetails(lecturer)}>View Details</button>
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
