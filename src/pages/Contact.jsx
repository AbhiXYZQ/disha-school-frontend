import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Menu, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* --- NAVBAR (Same as Home) --- */}
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
              <Link to="/contact" className="text-blue-900 font-bold transition">Contact Us</Link>
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

      {/* --- HERO BANNER --- */}
      <div className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-blue-200">We'd love to hear from you. Get in touch with us.</p>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">Get in Touch</h2>
            <p className="text-slate-600">
              Have questions about admissions, academics, or campus life? 
              Visit us or send a message.
            </p>

            <div className="space-y-6">
              <ContactItem 
                icon={<MapPin className="text-blue-600" />} 
                title="Our Location"
                content={
                  <>
                    Infront of Indoor Stadium, Sandy’s Compound,<br/>
                    Near Ghuran Peer Baba Chowk,<br/>
                    Chhoti Khanjarpur, Bhagalpur-1
                  </>
                }
              />
              <ContactItem 
                icon={<Phone className="text-blue-600" />} 
                title="Phone Numbers"
                content={
                  <>
                    0641-2434301<br/>
                    +91 9709595643, 9570995992<br/>
                    +91 9931728466
                  </>
                }
              />
              <ContactItem 
                icon={<Mail className="text-blue-600" />} 
                title="Email Address"
                content="info@dishanucleus.in"
              />
              <ContactItem 
                icon={<Clock className="text-blue-600" />} 
                title="Office Hours"
                content="Mon - Sat: 9:00 AM - 4:00 PM"
              />
            </div>
          </div>

          {/* Right Side: Enquiry Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Send an Enquiry</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500" />
                <input type="text" placeholder="Phone Number" className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500" />
              <select className="w-full p-3 border border-slate-200 rounded-lg text-slate-500 focus:outline-none focus:border-blue-500">
                <option>Select Enquiry Type</option>
                <option>Admission</option>
                <option>Fee Structure</option>
                <option>General Query</option>
              </select>
              <textarea rows="4" placeholder="Your Message" className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500"></textarea>
              
              <button className="w-full bg-yellow-500 text-blue-900 font-bold py-4 rounded-lg hover:bg-yellow-400 transition flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* --- GOOGLE MAP --- */}
      <div className="w-full h-96 bg-slate-200">
        <iframe 
          title="School Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.234676679543!2d86.9746!3d25.2630!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f04a3000000001%3A0x0!2zMjXCsDE1JzQ2LjgiTiA4NsKwNTgnMjguNiJF!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin" 
          className="w-full h-full border-0" 
          allowFullScreen="" 
          loading="lazy">
        </iframe>
      </div>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <p>&copy; 2026 Disha Nucleus School. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Helper Component
const ContactItem = ({ icon, title, content }) => (
  <div className="flex items-start gap-4">
    <div className="bg-blue-50 p-3 rounded-lg">{icon}</div>
    <div>
      <h4 className="font-bold text-slate-900">{title}</h4>
      <p className="text-slate-600 text-sm mt-1 leading-relaxed">{content}</p>
    </div>
  </div>
);

export default Contact;