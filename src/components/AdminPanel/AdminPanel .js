import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Department from '../AdminPanel/Departments/Department';
import Faculty from '../AdminPanel/Faculty/Faculty';
import Lecturer from '../AdminPanel/Lecturer/Lecturer';
import Module from '../AdminPanel/Module/Module';
import Dashboard from './Dashboard';
import CreateDepartment from './Departments/CreateDepartment';
import EditDepartment from './Departments/EditDepartment';
import CreateModule from './Module/CreateModule';
import EditModule from './Module/EditModule';
import './AdminPanel.css';

function AdminPanel(props) {
  const [selectedCategory, setSelectedCategory] = useState('dashboard');
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [departmentData, setDepartmentData] = useState([]);
  const [modulesData, setModuledata] = useState([]);
  const [editingDepartment, setEditingDepartment] = useState(null);
  const [editingModule, setEditingModule] = useState(null);
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
    lecturer: <Lecturer />,
    module: <Module modulesData={modulesData} onShowCreateModule={handleShowCreateModule} />,
    createDepartment: <CreateDepartment onSave={addNewDepartment} />,
    editDepartment: (
      <EditDepartment
        department={editingDepartment}
        onEditDepartment={editDepartment}
        onCancelEdit={cancelEditDepartment}
      />
    ),
    createModule: (
      <CreateModule
        onSave={addNewModule}
        onCancelCreate={cancelCreateModule}
      />
    ),
    // editModule: (
    //   <EditModule
    //     module={editingModule}
    //     onEditModule={editModule}
    //     onCancelEdit={cancelEditModule}
    //   />
    // ),
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
      <div className="navbar">
        <span className="admin-name">{adminName}</span>
        <button className="logout-button" onClick={handleLogout}>
          Log Out
        </button>
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
