"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '../../../context/AppContext';
import { 
  LogIn, 
  Mail, 
  Lock, 
  HelpCircle, 
  Settings, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import toast from 'react-hot-toast';
import AdminBouncyBackground from '../../../components/AdminBouncyBackground';

export default function AdminLoginPage() {
  const router = useRouter();
  const { login } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return toast.error('Please fill in all fields');
    
    setIsLoading(true);
    try {
      const success = await login(email, password);
      if (success) {
        toast.success('Admin Authenticated');
        router.push('/admin');
      }
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#801414] flex flex-col relative overflow-hidden font-sans selection:bg-[#B32626] selection:text-white">
      {/* 3D Interactive Background - Base Layer */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <AdminBouncyBackground />
      </div>
      
      {/* Main UI Ingress - Top Layer */}
      <header className="relative z-10 p-8 flex justify-between items-center max-w-7xl mx-auto w-full pointer-events-auto">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => router.push('/')}>
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all">
            <ShieldCheck className="text-white w-6 h-6" />
          </div>
          <span className="text-white text-2xl font-bold tracking-tight">Refentra Admin</span>
        </div>
      </header>

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 -mt-20 pointer-events-none">
        <div className="max-w-md w-full animate-in fade-in slide-in-from-bottom-4 duration-700 pointer-events-auto">
          <div className="mb-12">
            <h1 className="text-white text-7xl font-bold tracking-tighter leading-[0.9]">
              Admin<br />Control
            </h1>
          </div>

          <div className="bg-[#EFE9E6] rounded-[40px] p-10 shadow-2xl shadow-black/20 border border-white/10">
            <div className="mb-10 flex flex-col gap-1">
              <span className="text-[#801414]/60 text-[10px] font-bold tracking-[0.2em] uppercase">
                Secure Portal / Identity Verification
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[#801414]/60 text-[10px] font-bold tracking-[0.2em] uppercase px-1">
                  Admin Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#E5DED9] border-none rounded-2xl py-5 px-6 text-[#801414] placeholder-[#801414]/30 focus:ring-2 focus:ring-[#801414]/20 transition-all outline-none text-lg font-medium"
                    placeholder="admin@refentra.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[#801414]/60 text-[10px] font-bold tracking-[0.2em] uppercase">
                    Master Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#E5DED9] border-none rounded-2xl py-5 px-6 text-[#801414] placeholder-[#801414]/30 focus:ring-2 focus:ring-[#801414]/20 transition-all outline-none text-lg font-medium"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#7A0C0C] hover:bg-[#630909] active:scale-[0.98] disabled:opacity-50 disabled:active:scale-100 text-white rounded-2xl py-6 px-6 font-bold tracking-widest uppercase flex items-center justify-center gap-3 shadow-xl shadow-[#7A0C0C]/20 transition-all"
              >
                {isLoading ? 'Decrypting...' : 'Initiate Secure Login'}
                {!isLoading && <ChevronRight size={20} />}
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer Naval */}
      <footer className="relative z-10 p-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto w-full text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 gap-4 pointer-events-auto">
        <div>© 2024 Refentra Enterprise. All Rights Reserved.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
