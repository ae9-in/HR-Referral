'use client';

import SplashCursor from './SplashCursor';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SplashCursor />
      {/* ─── Global Abstract Background Circles ─── */}
      <div className="fixed top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-brand-cyan opacity-20 blur-[100px] -z-10 animate-float-slow pointer-events-none" />
      <div className="fixed top-[20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-red opacity-10 blur-[120px] -z-10 animate-float pointer-events-none" />
      <div className="fixed bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-brand-cyan opacity-20 blur-[100px] -z-10 animate-pulse-ring pointer-events-none" />
      
      <div className="relative z-10 w-full overflow-x-hidden">
        {children}
      </div>
    </>
  );
}
