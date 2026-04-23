"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import api from '../lib/api';
import toast from 'react-hot-toast';

/* ─── Types ─── */
export type ReferralStatus = 'NEW' | 'CONTACTED' | 'SELECTED' | 'REJECTED';
export type UserRole = 'EMPLOYEE' | 'ADMIN' | 'HR';

export interface Referral {
  id: string;
  refCode: string;
  candidateName: string;
  candidateEmail: string;
  candidatePhone: string;
  position: { id: string; title: string };
  resumeUrl?: string;
  notes?: string;
  status: ReferralStatus;
  createdAt: string;
  updatedAt: string;
  referredBy: { id: string; name: string; email: string };
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  employeeId: string;
  role: UserRole;
}

interface AppContextType {
  /* Auth */
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  sendOtp: (email: string) => Promise<boolean>;
  verifyOtp: (email: string, otp: string) => Promise<boolean>;
  register_user: (data: any) => Promise<boolean>;
  logout: () => void;
  /* Referrals */
  referrals: Referral[];
  myReferrals: Referral[];
  addReferral: (data: any) => Promise<boolean>;
  updateStatus: (id: string, status: ReferralStatus) => Promise<void>;
  updateReferral: (id: string, data: any) => Promise<void>;
  deleteReferral: (id: string) => Promise<void>;
  /* Positions */
  positions: any[];
  refreshData: () => Promise<void>;
  bulkImport: (data: any[]) => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [positions, setPositions] = useState<any[]>([]);
  const [hydrated, setHydrated] = useState(false);

  /* Helper to fetch data */
  const fetchData = useCallback(async (currUser: User | null) => {
    if (!currUser) return;
    try {
      const [refsRes, posRes] = await Promise.all([
        api.get('/referrals'),
        api.get('/positions'),
      ]);
      setReferrals(refsRes.data);
      setPositions(posRes.data);
    } catch (err) {
      console.error('Failed to fetch data', err);
    }
  }, []);

  /* Hydrate user from localStorage on mount & start real-time polling */
  useEffect(() => {
    const savedUser = localStorage.getItem('refhire_user');
    const token = localStorage.getItem('refhire_token');
    let currentUser: User | null = null;
    if (savedUser && token) {
      try {
        currentUser = JSON.parse(savedUser);
        setUser(currentUser);
        fetchData(currentUser);
      } catch (e) {
        console.error('Json parse error', e);
      }
    }
    setHydrated(true);

    // Real-time updates interval for SAAS level feel
    const interval = setInterval(() => {
      if (localStorage.getItem('refhire_token')) {
        fetchData(JSON.parse(localStorage.getItem('refhire_user') || 'null'));
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [fetchData]);

  /* Auth Actions */
  const login = useCallback(async (email: string, password: string): Promise<boolean> => {
    try {
      const res = await api.post('/auth/login', { email, password });
      const { accessToken, user: userData } = res.data;
      localStorage.setItem('refhire_token', accessToken);
      localStorage.setItem('refhire_user', JSON.stringify(userData));
      setUser(userData);
      fetchData(userData);
      toast.success(`Welcome back, ${userData.name}!`);
      return true;
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Login failed');
      throw err;
    }
  }, [fetchData]);

  const sendOtp = useCallback(async (email: string): Promise<boolean> => {
    try {
      const res = await api.post('/auth/send-otp', { email });
      if (res.data.demo) {
        toast.success(`Demo Mode: code is ${res.data.otp}`, { duration: 10000 });
      } else {
        toast.success('OTP sent to your email!');
      }
      return true;
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to send OTP');
      throw err;
    }
  }, []);

  const verifyOtp = useCallback(async (email: string, otp: string): Promise<boolean> => {
    try {
      const res = await api.post('/auth/verify-otp', { email, otp });
      const { accessToken, user: userData } = res.data;
      localStorage.setItem('refhire_token', accessToken);
      localStorage.setItem('refhire_user', JSON.stringify(userData));
      setUser(userData);
      fetchData(userData);
      toast.success(`Welcome!`);
      return true;
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Invalid or expired OTP');
      return false;
    }
  }, [fetchData]);

  const register_user = useCallback(async (data: any): Promise<boolean> => {
    try {
      const res = await api.post('/auth/register', data);
      const { accessToken, user: userData } = res.data;
      
      // Auto-login after registration
      localStorage.setItem('refhire_token', accessToken);
      localStorage.setItem('refhire_user', JSON.stringify(userData));
      setUser(userData);
      fetchData(userData);
      
      toast.success('Registration successful! Welcome to the cluster.');
      return true;
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Registration failed');
      throw err;
    }
  }, [fetchData]);

  const logout = useCallback(() => {
    localStorage.removeItem('refhire_token');
    localStorage.removeItem('refhire_user');
    setUser(null);
    setReferrals([]);
    toast.success('Logged out');
  }, []);

  /* Referral Actions */
  const addReferral = useCallback(async (data: any): Promise<boolean> => {
    try {
      await api.post('/referrals', data);
      await fetchData(user);
      toast.success('Submitted!');
      return true;
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed');
      return false;
    }
  }, [fetchData, user]);

  const updateStatus = useCallback(async (id: string, status: ReferralStatus) => {
    try {
      await api.patch(`/referrals/${id}/status`, { status });
      await fetchData(user);
      toast.success('Status updated');
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Update failed');
    }
  }, [fetchData, user]);

  const updateReferral = useCallback(async (id: string, data: any) => {
    try {
      await api.patch(`/referrals/${id}`, data);
      await fetchData(user);
      toast.success('Referral updated');
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to update');
    }
  }, [fetchData, user]);

  const deleteReferral = useCallback(async (id: string) => {
    try {
      await api.delete(`/referrals/${id}`);
      await fetchData(user);
      toast.success('Referral purged');
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Purge failed');
    }
  }, [fetchData, user]);

  const myReferrals = user ? referrals.filter(r => r.referredBy?.email === user.email) : [];

  const bulkImport = useCallback(async (data: any[]) => {
    try {
      const res = await api.post('/referrals/bulk-import', { referrals: data });
      toast.success(`Imported ${res.data.imported} referrals`);
      await fetchData(user);
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Import failed');
    }
  }, [fetchData, user]);

  return (
    <AppContext.Provider value={{
      user, isAuthenticated: !!user, login, sendOtp, verifyOtp, register_user, logout,
      referrals, myReferrals, addReferral, updateStatus, updateReferral, deleteReferral,
      positions,
      refreshData: () => fetchData(user),
      bulkImport,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be inside AppProvider');
  return ctx;
};
