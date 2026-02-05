import React, { useState } from 'react';
import { Menu, X, Award, Target, BookOpen, Users, Star, Globe, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* --- NAVBAR (Consistent) --- */}
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
              <Link to="/about" className="text-blue-900 font-bold transition">About Us</Link>
              <Link to="/contact" className="text-slate-600 hover:text-blue-900 transition">Contact Us</Link>
              <div className="flex gap-3 ml-4">
                  <Link to="/LoginPage" className="px-5 py-2.5 rounded-full border border-blue-900 text-blue-900 font-semibold hover:bg-blue-50 transition text-sm">Student Portal</Link>
              </div>
            </nav>

            <button className="md:hidden text-slate-900 p-2 relative z-20" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <div className="bg-slate-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
        <div className="container mx-auto px-6 relative z-10">
           <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Our Legacy</h1>
           <p className="text-blue-200 text-lg max-w-2xl mx-auto">
             Nurturing young minds since 2002 under the aegis of <br/>
             <span className="text-yellow-400 font-bold">Chandrakala Sinha Gyanoday Trust</span>
           </p>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="container mx-auto px-6 py-16 space-y-20">
        
        {/* Section 1: Who We Are */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div>
              <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-2 block">Our Story</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">More Than Just a School</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Disha Nucleus is not just an educational institution; it is a center of excellence dedicated to the holistic development of every child. 
                Established in 2002, we have consistently produced city and state toppers in Board exams, JEE, and NEET.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Located in the heart of Bhagalpur, our campus provides a safe, stimulating environment where students are encouraged to ask questions, explore ideas, and build a strong foundation for their future.
              </p>
           </div>
           <div className="bg-blue-100 rounded-2xl p-8 md:p-12 relative">
              <div className="absolute -top-4 -right-4 bg-yellow-400 w-24 h-24 rounded-full opacity-50 blur-2xl"></div>
              <div className="grid grid-cols-2 gap-4">
                 <StatCard number="24+" label="Years of Legacy" />
                 <StatCard number="100%" label="Pass Rate" />
                 <StatCard number="50+" label="Expert Teachers" />
                 <StatCard number="1200+" label="Happy Students" />
              </div>
           </div>
        </div>

        {/* Section 2: Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <InfoCard 
             icon={<Target className="text-white" />} 
             bg="bg-blue-600"
             title="Our Mission"
             desc="To provide world-class education that balances academic rigour with character building, ensuring every student becomes a responsible global citizen."
           />
           <InfoCard 
             icon={<Star className="text-white" />} 
             bg="bg-slate-800"
             title="Our Vision"
             desc="To be a beacon of knowledge and wisdom, empowering students to achieve their full potential and lead with integrity and innovation."
           />
           <InfoCard 
             icon={<Award className="text-white" />} 
             bg="bg-yellow-500"
             title="Core Values"
             desc="Integrity, Excellence, Respect, and Innovation are the pillars upon which the culture of Disha Nucleus is built."
           />
        </div>

        {/* Section 3: Principal's Message */}
        <div className="bg-white border border-slate-100 rounded-2xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center">
           <div className="w-32 h-32 md:w-48 md:h-48 bg-slate-200 rounded-full flex-shrink-0 overflow-hidden border-4 border-white shadow-lg">
              {/* Placeholder for Principal's Image */}
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Principal" className="w-full h-full object-cover" />
           </div>
           <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Principal's Message</h3>
              <p className="text-slate-500 text-sm font-bold uppercase mb-4">Mrs. Principal Name (M.A., B.Ed)</p>
              <blockquote className="text-slate-600 italic leading-relaxed border-l-4 border-yellow-500 pl-4">
                "Education is not the learning of facts, but the training of the mind to think. At Disha Nucleus, we strive to ignite the fire of curiosity in every child. We believe that every student has unique talents, and our job is to nurture them."
              </blockquote>
           </div>
        </div>

      </div>

      {/* --- FOOTER (Same as Home) --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t-4 border-yellow-500">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
           <div>
              <h4 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                <img src="/school-logo.png" alt="Logo" className="w-8 h-8 object-contain bg-white rounded-full p-1" />
                Disha Nucleus School
              </h4>
              <p className="text-sm leading-relaxed mb-4">A unit of Chandrakala Sinha Gyanoday Trust. Committed to nurturing intellect and character since 2002.</p>
           </div>
           <div>
              <h4 className="text-white text-lg font-bold mb-4">Contact Information</h4>
              <p className="text-sm flex items-start gap-3 mb-3">
                <MapPin size={18} className="text-blue-500 mt-1 min-w-[18px]"/> 
                <span>Infront of Indoor Stadium, Sandy’s Compound, Near Ghuran Peer Baba Chowk, Bhagalpur-1</span>
              </p>
              <p className="text-sm flex items-center gap-3">
                <Phone size={18} className="text-blue-500"/> 0641-2434301
              </p>
           </div>
           <div className="text-right flex flex-col items-end justify-end">
             <p className="text-xs text-slate-600">Developed by Nainix Dev</p>
           </div>
        </div>
      </footer>
    </div>
  );
};

// --- Helper Components ---
const StatCard = ({ number, label }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm text-center">
    <h4 className="text-2xl font-bold text-blue-900">{number}</h4>
    <p className="text-xs text-slate-500 uppercase font-bold">{label}</p>
  </div>
);

const InfoCard = ({ icon, bg, title, desc }) => (
  <div className={`p-8 rounded-2xl ${bg} text-white shadow-lg transform transition hover:-translate-y-1`}>
     <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm">
       {icon}
     </div>
     <h3 className="text-xl font-bold mb-3">{title}</h3>
     <p className="text-blue-100 text-sm leading-relaxed opacity-90">{desc}</p>
  </div>
);

export default About;