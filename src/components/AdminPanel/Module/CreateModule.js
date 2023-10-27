import React, { useState } from 'react';
import './CreateModule.css'; // Import the CSS file

function CreateModule(props) {
  const [newModule, setNewModule] = useState({
    code: '',
    name: '',
    creditHours: 0,
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
    console.log(newModule)
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
        <button type="submit" className="add-module-button">
          Add Module
        </button>
      </form>
    </div>
  );
}

export default CreateModule;
