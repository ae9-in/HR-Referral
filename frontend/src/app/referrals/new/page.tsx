"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAppContext } from '../../../context/AppContext';
import BallBackground from '../../../components/ui/BallBackground';
import toast from 'react-hot-toast';

export default function NewReferralPage() {
  const { addReferral, isAuthenticated, positions, user, refreshData } = useAppContext();
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resumeName, setResumeName] = useState('');
  const [form, setForm] = useState({
    candidateName: '', candidateEmail: '', candidatePhone: '',
    positionId: '', notes: '',
  });

  useEffect(() => {
    if (!isAuthenticated && typeof window !== 'undefined') {
      router.push('/auth/login');
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    if (positions.length > 0 && !form.positionId) {
      setForm(f => ({ ...f, positionId: positions[0].id }));
    }
  }, [positions, form.positionId]);

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setResumeName(file.name);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated) { 
      toast.error('Please login first');
      router.push('/auth/login'); 
      return; 
    }
    
    setLoading(true);
    try {
      const success = await addReferral({
        ...form,
        resumeUrl: resumeName || undefined,
      });
      if (success) {
        await refreshData();
        setSubmitted(true);
        toast.success('Referral submitted successfully!');
      }
    } catch (err: any) {
      toast.error('Failed to submit referral');
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <main className="min-h-screen relative flex items-center justify-center p-6 overflow-hidden">
        <BallBackground />
        <div className="relative z-10 text-center animate-slide-up max-w-xl bg-white/40 backdrop-blur-3xl p-16 rounded-[60px] border border-white shadow-2xl">
          <div className="w-24 h-24 bg-[#861C1C] rounded-[30px] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-[#861C1C]/20">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h2 className="text-5xl font-black text-[#2B1D1C] tracking-tighter mb-4">Submission Active</h2>
          <p className="text-[#2B1D1C]/60 mb-12 text-lg font-bold">
            The candidate has been injected into the recruitment cluster. HR will begin processing immediately.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={() => setSubmitted(false)} className="px-10 py-5 rounded-3xl bg-white text-[#2B1D1C] font-black uppercase text-[10px] tracking-widest shadow-xl hover:bg-white/80 transition-all">
              Submit Another
            </button>
            <Link href="/dashboard" className="px-10 py-5 rounded-3xl bg-[#861C1C] text-white font-black uppercase text-[10px] tracking-widest shadow-xl shadow-[#861C1C]/20 hover:bg-[#6b1616] transition-all">
              Go to Dashboard
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen relative px-6 py-24 flex justify-center overflow-hidden">
      <BallBackground />
      <div className="w-full max-w-3xl relative z-10 animate-fade-in">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-2 rounded-2xl bg-white/50 backdrop-blur-md text-[#2B1D1C] font-black uppercase text-[10px] tracking-widest hover:bg-white transition-all mb-10">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            Abort Operation
          </Link>
          <h1 className="text-7xl font-black text-[#2B1D1C] tracking-tighter mb-4 leading-none">Register<br />Referral</h1>
          <p className="text-[#861C1C] font-black uppercase text-[12px] tracking-[0.4em] opacity-60">Talent Ingress Portal</p>
        </div>

        <div className="bg-[#ECCEB6]/30 backdrop-blur-3xl p-10 md:p-16 rounded-[60px] border border-white/50 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2B1D1C]/60 ml-2">Full Name</label>
                <input type="text" value={form.candidateName} onChange={e => update('candidateName', e.target.value)} placeholder="Enter Full Name" className="w-full px-8 py-5 rounded-3xl bg-white/50 border-2 border-transparent focus:border-[#861C1C]/20 outline-none font-bold text-[#2B1D1C]" required />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2B1D1C]/60 ml-2">Job Stack</label>
                <select value={form.positionId} onChange={e => update('positionId', e.target.value)} className="w-full px-8 py-5 rounded-3xl bg-white/50 border-2 border-transparent focus:border-[#861C1C]/20 outline-none font-bold text-[#2B1D1C] appearance-none cursor-pointer">
                  {positions.map(p => <option key={p.id} value={p.id}>{p.title}</option>)}
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2B1D1C]/60 ml-2">Secure Email</label>
                <input type="email" value={form.candidateEmail} onChange={e => update('candidateEmail', e.target.value)} placeholder="candidate@provider.com" className="w-full px-8 py-5 rounded-3xl bg-white/50 border-2 border-transparent focus:border-[#861C1C]/20 outline-none font-bold text-[#2B1D1C]" required />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2B1D1C]/60 ml-2">Contact Line</label>
                <input type="tel" value={form.candidatePhone} onChange={e => update('candidatePhone', e.target.value)} placeholder="+91 00000 00000" className="w-full px-8 py-5 rounded-3xl bg-white/50 border-2 border-transparent focus:border-[#861C1C]/20 outline-none font-bold text-[#2B1D1C]" required />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2B1D1C]/60 ml-2">Referrer Intelligence</label>
              <textarea value={form.notes} onChange={e => update('notes', e.target.value)} placeholder="Provide high-level context on the candidate's core strengths..." className="w-full px-8 py-6 rounded-[30px] bg-white/50 border-2 border-transparent focus:border-[#861C1C]/20 outline-none font-bold text-[#2B1D1C] min-h-[120px] resize-none" rows={3} />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2B1D1C]/60 ml-2">Registry Attachment</label>
              <label className="block border-2 border-dashed border-[#2B1D1C]/10 rounded-[30px] p-10 text-center cursor-pointer hover:bg-white/40 transition-all group">
                <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
                {resumeName ? (
                  <div className="flex items-center justify-center gap-6">
                    <div className="w-16 h-16 bg-[#861C1C]/10 rounded-2xl flex items-center justify-center">
                       <svg className="w-8 h-8 text-[#861C1C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                    </div>
                    <div className="text-left">
                       <p className="text-xl font-black text-[#2B1D1C]">{resumeName}</p>
                       <p className="text-[10px] font-black uppercase tracking-widest text-[#861C1C]">Registry File Selected</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white/50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                       <svg className="w-8 h-8 text-[#2B1D1C]/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" /></svg>
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#2B1D1C]/40">Ingest Candidate Resume</p>
                  </div>
                )}
              </label>
            </div>

            <button type="submit" disabled={loading} className="w-full py-6 rounded-[30px] bg-[#861C1C] text-white font-black uppercase text-sm tracking-[0.3em] hover:bg-[#6b1616] transition-all transform hover:-translate-y-1 shadow-2xl shadow-[#861C1C]/20 disabled:opacity-50">
              {loading ? 'Processing Registry...' : 'Initiate Referral'}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
