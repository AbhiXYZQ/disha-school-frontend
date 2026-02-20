import React from 'react';
import { Target, Award, Star, Quote, MapPin, Phone, Check } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* --- 1. HERO SECTION (Simple & Classy) --- */}
      <div className="relative h-[350px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40">
           <img 
             src="abtcover1.jpg" 
             alt="University" 
             className="w-full h-full object-cover"
           />
        </div>
        <div className="relative z-10 text-center px-4">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
             About Dynamic Campus
           </h1>
           <div className="h-1 w-24 bg-yellow-500 mx-auto rounded-full mb-4"></div>
           <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light">
             Bridging the gap between foundational values and competitive success since 2002.
           </p>
        </div>
      </div>

      {/* --- 2. OUR JOURNEY --- */}
      <div className="container mx-auto px-6 py-16">
         <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
               <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-2 block">Our Story</span>
               <h2 className="text-3xl font-bold text-slate-900 mb-6">Two Wings, One Vision</h2>
               <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                  Dynamic Campus operates on a simple philosophy: <strong>"Strong Roots, High Wings"</strong>.
               </p>
               <p className="text-slate-600 leading-relaxed mb-6">
                  We realized that a child needs care and creativity in early years (Schooling), but needs strategy and rigour in teenage years (Coaching). To provide the best of both worlds under one roof, we established two specialized wings managed by experts in their respective fields.
               </p>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                     <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">01</div>
                     <div>
                        <h4 className="font-bold text-slate-900">Junior Wing</h4>
                        <p className="text-xs text-slate-500">Playgroup to Class 6</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                     <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">02</div>
                     <div>
                        <h4 className="font-bold text-slate-900">Senior Wing</h4>
                        <p className="text-xs text-slate-500">Class 6 to 12 & JEE/NEET</p>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="flex-1 relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-green-400 rounded-2xl transform rotate-3 opacity-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop" 
                 alt="Students" 
                 className="relative rounded-2xl shadow-xl border-4 border-white w-full object-cover h-[400px]"
               />
            </div>
         </div>
      </div>

      {/* --- 3. MEET THE LEADERS (Clean Cards) --- */}
      <div className="bg-white py-20 border-t border-slate-100">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-slate-900">Guided by Excellence</h2>
               <p className="text-slate-500 mt-2">Meet the visionaries behind our success</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
               
               {/* DIRECTOR 1: SCHOOL */}
               <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-green-400 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-green-500"></div>
                  
                  <div className="flex items-start gap-6">
                     <img 
                        src="https://randomuser.me/api/portraits/men/45.jpg" 
                        alt="Director" 
                        className="w-24 h-24 rounded-full object-cover border-4 border-slate-50 shadow-md group-hover:scale-105 transition duration-300"
                     />
                     <div>
                        <h3 className="text-xl font-bold text-slate-900">Mr. Ravi Sinha</h3>
                        <p className="text-green-600 text-sm font-bold uppercase tracking-wide mb-2">Director, Dynamic Public School</p>
                        <p className="text-slate-500 text-sm italic">"Focusing on the roots."</p>
                     </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-slate-100 relative">
                     <Quote className="absolute -top-3 left-0 bg-white px-1 text-slate-300 w-8 h-8 fill-slate-100" />
                     <p className="text-slate-600 text-sm leading-relaxed pt-2">
                        Our primary goal is to create a happy environment where children are not afraid to ask questions. We focus on building a strong moral character along with academic basics.
                     </p>
                  </div>
               </div>

               {/* DIRECTOR 2: COACHING */}
               <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-blue-500 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-600"></div>
                  
                  <div className="flex items-start gap-6">
                     <img 
                        src="https://randomuser.me/api/portraits/men/32.jpg" 
                        alt="Director" 
                        className="w-24 h-24 rounded-full object-cover border-4 border-slate-50 shadow-md group-hover:scale-105 transition duration-300"
                     />
                     <div>
                        <h3 className="text-xl font-bold text-slate-900">Er. Amit Kumar</h3>
                        <p className="text-blue-600 text-sm font-bold uppercase tracking-wide mb-2">Director, Dynamic Coaching</p>
                        <p className="text-slate-500 text-sm italic">"Focusing on the wings."</p>
                     </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-slate-100 relative">
                     <Quote className="absolute -top-3 left-0 bg-white px-1 text-slate-300 w-8 h-8 fill-slate-100" />
                     <p className="text-slate-600 text-sm leading-relaxed pt-2">
                        Competitive exams are a different ball game. Here, we teach students time management, stress handling, and smart problem-solving techniques essential for JEE & NEET.
                     </p>
                  </div>
               </div>

            </div>
         </div>
      </div>

      {/* --- 4. MISSION & VISION --- */}
      <div className="container mx-auto px-6 py-20">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard 
               icon={<Target size={28} className="text-blue-600"/>} 
               title="Our Mission"
               desc="To provide affordable yet world-class education that empowers students to achieve their dreams."
            />
            <InfoCard 
               icon={<Star size={28} className="text-yellow-500"/>} 
               title="Our Vision"
               desc="To be recognized as the most trusted educational group in Bihar for holistic development."
            />
            <InfoCard 
               icon={<Award size={28} className="text-green-500"/>} 
               title="Our Values"
               desc="We stand by Discipline, Transparency, Hard Work, and Student-Centric Learning."
            />
         </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t-4 border-yellow-500">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
           <div>
              <h4 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                <img src="/school-logo.png" alt="Logo" className="w-8 h-8 object-contain bg-white rounded-full p-1" />
                Dynamic Campus
              </h4>
              <p className="text-sm leading-relaxed mb-4">
                 Dynamic Public School & Dynamic Coaching Centre. <br/>
                 Education that matters.
              </p>
           </div>
           <div>
              <h4 className="text-white text-lg font-bold mb-4">Contact</h4>
              <p className="text-sm flex items-start gap-3 mb-3">
                <MapPin size={18} className="text-blue-500 mt-1 min-w-[18px]"/> 
                <span>Sandy’s Compound, Near Ghuran Peer Baba Chowk, Bhagalpur</span>
              </p>
              <p className="text-sm flex items-center gap-3">
                <Phone size={18} className="text-blue-500"/> 0641-2434301
              </p>
           </div>
           <div className="flex flex-col justify-end text-right">
              <p className="text-xs text-slate-600">Developed by Abhishek Kumar</p>
           </div>
        </div>
      </footer>
    </div>
  );
};

// --- Helper Components ---
const InfoCard = ({ icon, title, desc }) => (
   <div className="p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 text-center md:text-left">
      <div className="mb-4 inline-block p-3 bg-slate-50 rounded-lg">{icon}</div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 leading-relaxed text-sm">{desc}</p>
   </div>
);

export default About;