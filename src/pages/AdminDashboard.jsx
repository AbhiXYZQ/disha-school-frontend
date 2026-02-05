import React, { useState, useEffect } from 'react'; // useEffect yahan zaroori hai
import { LayoutDashboard, Users, Video, BookOpen, LogOut, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Axios import karna zaroori hai

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-blue-800">Admin Panel</div>
        <nav className="flex-1 p-4 space-y-2">
          <SidebarItem icon={<LayoutDashboard />} text="Overview" active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} />
          <SidebarItem icon={<Video />} text="Live Classes" active={activeTab === 'classes'} onClick={() => setActiveTab('classes')} />
          <SidebarItem icon={<Users />} text="Students" active={activeTab === 'students'} onClick={() => setActiveTab('students')} />
          <SidebarItem icon={<BookOpen />} text="Upload Notes" active={activeTab === 'notes'} onClick={() => setActiveTab('notes')} />
        </nav>
        <div className="p-4 border-t border-blue-800">
          <Link to="/" className="flex items-center gap-3 text-red-300 hover:text-white w-full">
            <LogOut size={20} /> Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          {activeTab === 'overview' ? 'Dashboard Overview' : 'Manage ' + activeTab}
        </h2>

        {activeTab === 'overview' && <OverviewStats />}
        {activeTab === 'classes' && <ClassManager />}
        {activeTab === 'notes' && <NotesManager />}
        {activeTab === 'students' && <div className="text-gray-500">Student List coming soon...</div>}
      </main>
    </div>
  );
};

// --- Sub Components ---

const SidebarItem = ({ icon, text, active, onClick }) => (
  <button 
    onClick={onClick} 
    className={`flex items-center gap-3 w-full p-3 rounded-lg transition ${active ? 'bg-yellow-500 text-blue-900 font-bold' : 'hover:bg-blue-800 text-gray-300'}`}
  >
    {icon} <span>{text}</span>
  </button>
);

const OverviewStats = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg">
      <h3 className="text-lg opacity-80">Total Students</h3>
      <p className="text-4xl font-bold mt-2">1,240</p>
    </div>
    <div className="bg-green-500 text-white p-6 rounded-xl shadow-lg">
      <h3 className="text-lg opacity-80">Active Classes</h3>
      <p className="text-4xl font-bold mt-2">3</p>
    </div>
    <div className="bg-purple-500 text-white p-6 rounded-xl shadow-lg">
      <h3 className="text-lg opacity-80">Notes Uploaded</h3>
      <p className="text-4xl font-bold mt-2">450</p>
    </div>
  </div>
);

// Ye component Live Classes ko handle karega
const ClassManager = () => {
  const [classes, setClasses] = useState([]);
  const [formData, setFormData] = useState({ topic: '', teacher: '', time: '', meetLink: '' });

  // Load classes from Server
  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      // Make sure Server is running on Port 5000
      const res = await axios.get('http://localhost:5000/api/classes');
      setClasses(res.data);
    } catch (err) {
      console.error("Error fetching classes:", err);
    }
  };

  // Schedule New Class
  const handleSchedule = async () => {
    if (!formData.topic || !formData.meetLink) return alert("Please fill Topic and Link!");
    try {
      await axios.post('http://localhost:5000/api/classes', formData);
      alert("Class Scheduled Successfully!");
      setFormData({ topic: '', teacher: '', time: '', meetLink: '' });
      fetchClasses(); 
    } catch (err) {
      console.error("Error scheduling class:", err);
      alert("Failed to schedule. Check if Backend Server is running!");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-6">
      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border p-4 rounded-lg bg-gray-50">
        <input placeholder="Topic (e.g. Physics - Optics)" className="border p-2 rounded" value={formData.topic} onChange={(e) => setFormData({...formData, topic: e.target.value})} />
        <input placeholder="Teacher Name" className="border p-2 rounded" value={formData.teacher} onChange={(e) => setFormData({...formData, teacher: e.target.value})} />
        <input placeholder="Time (e.g. 10:00 AM)" className="border p-2 rounded" value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})} />
        <input placeholder="Zoom/Meet Link" className="border p-2 rounded" value={formData.meetLink} onChange={(e) => setFormData({...formData, meetLink: e.target.value})} />
        <button onClick={handleSchedule} className="bg-blue-900 text-white px-4 py-2 rounded font-bold col-span-2 hover:bg-blue-800">
          Schedule Live Class
        </button>
      </div>

      {/* List */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Upcoming Classes</h3>
        {classes.length === 0 ? <p className="text-gray-500">No classes scheduled yet.</p> : classes.map((cls) => (
          <div key={cls._id} className="border p-4 rounded-lg flex justify-between items-center shadow-sm">
            <div>
              <h4 className="font-bold text-lg">{cls.topic}</h4>
              <p className="text-gray-500 text-sm">By: {cls.teacher} • {cls.time}</p>
            </div>
            <a href={cls.meetLink} target="_blank" rel="noreferrer" className="bg-red-100 text-red-600 px-4 py-2 rounded text-sm font-bold hover:bg-red-200">
              Join Live
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const NotesManager = () => (
  <div className="bg-white p-6 rounded-xl shadow text-center py-12 border-2 border-dashed border-gray-300">
    <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
    <h3 className="text-xl font-bold text-gray-700">Upload Study Material</h3>
    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-4 hover:bg-blue-700">
      Select PDF File
    </button>
  </div>
);

export default AdminDashboard;