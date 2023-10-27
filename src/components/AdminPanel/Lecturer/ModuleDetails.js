import React, { useState } from 'react';
import ModuleDetails from './ModuleDetails';

function Lecturer() {
  const [selectedModule, setSelectedModule] = useState(null);

  // Sample modules data
  const sampleModules = [
    {
      code: 'MOD001',
      name: 'Introduction to Programming',
      creditHours: 3,
      classes: [
        { name: 'Lecture 1', day: 'Monday', time: '9:00 AM', room: 'Room A', hours: 1 },
        { name: 'Lab 1', day: 'Wednesday', time: '2:00 PM', room: 'Lab 1', hours: 2 },
      ],
    },
    // Add more module data as needed
  ];

  const handleModuleClick = (module) => {
    setSelectedModule(module);
  };

  return (
    <div className="lecturer">
      <h1>Lecturer</h1>
      {selectedModule ? (
        <ModuleDetails module={selectedModule} />
      ) : (
        <div>
          <h2>Modules</h2>
          <ul>
            {sampleModules.map((module, index) => (
              <li key={index} onClick={() => handleModuleClick(module)}>
                <strong>Module Code:</strong> {module.code}, <strong>Module Name:</strong> {module.name},{' '}
                <strong>Credit Hours:</strong> {module.creditHours}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Lecturer;
