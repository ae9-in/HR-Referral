"use client";

import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext, ReferralStatus, Referral } from '../../context/AppContext';
import Folder from '../../components/ui/Folder';
import BallBackground from '../../components/ui/BallBackground';
import toast from 'react-hot-toast';

const STATUS_OPTIONS: ReferralStatus[] = ['NEW', 'CONTACTED', 'SELECTED', 'REJECTED'];

/* ─── Detail Panel ─── */
function DetailPanel({ referral, onClose, onStatusChange, onDelete, onUpdate }: any) {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
     candidateName: referral.candidateName,
     candidateEmail: referral.candidateEmail,
     candidatePhone: referral.candidatePhone,
     notes: referral.notes || ''
  });

  if (!referral) return null;

  const handleSave = async () => {
     await onUpdate(referral.id, editForm);
     setIsEditing(false);
  };

  return (
    <div className="fixed inset-y-0 right-0 w-full sm:w-[500px] bg-[#ECCEB6]/95 backdrop-blur-3xl shadow-2xl z-50 animate-slide-in-right border-l border-white/50 flex flex-col p-8">
       <header className="flex items-center justify-between mb-10">
          <div>
            <h3 className="text-3xl font-black tracking-tighter text-[#2B1D1C]">Record Intel</h3>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#861C1C]">{referral.refCode}</p>
          </div>
          <button onClick={onClose} className="w-12 h-12 rounded-2xl bg-[#861C1C] text-white flex items-center justify-center hover:scale-105 transition-all">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
       </header>

       <div className="flex-1 overflow-y-auto space-y-6 scrollbar-hide">
          <div className="bg-white/40 p-6 rounded-3xl border border-white/50 shadow-sm relative group">
             <div className="flex justify-between items-start mb-4">
                <p className="text-[10px] font-black uppercase text-[#2B1D1C]/40 tracking-widest">Candidate Data</p>
                <button onClick={() => setIsEditing(!isEditing)} className="text-[10px] font-black uppercase text-[#861C1C] hover:underline">
                  {isEditing ? 'Cancel Edit' : 'Edit Details'}
                </button>
             </div>
             
             {isEditing ? (
               <div className="space-y-4">
                  <input value={editForm.candidateName} onChange={e => setEditForm({...editForm, candidateName: e.target.value})} className="w-full bg-white/50 border-none rounded-xl p-3 font-bold text-sm outline-none" />
                  <input value={editForm.candidateEmail} onChange={e => setEditForm({...editForm, candidateEmail: e.target.value})} className="w-full bg-white/50 border-none rounded-xl p-3 font-bold text-sm outline-none" />
                  <input value={editForm.candidatePhone} onChange={e => setEditForm({...editForm, candidatePhone: e.target.value})} className="w-full bg-white/50 border-none rounded-xl p-3 font-bold text-sm outline-none" />
                  <textarea value={editForm.notes} onChange={e => setEditForm({...editForm, notes: e.target.value})} className="w-full bg-white/50 border-none rounded-xl p-3 font-bold text-sm outline-none h-24" placeholder="Admin notes..." />
                  <button onClick={handleSave} className="w-full py-3 bg-[#861C1C] text-white font-black uppercase text-[10px] tracking-widest rounded-xl">Save Changes</button>
               </div>
             ) : (
               <>
                 <h4 className="text-2xl font-black text-[#2B1D1C]">{referral.candidateName}</h4>
                 <p className="text-sm font-bold text-[#2B1D1C]/60 mb-6">{referral.candidateEmail}</p>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/30 p-4 rounded-2xl">
                       <p className="text-[8px] font-black uppercase text-[#2B1D1C]/40">Status</p>
                       <p className="text-sm font-bold text-[#861C1C] uppercase tracking-wider">{referral.status}</p>
                    </div>
                    <div className="bg-white/30 p-4 rounded-2xl">
                       <p className="text-[8px] font-black uppercase text-[#2B1D1C]/40">Referrer</p>
                       <p className="text-sm font-bold text-[#2B1D1C] truncate">{referral.referredBy?.name || '—'}</p>
                    </div>
                 </div>
                 {referral.notes && <p className="mt-6 text-xs font-bold text-[#2B1D1C]/40 bg-white/20 p-4 rounded-2xl">"{referral.notes}"</p>}
               </>
             )}
          </div>

          <div className="bg-white/40 p-6 rounded-3xl border border-white/50 shadow-sm">
             <p className="text-[10px] font-black uppercase text-[#2B1D1C]/40 mb-4 tracking-widest">Update State</p>
             <div className="grid grid-cols-2 gap-2">
                {STATUS_OPTIONS.map(s => (
                  <button 
                    key={s} 
                    onClick={() => onStatusChange(referral.id, s)}
                    className={`px-4 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest border transition-all 
                      ${referral.status === s 
                        ? 'bg-[#861C1C] border-[#861C1C] text-white shadow-lg' 
                        : 'bg-white/50 border-transparent text-[#2B1D1C]/60 hover:bg-white/80'}
                    `}
                  >
                    {s}
                  </button>
                ))}
             </div>
          </div>

          <div className="mt-auto pt-10">
             <button 
               onClick={() => {
                 if(confirm('Are you sure you want to purge this record? This cannot be undone.')) {
                   onDelete(referral.id);
                 }
               }}
               className="w-full py-5 rounded-2xl bg-white/40 text-[#861C1C] font-black uppercase text-[10px] tracking-widest hover:bg-[#861C1C] hover:text-white transition-all border border-[#861C1C]/10"
             >
               Purge Record From Cluster
             </button>
          </div>
       </div>
    </div>
  );
}

export default function AdminDashboardPage() {
  const { user, isAuthenticated, referrals, updateStatus, updateReferral, deleteReferral, logout, bulkImport } = useAppContext();
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<ReferralStatus | 'ALL'>('ALL');
  const [selectedReferral, setSelectedReferral] = useState<Referral | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !isAuthenticated) {
      router.push('/admin/login');
    } else if (user && user.role !== 'ADMIN' && user.role !== 'HR') {
      router.push('/dashboard');
    }
  }, [isAuthenticated, user, router]);

  const filtered = useMemo(() => {
    return referrals.filter(r => {
      const matchSearch = search === '' ||
        r.candidateName?.toLowerCase().includes(search.toLowerCase()) ||
        r.candidateEmail?.toLowerCase().includes(search.toLowerCase()) ||
        r.refCode?.toLowerCase().includes(search.toLowerCase());
      const matchStatus = statusFilter === 'ALL' || r.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [referrals, search, statusFilter]);

  const stats = useMemo(() => ({
    new: referrals.filter(r => r.status === 'NEW'),
    contacted: referrals.filter(r => r.status === 'CONTACTED'),
    selected: referrals.filter(r => r.status === 'SELECTED'),
    rejected: referrals.filter(r => r.status === 'REJECTED'),
  }), [referrals]);

  const handleExport = () => {
    const headers = ['Ref Code', 'Candidate Name', 'Email', 'Phone', 'Position', 'Referred By', 'Status'];
    const rows = filtered.map(r => [r.refCode, r.candidateName, r.candidateEmail, r.candidatePhone, r.position?.title, r.referredBy?.name, r.status]);
    const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Registry_Export_${new Date().getTime()}.csv`;
    link.click();
  };

  if (!isAuthenticated || (user?.role !== 'ADMIN' && user?.role !== 'HR')) return null;

  return (
    <div className="min-h-screen relative flex">
      <BallBackground />
      
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full bg-[#2B1D1C] z-40 flex flex-col transition-all duration-500 shadow-2xl ${sidebarCollapsed ? 'w-20' : 'w-72'}`}>
        <div className="p-8 pb-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#861C1C] rounded-2xl flex-shrink-0 shadow-lg shadow-[#861C1C]/20" />
          {!sidebarCollapsed && <span className="text-2xl font-black text-white tracking-tighter">PLATFORM</span>}
        </div>
        
        <nav className="flex-1 mt-10 px-4 space-y-2">
          {['Registry', 'Force Map', 'Personnel'].map((item) => (
            <button key={item} className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${item === 'Registry' ? 'bg-[#861C1C] text-white' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}>
              <div className="w-5 h-5 rounded bg-white/10" />
              {!sidebarCollapsed && <span>{item}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 space-y-4">
           <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white/40 hover:text-white flex items-center justify-center">
              <svg className={`w-6 h-6 transform transition-transform ${sidebarCollapsed ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7" /></svg>
           </button>
           <button onClick={logout} className="w-full py-5 rounded-2xl bg-[#861C1C]/20 text-[#861C1C] font-black uppercase text-[10px] tracking-widest hover:bg-[#861C1C] hover:text-white transition-all text-center">
              {sidebarCollapsed ? 'X' : 'SIGN OUT'}
           </button>
        </div>
      </aside>

      <main className={`flex-1 transition-all duration-500 ${sidebarCollapsed ? 'ml-20' : 'ml-72'} p-8 lg:p-12 min-h-screen`}>
        <div className="max-w-7xl mx-auto">
           <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
              <div>
                 <h1 className="text-6xl lg:text-7xl font-black tracking-tighter text-[#2B1D1C]">Supervision</h1>
                 <p className="text-[#861C1C] font-black uppercase text-[10px] tracking-[0.4em] opacity-60">Global Admin Cluster Active</p>
              </div>
              <div className="flex gap-4">
                 <button onClick={handleExport} className="px-8 py-4 rounded-2xl bg-white/40 backdrop-blur-md border border-white/50 text-[#2B1D1C] font-black uppercase text-[10px] tracking-widest hover:bg-white/60 transition-all">Export Cluster</button>
              </div>
           </header>

           {/* Stat Folders */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 mb-16">
              {[
                { label: 'Unprocessed', count: stats.new.length, color: '#861C1C', data: stats.new },
                { label: 'Engaged', count: stats.contacted.length, color: '#C06F30', data: stats.contacted },
                { label: 'Confirmed', count: stats.selected.length, color: '#F4B34F', data: stats.selected },
                { label: 'Archived', count: stats.rejected.length, color: '#2B1D1C', data: stats.rejected }
              ].map(group => (
                <div key={group.label} className="flex flex-col items-center gap-4">
                   <Folder color={group.color} items={group.data.map(r => <div key={r.id} className="p-1">{r.candidateName}</div>)} />
                   <div className="text-center">
                      <p className="text-3xl font-black text-[#2B1D1C]">{group.count}</p>
                      <p className="text-[10px] font-black uppercase tracking-widest opacity-40">{group.label}</p>
                   </div>
                </div>
              ))}
           </div>

           {/* Table */}
           <div className="bg-[#ECCEB6]/30 backdrop-blur-2xl rounded-[50px] border border-white/50 p-6 lg:p-10 shadow-2xl">
              <div className="mb-10 flex flex-col md:flex-row gap-4">
                 <div className="flex-1 relative group">
                    <input 
                      type="text" 
                      value={search} 
                      onChange={e => setSearch(e.target.value)}
                      placeholder="Master Search Intelligence..."
                      className="w-full px-8 py-5 rounded-[30px] bg-white/50 border-none outline-none font-bold text-[#2B1D1C] placeholder:text-[#2B1D1C]/20 shadow-inner"
                    />
                 </div>
                 <select 
                   value={statusFilter} 
                   onChange={e => setStatusFilter(e.target.value as any)}
                   className="px-8 py-5 rounded-[30px] bg-white/50 text-[#2B1D1C] font-bold outline-none border-none cursor-pointer hover:bg-white/70"
                 >
                   <option value="ALL">Global Stack</option>
                   {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                 </select>
              </div>

              <div className="overflow-x-auto">
                 <table className="w-full text-left border-separate border-spacing-y-4">
                    <thead>
                       <tr className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2B1D1C]/40">
                          <th className="px-8">Identifier</th>
                          <th className="px-8">Candidate</th>
                          <th className="px-8">Position</th>
                          <th className="px-8">Status</th>
                          <th className="px-8"></th>
                       </tr>
                    </thead>
                    <tbody>
                       {filtered.map(r => (
                         <tr key={r.id} onClick={() => setSelectedReferral(r)} className="bg-white/50 hover:bg-[#861C1C] group transition-all transform hover:-translate-y-1 cursor-pointer shadow-sm rounded-3xl">
                            <td className="px-8 py-6 first:rounded-l-[30px] font-mono text-xs font-black text-[#861C1C] group-hover:text-white">{r.refCode}</td>
                            <td className="px-8 py-6 group-hover:text-white">
                               <p className="font-black text-[#2B1D1C] group-hover:text-white">{r.candidateName}</p>
                               <p className="text-[10px] font-bold opacity-40 group-hover:text-white/60">{r.candidateEmail}</p>
                            </td>
                            <td className="px-8 py-6 group-hover:text-white font-bold">{r.position?.title}</td>
                            <td className="px-8 py-6 group-hover:text-white">
                               <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                                 r.status === 'SELECTED' ? 'bg-[#F4B34F] text-[#2B1D1C]' : 'bg-[#2B1D1C]/10 text-[#2B1D1C] group-hover:bg-white/20 group-hover:text-white'
                               }`}>
                                 {r.status}
                               </span>
                            </td>
                            <td className="px-8 py-6 last:rounded-r-[30px] text-right">
                               <div className="w-8 h-8 rounded-full border border-[#2B1D1C]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:border-white">
                                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                               </div>
                            </td>
                         </tr>
                       ))}
                       {filtered.length === 0 && (
                          <tr><td colSpan={5} className="text-center py-20 font-black uppercase text-[10px] tracking-widest text-[#2B1D1C]/20">Empty Logic Stack.</td></tr>
                       )}
                    </tbody>
                 </table>
              </div>
           </div>
        </div>
      </main>

      {/* Side Panel Overlay */}
      {selectedReferral && (
        <>
          <div className="fixed inset-0 bg-[#2B1D1C]/30 backdrop-blur-md z-40 animate-fade-in" onClick={() => setSelectedReferral(null)} />
          <DetailPanel 
            referral={selectedReferral} 
            onClose={() => setSelectedReferral(null)} 
            onStatusChange={updateStatus} 
            onDelete={async (id: string) => {
               await deleteReferral(id);
               setSelectedReferral(null);
            }}
            onUpdate={updateReferral}
          />
        </>
      )}
    </div>
  );
}
