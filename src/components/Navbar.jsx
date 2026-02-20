import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Active Link Highlighter
  const isActive = (path) => {
    return location.pathname === path 
      ? "text-blue-900 font-bold border-b-2 border-blue-900" 
      : "text-slate-600 hover:text-blue-900 transition";
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      {/* 1. Top Bar */}
      <div className="bg-slate-900 text-slate-300 py-2 text-xs relative z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-wrap gap-4 md:gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-yellow-500"/> 0641-2434301
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-yellow-500"/> info@dynamiccampus.in
            </span>
          </div>
          <div className="hidden md:block opacity-80 font-semibold">ISO 9001:2015 Certified Institution</div>
        </div>
      </div>

      {/* 2. Main Navbar */}
      <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-100 w-full">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            
            {/* Logo Area - UPDATED BRANDING */}
            <Link to="/" className="flex items-center gap-3 relative z-20">
               <img src="/school-logo.png" alt="Logo" className="w-12 h-12 object-contain" />
               <div>
                  <h1 className="text-xl md:text-2xl font-bold text-slate-900 leading-none">Dynamic Campus</h1>
                  <p className="text-[10px] text-slate-500 tracking-widest font-bold mt-1 uppercase">
                    Public School & Coaching
                  </p>
               </div>
            </Link>
            
            {/* DESKTOP MENU */}
            <nav className="hidden md:flex space-x-8 items-center font-medium text-sm">
              {navLinks.map(link => (
                <Link key={link.name} to={link.path} className={`pb-1 ${isActive(link.path)}`}>
                  {link.name}
                </Link>
              ))}
              
              <div className="flex gap-3 ml-4">
                  {/* Fixed Login Link */}
                  <Link to="/LoginPage" className="px-5 py-2.5 rounded-full bg-blue-900 text-white font-semibold shadow-lg hover:bg-blue-800 transition hover:shadow-xl text-sm">
                  Login
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

      {/* 3. Mobile Side Drawer */}
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
                <span className="font-bold text-blue-900">Dynamic Campus</span>
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

          <div className="p-6 border-t border-slate-100 bg-slate-50">
             {/* Fixed Login Link */}
             <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block w-full py-3.5 text-center rounded-xl bg-blue-900 text-white font-bold text-lg shadow-lg hover:bg-blue-800 transition">
             Login
             </Link>
          </div>
      </div>
    </>
  );
};

export default Navbar;