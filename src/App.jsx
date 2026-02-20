import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- SAHI IMPORTS ---
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';   // Sahi file path
import StudentDashboard from './pages/StudentDashboard'; // Sahi file path
import Contact from './pages/Contact';
import About from './pages/About';
import Academics from './pages/Academics';
import LoginPage from './pages/LoginPage'; // Naya LoginPage Page
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

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
        
        {/* LoginPage Page Route */}
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;