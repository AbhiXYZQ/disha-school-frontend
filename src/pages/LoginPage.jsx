import React, { useState } from 'react';
import { User, Lock, ArrowRight, ShieldCheck, GraduationCap, AlertCircle, Loader2 } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore'; // Database se data lene ke liye
import { auth, db } from '../firebase'; // Apni firebase file

const LoginPage = () => {
  const [role, setRole] = useState('student'); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // 1. Firebase Auth Login
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2. Database se User ka Role aur Data check karo
      // Hum manke chal rahe hain ki 'users' collection mein data hai
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        
        // Check Role Mismatch
        if (userData.role !== role) {
           throw new Error(`Aap ${role} nahi hain! Sahi role select karein.`);
        }

        // 3. Sahi jagah bhejo aur User Data LocalStorage mein save karo (Taaki Dashboard par naam dikhe)
        localStorage.setItem("userName", userData.name);
        
        if (role === 'admin') {
           navigate('/admin');
        } else {
           navigate('/student');
        }

      } else {
         // Agar database mein data nahi mila (Emergency Fallback)
         if(email === "admin@dynamic.in") {
             navigate('/admin');
         } else {
             throw new Error("User record not found in database.");
         }
      }

    } catch (err) {
      console.error(err);
      if (err.code === 'auth/invalid-credential') {
        setError("Email ya Password galat hai!");
      } else {
        setError(err.message || "Login Failed. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
       {/* Design Same as before, just logic updated above */}
       <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-blue-600 p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-1">Disha Nucleus</h2>
            <p className="text-blue-100 text-sm">Official Portal Login</p>
        </div>
        
        {/* Role Tabs */}
        <div className="flex border-b border-slate-200">
           <button onClick={() => setRole('student')} className={`flex-1 py-4 font-bold text-sm flex items-center justify-center gap-2 ${role === 'student' ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : 'text-slate-400'}`}>
              <GraduationCap size={18}/> Student
           </button>
           <button onClick={() => setRole('admin')} className={`flex-1 py-4 font-bold text-sm flex items-center justify-center gap-2 ${role === 'admin' ? 'text-purple-600 bg-purple-50 border-b-2 border-purple-600' : 'text-slate-400'}`}>
              <ShieldCheck size={18}/> Admin
           </button>
        </div>

        <form onSubmit={handleLogin} className="p-8 space-y-5">
           {error && <div className="bg-red-50 text-red-600 p-3 rounded text-sm flex items-center gap-2"><AlertCircle size={16}/>{error}</div>}
           
           <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder={role === 'admin' ? "admin@dynamic.in" : "student@example.com"} required />
           </div>
           <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Password</label>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="••••••••" required />
           </div>

           <button disabled={loading} className={`w-full py-3 rounded-lg text-white font-bold flex justify-center items-center gap-2 ${role==='student' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-purple-600 hover:bg-purple-700'}`}>
              {loading ? <Loader2 className="animate-spin"/> : "Login Securely"}
           </button>
        </form>
       </div>
    </div>
  );
};

export default LoginPage;