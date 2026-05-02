"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function TrackingJourney() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-background">
      <div className="w-full max-w-lg md:max-w-4xl relative flex flex-col h-screen overflow-hidden shadow-2xl antialiased">
        
        {/* TopAppBar Standard Navigation */}
        <header className="sticky top-0 z-50 w-full bg-[#FCF9F5]/85 backdrop-blur-md shadow-[0_8px_24px_rgba(26,26,24,0.08)]">
          <div className="flex items-center justify-between px-6 h-16 w-full max-w-lg md:max-w-4xl mx-auto">
            <div className="w-10 flex items-center">
              <button onClick={() => router.back()} className="text-[#1A1A18]/60 hover:opacity-80 transition-opacity active:scale-95 duration-200 flex items-center">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
            </div>
            <h1 className="text-center flex-1 font-semibold text-xl text-[#1D9E75] font-['Inter'] tracking-tight">Journey Tracking</h1>
            <div className="w-10 flex items-center justify-end">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-high flex items-center justify-center border-outline-variant/15 border">
                <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhKPljF2V3EBh0FwvqFVzoPM5ls6dHVlwSPfjaHYCcQT3CvkFc9E3MTZVjR_i8YLclHR-etQ7HrYt93v4kj-a_20CYKTuneZGDJCKp703xNjb9Kb0bD361LHZbjUvcgU0PoJZLeZ-NjjsIwIR_vZ_z0Xb1LFYGfiy5EMgaap9tRvKJx2Cl_7Fnfq8JHcr70Z5qaWDjGgxCd-9Mkvm7gJsEpUbkG6lSA212aztFrQdykbbm_OQ6KjFOi69t6039jTRXkIhZoVhMvBw"/>
              </div>
            </div>
          </div>
        </header>

        {/* Map Canvas (Flex-1 allows it to take remaining content) */}
        <div className="flex-1 relative z-0">
          <div className="absolute inset-0 bg-surface-variant overflow-hidden">
            {/* Simulated Map Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="Map Background" className="w-full h-full object-cover opacity-60 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASWgdvkY8_LmDtjzq72LzMn5cOa68PLREMo-AjqH4pN-y-1Mngs-eVi73Z2GdPvNwwwXRJN6n-tvy6cYcREfBDTqiy11nuW5yDMM1mIYZ7bvT0ndzErOAg74-_aRxgyt_c064aLJkcUO1Ps_CVeVeCf24Au5Lm_rTR4drCMccrJTvxLXqEppYSX8kbIedOxpotlPX1tLja8x6BMoDpOl-DwBXaHB3i13a40RaQASZc2Sjlh44dhJ7ik2r1K0Z_vZg7UAgMy_9f6qg"/>
            {/* Map Overlay Gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-transparent to-surface/80"></div>
            {/* Route Line */}
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1000 1000">
              <path d="M 300,700 Q 450,550 500,400 T 700,200" fill="none" stroke="#bccac1" strokeDasharray="10,10" strokeWidth="6"></path>
              <path d="M 300,700 Q 450,550 500,400 T 580,280" fill="none" stroke="#008560" strokeWidth="6"></path>
            </svg>
            {/* Current Position Marker (Pulsing) */}
            <div className="absolute top-[28%] left-[58%] -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-12 h-12 bg-primary/20 rounded-full animate-ping"></div>
                <div className="absolute w-6 h-6 bg-primary/40 rounded-full"></div>
                <div className="w-4 h-4 bg-primary rounded-full border-2 border-surface-container-lowest z-10 shadow-md"></div>
              </div>
            </div>
            {/* Start Position Marker */}
            <div className="absolute top-[70%] left-[30%] -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 bg-surface-variant rounded-full border-2 border-outline z-10"></div>
            </div>
            {/* Destination Position Marker */}
            <div className="absolute top-[20%] left-[70%] -translate-x-1/2 -translate-y-1/2">
              <span className="material-symbols-outlined text-on-surface-variant drop-shadow-md text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            </div>
            {/* Police Station Pin */}
            <div className="absolute top-[45%] left-[40%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-8 h-8 flex items-center justify-center bg-tertiary-container text-on-tertiary-container rounded-full shadow-md mb-1">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>local_police</span>
              </div>
            </div>
            {/* Safe Zone Pin */}
            <div className="absolute top-[35%] left-[75%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-8 h-8 flex items-center justify-center bg-secondary text-on-secondary rounded-full shadow-md mb-1 border-2 border-secondary-fixed">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>health_and_safety</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Journey Layout Container */}
        <div className="flex-none w-full z-20 flex flex-col items-center">
          {/* Emergency SOS Strip */}
          <Link href="/toolkit/sos-confirmation" className="-mt-6 relative z-30 w-[90%] max-w-md bg-error-container/90 backdrop-blur-md border border-error/20 rounded-t-xl py-3 px-4 flex items-center justify-between shadow-[0_-4px_16px_rgba(186,26,26,0.1)] transition-transform active:scale-[0.98]">
            <div className="flex items-center gap-3">
              <div className="bg-error text-on-error p-1.5 rounded-full shadow-sm">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>sos</span>
              </div>
              <span className="font-headline font-semibold text-on-error-container text-sm">Emergency? Tap SOS</span>
            </div>
            <span className="material-symbols-outlined text-error opacity-70">chevron_right</span>
          </Link>

          {/* Journey Status Bar */}
          <div className="w-full bg-surface-container-lowest rounded-t-3xl shadow-[0_-8px_32px_rgba(28,28,26,0.08)] pt-6 pb-6 px-6">
            <div className="max-w-md mx-auto flex flex-col gap-6">
              {/* Status Info */}
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-headline font-semibold text-on-surface text-xl">18 min</h2>
                  <p className="font-body text-on-surface-variant text-sm mt-0.5">En route • SafeRoam Guardian</p>
                </div>
                {/* Progress Ring (Simulated) */}
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path className="text-surface-container-high" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                    <path className="text-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="70, 100" strokeLinecap="round" strokeWidth="3"></path>
                  </svg>
                  <span className="material-symbols-outlined absolute text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>shield_person</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <button className="flex flex-col items-center justify-center gap-2 py-3 px-2 bg-surface-container-low hover:bg-surface-container rounded-DEFAULT transition-colors">
                  <span className="material-symbols-outlined text-tertiary">local_police</span>
                  <span className="font-label text-[10px] font-medium text-on-surface-variant text-center leading-tight">Notify<br/>Police</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-2 py-3 px-2 bg-surface-container-low hover:bg-surface-container rounded-DEFAULT transition-colors">
                  <span className="material-symbols-outlined text-primary">diversity_1</span>
                  <span className="font-label text-[10px] font-medium text-on-surface-variant text-center leading-tight">Notify<br/>Family</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-2 py-3 px-2 bg-surface-container-low hover:bg-surface-container rounded-DEFAULT transition-colors">
                  <span className="material-symbols-outlined text-secondary">cell_tower</span>
                  <span className="font-label text-[10px] font-medium text-on-surface-variant text-center leading-tight">Alert<br/>Network</span>
                </button>
              </div>

              {/* End Trip Action */}
              <Link href="/review/travel" className="mt-2 w-full bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full py-4 px-6 text-[1rem] font-semibold font-headline shadow-[0_4px_12px_rgba(0,105,76,0.15)] hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                End Journey
                <span className="material-symbols-outlined">check_circle</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
