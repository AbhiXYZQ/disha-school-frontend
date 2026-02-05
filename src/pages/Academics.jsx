import React, { useState } from 'react';
import { Menu, X, BookOpen, Microscope, Calculator, PenTool, Brain, Monitor, CheckCircle, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Academics = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* --- NAVBAR --- */}
      <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-100 w-full">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3 relative z-20">
               <img src="/school-logo.png" alt="Logo" className="w-12 h-12 object-contain" />
               <div>
                  <h1 className="text-2xl font-bold text-slate-900 leading-none">Disha Nucleus</h1>
                  <p className="text-[10px] text-slate-500 tracking-widest font-bold mt-1 uppercase">Senior Secondary School</p>
               </div>
            </Link>
            
            <nav className="hidden md:flex space-x-8 items-center font-medium text-sm">
              <Link to="/" className="text-slate-600 hover:text-blue-900 transition">Home</Link>
              <Link to="/about" className="text-slate-600 hover:text-blue-900 transition">About Us</Link>
              <Link to="/academics" className="text-blue-900 font-bold transition">Academics</Link>
              <div className="flex gap-3 ml-4">
                  <Link to="/login" className="px-5 py-2.5 rounded-full border border-blue-900 text-blue-900 font-semibold hover:bg-blue-50 transition text-sm">Student Portal</Link>
              </div>
            </nav>

            <button className="md:hidden text-slate-900 p-2 relative z-20" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <div className="bg-blue-900 text-white py-20 text-center relative overflow-hidden">
         {/* Background decoration */}
         <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute right-10 top-10 w-32 h-32 rounded-full border-4 border-white"></div>
            <div className="absolute left-10 bottom-10 w-20 h-20 rounded-full border-2 border-yellow-400"></div>
         </div>
         
         <div className="container mx-auto px-6 relative z-10">
           <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Academic Excellence</h1>
           <p className="text-blue-200 text-lg max-w-2xl mx-auto">
             Comprehensive curriculum designed to crack Competitive Exams (JEE/NEET) while excelling in Board Exams.
           </p>
        </div>
      </div>

      {/* --- STREAMS OFFERED --- */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Streams Offered (Class XI & XII)</h2>
            <p className="text-slate-500 mt-2">We offer specialized coaching integrated with the CBSE curriculum.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Science Stream */}
            <StreamCard 
              icon={<Microscope size={40} className="text-white" />}
              title="Science (PCM / PCB)"
              bg="bg-blue-600"
              features={['Physics, Chemistry, Maths/Bio', 'Integrated JEE/NEET Coaching', 'Advanced Science Labs', 'Regular Mock Tests']}
            />
            
            {/* Commerce Stream */}
            <StreamCard 
              icon={<Calculator size={40} className="text-white" />}
              title="Commerce"
              bg="bg-slate-800"
              features={['Accountancy, Business Studies', 'Economics, English', 'CA Foundation Guidance', 'Computer Informatics']}
            />

            {/* Humanities */}
            <StreamCard 
              icon={<PenTool size={40} className="text-white" />}
              title="Humanities / Arts"
              bg="bg-yellow-500"
              features={['History, Pol. Science', 'Geography, Economics', 'UPSC Foundation Basics', 'Creative Writing']}
            />
        </div>
      </div>

      {/* --- METHODOLOGY SECTION --- */}
      <div className="bg-white py-16 border-y border-slate-100">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
               <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Teaching Methodology</h2>
                  <div className="space-y-6">
                     <MethodItem title="Smart Classrooms" desc="Digital learning with interactive panels to visualize complex concepts." icon={<Monitor className="text-blue-600"/>} />
                     <MethodItem title="Remedial Classes" desc="Special attention for students who need extra support in specific subjects." icon={<Brain className="text-blue-600"/>} />
                     <MethodItem title="Weekly Assessment" desc="Continuous evaluation through weekly tests to track progress." icon={<CheckCircle className="text-blue-600"/>} />
                  </div>
               </div>
               
               <div className="flex-1 bg-blue-50 p-8 rounded-2xl relative">
                  <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                     <Trophy className="text-yellow-500" /> Recent Achievements
                  </h3>
                  <ul className="space-y-4">
                     <li className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                        <div className="font-bold text-slate-800">JEE Advanced 2025</div>
                        <div className="text-sm text-slate-500">12 Students Qualified for IITs</div>
                     </li>
                     <li className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                        <div className="font-bold text-slate-800">NEET 2025</div>
                        <div className="text-sm text-slate-500">8 Students Secured MBBS Seats</div>
                     </li>
                     <li className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                        <div className="font-bold text-slate-800">CBSE District Topper</div>
                        <div className="text-sm text-slate-500">Ankit Kumar - 98.6% (Science)</div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <p>© 2026 Disha Nucleus School. All rights reserved.</p>
      </footer>
    </div>
  );
};

// --- Helper Components ---
const StreamCard = ({ icon, title, bg, features }) => (
  <div className={`p-8 rounded-2xl ${bg} text-white shadow-xl hover:-translate-y-2 transition-transform duration-300`}>
     <div className="mb-6 opacity-90">{icon}</div>
     <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-4">{title}</h3>
     <ul className="space-y-3">
       {features.map((feat, index) => (
         <li key={index} className="flex items-start gap-3 text-sm">
            <CheckCircle size={16} className="mt-1 flex-shrink-0 text-white/70" />
            <span className="text-blue-50">{feat}</span>
         </li>
       ))}
     </ul>
  </div>
);

const MethodItem = ({ title, desc, icon }) => (
   <div className="flex gap-4">
      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
         {icon}
      </div>
      <div>
         <h4 className="font-bold text-slate-900 text-lg">{title}</h4>
         <p className="text-slate-600 text-sm mt-1">{desc}</p>
      </div>
   </div>
);

export default Academics;