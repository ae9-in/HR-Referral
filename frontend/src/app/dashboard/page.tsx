"use client";

import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAppContext, ReferralStatus } from '../../context/AppContext';
import Folder from '../../components/ui/Folder';
import BallBackground from '../../components/ui/BallBackground';

const STATUS_OPTIONS: ReferralStatus[] = ['NEW', 'CONTACTED', 'SELECTED', 'REJECTED'];

function StatusBadge({ status }: { status: ReferralStatus }) {
  const cls: Record<ReferralStatus, string> = {
    NEW: 'bg-[#861C1C] text-white', 
    CONTACTED: 'bg-[#C06F30] text-white',
    SELECTED: 'bg-[#F4B34F] text-[#2B1D1C]', 
    REJECTED: 'bg-[#2B1D1C] text-white',
  };
  return <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${cls[status]}`}>{status}</span>;
}

export default function DashboardPage() {
  const { user, isAuthenticated, myReferrals, positions } = useAppContext();
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<ReferralStatus | 'ALL'>('ALL');
  const [positionFilter, setPositionFilter] = useState('ALL');

  useEffect(() => {
    if (typeof window !== 'undefined' && !isAuthenticated) {
      router.push('/auth/login');
    } else if (user?.role === 'ADMIN' || user?.role === 'HR') {
      router.push('/admin');
    }
  }, [isAuthenticated, user, router]);

  const filtered = useMemo(() => {
    return myReferrals.filter(r => {
      const matchSearch = search === '' ||
        r.candidateName.toLowerCase().includes(search.toLowerCase()) ||
        r.candidateEmail.toLowerCase().includes(search.toLowerCase());
      const matchStatus = statusFilter === 'ALL' || r.status === statusFilter;
      const matchPosition = positionFilter === 'ALL' || r.position?.title === positionFilter;
      return matchSearch && matchStatus && matchPosition;
    });
  }, [myReferrals, search, statusFilter, positionFilter]);

  const stats = useMemo(() => ({
    total: myReferrals.length,
    new: myReferrals.filter(r => r.status === 'NEW'),
    contacted: myReferrals.filter(r => r.status === 'CONTACTED'),
    selected: myReferrals.filter(r => r.status === 'SELECTED'),
    rejected: myReferrals.filter(r => r.status === 'REJECTED'),
  }), [myReferrals]);

  // Early return UI AFTER hooks
  if (!isAuthenticated || user?.role === 'ADMIN' || user?.role === 'HR') {
    return null;
  }

  return (
    <div className="relative min-h-screen">
      <BallBackground />
      
      <main className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-5xl font-black tracking-tighter text-[#2B1D1C]">My Workspace</h1>
            <p className="text-[#861C1C]/60 font-bold uppercase text-xs tracking-widest mt-2 px-1">Persistent Real-Time Stream Active</p>
          </div>
          
          <div className="flex items-center gap-3">
             <Link href="/" className="px-6 py-3 rounded-2xl bg-white/40 backdrop-blur-md border border-white/50 text-[#2B1D1C] font-black text-xs uppercase tracking-widest hover:bg-white/60 transition-all">
                Explore
             </Link>
             <Link href="/referrals/new" className="px-6 py-3 rounded-2xl bg-[#861C1C] text-white font-black text-xs uppercase tracking-widest hover:bg-[#6b1616] transition-all shadow-xl shadow-[#861C1C]/20">
                New Referral
             </Link>
          </div>
        </div>

        {/* Status Folders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="flex flex-col items-center gap-4">
             <Folder color="#861C1C" items={stats.new.map(r => <div key={r.id} className="text-[6px] font-bold p-1">{r.candidateName}</div>)} />
             <div className="text-center">
                <p className="text-2xl font-black text-[#2B1D1C]">{stats.new.length}</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#861C1C]/40">New Referrals</p>
             </div>
          </div>
          <div className="flex flex-col items-center gap-4">
             <Folder color="#C06F30" items={stats.contacted.map(r => <div key={r.id} className="text-[6px] font-bold p-1">{r.candidateName}</div>)} />
             <div className="text-center">
                <p className="text-2xl font-black text-[#2B1D1C]">{stats.contacted.length}</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#C06F30]/40">Contacted</p>
             </div>
          </div>
          <div className="flex flex-col items-center gap-4">
             <Folder color="#F4B34F" items={stats.selected.map(r => <div key={r.id} className="text-[6px] font-bold p-1">{r.candidateName}</div>)} />
             <div className="text-center">
                <p className="text-2xl font-black text-[#2B1D1C]">{stats.selected.length}</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#F4B34F]/40">Selected</p>
             </div>
          </div>
          <div className="flex flex-col items-center gap-4">
             <Folder color="#2B1D1C" items={stats.rejected.map(r => <div key={r.id} className="text-[6px] font-bold p-1">{r.candidateName}</div>)} />
             <div className="text-center">
                <p className="text-2xl font-black text-[#2B1D1C]">{stats.rejected.length}</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#2B1D1C]/40">Rejected</p>
             </div>
          </div>
        </div>

        {/* Filters & Table */}
        <div className="bg-[#ECCEB6]/40 backdrop-blur-2xl rounded-[40px] border border-white/50 p-8 shadow-2xl">
           <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
              <div className="relative flex-1 group w-full">
                 <input 
                  type="text" 
                  value={search} 
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Filter candidates..."
                  className="w-full pl-6 pr-6 py-4 rounded-2xl bg-white/50 border-none text-[#2B1D1C] font-bold placeholder:text-[#2B1D1C]/20 focus:ring-2 focus:ring-[#861C1C]/20 transition-all outline-none"
                 />
              </div>
              <select 
                value={statusFilter} 
                onChange={e => setStatusFilter(e.target.value as any)}
                className="px-6 py-4 rounded-2xl bg-white/50 text-[#2B1D1C] font-bold outline-none border-none cursor-pointer hover:bg-white/70"
              >
                <option value="ALL">All Status</option>
                {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
           </div>

           <div className="overflow-x-auto">
              <table className="w-full text-left border-separate border-spacing-y-3">
                 <thead>
                    <tr className="text-[10px] font-black uppercase tracking-widest text-[#2B1D1C]/40">
                       <th className="px-6 py-4">Ref Code</th>
                       <th className="px-6 py-4">Candidate</th>
                       <th className="px-6 py-4">Position</th>
                       <th className="px-6 py-4">Status</th>
                    </tr>
                 </thead>
                 <tbody>
                    {filtered.map(r => (
                      <tr key={r.id} className="bg-white/40 hover:bg-white/60 transition-all transform hover:-translate-y-0.5 group">
                        <td className="px-6 py-5 first:rounded-l-2xl last:rounded-r-2xl font-mono text-xs font-bold text-[#861C1C]">
                          {r.refCode}
                        </td>
                        <td className="px-6 py-5 first:rounded-l-2xl last:rounded-r-2xl">
                          <p className="font-black text-[#2B1D1C]">{r.candidateName}</p>
                          <p className="text-[10px] font-bold text-[#2B1D1C]/40">{r.candidateEmail}</p>
                        </td>
                        <td className="px-6 py-5 first:rounded-l-2xl last:rounded-r-2xl font-bold text-[#2B1D1C]/70">
                          {r.position?.title}
                        </td>
                        <td className="px-6 py-5 first:rounded-l-2xl last:rounded-r-2xl">
                          <StatusBadge status={r.status} />
                        </td>
                      </tr>
                    ))}
                    {filtered.length === 0 && (
                      <tr>
                        <td colSpan={4} className="px-6 py-20 text-center text-[#2B1D1C]/20 font-black uppercase text-xs tracking-widest">
                          No referrals found matching your search.
                        </td>
                      </tr>
                    )}
                 </tbody>
              </table>
           </div>
        </div>
      </main>
    </div>
  );
}
