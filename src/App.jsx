import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- SAHI IMPORTS ---
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';   // Sahi file path
import StudentDashboard from './pages/StudentDashboard'; // Sahi file path
import Contact from './pages/Contact';
import About from './pages/About';
import Academics from './pages/Academics';
import Login from './pages/Login'; // Naya Login Page

function App() {
  return (
    <Router>
      <Routes>
        {/* --- ROUTES --- */}
        <Route path="/" element={<Home />} />
        
        {/* Dashboards (Inka path /admin aur /student hi rahega) */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        
        {/* Information Pages */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        
        {/* Login Page Route */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;