// App.js
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel/AdminPanel ';
import LecturerPanel from './components/AdminPanel/LecturerPanel';


function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/admin" /> : <Login />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/lecturer" element={<LecturerPanel />}  /> 
        
        <Route index element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
