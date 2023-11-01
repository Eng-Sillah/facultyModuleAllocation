import React, { useState } from 'react';
import './CreateModule.css'; // Import the CSS file

function CreateModule(props) {
  const [newModule, setNewModule] = useState({
    code: '',
    name: '',
    creditHours: 0,
    semester: '',
    program: '',
    department: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewModule({
      ...newModule,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSave(newModule);
  };

  return (
    <div className="create-module-container">
      <h1>Create Module</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="code">Module Code:</label>
          <input
            type="text"
            name="code"
            id="code"
            value={newModule.code}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Module Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={newModule.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="creditHours">Credit Hours:</label>
          <input
            type="number"
            name="creditHours"
            id="creditHours"
            value={newModule.creditHours}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
        <label htmlFor="semester">Semester:</label>
        <select
          name="semester"
          id="semester"
          value={newModule.semester}
          onChange={handleInputChange}
        >
          <option value="">Select Semester</option>
          <option value="Semester 01">Semester 01</option>
          <option value="Semester 02">Semester 02</option>
          <option value="Semester 03">Semester 03</option>
          <option value="Semester 04">Semester 04</option>
          <option value="Semester 05">Semester 05</option>
          <option value="Semester 06">Semester 06</option>
          <option value="Semester 07">Semester 07</option>
          <option value="Semester 08">Semester 08</option>
        </select>
      </div>

        <div className="form-group">
          <label htmlFor="program">Program:</label>
          <input
            type="text"
            name="program"
            id="program"
            value={newModule.program}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            name="department"
            id="department"
            value={newModule.department}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="add-module-button">
          Add Module
        </button>
      </form>
    </div>
  );
}

export default CreateModule;
