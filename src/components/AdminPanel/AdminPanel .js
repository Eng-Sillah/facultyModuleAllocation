import React, { useState } from 'react';
import Department from '../AdminPanel/Departments/Department';
import Faculty from '../AdminPanel/Faculty/Faculty';
import Lecturer from '../AdminPanel/Lecturer/Lecturer';
import Module from '../AdminPanel/Module/Module';
import Dashboard from './Dashboard';
import CreateDepartment from './Departments/CreateDepartment';
import EditDepartment from './Departments/EditDepartment';
import './AdminPanel.css';

function AdminPanel(props) {
  const [selectedCategory, setSelectedCategory] = useState('dashboard');
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [departmentData, setDepartmentData] = useState([]);
  const [editingDepartment, setEditingDepartment] = useState(null);

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
    module: <Module />,
    createDepartment: <CreateDepartment onSave={addNewDepartment} />,
    editDepartment: (
      <EditDepartment
        department={editingDepartment}
        onEditDepartment={editDepartment}
        onCancelEdit={cancelEditDepartment}
      />
    ),
  };

  function addNewDepartment(newDept) {
    setDepartmentData([...departmentData, newDept]);
  }

  function editDepartment(updatedDepartment) {
    console.log(updatedDepartment)
    // // Find and update the department in departmentData
    // const updatedData = departmentData.map((department) => {
    //   if (department.id === updatedDepartment.id) {
    //     return updatedDepartment;
    //   }
    //   return department;
    // });
    // setDepartmentData(updatedData);
    setEditingDepartment(updatedDepartment); // Clear the editing department
  }

  function cancelEditDepartment() {
    setEditingDepartment(null); // Clear the editing department
  }

  return (
    <div className="create-event-dashboard">
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
