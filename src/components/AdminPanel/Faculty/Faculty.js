import React, { useState, useEffect } from 'react';
import './Faculty.css'; // Import the CSS file

function Faculty() {
  // Sample faculty data
  const sampleFaculties = [
    { code: 'FAC001', name: 'Faculty of Science' },
    { code: 'FAC002', name: 'Faculty of Engineering' },
    { code: 'FAC003', name: 'Faculty of Arts' },
  ];

  // State to manage the list of faculties
  const [faculties, setFaculties] = useState(sampleFaculties);

  const handleAddFaculty = () => {
    // You can implement logic to add a new faculty here
    // For example, you can open a form to enter faculty details
    // and update the faculties state with the new faculty.
  };

  return (
    <div className="faculty">
      <h1>Faculties</h1>
      <ul>
        {faculties.map((faculty, index) => (
          <li key={index}>
            <strong>Code:</strong> {faculty.code}, <strong>Name:</strong> {faculty.name}
          </li>
        ))}
      </ul>
      <button className="add-faculty-button" onClick={handleAddFaculty}>
        Add Faculty
      </button>
    </div>
  );
}

export default Faculty;
