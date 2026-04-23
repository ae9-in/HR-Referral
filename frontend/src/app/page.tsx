"use client";

import Link from 'next/link';
import BorderGlow from '../components/BorderGlow';
import SpotlightCard from '../components/SpotlightCard';
import DecayCard from '../components/DecayCard';
import TrueFocus from '../components/TrueFocus';
import AnimatedCard from '../components/AnimatedCard';

const FEATURES = [
  {
    title: 'Enterprise Pipeline',
    desc: 'Empower your workforce to refer top talent instantly. Simplify the hiring process with real-time candidate tracking.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Smart Connections',
    desc: 'Leverage your existing team networks to find vetted, high-quality professionals passively and effectively.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800',
  },
  {
    title: 'Automated Analytics',
    desc: 'Track conversion rates and pipeline dynamics directly from the executive dashboard in real-time.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Premium UX',
    desc: 'Treat every referred candidate to a customized, branded, and incredibly simple onboarding flow.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600',
  }
];

const STEPS = [
  {
    num: '01',
    title: 'Source the Best',
    desc: 'Employees submit a referral through our streamlined portal, attaching a resume and quick notes regarding the candidate.'
  },
  {
    num: '02',
    title: 'HR Review',
    desc: 'Talent Acquisition teams instantly receive the referral on their unified Refentra dashboard, allowing immediate pipeline injection.'
  },
  {
    num: '03',
    title: 'Real-time Tracking',
    desc: 'The referring employee can watch the candidate move through the interview stages without ever needing to email recruiting.'
  }
];

export default function LandingPage() {
  return (
    <>
      <main className="relative min-h-screen overflow-x-hidden bg-brand-cream selection:bg-brand-cyan selection:text-brand-navy">
        
        {/* Abstract Background Vectors */}
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-brand-cyan opacity-20 blur-[100px] -z-10 animate-float-slow" />
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-red opacity-10 blur-[120px] -z-10 animate-float" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-brand-cyan opacity-20 blur-[100px] -z-10 animate-pulse-ring" />

        {/* ─── Hero Section ─── */}
        <section className="relative px-6 pt-32 pb-24 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 min-h-[90vh]">
          <div className="flex-1 space-y-8 z-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white shadow-sm border border-brand-cyan/20 text-brand-cyan font-semibold text-sm tracking-wide">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-red" />
              </span>
              The Standard in Corporate Hiring
            </div>

            <div className="text-brand-navy">
              <TrueFocus 
                sentence="Your Referrals, Their Future."
                manualMode={false}
                blurAmount={5}
                borderColor="#78BDC4"
                animationDuration={0.8}
                pauseBetweenAnimations={1}
              />
            </div>
            
            <p className="text-xl text-brand-navy/60 leading-relaxed max-w-xl font-light">
              Refentra transforms institutional knowledge into a high-performance talent ecosystem. We architect transparent, data-driven referral pipelines that leverage the collective intelligence of your organization.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link href="/referrals/new" className="inline-flex justify-center items-center px-10 py-4 rounded-2xl bg-brand-red hover:bg-brand-red-dark text-white font-medium text-lg transition-colors shadow-lg shadow-brand-red/20 hover:shadow-xl hover:shadow-brand-red/30 hover:-translate-y-1">
                Make a Referral
              </Link>
              <Link href="/auth/login" className="inline-flex justify-center items-center px-10 py-4 rounded-2xl bg-white hover:bg-brand-cyan/10 text-brand-navy font-medium text-lg border border-brand-navy/10 transition-colors hover:-translate-y-1 shadow-sm">
                Open Dashboard
              </Link>
            </div>
          </div>

          <div className="flex-1 relative animate-slide-up w-full">
            <BorderGlow 
              animated={true}
              glowColor="120 189 196" /* brand-cyan RGB */
              backgroundColor="#FFFFFF"
              edgeSensitivity={40}
              coneSpread={15}
              /* New Colors: Navy, Cyan, Red, Cream */
              colors={['#012C3D', '#78BDC4', '#F8444F', '#F7F8F3']}
              className="rounded-3xl shadow-2xl p-2 w-full max-w-lg mx-auto overflow-hidden h-[500px]"
            >
               <div className="w-full h-full relative rounded-[20px] overflow-hidden bg-white">
                 <img 
                   src="/hero-real.png" 
                   alt="Modern Corporate Team" 
                   className="w-full h-full object-cover rounded-[20px] shadow-sm transform hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent flex items-end p-8">
                   <p className="text-white text-lg font-medium opacity-90 backdrop-blur-sm">Networking Redefined in Real-Time</p>
                 </div>
               </div>
            </BorderGlow>
          </div>
        </section>

        {/* ─── Trending Features Section ─── */}
        <section className="py-24 px-6 max-w-7xl mx-auto relative z-10 border-t border-brand-navy/10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">Enterprise Features</h2>
            <p className="text-xl text-brand-cyan">Aesthetic, powerful, and immediately understandable capabilities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feat, idx) => (
              <DecayCard
                key={idx}
                image={feat.image}
                width={280}
                height={400}
              >
                <h2>{feat.title}</h2>
                <p>{feat.desc}</p>
              </DecayCard>
            ))}
          </div>
        </section>

        {/* ─── How Refentra Works (Image Split) ─── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            
            <div className="flex-1 w-full order-2 lg:order-1 flex justify-center scale-90 md:scale-100">
              <AnimatedCard 
                image="/how-it-works-new.png"
                title="Network Dynamics"
                content="Our advanced referral engine uses real-time graph mapping to identify the best candidates within your employee networks, ensuring high-quality leads with minimal effort."
              />
            </div>

            <div className="flex-1 order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-brand-navy mb-8">How Refentra Works</h2>
              <div className="space-y-8">
                {STEPS.map((step, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="text-4xl font-black text-brand-cream border-2 border-brand-cyan/30 rounded-xl px-4 py-2 bg-white flex items-center justify-center group-hover:border-brand-red transition-colors shadow-sm">
                      <span className="bg-clip-text text-transparent bg-gradient-to-br from-brand-cyan to-brand-navy">{step.num}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-navy mb-2">{step.title}</h4>
                      <p className="text-brand-navy/60 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </section>

        {/* ─── Success Culture Section ─── */}
        <section className="py-24 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 pr-0 lg:pr-8">
            <h2 className="text-4xl font-bold text-brand-navy mb-6">Built for Scaling Teams</h2>
            <p className="text-lg text-brand-navy/70 leading-relaxed mb-8">
              A company is only as strong as its team. Refentra turns your entire workforce into an active recruiting arm, boosting morale and driving high-retention hires directly into your corporate ecosystem. Find the perfect fit through trusted recommendations.
            </p>
            <ul className="space-y-4 font-medium text-brand-navy">
              <li className="flex items-center gap-3 bg-white p-3 rounded-xl border border-brand-navy/5 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan text-sm">✓</div>
                Higher Employee Retention
              </li>
              <li className="flex items-center gap-3 bg-white p-3 rounded-xl border border-brand-navy/5 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-brand-red/20 flex items-center justify-center text-brand-red text-sm">✓</div>
                Reduced Time-To-Hire
              </li>
              <li className="flex items-center gap-3 bg-white p-3 rounded-xl border border-brand-navy/5 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan text-sm">✓</div>
                Premium Candidate Experience
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full flex justify-center scale-90 md:scale-110">
            <AnimatedCard 
              image="/success-real.png"
              title="Scaling Culture"
              content="Turn your entire workforce into an active recruiting arm. Refentra boosts employee morale and high-retention hires directly into your corporate ecosystem."
            />
          </div>
        </section>

        {/* ─── Call to Action ─── */}
        <section className="py-24 px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center bg-brand-navy rounded-[40px] p-12 md:p-20 shadow-2xl relative overflow-hidden ring-4 ring-brand-navy/20">
            <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-brand-cyan blur-[120px] opacity-30 rounded-full" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-brand-red blur-[120px] opacity-20 rounded-full" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
              Ready to grow your team?
            </h2>
            <p className="text-xl text-brand-cream/70 mb-10 max-w-2xl mx-auto font-light relative z-10">
              Join leading technical companies leveraging Refentra to power their internal hiring pipelines securely and beautifully.
            </p>
            <Link href="/auth/register" className="inline-flex justify-center items-center px-12 py-5 rounded-2xl bg-brand-red hover:bg-brand-red-dark text-white font-bold text-lg transition-all shadow-xl shadow-brand-red/30 hover:shadow-brand-red/50 hover:scale-105 relative z-10">
              Create HR Account
            </Link>
          </div>
        </section>

        {/* ─── Footer ─── */}
        <footer className="py-10 px-6 border-t border-brand-navy/10 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-navy rounded-xl shadow-sm flex items-center justify-center">
                <span className="text-brand-cream font-bold text-xs">R</span>
              </div>
              <span className="font-bold text-xl text-brand-navy">Refentra</span>
            </div>
            <p className="text-sm text-brand-navy/50 font-medium">© 2026 Refentra HR Enterprise. All rights reserved.</p>
          </div>
        </footer>

      </main>
    </>
  );
}
