import React, { useState } from 'react';
import { Users, FileText, DollarSign, PlusCircle, LogOut } from 'lucide-react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'; 
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('addStudent');
  const navigate = useNavigate();

  // --- LOGOUT ---
  const handleLogout = () => {
    auth.signOut();
    localStorage.clear();
    navigate('/LoginPage');
  };

  return (
    <div className="flex min-h-screen bg-slate-100 font-sans">
       {/* Sidebar */}
       <aside className="w-64 bg-slate-900 text-white flex flex-col fixed h-full">
          <div className="p-6 text-xl font-bold border-b border-slate-800">Admin Panel</div>
          <nav className="flex-1 p-4 space-y-2">
             <SidebarBtn icon={<Users/>} text="Add Student" active={activeTab==='addStudent'} onClick={()=>setActiveTab('addStudent')} />
             <SidebarBtn icon={<DollarSign/>} text="Update Fees" active={activeTab==='fees'} onClick={()=>setActiveTab('fees')} />
             <SidebarBtn icon={<FileText/>} text="Upload Notice" active={activeTab==='notice'} onClick={()=>setActiveTab('notice')} />
          </nav>
          <button onClick={handleLogout} className="p-4 bg-red-600 hover:bg-red-700 m-4 rounded font-bold flex items-center gap-2 justify-center">
             <LogOut size={18}/> Logout
          </button>
       </aside>

       {/* Main Content */}
       <main className="ml-64 p-8 w-full">
          <h1 className="text-3xl font-bold text-slate-800 mb-6">
             {activeTab === 'addStudent' && "Register New Student"}
             {activeTab === 'fees' && "Manage Fee Status"}
             {activeTab === 'notice' && "Post New Updates"}
          </h1>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
             {activeTab === 'addStudent' && <AddStudentForm />}
             {activeTab === 'fees' && <div className="text-slate-500">Search student to update fees (Coming Soon)</div>}
             {activeTab === 'notice' && <div className="text-slate-500">Notice Board Manager (Coming Soon)</div>}
          </div>
       </main>
    </div>
  );
};

// --- SUB COMPONENT: ADD STUDENT FORM ---
const AddStudentForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', course: '', fees: 'Due' });
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
       // 1. Create Auth User
       const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
       const user = userCredential.user;

       // 2. Save Data in Firestore
       await setDoc(doc(db, "users", user.uid), {
          name: formData.name,
          email: formData.email,
          role: "student",
          course: formData.course,
          feesStatus: formData.fees, // 'Paid' or 'Due'
          uid: user.uid
       });

       alert(`Student ${formData.name} Registered Successfully!`);
       setFormData({ name: '', email: '', password: '', course: '', fees: 'Due' });

    } catch (error) {
       console.error(error);
       alert("Error: " + error.message);
    } finally {
       setLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister} className="grid grid-cols-2 gap-6">
       <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-bold mb-2">Full Name</label>
          <input className="w-full p-3 border rounded" value={formData.name} onChange={(e)=>setFormData({...formData, name:e.target.value})} placeholder="Ex: Rahul Kumar" required />
       </div>
       <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-bold mb-2">Email (Login ID)</label>
          <input className="w-full p-3 border rounded" type="email" value={formData.email} onChange={(e)=>setFormData({...formData, email:e.target.value})} placeholder="student@example.com" required />
       </div>
       <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-bold mb-2">Password</label>
          <input className="w-full p-3 border rounded" type="password" value={formData.password} onChange={(e)=>setFormData({...formData, password:e.target.value})} placeholder="Set Password" required />
       </div>
       <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-bold mb-2">Course</label>
          <select className="w-full p-3 border rounded" value={formData.course} onChange={(e)=>setFormData({...formData, course:e.target.value})}>
             <option>Class 11 - JEE</option>
             <option>Class 12 - NEET</option>
             <option>Foundation (9-10)</option>
          </select>
       </div>
       <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-bold mb-2">Current Fee Status</label>
          <select className="w-full p-3 border rounded" value={formData.fees} onChange={(e)=>setFormData({...formData, fees:e.target.value})}>
             <option value="Due">Due (Pending)</option>
             <option value="Paid">Paid (Clear)</option>
          </select>
       </div>
       <div className="col-span-2">
          <button disabled={loading} className="bg-blue-600 text-white font-bold py-3 px-8 rounded hover:bg-blue-700 w-full">
             {loading ? "Creating Account..." : "Register Student"}
          </button>
       </div>
    </form>
  );
};

const SidebarBtn = ({icon, text, active, onClick}) => (
   <button onClick={onClick} className={`flex items-center gap-3 w-full p-3 rounded transition ${active ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}>
      {icon} {text}
   </button>
);

export default AdminDashboard;