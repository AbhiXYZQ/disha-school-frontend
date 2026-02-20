import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* --- HERO BANNER --- */}
      <div className="relative h-[350px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40">
           <img 
             src="photo-kids-education-concept-with-ai-technology-futuristic_763111-124736.jpg" 
             alt="University" 
             className="w-full h-full object-cover"
           />
        </div>
        <div className="relative z-10 text-center px-4">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
             Contact Us
           </h1>
           <div className="h-1 w-24 bg-yellow-500 mx-auto rounded-full mb-4"></div>
           <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light">
             Visit our  Campus or Drop a message
           </p>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* LEFT SIDE: ADDRESSES (ALAG ALAG) */}
          <div className="space-y-8">
            <div>
               <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Locations</h2>
               <p className="text-slate-600 mb-6">
                  Please visit the respective campus based on your inquiry.
               </p>
            </div>

            {/* LOCATION 1: SCHOOL (Junior Wing) */}
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
               <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                     <MapPin size={24} />
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-900 text-lg">Junior Wing (School)</h4>
                     <p className="text-xs font-bold text-green-600 uppercase tracking-wide mb-2">Playgroup to Class 6</p>
                     
                     {/* YAHAN SCHOOL KA ADDRESS LIKHEIN */}
                     <p className="text-slate-600 text-sm leading-relaxed mb-3">
                        Near Chaurasiya Rajkishore College,<br/>
                        Chaurasiya Chowk, Hajipur,<br /> Vaishali, 844101
                     </p>
                     
                     <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                        <Phone size={14} className="text-green-600"/> +91 99999 99999
                     </div>
                  </div>
               </div>
            </div>

            {/* LOCATION 2: COACHING (Senior Wing) */}
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
               <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                     <MapPin size={24} />
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-900 text-lg">Senior Wing (Coaching)</h4>
                     <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-2">Class 7 to 12 & JEE/NEET</p>
                     
                     {/* YAHAN COACHING KA ADDRESS LIKHEIN (Jahan bhi school se dur hai) */}
                     <p className="text-slate-600 text-sm leading-relaxed mb-3">
                        Infront of Party Zone Hotel,<br/>
                        Chaurasiya Chowk, Hajipur,<br /> Vaishali, 844101
                     </p>
                     
                     <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                        <Phone size={14} className="text-blue-600"/> +91 22222 22222
                     </div>
                  </div>
               </div>
            </div>

            {/* General Info */}
            <div className="pt-6 border-t border-slate-200">
                <div className="flex items-center gap-4 mb-4">
                   <Mail className="text-slate-400" size={20}/>
                   <span className="text-slate-600">info@dynamiccampus.in</span>
                </div>
                <div className="flex items-center gap-4">
                   <Clock className="text-slate-400" size={20}/>
                   <span className="text-slate-600">Mon - Sat: 08:00 AM - 04:00 PM</span>
                </div>
            </div>

          </div>

          {/* RIGHT SIDE: ENQUIRY FORM */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 h-fit">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Send an Enquiry</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Student Name" className="w-full p-3 border border-slate-300 rounded focus:outline-none focus:border-blue-500" />
                <input type="text" placeholder="Phone Number" className="w-full p-3 border border-slate-300 rounded focus:outline-none focus:border-blue-500" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full p-3 border border-slate-300 rounded focus:outline-none focus:border-blue-500" />
              
              <select className="w-full p-3 border border-slate-300 rounded text-slate-600 focus:outline-none focus:border-blue-500">
                <option>Interested In?</option>
                <option>Junior Wing (School Admission)</option>
                <option>Senior Wing (Coaching/JEE/NEET)</option>
              </select>

              <textarea rows="4" placeholder="Your Message" className="w-full p-3 border border-slate-300 rounded focus:outline-none focus:border-blue-500"></textarea>
              
              <button className="w-full bg-yellow-500 text-slate-900 font-bold py-3 rounded hover:bg-yellow-400 transition flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t-4 border-yellow-500">
        <div className="container mx-auto px-6 text-center">
           <h4 className="text-white text-lg font-bold mb-2">Dynamic Campus</h4>
           <p className="text-sm">Two Campuses. One Vision.</p>
           <p className="text-xs mt-4 text-slate-600">Developed by Abhishek Kumar</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;