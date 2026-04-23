"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useAppContext } from '../context/AppContext';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const { user, isAuthenticated, logout } = useAppContext();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Hide Navbar on Admin pages and Auth pages to avoid layout conflicts
  const isAuthOrAdmin = pathname?.startsWith('/admin') || pathname?.startsWith('/auth');
  if (isAuthOrAdmin) return null;

  return (
    <nav className="fixed top-0 w-full z-50 glass shadow-sm" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-gradient-to-br from-ember to-ember-dark rounded-lg animate-float shadow-md shadow-ember/20" />
            <span className="text-xl font-bold text-slate-dark tracking-tight">
              Ref<span className="text-ember">entra</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {isAuthenticated ? (
              <>
                {(user?.role === 'ADMIN' || user?.role === 'HR') && (
                  <Link href="/admin" className="btn-ghost">Admin Dashboard</Link>
                )}
                {user?.role === 'EMPLOYEE' && (
                  <Link href="/dashboard" className="btn-ghost">My Referrals</Link>
                )}
                {user?.role === 'EMPLOYEE' && (
                  <Link href="/referrals/new" className="btn-ghost">New Referral</Link>
                )}
                <div className="w-px h-6 bg-silver/50 mx-2" />
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-ember to-ember-dark flex items-center justify-center text-white text-sm font-bold">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                  <div className="hidden lg:block">
                    <p className="text-sm font-semibold text-slate-dark leading-none">{user?.name}</p>
                    <p className="text-xs text-silver mt-0.5 capitalize">{user?.role}</p>
                  </div>
                  <button onClick={logout} className="btn-ghost text-sm !text-red-400 hover:!text-red-500 hover:!bg-red-50">
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link href="/auth/login" className="btn-ghost">Login</Link>
                <Link href="/auth/register" className="btn-primary text-sm !py-2.5">
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 rounded-lg hover:bg-white/50">
            <svg className="w-6 h-6 text-slate-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-silver/20 animate-slide-up">
          <div className="px-4 py-4 space-y-2">
            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-3 px-3 py-2 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ember to-ember-dark flex items-center justify-center text-white font-bold">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-dark">{user?.name}</p>
                    <p className="text-xs text-silver capitalize">{user?.role}</p>
                  </div>
                </div>
                <Link href={(user?.role === 'ADMIN' || user?.role === 'HR') ? '/admin' : '/dashboard'} onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg hover:bg-white/50 font-medium">
                  {(user?.role === 'ADMIN' || user?.role === 'HR') ? 'Admin Dashboard' : 'My Referrals'}
                </Link>
                {user?.role === 'EMPLOYEE' && (
                  <Link href="/referrals/new" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg hover:bg-white/50 font-medium">
                    New Referral
                  </Link>
                )}
                <button onClick={() => { logout(); setMobileOpen(false); }} className="w-full text-left px-3 py-2.5 rounded-lg text-red-400 hover:bg-red-50 font-medium">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/auth/login" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg hover:bg-white/50 font-medium">
                  Login
                </Link>
                <Link href="/auth/register" onClick={() => setMobileOpen(false)} className="block btn-primary text-center">
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
