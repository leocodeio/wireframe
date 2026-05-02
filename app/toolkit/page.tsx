"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const holdTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const [showPingToast, setShowPingToast] = React.useState(false);
  const [silentLocation, setSilentLocation] = React.useState(false);

  const handlePing = () => {
    setShowPingToast(true);
    setTimeout(() => setShowPingToast(false), 3000);
  };

  const handleSilentToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setSilentLocation(checked);
    if (checked) {
      handlePing();
    }
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <div className="w-full max-w-lg md:max-w-4xl relative flex flex-col min-h-screen shadow-2xl bg-surface overflow-hidden">

{/*  TopAppBar  */}
<header className="sticky top-0 z-50 w-full bg-[#FCF9F5]/85 backdrop-blur-md shadow-[0_8px_24px_rgba(26,26,24,0.08)]">
  <div className="flex items-center justify-between px-6 h-16 w-full max-w-lg md:max-w-4xl mx-auto">
    <div className="w-10 flex items-center">
      <Link href="/" className="text-[#1A1A18]/60 hover:opacity-80 transition-opacity active:scale-95 duration-200 flex items-center">
        <span className="material-symbols-outlined">arrow_back</span>
      </Link>
    </div>
    <h1 className="text-center flex-1 font-semibold text-xl text-[#1D9E75] font-['Inter'] tracking-tight">Safety Toolkit</h1>
    <div className="w-10 flex items-center justify-end">
      <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-high flex items-center justify-center border-outline-variant/15 border">
        <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhKPljF2V3EBh0FwvqFVzoPM5ls6dHVlwSPfjaHYCcQT3CvkFc9E3MTZVjR_i8YLclHR-etQ7HrYt93v4kj-a_20CYKTuneZGDJCKp703xNjb9Kb0bD361LHZbjUvcgU0PoJZLeZ-NjjsIwIR_vZ_z0Xb1LFYGfiy5EMgaap9tRvKJx2Cl_7Fnfq8JHcr70Z5qaWDjGgxCd-9Mkvm7gJsEpUbkG6lSA212aztFrQdykbbm_OQ6KjFOi69t6039jTRXkIhZoVhMvBw"/>
      </div>
    </div>
  </div>
</header>
{/*  Main Content  */}
<main className="max-w-3xl mx-auto px-6 pt-8 pb-32 flex-1 overflow-y-auto">
<div className="mb-10 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
</div>
<div>
<p className="text-on-surface-variant text-sm mt-1">Discreet tools for your peace of mind.</p>
</div>
</div>
<div className="space-y-6">
{/*  Fake Call Card  */}
<div className="bg-surface-container-lowest rounded p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-error-container/30 flex items-center justify-center flex-shrink-0 mt-1 sm:mt-0">
<span className="material-symbols-outlined text-error">call</span>
</div>
<div>
<h3 className="font-semibold text-lg text-on-surface">Fake Call</h3>
<p className="text-sm text-on-surface-variant max-w-sm mt-1">Receive an automated incoming call to politely exit uncomfortable situations.</p>
</div>
</div>
<button className="w-full sm:w-auto px-6 py-3 bg-error text-on-error rounded-full font-medium hover:opacity-90 transition-opacity whitespace-nowrap" onClick={(e) => { 
    const b = e.currentTarget;
    const o = b.innerText;
    let c = 3;
    b.innerText = `Triggering in ${c}s...`;
    const i = setInterval(() => {
        c--;
        if (c > 0) b.innerText = `Triggering in ${c}s...`;
        else {
            clearInterval(i);
            b.innerText = o;
            alert('Incoming Call Simulation');
        }
    }, 1000);
}}>
                    Trigger Fake Call
                </button>
</div>
{/*  Silent Location Card  */}
<div className="bg-surface-container-lowest rounded p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center flex-shrink-0 mt-1 sm:mt-0">
<span className="material-symbols-outlined text-primary">location_off</span>
</div>
<div>
<h3 className="font-semibold text-lg text-on-surface">Silent Location</h3>
<p className="text-sm text-on-surface-variant max-w-sm mt-1">Share your live location discreetly with trusted contacts without notifying the main app.</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer mt-2 sm:mt-0">
<input className="sr-only peer" type="checkbox" checked={silentLocation} onChange={handleSilentToggle}/>
<div className="w-14 h-7 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary transition-colors"></div>
</label>
</div>
{/*  SOS Card  */}
<div className="bg-[#E24B4A]/10 border border-[#E24B4A]/20 rounded p-6 shadow-sm relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
{/*  Subtle pulsing background rings  */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-[#E24B4A]/20 opacity-50"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-[#E24B4A]/10 opacity-30"></div>
</div>
<div className="relative z-10 flex flex-col items-center text-center space-y-4">
<div className="w-16 h-16 rounded-full bg-[#E24B4A]/20 flex items-center justify-center">
<span className="material-symbols-outlined text-[#E24B4A] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
</div>
<div>
<h3 className="font-bold text-xl text-on-surface">Emergency SOS</h3>
<p className="text-sm text-on-surface-variant max-w-md mx-auto mt-2">Instantly notify local authorities and your emergency contacts with your precise location.</p>
</div>
<button className="mt-4 px-8 py-4 bg-[#E24B4A] text-white rounded-full font-bold text-lg tracking-wide hover:bg-[#c93d3c] transition-colors w-full sm:w-auto" 
    onClick={() => { router.push('/toolkit/sos-confirmation'); }}>
                        SEND SOS
                    </button>
</div>
</div>
{/*  Pinging Card  */}
<div className="bg-surface-container-lowest rounded p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center flex-shrink-0 mt-1 sm:mt-0">
<span className="material-symbols-outlined text-on-surface-variant">sensors</span>
</div>
<div>
<h3 className="font-semibold text-lg text-on-surface">Pinging</h3>
<p className="text-sm text-on-surface-variant max-w-sm mt-1">Send a subtle &apos;I am okay&apos; notification to your selected guardians.</p>
</div>
</div>
<button className="w-full sm:w-auto px-6 py-3 border border-outline-variant/50 text-on-surface rounded-full font-medium hover:bg-surface-container-high transition-colors whitespace-nowrap" onClick={handlePing}>
                    Ping My Contacts
                </button>
</div>
{/*  Manage Details Link  */}
<Link className="block bg-surface-container-lowest rounded p-5 shadow-sm hover:bg-surface-container-low transition-colors flex items-center justify-between group" href="/toolkit/manage">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary">settings</span>
<span className="font-medium text-on-surface">Manage SOS Details</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">chevron_right</span>
</Link>
</div>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 right-0 h-[72px] z-50 rounded-t-3xl bg-[#FCF9F5]/85  backdrop-blur-md shadow-[0_-8px_24px_rgba(26,26,24,0.08)] flex justify-around items-center px-4 pb-safe  md:sticky md:bottom-6 md:left-auto md:w-full md:mx-auto md:rounded-full w-full max-w-lg md:max-w-4xl">
<Link className="flex flex-col items-center justify-center text-slate-400  hover:bg-slate-100 transition-colors active:scale-90 duration-200 p-2 rounded-lg" href="/">
<span className="material-symbols-outlined mb-1">home</span>
<span className="font-inter text-[10px] font-medium tracking-wide">Home</span>
</Link>
<Link className="flex flex-col items-center justify-center text-slate-400  hover:bg-slate-100 transition-colors active:scale-90 duration-200 p-2 rounded-lg" href="/travel">
<span className="material-symbols-outlined mb-1">explore</span>
<span className="font-inter text-[10px] font-medium tracking-wide">Travel</span>
</Link>
<Link className="flex flex-col items-center justify-center text-slate-400  hover:bg-slate-100 transition-colors active:scale-90 duration-200 p-2 rounded-lg" href="#">
<span className="material-symbols-outlined mb-1">bed</span>
<span className="font-inter text-[10px] font-medium tracking-wide">Stay</span>
</Link>
<Link className="flex flex-col items-center justify-center text-slate-400  hover:bg-slate-100 transition-colors active:scale-90 duration-200 p-2 rounded-lg" href="/navigate">
<span className="material-symbols-outlined mb-1">near_me</span>
<span className="font-inter text-[10px] font-medium tracking-wide">Navigate</span>
</Link>
<Link className="flex flex-col items-center justify-center bg-[#1D9E75]/10  text-[#1D9E75]  rounded-full px-4 py-1 active:scale-90 transition-all duration-200" href="/toolkit">
<span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>handyman</span>
<span className="font-inter text-[10px] font-medium tracking-wide">Toolkit</span>
</Link>
</nav>
{/*  Ping Toast Notification  */}
<div className={`fixed top-12 left-1/2 transform -translate-x-1/2 bg-surface-container-highest text-on-surface px-6 py-3 rounded-full shadow-lg transition-all duration-300 pointer-events-none z-[100] flex items-center gap-2 ${showPingToast ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<span className="font-medium font-body text-sm">Ping sent to your contacts!</span>
</div>

      </div>
    </div>
  );
}
