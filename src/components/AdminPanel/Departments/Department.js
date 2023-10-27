import React, { useState, useEffect } from "react";
import CreateDepartment from "./CreateDepartment";
import EditDepartment from "./EditDepartment"; // Import EditDepartment component
import './Department.css';

function Department({ onShowCreateDepartment, onShowEditDepartment, departmentData, onEditDepartment }) {
  // State to manage the list of departments and control create department form visibility

  const sampleDepartments = [
    { id: 1, name: "Faculty Of Information and Communication Technology", block: 'Block A' },
    { id: 2, name: "Faculty Of Communication and Broadcasting", block: 'Block B'  },
    { id: 3, name: "Faculty Of Information and Communication Technology", block: 'Block B'  },
  ];

  const [departments, setDepartments] = useState([...departmentData, ...sampleDepartments]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingDepartment, setEditingDepartment] = useState(null);

  // Initialize the departments state with the provided departmentData when it changes
  useEffect(() => {
    setDepartments([...departmentData, ...sampleDepartments]);
  }, [departmentData]);

  const handleAddDepartment = () => {
    // Show the create department form when "Add Department" is clicked
    setShowCreateForm(true);

    onShowCreateDepartment('createDepartment');
  };

  const handleEditDepartment = (departmentId) => {
    // Find the department with the specified ID
    const departmentToEdit = departments.find((department) => department.id === departmentId);
    
    if (departmentToEdit) {
      console.log("Editing department:", departmentToEdit);
      onShowEditDepartment(departmentToEdit);
      onEditDepartment(departmentToEdit)
    } else {
      console.log("Department not found.");
    }
  };

  const handleDeleteDepartment = (departmentId) => {
    // Implement logic to delete the department with the specified ID
  };

  return (
    <div className="department">
      <h1>Departments</h1>
      {showCreateForm ? (
        <CreateDepartment />
      ) : (
        <div>
          <ul>
            {departments.map((department) => (
              <li key={department.id}>
                {department.name}
                {department.block}
                <div className="action">
                  <button onClick={() => handleEditDepartment(department.id)}>Edit</button>
                  <button onClick={() => handleDeleteDepartment(department.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={handleAddDepartment}>Add Department</button>
        </div>
      )}
      {editingDepartment && (
        <EditDepartment department={editingDepartment} onCancelEdit={() => setEditingDepartment(null)} />
      )}
    </div>
  );
}

export default Department;
