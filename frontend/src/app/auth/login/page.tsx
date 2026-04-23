"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAppContext } from '../../../context/AppContext';
import { 
  LogIn, 
  Mail, 
  Lock, 
  ChevronRight,
  ShieldCheck,
  LayoutGrid
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function UserLoginPage() {
  const router = useRouter();
  const { login } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return toast.error('Please enter your credentials');
    
    setIsLoading(true);
    try {
      const success = await login(email, password);
      if (success) {
        toast.success('Logged in successfully');
        router.push('/dashboard');
      }
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans selection:bg-[#B32626] selection:text-white">
      {/* ─── LEFT: FORM INGRESS ─── */}
      <div className="flex-1 bg-[#F9F7F5] flex flex-col p-8 md:p-16 relative overflow-hidden">
        <header className="mb-12 flex justify-between items-center relative z-10">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => router.push('/')}>
            <span className="text-[#1A1A1A] text-2xl font-black tracking-tighter uppercase">Platform</span>
          </div>
          <button onClick={() => router.push('/auth/register')} className="border border-[#1A1A1A]/10 px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all">
            Join Cluster
          </button>
        </header>

        <main className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full relative z-10">
          <div className="mb-10">
            <h1 className="text-[#1A1A1A] text-6xl font-bold tracking-tighter mb-4">
              Welcome<br />Back
            </h1>
            <p className="text-[#1A1A1A]/60 text-sm leading-relaxed max-w-[280px]">
              Log in to your recruitment cluster securely using your credentials.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Indicator (Optional Mock from Image) */}
            {/* <div className="bg-[#FFE5E5] text-[#D32F2F] text-[10px] font-bold tracking-[0.2em] uppercase py-3 rounded-lg text-center border border-[#FFCCD1]">
              Login Failed.
            </div> */}

            <div className="space-y-1">
              <label className="text-[#8B1414]/70 text-[10px] font-bold tracking-[0.2em] uppercase px-1">
                Email Identifier
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#F2F0EE] border-none rounded-xl py-4 px-5 text-[#1A1A1A] placeholder-[#1A1A1A]/20 focus:ring-2 focus:ring-[#8B1414]/10 outline-none text-sm transition-all"
                placeholder="email@example.com"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center px-1">
                <label className="text-[#8B1414]/70 text-[10px] font-bold tracking-[0.2em] uppercase">
                  Access Key
                </label>
                <button type="button" className="text-[#1A1A1A]/40 text-[9px] font-bold tracking-[0.2em] uppercase hover:text-[#8B1414] transition-colors">
                  Forgot?
                </button>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#F2F0EE] border-none rounded-xl py-4 px-5 text-[#1A1A1A] placeholder-[#1A1A1A]/20 focus:ring-2 focus:ring-[#8B1414]/10 outline-none text-sm transition-all"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#8B1414] hover:bg-[#720C0C] active:scale-[0.98] disabled:opacity-50 text-white rounded-xl py-4 font-bold tracking-widest uppercase text-xs shadow-lg shadow-[#8B1414]/20 transition-all"
            >
              {isLoading ? 'Decrypting...' : 'Initiate Login'}
            </button>

            <p className="text-center text-[10px] font-bold tracking-[0.1em] uppercase text-[#1A1A1A]/30">
              Don't have an account? <Link href="/auth/register" className="text-[#8B1414] hover:underline cursor-pointer">Sign Up</Link>
            </p>
          </form>
        </main>

        <footer className="mt-auto pt-8 text-center text-[8px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A]/20 relative z-10">
          © 2024 Refentra Platform. All Rights Reserved.
        </footer>
      </div>

      {/* ─── RIGHT: CRIMSON PANEL ─── */}
      <div className="hidden md:flex flex-1 bg-[#8B1414] relative items-center justify-center overflow-hidden">
        {/* Grid Background Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />
        
        {/* Floating Circles for Depth */}
        <div className="absolute top-10 left-10 w-48 h-48 bg-white/5 rounded-full border border-white/10 blur-xl" />
        <div className="absolute bottom-20 right-10 w-64 h-96 bg-white/5 rounded-[40px] rotate-12 blur-lg border border-white/10" />

        <div className="relative p-16 max-w-sm flex flex-col items-start gap-8">
          <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            <div className="w-1.5 h-1.5 bg-[#FF6B6B] rounded-full animate-pulse" />
            <span className="text-[8px] font-bold tracking-[0.2em] uppercase text-white/70">Antigravity Mode Active</span>
          </div>

          <div>
            <h2 className="text-white text-8xl font-bold tracking-tighter leading-[0.8] mb-8">
              Start Your<br />Journey<br />With Us.
            </h2>
            <p className="text-white/60 text-lg font-medium leading-relaxed max-w-[280px]">
              Access your global recruitment pipeline with enterprise-grade security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
