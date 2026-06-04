import React from 'react';
import { BookOpen, Microscope, Calculator, Brain, CheckCircle, GraduationCap, Baby, Pencil, Atom } from 'lucide-react';
import { Link } from 'react-router-dom';

const Academics = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* --- 1. HERO SECTION --- */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-20">
            {/* Background Pattern */}
            <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute left-0 bottom-0 w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
           <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md">
             Academic Spectrum
           </span>
           <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
             From <span className="text-green-400">ABCs</span> to <span className="text-blue-400">IIT-JEE</span>
           </h1>
           <p className="text-blue-100 text-lg max-w-2xl mx-auto">
             A complete educational roadmap designed to nurture curiosity in childhood and ambition in teenage years.
           </p>
        </div>
      </div>

      {/* --- 2. JUNIOR WING (Schooling) --- */}
      <div className="py-20 bg-white">
         <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
               <div className="p-3 bg-green-100 rounded-xl text-green-600">
                  <Baby size={32} />
               </div>
               <div>
                  <h2 className="text-3xl font-bold text-slate-900">Junior Wing Programs</h2>
                  <p className="text-slate-500">Dynamic Public School (Playgroup - Class 6)</p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Program 1 */}
               <ProgramCard 
                  title="Early Years (Play - KG)"
                  theme="green"
                  desc="Focus on motor skills, social interaction, and basic literacy through play-way method."
                  features={['Activity Based Learning', 'No School Bag Policy', 'Phonics & Storytelling']}
               />
               {/* Program 2 */}
               <ProgramCard 
                  title="Primary (Class 1 - 5)"
                  theme="green"
                  desc="Building strong foundations in Maths, Science, and Languages with curiosity-driven learning."
                  features={['Conceptual Clarity', 'Computer Education', 'Public Speaking']}
               />
               {/* Program 3 */}
               <ProgramCard 
                  title="Middle School (Class 6)"
                  theme="green"
                  desc="Bridging the gap to higher studies introducing logical reasoning and critical thinking."
                  features={['Introduction to Coding', 'Science Experiments', 'Olympiad Basics']}
               />
            </div>
         </div>
      </div>

      {/* --- 3. SENIOR WING (Coaching) --- */}
      <div className="py-20 bg-slate-50 border-t border-slate-200">
         <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
               <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                  <Atom size={32} />
               </div>
               <div>
                  <h2 className="text-3xl font-bold text-slate-900">Senior Wing Programs</h2>
                  <p className="text-slate-500">Dynamic Coaching Centre (Class 7 - 12)</p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Program 1 */}
               <ProgramCard 
                  title="Foundation (Class 7 - 10)"
                  theme="blue"
                  desc="Early preparation for competitive exams ensuring strong command over Science & Maths."
                  features={['NTSE / Olympiad Prep', 'Advanced Board Syllabus', 'Mental Ability Training']}
               />
               {/* Program 2 */}
               <ProgramCard 
                  title="Engineering (JEE Main/Adv)"
                  theme="blue"
                  desc="Rigorous training for IITs & NITs with focus on Physics, Chemistry, and Mathematics."
                  features={['Daily Practice Papers (DPP)', 'All India Test Series', 'Doubt Clearing Desk']}
               />
               {/* Program 3 */}
               <ProgramCard 
                  title="Medical (NEET-UG)"
                  theme="blue"
                  desc="Comprehensive biology-centric coaching for aspiring doctors with NCERT mastery."
                  features={['Line-by-Line NCERT', 'Diagram Based Learning', 'Previous Year Questions']}
               />
            </div>
         </div>
      </div>

      {/* --- 4. METHODOLOGY (Why Us) --- */}
      <div className="py-20 bg-slate-900 text-white">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold mb-4">The Dynamic Advantage</h2>
               <p className="text-slate-400">How we ensure success at every level</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               <FeatureItem icon={<BookOpen />} title="Custom Study Material" desc="Curated by top experts to match exam patterns." />
               <FeatureItem icon={<Microscope />} title="Practical Learning" desc="Labs and visual aids for better understanding." />
               <FeatureItem icon={<Brain />} title="Personal Mentorship" desc="One-on-one guidance for every student's growth." />
               <FeatureItem icon={<CheckCircle />} title="Regular Assessment" desc="Weekly tests to track and improve performance." />
            </div>
         </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t-4 border-yellow-500">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
           <div>
              <h4 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                <img src="/school-logo.png" alt="Logo" className="w-8 h-8 object-contain bg-white rounded-full p-1" />
                Disha Nucleus
              </h4>
              <p className="text-sm leading-relaxed mb-4">
                 Dynamic Public School & Dynamic Coaching Centre. <br/>
                 Education that matters.
              </p>
           </div>
           <div>
              <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                 <li><Link to="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
                 <li><Link to="/contact" className="hover:text-yellow-400 transition">Admissions</Link></li>
              </ul>
           </div>
           <div className="flex flex-col justify-end text-right">
              <p className="text-xs text-slate-600">Developed by Abhishek Kumar</p>
           </div>
        </div>
      </footer>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const ProgramCard = ({ title, desc, features, theme }) => {
   const isGreen = theme === 'green';
   const accentColor = isGreen ? 'bg-green-500' : 'bg-blue-600';
   const lightBg = isGreen ? 'bg-green-50' : 'bg-blue-50';
   const textColor = isGreen ? 'text-green-700' : 'text-blue-700';

   return (
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-slate-100 relative overflow-hidden group">
         <div className={`absolute top-0 left-0 w-full h-1.5 ${accentColor}`}></div>
         
         <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
         <p className="text-slate-600 text-sm mb-6 leading-relaxed">{desc}</p>
         
         <div className={`p-4 rounded-xl ${lightBg}`}>
            <ul className="space-y-3">
               {features.map((feat, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                     <CheckCircle size={16} className={`mt-0.5 flex-shrink-0 ${textColor}`} />
                     {feat}
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

const FeatureItem = ({ icon, title, desc }) => (
   <div className="text-center p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition">
      <div className="inline-block p-4 bg-slate-900 rounded-full text-blue-400 mb-4 shadow-lg border border-slate-700">
         {icon}
      </div>
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-slate-400 text-sm">{desc}</p>
   </div>
);

export default Academics;