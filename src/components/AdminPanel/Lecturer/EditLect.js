import React, { useState } from 'react';
import './EditLect.css';

function EditLect({ lecturer, onCancelEdit, onSaveEdit, onUpdateEditedLecturer, handleCategoryClick }) {
  const [editedLecturer, setEditedLecturer] = useState({ ...lecturer });
  const [showModuleDropdown, setShowModuleDropdown] = useState(false);
  const [selectedModule, setSelectedModule] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [moduleDetails, setModuleDetails] = useState({
    semester: "",
    classes: [],
  });
  const [confirmationMessage, setConfirmationMessage] = useState("");

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedLecturer((prevLecturer) => ({
      ...prevLecturer,
      [name]: value,
    }));
  };

  const [daysOfWeek, setDaysOfWeek] = useState(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]);
  const handleModuleChange = (index, field, value) => {
    // Copy the array of modules
    const updatedModules = [...editedLecturer.modules];
    // Update the specific module field
    updatedModules[index][field] = value;
    // Update the state with the modified modules
    setEditedLecturer((prevLecturer) => ({
      ...prevLecturer,
      modules: updatedModules,
    }));
  };

  const handleModuleSelection = (module) => {
    setSelectedModule(module);
    setSelectedSemester("");
    setModuleDetails({ semester: "", classes: [] });
  };

  const handleDropdownToggle = () => {
    setShowModuleDropdown(!showModuleDropdown);
  };

  const handleSemesterChange = (semester) => {
    setSelectedSemester(semester);
    setModuleDetails({ semester, classes: [] });
  };

  const handleClassChange = (classValue) => {
    if (moduleDetails.classes.includes(classValue)) {
      setModuleDetails({
        ...moduleDetails,
        classes: moduleDetails.classes.filter((c) => c !== classValue),
      });
    } else {
      setModuleDetails({
        ...moduleDetails,
        classes: [...moduleDetails.classes, classValue],
      });
    }
  };

  const handleAddModuleDetails = () => {
    if (selectedModule && selectedSemester) {
              // Create a module code based on the selected module
      const moduleCode = selectedModule.toUpperCase().slice(0, 4);
      const moduleInfo = {
        moduleName: selectedModule,
        moduleCode,
        details: {
          semester: selectedSemester,
          classes: moduleDetails.classes,
          // Allocate different time and attach hours for each class
          classDetails: moduleDetails.classes.map((classValue, index) => {
            const startTime = 9 + index; // Start time (9 AM + index)
            const endTime = startTime + 3; // End time (start time + 3 hours)

            return {
              class: classValue,
              room: `Room ${Math.floor(Math.random() * 9) + 1}`,
              time: `${startTime}:00 AM - ${endTime}:00 AM`,
              day: daysOfWeek[index % daysOfWeek.length],
              creditHour: 3, // Distribute classes over days of the week
            };
          }),
        },
      };

      setEditedLecturer((prevLecturer) => ({
        ...prevLecturer,
        modules: [...prevLecturer.modules, moduleInfo],
      }));

      setSelectedModule("");
      setSelectedSemester("");
      setModuleDetails({ semester: "", classes: [] });
    }
  };

  const isModuleChecked = (module) => {
    return editedLecturer.modules.some((m) => m.moduleName === module);
  };

  const isSemesterChecked = (semester) => {
    return selectedSemester === semester;
  };

  const isClassChecked = (classValue) => {
    return moduleDetails.classes.includes(classValue);
  };

  const handleRemoveModule = (index) => {
    const updatedModules = [...editedLecturer.modules];
    updatedModules.splice(index, 1);
    setEditedLecturer((prevLecturer) => ({
      ...prevLecturer,
      modules: updatedModules,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveEdit(editedLecturer);
    onUpdateEditedLecturer(editedLecturer);

    // Display confirmation message
    setConfirmationMessage("Lecturer details updated successfully!");
  };

  const renderSuccessMessage = (
    <div className="edit-lecturer-container">
      <h1>Update Successful</h1>
      {confirmationMessage && (
        <div className="success-message">
          {confirmationMessage}
        </div>
      )}
      <button onClick={() => handleCategoryClick("dashboard")}>Go to Dashboard</button>
    </div>
  );

  return (
    <div>
      {confirmationMessage ? (
        renderSuccessMessage
      ) : (
        <>
          <h1>Edit Lecturer</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstname">First Name:</label>
              <input
                type="text"
                name="firstname"
                value={editedLecturer.firstname}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name:</label>
              <input
                type="text"
                name="lastname"
                value={editedLecturer.lastname}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <input
                type="text"
                name="gender"
                value={editedLecturer.gender}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                name="address"
                value={editedLecturer.address}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="department">Department:</label>
              <select
                name="department"
                value={editedLecturer.department}
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
                value={editedLecturer.dateOfBirth}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="qualification">Qualification:</label>
              <input
                type="text"
                name="qualification"
                value={editedLecturer.qualification}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={editedLecturer.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Assign Password:</label>
              <input
                type="password"
                name="password"
                value={editedLecturer.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact:</label>
              <input
                type="text"
                name="contact"
                value={editedLecturer.contact}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Modules:</label>
              {editedLecturer.modules.map((module, index) => (
                <div key={index}>
                  <h3>{module.moduleName} Details</h3>
                  <div className="form-group">
                    <label>Select Semester:</label>
                    <input
                      type="text"
                      name={`modules[${index}].details.semester`}
                      value={module.details ? module.details.semester : ''}
                      onChange={(e) => handleModuleChange(index, 'details.semester', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Select Classes:</label>
                    <input
                      type="text"
                      name={`modules[${index}].details.classes`}
                      value={module.details ? module.details.classes.join(', ') : ''}
                      onChange={(e) => handleModuleChange(index, 'details.classes', e.target.value.split(', '))}
                    />
                  </div>
                  <button type="button" onClick={() => handleRemoveModule(index)}>
                    Remove Module
                  </button>
                </div>
              ))}
              <button type="button" onClick={handleDropdownToggle}>
                {selectedModule || "Add Module"}
              </button>
              {showModuleDropdown && (
                <div className="module-dropdown">
                  {allModules.map((module) => (
                    <div className="module" key={module}>
                      <label key={module}></label>
                      <input
                        type="radio"
                        name="module"
                        checked={selectedModule === module}
                        onChange={() => handleModuleSelection(module)}
                      />
                      {module}
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

            <div>
              <button type="submit">Save Changes</button>
              <button type="button" onClick={onCancelEdit}>
                Cancel
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default EditLect;
