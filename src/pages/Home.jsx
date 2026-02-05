import React from 'react';
import { BookOpen, Video, Users, Phone, Mail, MapPin, ArrowRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* 1. Top Bar (Professional Contact Strip) */}
      <div className="bg-slate-900 text-slate-300 py-2 text-xs">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={14} className="text-yellow-500"/> +91 99340 11111</span>
            <span className="flex items-center gap-2"><Mail size={14} className="text-yellow-500"/> info@dishanucleus.in</span>
          </div>
          <div className="hidden md:block opacity-80">ISO 9001:2015 Certified Institution</div>
        </div>
      </div>

      {/* 2. Navbar (Clean & Sticky) */}
      <header className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">D</div>
             <div>
                <h1 className="text-2xl font-bold text-slate-900 leading-none">Disha Nucleus</h1>
                <p className="text-[10px] text-slate-500 tracking-widest font-bold mt-1 uppercase">Senior Secondary School</p>
             </div>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center font-medium text-sm">
            <Link to="/" className="text-slate-600 hover:text-blue-900 transition">Home</Link>
            <Link to="#" className="text-slate-600 hover:text-blue-900 transition">About Us</Link>
            <Link to="#" className="text-slate-600 hover:text-blue-900 transition">Academics</Link>
            
            {/* Action Buttons */}
            <div className="flex gap-3 ml-4">
                <Link to="/student" className="px-5 py-2.5 rounded-full border border-blue-900 text-blue-900 font-semibold hover:bg-blue-50 transition text-sm">
                Student Portal
                </Link>
                <Link to="/admin" className="px-5 py-2.5 rounded-full bg-blue-900 text-white font-semibold shadow-lg hover:bg-blue-800 transition hover:shadow-xl text-sm">
                Admin Login
                </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* 3. Hero Section (Modern Gradient) */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="md:w-2/3">
             <span className="inline-block px-3 py-1 bg-blue-800/50 border border-blue-700 rounded-full text-blue-200 text-xs font-bold mb-6 tracking-wide uppercase">
                Admissions Open for 2026-27
             </span>
             <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
               Excellence in <span className="text-yellow-400">Education</span> <br/> & Character Building
             </h2>
             <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
               Preparing students for JEE, NEET, and Life. A holistic learning environment with state-of-the-art facilities and expert faculty.
             </p>
             <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
               <Link to="/student" className="bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-yellow-400 transition flex items-center justify-center gap-2">
                 Join Online Classroom <ArrowRight size={20}/>
               </Link>
               <button className="px-8 py-4 rounded-lg font-bold text-lg border border-white/30 hover:bg-white/10 transition backdrop-blur-sm">
                 Download Prospectus
               </button>
             </div>
          </div>
        </div>
      </div>

      {/* 4. Stats Section (Trust Markers) */}
      <div className="bg-white py-12 border-b border-slate-100 shadow-sm relative -mt-8 mx-6 md:mx-20 rounded-xl z-20">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            <StatItem number="24+" label="Years of Excellence" />
            <StatItem number="1200+" label="Students Enrolled" />
            <StatItem number="100%" label="Board Results" />
            <StatItem number="50+" label="Expert Faculty" />
         </div>
      </div>

      {/* 5. Features Grid */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <h3 className="text-blue-900 font-bold tracking-widest uppercase text-xs mb-3">Why Choose Disha Nucleus?</h3>
             <h3 className="text-3xl md:text-4xl font-bold text-slate-900">A World-Class Learning Ecosystem</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Video className="w-8 h-8 text-blue-600" />}
              title="Interactive Live Classes" 
              desc="Seamless Zoom integration for real-time learning. Attend classes from the safety of your home."
            />
            <FeatureCard 
              icon={<BookOpen className="w-8 h-8 text-blue-600" />}
              title="Digital Library & Notes" 
              desc="24/7 access to high-quality PDF notes, recorded lectures, and assignments."
            />
            <FeatureCard 
              icon={<Award className="w-8 h-8 text-blue-600" />}
              title="Proven Track Record" 
              desc="Consistently producing toppers in CBSE Boards, JEE, and NEET exams."
            />
          </div>
        </div>
      </div>

      {/* 6. Footer (Professional) */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t-4 border-yellow-500">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
           <div>
              <h4 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-xs">D</div> 
                Disha Nucleus School
              </h4>
              <p className="text-sm leading-relaxed mb-4">A unit of Chandrakala Sinha Gyanoday Trust. Committed to nurturing intellect and character since 2002.</p>
           </div>
           
           <div>
              <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                 <li><a href="#" className="hover:text-yellow-400 transition">Admissions Process</a></li>
                 <li><a href="#" className="hover:text-yellow-400 transition">Fee Structure</a></li>
                 <li><a href="#" className="hover:text-yellow-400 transition">Academic Calendar</a></li>
                 <li><a href="#" className="hover:text-yellow-400 transition">Contact Us</a></li>
              </ul>
           </div>
           
           <div>
              <h4 className="text-white text-lg font-bold mb-4">Contact Information</h4>
              <p className="text-sm flex items-start gap-3 mb-3">
                <MapPin size={18} className="text-blue-500 mt-1"/> 
                <span>Near Indoor Stadium, Sandy,<br/>Hajipur, Vaishali</span>
              </p>
              <p className="text-sm flex items-center gap-3 mb-3">
                <Phone size={18} className="text-blue-500"/> +91 99340 11111
              </p>
              <p className="text-sm flex items-center gap-3">
                <Mail size={18} className="text-blue-500"/> principal@dishanucleus.in
              </p>
           </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
           &copy; 2026 Disha Nucleus School. All rights reserved. | Developed by Nainix Dev
        </div>
      </footer>
    </div>
  );
};

// --- Helper Components for Clean Code ---

const StatItem = ({ number, label }) => (
  <div className="px-4">
     <h4 className="text-3xl font-bold text-blue-900 mb-1">{number}</h4>
     <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">{label}</p>
  </div>
);

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
    <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
       <div className="text-blue-600 group-hover:text-white transition-colors duration-300">{icon}</div>
    </div>
    <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
    <p className="text-slate-600 leading-relaxed text-sm">{desc}</p>
  </div>
);

export default Home;