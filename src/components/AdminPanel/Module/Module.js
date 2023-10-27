import React, { useState } from 'react';
import CreateModule from './CreateModule';
import './Module.css';

function Module({ onShowCreateModule, modulesData }) {
const sampleModulesData = [
    {
      id: 1,
      code: 'MOD001',
      name: 'Introduction to Programming',
      creditHours: 3,
    },
    {
      id: 2,
      code: 'MOD002',
      name: 'Data Structures and Algorithms',
      creditHours: 4,
    },
    // Add more modules as needed
  ]

  const [showCreateModule, setShowCreateModule] = useState(false);
  const [modules, setModules] = useState([...modulesData, ...sampleModulesData]);
//   const [modules, setModules] = useState([
//     {
//       id: 1,
//       code: 'MOD001',
//       name: 'Introduction to Programming',
//       creditHours: 3,
//     },
//     {
//       id: 2,
//       code: 'MOD002',
//       name: 'Data Structures and Algorithms',
//       creditHours: 4,
//     },
//     // Add more modules as needed
//   ]);

  function handleAddModule() {
    setShowCreateModule(true);
    onShowCreateModule('createModule');
  }

  function addNewModule(newModule) {
    setModules([...modules, newModule]);
    setShowCreateModule(false); // Hide the CreateModule component after adding
  }

  // Rest of your code...

  return (
    <div className="module">
      <h1>Modules</h1>
      <table>
        <thead>
          <tr>
            <th>Module Code</th>
            <th>Module Name</th>
            <th>Credit Hours</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {modules.map((module) => (
            <tr key={module.code}>
              <td>{module.code}</td>
              <td>{module.name}</td>
              <td>{module.creditHours}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-button" onClick={handleAddModule}>
        Add Module
      </button>
      {showCreateModule && <CreateModule onAddModule={addNewModule} onCancel={() => setShowCreateModule(false)} />}
    </div>
  );
}

export default Module;
