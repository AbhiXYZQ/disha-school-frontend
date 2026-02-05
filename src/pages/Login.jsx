import React, { useState } from 'react';
import { User, Lock, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('student'); // 'student' or 'admin'
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Filhal bas redirect kar rahe hain (Backend baad mein)
    if(role === 'student') navigate('/login');
    else navigate('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-blue-900 p-8 text-center">
          <img src="/school-logo.png" alt="Logo" className="w-16 h-16 mx-auto bg-white rounded-full p-2 mb-4 object-contain" />
          <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
          <p className="text-blue-200 text-sm">Sign in to access your dashboard</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-100">
          <button 
            className={`flex-1 py-4 font-bold text-sm transition ${role === 'student' ? 'text-blue-900 border-b-2 border-blue-900 bg-blue-50' : 'text-slate-400'}`}
            onClick={() => setRole('student')}
          >
            Student Login
          </button>
          <button 
            className={`flex-1 py-4 font-bold text-sm transition ${role === 'admin' ? 'text-blue-900 border-b-2 border-blue-900 bg-blue-50' : 'text-slate-400'}`}
            onClick={() => setRole('admin')}
          >
            Admin Login
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="p-8 space-y-6">
          <div>
            <label className="block text-slate-600 text-sm font-bold mb-2">Username / ID</label>
            <div className="relative">
              <User size={20} className="absolute left-3 top-3 text-slate-400" />
              <input type="text" placeholder="Enter your ID" className="w-full pl-10 p-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-900" required />
            </div>
          </div>

          <div>
            <label className="block text-slate-600 text-sm font-bold mb-2">Password</label>
            <div className="relative">
              <Lock size={20} className="absolute left-3 top-3 text-slate-400" />
              <input type="password" placeholder="••••••••" className="w-full pl-10 p-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-900" required />
            </div>
          </div>

          <button className="w-full bg-yellow-500 text-blue-900 font-bold py-3 rounded-lg hover:bg-yellow-400 transition flex items-center justify-center gap-2">
            Login as {role === 'student' ? 'Student' : 'Admin'} <ArrowRight size={20} />
          </button>

          <div className="text-center">
            <Link to="/" className="text-sm text-slate-400 hover:text-blue-900">Back to Home</Link>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Login;   