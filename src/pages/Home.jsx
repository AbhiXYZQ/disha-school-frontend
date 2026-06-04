import React, { useState, useEffect } from 'react';
import { BookOpen, Video, ArrowRight, Award, MapPin, Phone, Globe, Bell, Baby, BrainCircuit, ChevronLeft, ChevronRight, Star, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  // --- 1. HERO SLIDER DATA ---
  const heroSlides = [
    {
      id: 1,
      image: "cover1.jpg",
      title: "Welcome to Disha Nucleus",
      subtitle: "Where Education Meets Excellence (Playgroup to Class 12th)"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop",
      title: "Dynamic Public School",
      subtitle: "Nurturing Young Minds with Care & Values (Play - Class 6)"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
      title: "Dynamic Coaching Centre",
      subtitle: "Expert Preparation for JEE, NEET & Boards (Class 6 - 12)"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto Slide Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));

  // --- NOTICE DATA ---
  const notices = [
    "🏫 School: Admissions Open for Playgroup to Class 6th",
    "🚀 Coaching: New Batches for Class 10th & 12th starting Feb 15th",
    "📢 School: Annual Sports Day for Junior Wing on March 1st",
    "🏆 Coaching: Scholarship Test for JEE/NEET aspirants on Sunday"
  ];
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNoticeIndex((prevIndex) => (prevIndex + 1) % notices.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [notices.length]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* --- SECTION 1: NOTICE TICKER --- */}
      <div className="bg-yellow-500 text-blue-900 text-sm font-bold py-3 relative z-30 shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between md:justify-start gap-4">
           <span className="bg-blue-900 text-white px-3 py-1 rounded text-xs uppercase tracking-wider shadow-sm flex items-center gap-2">
             <Bell size={12} className="text-yellow-400 animate-pulse"/> Updates
           </span>
           <div className="flex-1 overflow-hidden h-6 relative">
              {notices.map((notice, index) => (
                <div key={index} className={`absolute w-full transition-all duration-700 ease-in-out transform ${index === currentNoticeIndex ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
                  {notice}
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* --- SECTION 2: HERO SLIDER (THE WOW FACTOR) --- */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden group">
        {/* Images */}
        {heroSlides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            
            {/* Text Content */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
               <h2 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-up drop-shadow-lg">
                 {slide.title}
               </h2>
               <p className="text-lg md:text-2xl text-yellow-300 font-medium mb-8 drop-shadow-md">
                 {slide.subtitle}
               </p>
               <div className="flex gap-4">
                 <Link to="/contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-bold transition shadow-lg border-2 border-transparent hover:border-blue-400">
                   Apply Now
                 </Link>
                 <Link to="/about" className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 rounded-full font-bold transition">
                   Know More
                 </Link>
               </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm transition">
          <ChevronLeft size={32}/>
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm transition">
          <ChevronRight size={32}/>
        </button>
      </div>

      {/* --- SECTION 3: QUICK CARDS (School vs Coaching) --- */}
      <div className="container mx-auto px-6 -mt-16 relative z-30">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* School Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-green-500 hover:-translate-y-2 transition duration-300 flex flex-col md:flex-row items-center gap-6">
               <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Baby size={40} className="text-green-600"/>
               </div>
               <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-slate-900">Dynamic Public School</h3>
                  <p className="text-green-700 font-bold text-sm uppercase tracking-wide mb-2">Playgroup - Class 6th</p>
                  <p className="text-slate-500 text-sm mb-4">Focus on holistic development, arts, and strong basics.</p>
                  <Link to="/about" className="text-green-600 font-bold text-sm hover:underline">View School Facilities →</Link>
               </div>
            </div>

            {/* Coaching Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-blue-600 hover:-translate-y-2 transition duration-300 flex flex-col md:flex-row items-center gap-6">
               <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <BrainCircuit size={40} className="text-blue-600"/>
               </div>
               <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-slate-900">Dynamic Coaching</h3>
                  <p className="text-blue-700 font-bold text-sm uppercase tracking-wide mb-2">Class 6th - 12th & JEE/NEET</p>
                  <p className="text-slate-500 text-sm mb-4">Daily Practice Papers, Test Series & Doubt Sessions.</p>
                  <Link to="/academics" className="text-blue-600 font-bold text-sm hover:underline">View Batches →</Link>
               </div>
            </div>
         </div>
      </div>

      {/* --- SECTION 4: HALL OF FAME (Toppers) --- */}
      <div className="py-20 bg-slate-50">
         <div className="container mx-auto px-6">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Our Pride, Our Toppers 🏆</h2>
               <p className="text-slate-600">Consistent results in Boards and Competitive Exams</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
               {/* Topper 1 */}
               <TopperCard name="Amit Kumar" exam="JEE Main" score="99.8%ile" rank="AIR 1240" image="https://randomuser.me/api/portraits/men/32.jpg" />
               {/* Topper 2 */}
               <TopperCard name="Sneha Gupta" exam="CBSE 12th" score="98.2%" rank="District Topper" image="https://randomuser.me/api/portraits/women/44.jpg" />
               {/* Topper 3 */}
               <TopperCard name="Rahul Singh" exam="NEET UG" score="680/720" rank="MBBS Selected" image="https://randomuser.me/api/portraits/men/86.jpg" />
               {/* Topper 4 */}
               <TopperCard name="Priya Raj" exam="CBSE 10th" score="97.5%" rank="School Topper" image="https://randomuser.me/api/portraits/women/65.jpg" />
            </div>
         </div>
      </div>

      {/* --- SECTION 5: WHY CHOOSE US (Features) --- */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <h3 className="text-blue-900 font-bold tracking-widest uppercase text-xs mb-3">Why Choose Disha Nucleus?</h3>
             <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Education Beyond Books</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Video className="w-8 h-8 text-blue-600" />}
              title="Smart Classrooms" 
              desc="Digital learning tools and video lectures to make concepts crystal clear."
            />
            <FeatureCard 
              icon={<BookOpen className="w-8 h-8 text-blue-600" />}
              title="Library & Resources" 
              desc="Comprehensive study material and a quiet environment for self-study."
            />
            <FeatureCard 
              icon={<Award className="w-8 h-8 text-blue-600" />}
              title="Expert Mentorship" 
              desc="Faculty from top institutes dedicated to guiding students personally."
            />
          </div>
        </div>
      </div>

      {/* --- SECTION 6: FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t-4 border-yellow-500">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
           <div>
              <h4 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                <img src="/school-logo.png" alt="Logo" className="w-8 h-8 object-contain bg-white rounded-full p-1" />
                Disha Nucleus
              </h4>
              <p className="text-sm leading-relaxed mb-4">
                 From Foundation (Playgroup) to Career (JEE/NEET). We build the future leaders of tomorrow.
              </p>
           </div>
           
           <div>
              <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                 <li><Link to="/about" className="hover:text-yellow-400 transition">About School</Link></li>
                 <li><Link to="/academics" className="hover:text-yellow-400 transition">Coaching Batches</Link></li>
                 <li><Link to="/contact" className="hover:text-yellow-400 transition">Admissions</Link></li>
                 <li><Link to="/LoginPage" className="hover:text-yellow-400 transition">Student Login</Link></li>
              </ul>
           </div>
           
           <div>
              <h4 className="text-white text-lg font-bold mb-4">Contact Information</h4>
              <p className="text-sm flex items-start gap-3 mb-3">
                <MapPin size={18} className="text-blue-500 mt-1 min-w-[18px]"/> 
                <span>
                  Infront of Party Zone Hotel, <br/> Chaurasiya Chowk, <br/>
                  Hajipur, Vaishali,
                  844101
                </span>
              </p>
              <div className="text-sm flex items-start gap-3 mb-3">
                <Phone size={18} className="text-blue-500 mt-1 min-w-[18px]"/> 
                <div>
                   <p>+91 99999 99999</p>
                   <p>+91 22222 22222 </p>
                </div>
              </div>
              <p className="text-sm flex items-center gap-3">
                <Globe size={18} className="text-blue-500"/> www.example.in
              </p>
           </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
           &copy; 2026 Dynamic Public School & Coaching Centre. All rights reserved. <br/>
           Crafted by: Abhishek Kumar
           ❤️ and ☕ in India
        </div>
      </footer>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const TopperCard = ({ name, exam, score, rank, image }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center border border-slate-100 group">
      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-yellow-400 p-1">
         <img src={image} alt={name} className="w-full h-full object-cover rounded-full group-hover:scale-110 transition duration-500" />
      </div>
      <h4 className="text-lg font-bold text-slate-900">{name}</h4>
      <p className="text-blue-600 font-semibold text-sm mb-2">{exam}</p>
      <div className="flex justify-center gap-2 text-xs font-bold text-slate-500">
         <span className="bg-green-100 text-green-700 px-2 py-1 rounded">{score}</span>
         <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">{rank}</span>
      </div>
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