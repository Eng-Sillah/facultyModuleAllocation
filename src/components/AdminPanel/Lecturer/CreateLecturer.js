import React, { useState } from "react";
import './CreateLecturer.css';

function CreateLecturer({ onSave, onCancelCreate }) {
  const [lecturerInfo, setLecturerInfo] = useState({
    firstname: "",
    lastname: "",
    department: "", // Updated to use a dropdown
    address: "", // New field for lecturer's address
    gender: "", // New field for lecturer's gender
    dateOfBirth: "", // New field for date of birth
    qualification: "", // New field for lecturer's qualification
    email: "", // New field for lecturer's email
    contact: "", // New field for lecturer's contact
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

  const semesters = [
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
    "Semester 7",
    "Semester 8"
  ];

  const allClasses = ['BSEM', 'BBIT', 'BIT', 'BICT'];

  const [showModuleCheckboxes, setShowModuleCheckboxes] = useState(false);
  const [selectedModule, setSelectedModule] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [moduleDetails, setModuleDetails] = useState({
    semester: "",
    classes: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLecturerInfo({
      ...lecturerInfo,
      [name]: value
    });
  };

  const handleModuleSelection = (module) => {
    setSelectedModule(module);
    setSelectedSemester("");
    setModuleDetails({ semester: "", classes: [] });
  };

  const handleDropdownToggle = () => {
    setShowModuleCheckboxes(!showModuleCheckboxes);
  };

  const handleSemesterChange = (semester) => {
    setSelectedSemester(semester);
    setModuleDetails({ semester, classes: [] });
  };

  const handleClassChange = (classValue) => {
    if (moduleDetails.classes.includes(classValue)) {
      setModuleDetails({
        ...moduleDetails,
        classes: moduleDetails.classes.filter((c) => c !== classValue)
      });
    } else {
      setModuleDetails({
        ...moduleDetails,
        classes: [...moduleDetails.classes, classValue]
      });
    }
  };

  const handleAddModuleDetails = () => {
    if (selectedModule && selectedSemester) {
      const moduleInfo = {
        moduleName: selectedModule,
        details: {
          semester: selectedSemester,
          classes: moduleDetails.classes
        }
      };

      setLecturerInfo({
        ...lecturerInfo,
        modules: [...lecturerInfo.modules, moduleInfo]
      });

      // Clear the module details and deselect the module
      setSelectedModule("");
      setSelectedSemester("");
      setModuleDetails({ semester: "", classes: [] });
    }
  };

  const isModuleChecked = (module) => {
    return lecturerInfo.modules.some((m) => m.moduleName === module);
  };

  const isSemesterChecked = (semester) => {
    return selectedSemester === semester;
  };

  const isClassChecked = (classValue) => {
    return moduleDetails.classes.includes(classValue);
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
          <div className="gender-radio-container">
          <label>Gender:</label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={lecturerInfo.gender === "Male"}
                onChange={handleChange}
              />
              <span>Male</span>
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={lecturerInfo.gender === "Female"}
                onChange={handleChange}
              />
              <span>Female</span>
              
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            value={lecturerInfo.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <select
            name="department"
            value={lecturerInfo.department}
            onChange={handleChange}
          >
            <option value="">Select Department</option>
            <option value="Department A">Department A</option>
            <option value="Department B">Department B</option>
            <option value="Department C">Department C</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={lecturerInfo.dateOfBirth}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="qualification">Qualification:</label>
          <input
            type="text"
            name="qualification"
            value={lecturerInfo.qualification}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={lecturerInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact:</label>
          <input
            type="text"
            name="contact"
            value={lecturerInfo.contact}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Select Modules:</label>
          <button onClick={handleDropdownToggle}>View Modules</button>
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
              <label>Select Semester:</label>
              <div className="semester-container">
                {semesters.map((semester) => (
                  <div className="lect_semester" key={semester}>
                    <div className="semester">
                      <label key={semester}>
                        <input
                          type="radio"
                          name="semester"
                          value={semester}
                          checked={isSemesterChecked(semester)}
                          onChange={() => handleSemesterChange(semester)}
                        />
                        {semester}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {selectedSemester && (
              <div className="form-group">
                <label>Select Classes:</label>
                <div className="classes-mainContainer">
                  {allClasses.map((classValue) => (
                    <div className="classess-container" key={classValue}>
                      <div className="classess">
                        <label key={classValue}>
                          <input
                            type="checkbox"
                            name="classes"
                            value={classValue}
                            checked={isClassChecked(classValue)}
                            onChange={() => handleClassChange(classValue)}
                          />
                          {classValue}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
