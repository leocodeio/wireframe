'use client';

import Link from 'next/link';
import { useState } from 'react';
import BottomNavBar from '../components/BottomNavBar';

const initialHelpers = [
  {
    id: 1,
    name: "Marcus T.",
    distance: "0.8 mi away",
    languages: ["English", "Spanish"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-N_mwaOm-7QAh4-sOdUeddd58_LRxGO-sreWCAQTSZ5Vy0I952naEXEekRzQuRWsuBL-IC3quZ67iSNUzsI0JXWQ7P3r0SfrXKpUdxrX85s7jmSUtvXfGJCStcz00k3kzTeqAAou5KHk2abcFRRTxySqsmuQ9JAYqFA8tKeOzbvjPN9pKUsYsNlmD3ZfpA-FYkaVkBzSZUA8zlQe2aUrY1c6pzkAnOY_KjjF711HIRerzGydSgrJAxVlseD1wom6-KDvdE7IX8_g",
    isVerified: true,
    isUrgent: false
  },
  {
    id: 2,
    name: "Sarah J.",
    distance: "0.3 mi away",
    languages: ["English", "French"],
    image: "/sarah_j.png",
    isVerified: true,
    isUrgent: true
  },
  {
    id: 3,
    name: "David L.",
    distance: "1.2 mi away",
    languages: ["English", "German"],
    image: "/david_l.png",
    isVerified: true,
    isUrgent: false
  }
];

export default function LocalSupportShowcase() {
  const [isUrgentOnly, setIsUrgentOnly] = useState(false);
  
  const filteredHelpers = isUrgentOnly 
    ? initialHelpers.filter(h => h.isUrgent)
    : initialHelpers;

  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <div className="w-full max-w-lg md:max-w-4xl relative flex flex-col min-h-screen shadow-2xl bg-surface-container-low mx-auto">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-surface-bright/85 backdrop-blur-2xl no-border tonal-shift w-full shadow-[0_8px_24px_rgba(26,26,24,0.08)]">
          <div className="flex items-center justify-between px-6 py-4 h-16">
            <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container transition-colors active:scale-95">
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </Link>
            <h1 className="text-on-surface font-semibold text-[1.125rem] tracking-tight">Local Support</h1>
            <div className="w-10"></div>
          </div>
        </header>

        {/* Main Content Canvas */}
        <main className="flex-1 overflow-y-auto pb-28 pt-2 px-6 flex flex-col gap-6">
          {/* Page Header */}
          <div className="mt-2">
            <h1 className="text-[2rem] leading-tight font-bold font-headline tracking-tight text-on-surface">Local Support</h1>
            <p className="text-on-surface-variant text-[15px] mt-2">Connect with verified guardians in your area.</p>
          </div>

          {/* Map Widget Component */}
          <div className="relative w-full h-[320px] rounded-xl overflow-hidden shadow-sm border border-outline-variant/30 bg-surface-variant isolate group">
            <img alt="Map Background" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASWgdvkY8_LmDtjzq72LzMn5cOa68PLREMo-AjqH4pN-y-1Mngs-eVi73Z2GdPvNwwwXRJN6n-tvy6cYcREfBDTqiy11nuW5yDMM1mIYZ7bvT0ndzErOAg74-_aRxgyt_c064aLJkcUO1Ps_CVeVeCf24Au5Lm_rTR4drCMccrJTvxLXqEppYSX8kbIedOxpotlPX1tLja8x6BMoDpOl-DwBXaHB3i13a40RaQASZc2Sjlh44dhJ7ik2r1K0Z_vZg7UAgMy_9f6qg"/>
            <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-transparent to-surface/80 pointer-events-none"></div>

            {/* User Location Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-12 h-12 bg-primary/20 rounded-full animate-ping"></div>
                <div className="absolute w-6 h-6 bg-primary/40 rounded-full"></div>
                <div className="w-4 h-4 bg-primary rounded-full border-2 border-surface-container-lowest z-10 shadow-md"></div>
              </div>
            </div>

            {/* Verified Helper Pins */}
            {filteredHelpers.map((helper, idx) => (
              <div 
                key={helper.id}
                className={`absolute flex flex-col items-center transition-all duration-500 ${helper.isUrgent ? 'animate-pulse' : ''}`}
                style={{ 
                  top: idx === 0 ? '33%' : idx === 1 ? '75%' : '25%', 
                  left: idx === 0 ? '25%' : idx === 1 ? '66%' : '75%',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className={`w-8 h-8 flex items-center justify-center ${helper.isUrgent ? 'bg-error' : 'bg-primary'} text-on-primary rounded-full shadow-md backdrop-blur-sm bg-opacity-95`}>
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>person_pin</span>
                </div>
              </div>
            ))}

            <button className="absolute bottom-3 right-3 bg-surface/90 backdrop-blur-md text-on-surface rounded-full p-2 shadow-sm border border-outline-variant/30 hover:bg-surface transition-colors z-10">
              <span className="material-symbols-outlined text-[20px]">my_location</span>
            </button>
          </div>

          {/* Filter / Toggle Section */}
          <div className="flex items-center justify-between bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/20">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isUrgentOnly ? 'bg-error-container text-error' : 'bg-surface-container text-on-surface-variant'}`}>
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>notifications_active</span>
              </div>
              <span className="font-medium text-[15px] text-on-surface tracking-wide">Show urgent helpers only</span>
            </div>
            {/* Functional Toggle */}
            <div 
              onClick={() => setIsUrgentOnly(!isUrgentOnly)}
              className={`w-12 h-6 rounded-full relative cursor-pointer border transition-colors duration-300 ${isUrgentOnly ? 'bg-primary border-primary' : 'bg-surface-container-high border-outline-variant/30'}`}
            >
              <div className={`absolute top-[2px] w-[18px] h-[18px] rounded-full transition-transform duration-300 ${isUrgentOnly ? 'translate-x-6 bg-on-primary' : 'translate-x-0 bg-outline'} left-[2px] shadow-sm`}></div>
            </div>
          </div>

          {/* Helpers List */}
          <div className="flex flex-col gap-6">
            {filteredHelpers.map((helper) => (
              <div key={helper.id} className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/20 flex flex-col gap-5 relative overflow-hidden group">
                {/* Subtle tonal shift background decoration */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${helper.isUrgent ? 'bg-error-container' : 'bg-primary-container'} opacity-[0.03] rounded-bl-[100px] pointer-events-none`}></div>

                {/* Profile Photo, Name, Distance, Badge */}
                <div className="flex flex-col items-center text-center gap-3 relative z-10">
                  <div className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt={helper.name} className="w-24 h-24 rounded-full object-cover border-4 border-surface shadow-md" src={helper.image}/>
                    <div className={`absolute bottom-1 right-1 w-5 h-5 ${helper.isUrgent ? 'bg-error' : 'bg-primary'} rounded-full border-[3px] border-surface-container-lowest`}></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-on-surface font-headline tracking-tight flex items-center justify-center gap-2">
                      {helper.name}
                      {helper.isUrgent && (
                        <span className="bg-error/10 text-error text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border border-error/20">Urgent</span>
                      )}
                    </h3>
                    <span className="text-[14px] font-medium text-on-surface-variant flex items-center justify-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-[16px]">distance</span>
                      {helper.distance}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/10 mt-1">
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    <span className="text-[12px] font-bold tracking-wide uppercase">Verified Guardian</span>
                  </div>
                </div>

                {/* Languages */}
                <div className="flex flex-col gap-3 border-t border-outline-variant/20 pt-4 relative z-10">
                  <h4 className="text-[13px] font-semibold text-on-surface-variant uppercase tracking-wider">Languages Spoken</h4>
                  <div className="flex flex-wrap gap-2">
                    {helper.languages.map(lang => (
                      <span key={lang} className="px-4 py-1.5 bg-surface-container text-on-surface rounded-full text-[14px] font-medium border border-outline-variant/30">{lang}</span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-2 relative z-10">
                  <button className="flex-1 bg-surface-container-low border border-outline-variant text-on-surface py-3 rounded-xl text-[15px] font-semibold hover:bg-surface-container transition-colors active:scale-95 duration-200 flex justify-center items-center gap-2 shadow-sm">
                    <span className="material-symbols-outlined text-[20px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
                    Message
                  </button>
                  <button className="flex-1 bg-surface-container-low border border-outline-variant text-on-surface py-3 rounded-xl text-[15px] font-semibold hover:bg-surface-container transition-colors active:scale-95 duration-200 flex justify-center items-center gap-2 shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">call</span>
                    Call
                  </button>
                </div>
                
                <Link href="/local-support/contact" className={`w-full ${helper.isUrgent ? 'bg-error' : 'bg-primary'} text-white py-4 rounded-xl text-[16px] font-bold shadow-md hover:shadow-lg transition-shadow active:scale-95 duration-200 flex justify-center items-center gap-2 mt-1 relative z-10`}>
                  Contact Now
                </Link>
              </div>
            ))}
          </div>
          
          {/* Spacer for bottom nav */}
          <div className="h-8 w-full"></div>
        </main>

        <BottomNavBar />
      </div>
    </div>
  );
}

