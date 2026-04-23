"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAppContext } from '../../../context/AppContext';
import VisualSection from '../../../components/auth/VisualSection';
import toast from 'react-hot-toast';

export default function RegisterPage() {
  const { register_user, verifyOtp } = useAppContext();
  const router = useRouter();
  
  const [step, setStep] = useState(1); // 1: Details, 2: OTP
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    otp: ''
  });

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  const handleCreateAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const success = await register_user({
        name: form.name,
        email: form.email,
        phone: form.phone,
        password: form.password
      });
      if (success) {
        toast.success('Registration successful! Please log in.');
        setTimeout(() => router.push('/auth/login'), 1000);
      }
    } catch (err: any) {
      // handled in context
    }
    setLoading(false);
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const success = await verifyOtp(form.email, form.otp);
      if (success) {
        toast.success('Account Activated! Please log in.');
        setTimeout(() => router.push('/auth/login'), 1500);
      }
    } catch (err: any) {
      // handled in context
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-[#fcfcf9] overflow-hidden">
      {/* LEFT SIDE - AUTH FORM */}
      <div className="flex flex-col w-full lg:w-1/2 p-6 lg:p-12 overflow-y-auto">
        <header className="flex items-center justify-between mb-12">
          <Link href="/" className="text-2xl font-black tracking-tighter text-[#2B1D1C] hover:opacity-80 transition-opacity">
            PLATFORM
          </Link>
          <Link href="/auth/login" className="px-6 py-2.5 rounded-xl border-2 border-[#861C1C] text-[#861C1C] text-[10px] font-black uppercase tracking-widest hover:bg-[#861C1C]/5 transition-all">
            Log In
          </Link>
        </header>

        <div className="max-w-md mx-auto w-full flex-1 flex flex-col justify-center py-10">
          <div className="mb-10 animate-fade-in text-center lg:text-left">
            <h1 className="text-[56px] lg:text-[72px] font-black leading-[0.85] tracking-tighter text-[#2B1D1C] mb-6">
              {step === 1 ? 'Start Your' : 'Verify'} <br /> 
              <span className={step === 2 ? 'text-[#861C1C]' : ''}>{step === 1 ? 'Journey' : 'Access'}</span>
            </h1>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              {step === 1 
                ? 'Join our premium recruitment network and start referring top talent today.' 
                : `We've sent a 6-digit confirmation code to ${form.email}.`}
            </p>
          </div>

          <form onSubmit={handleCreateAccount} className="space-y-4 animate-slide-up">
             <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#2B1D1C]/40 ml-1">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="Candidate Scout"
                  className="w-full px-6 py-4 rounded-2xl bg-[#f4f7f4] border-2 border-transparent text-[#2B1D1C] font-bold outline-none transition-all focus:bg-white focus:border-[#861C1C]/10"
                  required
                />
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#2B1D1C]/40 ml-1">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="email@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-[#f4f7f4] border-2 border-transparent text-[#2B1D1C] font-bold outline-none transition-all focus:bg-white focus:border-[#861C1C]/10"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#2B1D1C]/40 ml-1">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder="+91 00000 00000"
                    className="w-full px-6 py-4 rounded-2xl bg-[#f4f7f4] border-2 border-transparent text-[#2B1D1C] font-bold outline-none transition-all focus:bg-white focus:border-[#861C1C]/10"
                    required
                  />
                </div>
             </div>

             <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#2B1D1C]/40 ml-1">Set Password</label>
                <input
                  type="password"
                  value={form.password}
                  onChange={(e) => update('password', e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-6 py-4 rounded-2xl bg-[#f4f7f4] border-2 border-transparent text-[#2B1D1C] font-bold outline-none transition-all focus:bg-white focus:border-[#861C1C]/10"
                  required
                />
             </div>

             <button
                type="submit"
                disabled={loading}
                className="w-full py-5 rounded-2xl bg-[#861C1C] text-white font-black text-sm uppercase tracking-widest hover:bg-[#6b1616] transition-all transform hover:-translate-y-1 shadow-2xl shadow-[#861C1C]/20 disabled:opacity-50 mt-4"
             >
                {loading ? 'Processing...' : 'Create Account'}
             </button>
          </form>

          <div className="mt-10 pt-10 text-[10px] uppercase font-black tracking-widest text-slate-300 text-center">
            © 2026 REFENTRA PLATFORM. PROUDLY DEVELOPED FOR SCALE.
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - VISUAL SECTION */}
      <div className="hidden lg:block w-full lg:w-1/2">
        <VisualSection 
          title="Scale Your Referrals."
          subtitle="Join thousands of employees who are reshaping the talent landscape one referral at a time."
        />
      </div>
    </div>
  );
}
