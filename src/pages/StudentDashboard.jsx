import React, { useState, useEffect } from 'react';
import { User, Bell, Download, FileText, LogOut, CheckCircle, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const StudentDashboard = () => {
  const [studentData, setStudentData] = useState(null);
  const navigate = useNavigate();

  // Load Student Data on Login
  useEffect(() => {
    const fetchUserData = async () => {
       const user = auth.currentUser;
       if (user) {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
             setStudentData(docSnap.data());
          }
       } else {
          // Agar user login nahi hai toh login page par bhejo
          navigate('/LoginPage');
       }
    };
    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
     auth.signOut();
     localStorage.clear();
     navigate('/LoginPage');
  };

  if (!studentData) return <div className="h-screen flex items-center justify-center">Loading Profile...</div>;

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
       {/* Top Bar */}
       <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
          <div className="container mx-auto flex justify-between items-center">
             <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600"><User size={24}/></div>
                <div>
                   <h1 className="font-bold text-slate-800 text-lg">Hello, {studentData.name} 👋</h1>
                   <p className="text-xs text-slate-500">{studentData.course}</p>
                </div>
             </div>
             <button onClick={handleLogout} className="text-red-500 hover:bg-red-50 p-2 rounded-full transition"><LogOut size={20}/></button>
          </div>
       </header>

       <div className="container mx-auto p-6 space-y-6">
          
          {/* Fee Status Card */}
          <div className={`p-6 rounded-xl shadow-sm border-l-4 flex items-center justify-between ${studentData.feesStatus === 'Paid' ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`}>
             <div>
                <h3 className="text-slate-600 font-bold uppercase text-xs tracking-wider">Fee Status</h3>
                <p className={`text-2xl font-bold ${studentData.feesStatus === 'Paid' ? 'text-green-700' : 'text-red-700'}`}>
                   {studentData.feesStatus === 'Paid' ? 'Fully Paid ✅' : 'Payment Due ⚠️'}
                </p>
             </div>
             {studentData.feesStatus === 'Paid' ? <CheckCircle size={32} className="text-green-500"/> : <AlertTriangle size={32} className="text-red-500"/>}
          </div>

          {/* Notice Board */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
             <h2 className="font-bold text-lg mb-4 flex items-center gap-2"><Bell className="text-yellow-500"/> Important Notices</h2>
             <div className="space-y-3">
                <div className="p-3 bg-yellow-50 border border-yellow-100 rounded text-sm text-yellow-800">
                   📢 <strong>Exam Alert:</strong> Physics Test scheduled for Sunday, 10th Feb.
                </div>
                <div className="p-3 bg-blue-50 border border-blue-100 rounded text-sm text-blue-800">
                   ℹ️ <strong>Holiday:</strong> Institute closed on Tuesday for Saraswati Puja.
                </div>
             </div>
          </div>

          {/* Notes Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
             <h2 className="font-bold text-lg mb-4 flex items-center gap-2"><FileText className="text-blue-500"/> Study Material</h2>
             <div className="space-y-2">
                <NoteItem title="Physics: Electrostatics Formulas" date="Feb 05" />
                <NoteItem title="Maths: Integration Cheat Sheet" date="Feb 02" />
                <NoteItem title="Chemistry: Organic Roadmap" date="Jan 28" />
             </div>
          </div>
       </div>
    </div>
  );
};

const NoteItem = ({ title, date }) => (
   <div className="flex justify-between items-center p-3 hover:bg-slate-50 rounded border border-transparent hover:border-slate-100 transition">
      <div className="flex items-center gap-3">
         <div className="bg-red-100 text-red-500 p-2 rounded"><FileText size={18}/></div>
         <div>
            <h4 className="font-bold text-slate-700 text-sm">{title}</h4>
            <p className="text-xs text-slate-400">{date}</p>
         </div>
      </div>
      <button className="text-blue-600 hover:text-blue-800"><Download size={18}/></button>
   </div>
);

export default StudentDashboard;