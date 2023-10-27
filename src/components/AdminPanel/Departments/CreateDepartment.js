import React, { useState } from "react";

function CreateDepartment(props) {
  const [newDepartment, setNewDepartment] = useState({
    name: "",
    block: "",
    id: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDepartment((prevDepartment) => ({
      ...prevDepartment,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Call the onSave callback to pass the new department data
    props.onSave(newDepartment);
  };

  return (
    <div>
      <h2>Create Department</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Department Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newDepartment.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="block">Department Block:</label>
          <input
            type="text"
            id="block"
            name="block"
            value={newDepartment.block}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
}

export default CreateDepartment;
