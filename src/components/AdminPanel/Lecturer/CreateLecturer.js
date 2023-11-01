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
  const [selectedModule, setSelectedModule] = useState("");
  const [moduleDetails, setModuleDetails] = useState({
    semester: "",
    classes: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLecturerInfo({
      ...lecturerInfo,
      [name]: value,
    });
  };

  const handleModuleSelection = (module) => {
    setSelectedModule(module);
    setModuleDetails({ semester: "", classes: [] });
  };

  const handleDropdownToggle = () => {
    setShowModuleCheckboxes(!showModuleCheckboxes);
  };

  const handleSemesterChange = (e) => {
    setModuleDetails({ ...moduleDetails, semester: e.target.value });
  };
  
  const handleClassesChange = (e) => {
    const classes = e.target.value.split(',').map(c => c.trim());
    setModuleDetails({ ...moduleDetails, classes });
  };

  const handleAddModuleDetails = () => {
    if (selectedModule) {
      const moduleInfo = {
        moduleName: selectedModule,
        details: {
          semester: moduleDetails.semester,
          classes: moduleDetails.classes,
        },
      };
      
      setLecturerInfo({
        ...lecturerInfo,
        modules: [...lecturerInfo.modules, moduleInfo],
      });
      
      // Clear the module details and deselect the module
      setSelectedModule("");
      setModuleDetails({ semester: "", classes: [] });
    }
  };

  const isModuleChecked = (module) => {
    return lecturerInfo.modules.some((m) => m.moduleName === module);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSave function to save the lecturer information
    onSave(lecturerInfo);
    
    // Log the selected modules with details
    console.log("Selected Modules with Details:", lecturerInfo);
  };

  return (
    <div className="create-lecturer-container">
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
                      checked={isModuleChecked(module)}
                      onChange={() => handleModuleSelection(module)}
                    />
                    {module}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {selectedModule && (
          <div className="module-details-form">
            <h3>{selectedModule} Details</h3>
            <div className="form-group">
              <label htmlFor="semester">Semester:</label>
              <input
                type="text"
                name="semester"
                value={moduleDetails.semester}
                onChange={handleSemesterChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="classes">Classes (comma-separated):</label>
              <input
                type="text"
                name="classes"
                value={moduleDetails.classes.join(', ')}
                onChange={handleClassesChange}
              />
            </div>
            <button
              type="button"
              className="add-module-details-button"
              onClick={handleAddModuleDetails}
            >
              Add Module Details
            </button>
          </div>
        )}
        <button type="submit" className="add-lecturer-button">
          Save Lecturer
        </button>
        <button onClick={onCancelCreate}>Cancel</button>
      </form>
    </div>
  );
}

export default CreateLecturer;
