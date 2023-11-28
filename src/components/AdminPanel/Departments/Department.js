import React, { useState, useEffect } from "react";
import CreateDepartment from "./CreateDepartment";
import EditDepartment from "./EditDepartment";
import './Department.css';

function Department({ onShowCreateDepartment, onShowEditDepartment, departmentData, onEditDepartment }) {
  const sampleDepartments = [
    { id: 1, name: "Faculty Of Information and Communication Technology", block: 'Block A' },
    { id: 2, name: "Faculty Of Communication and Broadcasting", block: 'Block B'  },
    { id: 3, name: "Faculty Of Information and Communication Technology", block: 'Block B'  },
  ];

  const [departments, setDepartments] = useState([...departmentData, ...sampleDepartments]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingDepartment, setEditingDepartment] = useState(null);

  useEffect(() => {
    setDepartments([...departmentData, ...sampleDepartments]);
  }, [departmentData]);

  const handleAddDepartment = () => {
    setShowCreateForm(true);
    onShowCreateDepartment('createDepartment');
  };

  const handleEditDepartment = (departmentId) => {
    const departmentToEdit = departments.find((department) => department.id === departmentId);

    if (departmentToEdit) {
      setEditingDepartment(departmentToEdit);
      onShowEditDepartment(departmentToEdit);
    } else {
      console.log("Department not found.");
    }
  };

  const handleCancelEdit = () => {
    setEditingDepartment(null);
  };

  const deleteDepartment = (departmentId) => {
    const updatedDepartments = departments.filter(dep => dep.id !== departmentId);
    setDepartments(updatedDepartments);
  };

  const handleSaveEdit = (editedDepartment) => {
    const updatedDepartments = departments.map(dep =>
      dep.id === editedDepartment.id ? editedDepartment : dep
    );

    setDepartments(updatedDepartments);
    setEditingDepartment(null);
    onEditDepartment(editedDepartment);
  };

  return (
    <div className="department">
      <h1>Departments</h1>
      {showCreateForm ? (
        <CreateDepartment />
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Block</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((department) => (
                <tr key={department.id}>
                  <td>{department.id}</td>
                  <td>{department.name}</td>
                  <td>{department.block}</td>
                  <td>
                    <button onClick={() => handleEditDepartment(department.id)}>Edit</button>
                    <button onClick={() => deleteDepartment(department.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleAddDepartment} type="submit">Add Department</button>
        </div>
      )}
      {editingDepartment && (
        <EditDepartment
          department={editingDepartment}
          onCancelEdit={() => setEditingDepartment(null)}
          onEditDepartment={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      )}
    </div>
  );
}

export default Department;
