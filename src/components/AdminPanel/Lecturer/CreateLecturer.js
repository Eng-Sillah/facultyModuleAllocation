import React, { useState } from "react";
import './CreateLecturer.css';

function CreateLecturer({ onSave, onCancelCreate, handleCategoryClick, addNewLecturer }) {
  const [isSaved, setIsSaved] = useState(false);
  const [lecturerInfo, setLecturerInfo] = useState({
    id: Math.floor(Math.random() * 5),
    firstname: "",
    lastname: "",
    name: "",
    department: "", // Updated to use a dropdown
    address: "", // New field for lecturer's address
    gender: "", // New field for lecturer's gender
    dateOfBirth: "", // New field for date of birth
    qualification: "", // New field for lecturer's qualification
    email: "",
    password: "", // New field for lecturer's email
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

  const allClasses = ['BSEM101', 'BSEM102', 'BBIT', 'BIT', 'BICT'];

  const [showModuleCheckboxes, setShowModuleCheckboxes] = useState(false);
  const [selectedModule, setSelectedModule] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [moduleDetails, setModuleDetails] = useState({
    semester: "",
    classes: [],
    additionalClasses: [] 
  });
  const [daysOfWeek, setDaysOfWeek] = useState(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]);

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
    if (classValue === "BSEM") {
      // If "BSEM" class is selected, show additional options for BSEM101 and BSEM102
      setShowModuleCheckboxes(true);
    } else {
      setShowModuleCheckboxes(false);
    }

    if (moduleDetails.classes.includes(classValue)) {
      setModuleDetails({
        ...moduleDetails,
        classes: moduleDetails.classes.filter((c) => c !== classValue),
        additionalClasses: []
      });
    } else {
      setModuleDetails({
        ...moduleDetails,
        classes: [...moduleDetails.classes, classValue],
        additionalClasses: []
      });
    }
  };
  const calculateEndTime = (startTime, index) => {
    if (!startTime) {
      return ""; // or handle it in a way that makes sense for your application
    }

    const [hours, minutes] = startTime.split(":").map(Number);
    const totalMinutes = hours * 60 + minutes + 180 * index; // Assuming each class is 3 hours (180 minutes)
    const endHours = Math.floor(totalMinutes / 60);
    const endMinutes = totalMinutes % 60;
    return `${endHours.toString().padStart(2, "0")}:${endMinutes.toString().padStart(2, "0")}`;
  };

  const handleAddModuleDetails = () => {
    if (selectedModule && selectedSemester) {
      let additionalClasses = [];
      // Create a module code based on the selected module
      const moduleCode = selectedModule.toUpperCase().slice(0, 4);

            // Check if the selected module is "BSEM" and has additional classes
            if (selectedModule === "BSEM" && moduleDetails.additionalClasses.length > 0) {
              additionalClasses = moduleDetails.additionalClasses;
            }
      const moduleInfo = {
        moduleName: selectedModule,
        moduleCode,  // Add the module code property
        details: {
          semester: selectedSemester,
          classes: moduleDetails.classes,
          // Allocate different time and attach hours for each class
          classDetails: moduleDetails.classes.map((classValue, index) => {
            // Always start the second class at 9 AM
            const startTime = index === 0 ? "09:00" : calculateEndTime("09:00", index - 1);
            const endTime = calculateEndTime(startTime, 1); // End time
  
            return {
              class: classValue,
              room: `Room ${Math.floor(Math.random() * 9) + 1}`,
              time: `${startTime} - ${endTime}`,
              day: daysOfWeek[index % daysOfWeek.length],
              creditHour: 3, // Distribute classes over days of the week
            };
          }),
          additionalClasses: additionalClasses,
        },
      };

      setLecturerInfo({
        ...lecturerInfo,
        modules: [...lecturerInfo.modules, moduleInfo],
        name: selectedModule,
      });

      // Clear the module details and deselect the module
      setSelectedModule("");
      setSelectedSemester("");
      setModuleDetails({ semester: "", classes: [], additionalClasses: [] });
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
    // onSaveNewLecturer(lecturerInfo);
    addNewLecturer(lecturerInfo)
    // Display a success message
    setIsSaved(true);

  };

  const renderForm = (
    <div className="create-lecturer-container">
      <h1>Register New Lecturer</h1>
      <form onSubmit={handleSubmit}>
        {/* ... Your form fields ... */}
        
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
          <label htmlFor="password">Assign Password:</label>
          <input
            type="password"
            name="password"
            value={lecturerInfo.password}
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
          <button type="button" onClick={handleDropdownToggle}>View Modules</button>
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

        <div>
          <button type="submit" className="add-lecturer-button">
            Save Lecturer
          </button>
        </div>
        <button onClick={onCancelCreate}>Cancel</button>
      </form>
    </div>
  );

  const renderSuccessMessage = (
    <div className="create-lecturer-container">
      <h1>Registration Successful</h1>
      {/* <div className="success-message">
        Lecturer saved successfully!
      </div> */}
      <button onClick={() => handleCategoryClick("dashboard")}>Go to Dashboard</button>
    </div>
  );

  return (
    <div>
      {isSaved ? renderSuccessMessage : renderForm}
    </div>
  );

}

export default CreateLecturer;
