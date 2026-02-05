import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Video, BookOpen, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  const [classes, setClasses] = useState([]);

  // Server se Classes load karna
  useEffect(() => {
    axios.get('http://localhost:5000/api/classes')
      .then(res => setClasses(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Disha Nucleus - Student Portal</h1>
          <Link to="/" className="text-sm hover:text-yellow-400">Logout</Link>
        </div>
      </header>

      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Section 1: Live Classes */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-red-600">
            <Video /> Live Classes
          </h2>
          <div className="space-y-4">
            {classes.length === 0 ? (
              <p className="text-gray-500">No live classes scheduled currently.</p>
            ) : (
              classes.map((cls) => (
                <div key={cls._id} className="border-l-4 border-red-500 bg-red-50 p-4 rounded shadow-sm">
                  <h3 className="font-bold text-lg">{cls.topic}</h3>
                  <p className="text-gray-600 text-sm mb-2">Teacher: {cls.teacher} • Time: {cls.time}</p>
                  <a 
                    href={cls.meetLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-block bg-red-600 text-white px-4 py-2 rounded text-sm font-bold hover:bg-red-700"
                  >
                    Join Now
                  </a>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Section 2: Study Material (Dummy for now) */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-600">
            <BookOpen /> Study Notes
          </h2>
          <div className="space-y-4">
            {/* Dummy Note */}
            <div className="flex justify-between items-center border p-3 rounded hover:bg-gray-50">
              <div>
                <h4 className="font-bold">Physics Chapter 1 - PDF</h4>
                <p className="text-xs text-gray-500">Uploaded Yesterday</p>
              </div>
              <button className="text-blue-600 hover:text-blue-800">
                <Download size={20} />
              </button>
            </div>
            <p className="text-center text-sm text-gray-400 mt-4">More notes coming soon...</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudentDashboard;