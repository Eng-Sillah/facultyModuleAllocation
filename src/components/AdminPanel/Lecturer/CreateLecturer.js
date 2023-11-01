import React, { useState } from "react";
import './CreateLecturer.css';
function CreateLecturer({ onSave, onCancelCreate }) {
  const [lecturerInfo, setLecturerInfo] = useState({
    firstname: "",
    lastname: "",
    department: "",
    modules: [],
  });

  const allModules = [
    "Programming Logic And Design",
    "Data Structure and Analysis",
    "Introduction to Multimedia",
    "Software Engineering I",
    "Graphic Design",
    "Computer Mathematics",
    "Introduction to Php",
    "Learning JavaScript",
    "Intro to Web Design",
  ];

  const [showModuleCheckboxes, setShowModuleCheckboxes] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLecturerInfo({
      ...lecturerInfo,
      [name]: value,
    });
  };

  const handleModuleSelection = (selectedModule) => {
    if (lecturerInfo.modules.includes(selectedModule)) {
      // Deselect module if it's already selected
      setLecturerInfo({
        ...lecturerInfo,
        modules: lecturerInfo.modules.filter((module) => module !== selectedModule),
      });
    } else {
      // Select the module if it's not already selected
      setLecturerInfo({
        ...lecturerInfo,
        modules: [...lecturerInfo.modules, selectedModule],
      });
    }
  };

  const handleDropdownToggle = () => {
    setShowModuleCheckboxes(!showModuleCheckboxes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSave function to save the lecturer information
    onSave(lecturerInfo);

    // Log the selected modules
    console.log("Selected Modules:", lecturerInfo);
  };

  return (
    <div className="create-lecturer-container ">
      <h1>Register New Lecturer</h1>
      
      <form onSubmit={handleSubmit}>
      <div className="lectName">
      <div className="form-group">
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={lecturerInfo.firstname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lecturerInfo.lastname}
            onChange={handleChange}
          />
        </div>
      </div>

        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            name="department"
            id="department"
            value={lecturerInfo.department}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Select Modules:</label>
          <button onClick={handleDropdownToggle}>Toggle Modules</button>
          {showModuleCheckboxes && (
            <div className="module-checkboxes">
              {allModules.map((module) => (
                <div className="modules" key={module}>
                    <div className="lectModule">
                <label key={module}></label>
                  <input
                    type="checkbox"
                    name={module}
                    checked={lecturerInfo.modules.includes(module)}
                    onChange={() => handleModuleSelection(module)}
                  />
                  {module}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <button type="submit" className="add-lecturer-button">
          Save Lecturer
        </button>
        <button onClick={onCancelCreate}>Cancel</button>
      </form>
    </div>
  );
}

export default CreateLecturer;
