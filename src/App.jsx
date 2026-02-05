import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import StudentDashboard from './pages/StudentDashboard'; // <-- Import kiya

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/student" element={<StudentDashboard />} /> {/* <-- Route add kiya */}
      </Routes>
    </Router>
  );
}

export default App;