import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Department from '../AdminPanel/Departments/Department';
import Faculty from '../AdminPanel/Faculty/Faculty';
import Lecturer from '../AdminPanel/Lecturer/Lecturer';
import CreatLecture from './Lecturer/CreateLecturer';
import Module from '../AdminPanel/Module/Module';
import Dashboard from './Dashboard';
import CreateDepartment from './Departments/CreateDepartment';
import EditDepartment from './Departments/EditDepartment';
import CreateModule from './Module/CreateModule';
import EditLect from "./Lecturer/EditLect";
import EditModule from './Module/EditModule';
import './AdminPanel.css';

function AdminPanel(props) {
  const [selectedCategory, setSelectedCategory] = useState('dashboard');
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [departmentData, setDepartmentData] = useState([]);
  const [modulesData, setModuledata] = useState([]);
  const [editingDepartment, setEditingDepartment] = useState(null);
  const [newLecturer, setNewLecturer] = useState([]);
  const [editingModule, setEditingModule] = useState(null);
  const [editingLecturer, setEditingLecturer] = useState(null); // Add state for editing lecturer
  const [adminName] = useState("Admin User"); // Replace with the actual admin's name
  const navigate = useNavigate();

  const handleToggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleCategoryClick = (category) => {
    setSidebarVisible(false);
    setSelectedCategory(category);
  };

  const handleShowCreateDepartment = () => {
    handleCategoryClick('createDepartment');
  };

  const handleShowEditDepartment = (department) => {
    // Set the department to be edited
    setEditingDepartment(department);
    handleCategoryClick('editDepartment');
  };

  function addNewModule(newModule) {
    setModuledata([...modulesData, newModule]);
    handleCategoryClick('module'); // Navigate back to the Module page after adding a module
  }
  
  function handleShowCreateModule() {
    handleCategoryClick('createModule'); // Show the CreateModule component
  }
  
  function cancelCreateModule() {
    handleCategoryClick('module'); // Cancel creating a module and go back to the Module page
  }

  function handleShowDepartment() {
    handleCategoryClick('department');
  }

  function handleShowCreateLecturer() {
    handleCategoryClick('createLecturer'); // Show the CreateLecturer component
  }

  function cancelCreateLecturer() {
    handleCategoryClick('lecturer'); // Cancel creating a lecturer and go back to the Lecturer page
  }


  function addNewLecturer(lecturerData) {
    setNewLecturer([...newLecturer, lecturerData]);
    // handleCategoryClick('lecturer'); 
  }

  function handleEditLecturer(lecturer) {
    setEditingLecturer(lecturer);
    handleCategoryClick('editLecturer');
  }

  function saveEditedLecturer(updatedLecturer) {
    // Use the updateLecturer function from props to update the lecturer details.
    // props.onUpdateLecturer(updatedLecturer);
    console.log(updatedLecturer)
    // Clear the editing lecturer state
    setEditingLecturer(null);

    // Navigate back to the Lecturer page
    handleCategoryClick('lecturer');
  }

  const categoryComponents = {
    dashboard: <Dashboard />,
    department: (
      <Department
        departmentData={departmentData}
        onEditDepartment={editDepartment}
        onShowCreateDepartment={handleShowCreateDepartment}
        onShowEditDepartment={handleShowEditDepartment}
      />
    ),
    faculty: <Faculty />,
    lecturer: <Lecturer newLecturer={newLecturer} onShowCreateLecturer={handleShowCreateLecturer} handleCategoryClick={handleCategoryClick} sampleLecturerData={props.sampleLecturerData} addNewLecturer={props.addNewLecturer} onShowEditLecturer={handleEditLecturer} lecturer={editingLecturer} onSaveEdit={saveEditedLecturer} onUpdateLecturer={props.onUpdateLecturer}/>,
    createLecturer: <CreatLecture onCancelCreate={cancelCreateLecturer} onSaveNewLecturer={addNewLecturer} handleCategoryClick={handleCategoryClick}/>,
    module: <Module modulesData={modulesData} onShowCreateModule={handleShowCreateModule} />,
    createDepartment: <CreateDepartment onSave={addNewDepartment} onShowDepartment={handleShowDepartment}/>,
    editDepartment: (
      <EditDepartment
        department={editingDepartment}
        onEditDepartment={editDepartment}
        onCancelEdit={cancelEditDepartment}
      />
    ),
    editLecturer: <EditLect lecturer={editingLecturer} onSaveEdit={saveEditedLecturer} onUpdateLecturer={props.onUpdateLecturer} />,
    createModule: (
      <CreateModule
        onSave={addNewModule}
        onCancelCreate={cancelCreateModule}
      />
    ),
  };

  function addNewDepartment(newDept) {
    setDepartmentData([...departmentData, newDept]);
  }

  function editDepartment(updatedDepartment) {
    console.log(updatedDepartment);
    setEditingDepartment(updatedDepartment); // Clear the editing department
  }

  function cancelEditDepartment() {
    setEditingDepartment(null); // Clear the editing department
  }

  function handleLogout() {
    navigate('/login')
  }

  return (
    <div className="admin-panel">
      <div className="adminNavbar">
        <h2>LUCT FACULTY MODULE ALLOCATION SYSTEM</h2>
        <div className='navs'>
        <span className="admin-name">{adminName}</span>
        <button className="logout-button" type='button' onClick={handleLogout}>
          Log Out
        </button>
        </div>
      </div>
      <div className={`sidebar ${isSidebarVisible ? 'visible' : ''}`}>
        <h2 className="event-title">Admin Panel</h2>
        <hr />
        <div className="sidebar-item" onClick={() => handleCategoryClick('dashboard')}>
          Dashboard
        </div>
        <div className="sidebar-item" onClick={() => handleCategoryClick('department')}>
          Department
        </div>
        <div className="sidebar-item" onClick={() => handleCategoryClick('faculty')}>
          Faculty
        </div>
        <div className="sidebar-item" onClick={() => handleCategoryClick('lecturer')}>
          Lecturer
        </div>
        <div className="sidebar-item" onClick={() => handleCategoryClick('module')}>
          Module
        </div>
      </div>
      <div className="main-content">
        <button className="sidebar-toggle" onClick={handleToggleSidebar}>
          &gt;
        </button>
        {categoryComponents[selectedCategory]}
      </div>
    </div>
  );
}

export default AdminPanel;
