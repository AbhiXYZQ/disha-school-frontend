import React, { useState } from 'react';
import { BookOpen, Video, Users, Phone, Mail, MapPin, ArrowRight, Award, Menu, X, ChevronRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menu Links Data
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* 1. Top Bar (Updated Contact Info) */}
      <div className="bg-slate-900 text-slate-300 py-2 text-xs relative z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-wrap gap-4 md:gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-yellow-500"/> 0641-2434301 / 9709595643
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-yellow-500"/> info@dishanucleus.in
            </span>
          </div>
          <div className="hidden md:block opacity-80 font-semibold">ISO 9001:2015 Certified Institution</div>
        </div>
      </div>

      {/* 2. Navbar (Fixed & Sticky) */}
      <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-100 w-full">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            
            {/* Logo Area */}
            <div className="flex items-center gap-3 relative z-20">
               <img src="/school-logo.png" alt="Logo" className="w-12 h-12 object-contain" />
               <div>
                  <h1 className="text-2xl font-bold text-slate-900 leading-none">Disha Nucleus</h1>
                  <p className="text-[10px] text-slate-500 tracking-widest font-bold mt-1 uppercase">Senior Secondary School</p>
               </div>
            </div>
            
            {/* DESKTOP MENU */}
            <nav className="hidden md:flex space-x-8 items-center font-medium text-sm">
              {navLinks.map(link => (
                <Link key={link.name} to={link.path} className="text-slate-600 hover:text-blue-900 transition relative group">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-900 transition-all group-hover:w-full"></span>
                </Link>
              ))}
              
              <div className="flex gap-3 ml-4">
                  <Link to="/login" className="px-5 py-2.5 rounded-full border border-blue-900 text-blue-900 font-semibold hover:bg-blue-50 transition text-sm">
                  Student Portal
                  </Link>
                  <Link to="/login" className="px-5 py-2.5 rounded-full bg-blue-900 text-white font-semibold shadow-lg hover:bg-blue-800 transition hover:shadow-xl text-sm">
                  Admin Login
                  </Link>
              </div>
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button 
              className="md:hidden text-slate-900 p-2 relative z-20"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Side Drawer */}
      <div 
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <div 
        className={`fixed top-0 right-0 h-full w-[300px] bg-white z-[60] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
          <div className="p-6 flex justify-between items-center border-b border-slate-100">
             <div className="flex items-center gap-2">
                <img src="/school-logo.png" alt="Logo" className="w-10 h-10 object-contain" />
                <span className="font-bold text-blue-900">Menu</span>
             </div>
             <button onClick={() => setIsMenuOpen(false)} className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition">
               <X size={24} />
             </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-6 flex flex-col gap-2">
             {navLinks.map(link => (
               <Link key={link.name} to={link.path} onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between p-4 text-lg font-medium text-slate-700 rounded-xl hover:bg-blue-50 hover:text-blue-900 transition group">
                 {link.name}
                 <ChevronRight size={20} className="text-slate-300 group-hover:text-blue-900 transition"/>
               </Link>
             ))}
          </nav>

          <div className="p-6 border-t border-slate-100 flex flex-col gap-3 bg-slate-50">
             <Link to="/login" onClick={() => setIsMenuOpen(false)} className="w-full py-3.5 text-center rounded-xl border-2 border-blue-900 text-blue-900 font-bold text-lg hover:bg-blue-100 transition">
             Student Portal
             </Link>
             <Link to="/login" onClick={() => setIsMenuOpen(false)} className="w-full py-3.5 text-center rounded-xl bg-blue-900 text-white font-bold text-lg shadow-lg hover:bg-blue-800 transition">
             Admin Login
             </Link>
          </div>
      </div>

      {/* 3. Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 md:py-32">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-0 text-center md:text-left">
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
               <Link to="/login" className="bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-yellow-400 transition flex items-center justify-center gap-2">
                 Join Online Classroom <ArrowRight size={20}/>
               </Link>
               <button className="px-8 py-4 rounded-lg font-bold text-lg border border-white/30 hover:bg-white/10 transition backdrop-blur-sm">
                 Download Prospectus
               </button>
             </div>
          </div>
        </div>
      </div>

      {/* 4. Stats Section */}
      <div className="bg-white py-12 border-b border-slate-100 shadow-sm relative -mt-8 mx-6 md:mx-20 rounded-xl z-0">
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

      {/* 6. Footer (Updated with Full Address & Contacts) */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t-4 border-yellow-500">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
           {/* Column 1: About */}
           <div>
              <h4 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                <img src="/school-logo.png" alt="Logo" className="w-8 h-8 object-contain bg-white rounded-full p-1" />
                Disha Nucleus School
              </h4>
              <p className="text-sm leading-relaxed mb-4">A unit of Chandrakala Sinha Gyanoday Trust. Committed to nurturing intellect and character since 2002.</p>
           </div>
           
           {/* Column 2: Quick Links */}
           <div>
              <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                 <li><a href="#" className="hover:text-yellow-400 transition">Admissions Process</a></li>
                 <li><a href="#" className="hover:text-yellow-400 transition">Fee Structure</a></li>
                 <li><a href="#" className="hover:text-yellow-400 transition">Academic Calendar</a></li>
                 <li><a href="#" className="hover:text-yellow-400 transition">Contact Us</a></li>
              </ul>
           </div>
           
           {/* Column 3: Contact Info (Updated) */}
           <div>
              <h4 className="text-white text-lg font-bold mb-4">Contact Information</h4>
              <p className="text-sm flex items-start gap-3 mb-3">
                <MapPin size={18} className="text-blue-500 mt-1 min-w-[18px]"/> 
                <span>
                  Infront of Indoor Stadium, Sandy’s Compound, <br/>
                  Near Ghuran Peer Baba Chowk, <br/>
                  Chhoti Khanjarpur, Bhagalpur-1
                </span>
              </p>
              <div className="text-sm flex items-start gap-3 mb-3">
                <Phone size={18} className="text-blue-500 mt-1 min-w-[18px]"/> 
                <div>
                   <p>0641-2434301</p>
                   <p>+91 9709595643, 9570995992</p>
                   <p>+91 9931728466</p>
                </div>
              </div>
              <p className="text-sm flex items-center gap-3">
                <Globe size={18} className="text-blue-500"/> www.dishanucleus.in
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

// --- Helper Components ---
const StatItem = ({ number, label }) => (
  <div className="px-4">
     <h4 className="text-3xl font-bold text-blue-900 mb-1">{number}</h4>
     <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">{label}</p>
  </div>
);

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
    <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white-600 transition-colors duration-300">
       <div className="text-blue-600 group-hover:text-white transition-colors duration-300">{icon}</div>
    </div>
    <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
    <p className="text-slate-600 leading-relaxed text-sm">{desc}</p>
  </div>
);

export default Home;