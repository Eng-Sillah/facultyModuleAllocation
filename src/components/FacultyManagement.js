// FacultyManagement.js
import React, { useState, useEffect } from 'react';

const FacultyManagement = () => {
  const [faculties, setFaculties] = useState([]);
  const [newFaculty, setNewFaculty] = useState('');

  // Fetch faculties from the backend or use mock data
  useEffect(() => {
    // You can replace this with an API call to fetch faculties from the backend.
    const mockFaculties = ['Faculty A', 'Faculty B', 'Faculty C'];
    setFaculties(mockFaculties);
  }, []);

  const handleAddFaculty = () => {
    if (newFaculty.trim() !== '') {
      setFaculties([...faculties, newFaculty]);
      setNewFaculty('');
    }
  };

  const handleDeleteFaculty = (faculty) => {
    const updatedFaculties = faculties.filter((f) => f !== faculty);
    setFaculties(updatedFaculties);
  };

  return (
    <div>
      <h2>Faculty Management</h2>
      <div>
        <input
          type="text"
          placeholder="Add Faculty"
          value={newFaculty}
          onChange={(e) => setNewFaculty(e.target.value)}
        />
        <button onClick={handleAddFaculty}>Add</button>
      </div>
      <ul>
        {faculties.map((faculty) => (
          <li key={faculty}>
            {faculty}
            <button onClick={() => handleDeleteFaculty(faculty)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacultyManagement;
