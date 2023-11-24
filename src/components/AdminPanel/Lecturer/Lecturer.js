import React, { useState, useEffect } from 'react';
import CreateLecturer from './CreateLecturer';
import EditLect from './EditLect';
import LecturerPanel from '../LecturerPanel';

function Lecturer({ onShowCreateLecturer, newLecturer, handleCategoryClick, sampleLecturerData, addNewLecturer, onSaveEdit, onUpdateLecturer }) {
  const [selectedLecturer, setSelectedLecturer] = useState(null);
  const [showCreateLecturer, setShowCreateLecturer] = useState(false);
  const [showEditLecturer, setShowEditLecturer] = useState(false); // State to control the visibility of the edit lecturer page
  const [lecturers, setLecturers] = useState([...newLecturer, ...sampleLecturerData]);
  const [selectedEditLecturer, setSelectedEditLecturer] = useState(null); // State to store the lecturer being edited

  // Function to show the CreateLecturer component
  const handleShowCreateLecturer = () => {
    setShowCreateLecturer(true);
    setShowEditLecturer(false); // Close the edit lecturer page if open
  };

  // Function to reset the view when switching to the Lecturer tab
  const handleShowLecturer = () => {
    setShowCreateLecturer(false);
    setShowEditLecturer(false); // Close the edit lecturer page if open
    onShowCreateLecturer('createLecturer');
  };

  // Function to cancel creating or editing a lecturer
  const cancelCreateOrEditLecturer = () => {
    setShowCreateLecturer(false);
    setShowEditLecturer(false);
  };

  // Function to view details of a lecturer
  const viewLecturerDetails = (lecturer) => {
    setSelectedLecturer(lecturer);
    setShowEditLecturer(false); // Close the edit lecturer page if open
  };

  // Function to open the edit lecturer page
  const editLecturer = (lecturer) => {
    setSelectedEditLecturer(lecturer);
    setShowEditLecturer(true);
    setShowCreateLecturer(false); // Close the create lecturer page if open
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
        <CreateLecturer onCancel={() => onShowCreateLecturer(false)} onCancelCreate={cancelCreateOrEditLecturer} handleCategoryClick={handleCategoryClick} addNewLecturer={addNewLecturer} />
      ) : showEditLecturer ? (
        /* Display EditLect component when editing a lecturer */
        <EditLect lecturer={selectedEditLecturer} onCancelEdit={cancelCreateOrEditLecturer} onSaveEdit={onSaveEdit} onUpdateEditedLecturer={onUpdateLecturer} handleCategoryClick={handleCategoryClick}/>
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
                    <button onClick={() => editLecturer(lecturer)}>Edit</button>
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
