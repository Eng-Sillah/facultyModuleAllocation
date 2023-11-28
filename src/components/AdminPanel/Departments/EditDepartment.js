import React, { useState } from 'react';

function EditDepartment({ department, onEditDepartment, onCancel, onUpdateDepartment }) {
  const [editedDepartment, setEditedDepartment] = useState(department);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedDepartment({ ...editedDepartment, [name]: value });
  };

  const handleSave = () => {
    onEditDepartment(editedDepartment);
    onUpdateDepartment(editedDepartment); // Invoke the callback to update the department data
  };

  return (
    <div>
      <h1>Edit Department</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Department Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={editedDepartment.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="block">Department Block:</label>
          <input
            type="text"
            id="block"
            name="block"
            value={editedDepartment.block}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleSave}>
          Save
        </button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditDepartment;
