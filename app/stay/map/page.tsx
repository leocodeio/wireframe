'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const NEARBY_STAYS = [
  {
    id: 'stay-1',
    name: 'Sentinel Inn',
    type: 'Budget',
    rating: 4.2,
    reviews: 312,
    distance: '0.3 km',
    price: 850,
    tag: null,
    pinColor: '#1D9E75',
    pinIcon: 'bed',
    mapX: '25%',
    mapY: '35%',
  },
  {
    id: 'stay-2',
    name: 'Horizon Suites',
    type: 'Comfort',
    rating: 4.6,
    reviews: 187,
    distance: '0.8 km',
    price: 1800,
    tag: 'Top Rated',
    pinColor: '#008560',
    pinIcon: 'hotel',
    mapX: '65%',
    mapY: '28%',
  },
  {
    id: 'stay-3',
    name: 'The Verdant Boutique',
    type: 'Boutique',
    rating: 4.8,
    reviews: 94,
    distance: '1.2 km',
    price: 3200,
    tag: null,
    pinColor: '#3b82f6',
    pinIcon: 'villa',
    mapX: '70%',
    mapY: '60%',
  },
  {
    id: 'stay-4',
    name: 'Grand Apex Tower',
    type: 'Luxury',
    rating: 4.9,
    reviews: 58,
    distance: '2.1 km',
    price: 6500,
    tag: 'Premium',
    pinColor: '#6750A4',
    pinIcon: 'apartment',
    mapX: '30%',
    mapY: '72%',
  },
];

export default function StayMap() {
  const router = useRouter();
  const [activeStay, setActiveStay] = useState<string | null>(null);

  const active = NEARBY_STAYS.find(s => s.id === activeStay);

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-background">
      <div className="w-full max-w-lg md:max-w-4xl relative flex flex-col h-screen overflow-hidden shadow-2xl antialiased">

        {/* TopAppBar */}
        <header className="sticky top-0 z-50 w-full bg-[#FCF9F5]/85 backdrop-blur-md shadow-[0_8px_24px_rgba(26,26,24,0.08)]">
          <div className="flex items-center justify-between px-6 h-16 w-full max-w-lg md:max-w-4xl mx-auto">
            <div className="w-10 flex items-center">
              <button onClick={() => router.back()} className="text-[#1A1A18]/60 hover:opacity-80 transition-opacity active:scale-95 duration-200 flex items-center">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
            </div>
            <h1 className="text-center flex-1 font-semibold text-xl text-[#1D9E75] font-['Inter'] tracking-tight">Nearby Stays</h1>
            <div className="w-10 flex items-center justify-end">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-high flex items-center justify-center border-outline-variant/15 border">
                <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhKPljF2V3EBh0FwvqFVzoPM5ls6dHVlwSPfjaHYCcQT3CvkFc9E3MTZVjR_i8YLclHR-etQ7HrYt93v4kj-a_20CYKTuneZGDJCKp703xNjb9Kb0bD361LHZbjUvcgU0PoJZLeZ-NjjsIwIR_vZ_z0Xb1LFYGfiy5EMgaap9tRvKJx2Cl_7Fnfq8JHcr70Z5qaWDjGgxCd-9Mkvm7gJsEpUbkG6lSA212aztFrQdykbbm_OQ6KjFOi69t6039jTRXkIhZoVhMvBw"/>
              </div>
            </div>
          </div>
        </header>

        {/* Map Canvas */}
        <div className="flex-1 relative z-0 bg-[#e8eae6]">
          {/* Faux Map Background */}
          <svg className="absolute inset-0 w-full h-full text-white" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path className="opacity-50" d="M 10 0 L 25 100 M 60 0 L 45 100 M 90 0 L 80 100 M 0 30 L 100 40 M 0 80 L 100 70" fill="none" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke"></path>
            <path d="M -10 60 Q 50 40 110 50" fill="none" stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke"></path>
            <path d="M 35 -10 Q 40 50 20 110" fill="none" stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke"></path>
            <path d="M -10 85 Q 50 90 110 65" fill="none" stroke="#f2e8d5" strokeWidth="4" vectorEffect="non-scaling-stroke"></path>
          </svg>

          {/* User Location Dot */}
          <div className="absolute left-[45%] top-[52%] -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-4 h-4 bg-[#4285F4] rounded-full border-[2.5px] border-white shadow-md relative">
              <div className="absolute inset-0 bg-[#4285F4] rounded-full animate-ping opacity-60 scale-150"></div>
            </div>
          </div>

          {/* Stay Pins */}
          {NEARBY_STAYS.map(stay => (
            <button
              key={stay.id}
              onClick={() => setActiveStay(activeStay === stay.id ? null : stay.id)}
              className="absolute z-10 flex flex-col items-center -translate-x-1/2 -translate-y-full transition-transform active:scale-90"
              style={{ left: stay.mapX, top: stay.mapY }}
            >
              <div
                className="rounded-lg px-2 py-1 text-[10px] font-bold shadow-md mb-0.5 text-white"
                style={{ backgroundColor: stay.pinColor }}
              >
                ₹{stay.price}/n
              </div>
              <span
                className="material-symbols-outlined text-[28px] drop-shadow-md"
                style={{ fontVariationSettings: "'FILL' 1", color: stay.pinColor }}
              >
                {stay.pinIcon}
              </span>
            </button>
          ))}

          {/* Popup card when a stay pin is tapped */}
          {active && (
            <div className="absolute bottom-4 left-4 right-4 z-30 bg-surface-container-lowest rounded-2xl shadow-2xl p-4 flex items-center gap-4 border border-outline-variant/20 animate-fade-in">
              <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${active.pinColor}20` }}>
                <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1", color: active.pinColor }}>{active.pinIcon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-on-surface text-sm truncate">{active.name}</p>
                <div className="flex items-center gap-1 text-on-surface-variant text-xs mt-0.5">
                  <span className="material-symbols-outlined text-[12px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span>{active.rating}</span>
                  <span className="mx-1">•</span>
                  <span>{active.reviews} reviews</span>
                  <span className="mx-1">•</span>
                  <span>{active.distance}</span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="font-bold text-primary text-base">₹{active.price}</p>
                <p className="text-on-surface-variant text-[10px]">/night</p>
              </div>
              <button onClick={() => setActiveStay(null)} className="w-6 h-6 flex items-center justify-center text-on-surface-variant hover:opacity-70">
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            </div>
          )}
        </div>

        {/* Bottom Panel */}
        <div className="flex-none w-full z-20 flex flex-col items-center">
          <div className="w-full bg-surface-container-lowest rounded-t-3xl shadow-[0_-8px_32px_rgba(28,28,26,0.08)] pt-6 pb-6 px-6">
            <div className="max-w-md mx-auto flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-headline font-semibold text-on-surface text-lg">4 places nearby</h2>
                  <p className="font-body text-on-surface-variant text-sm mt-0.5">Tap pins to preview · Tap below to compare</p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-fixed/60 backdrop-blur-[20px]">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="font-label text-[0.75rem] font-medium text-on-secondary-fixed tracking-[0.02em]">Live Rates</span>
                </div>
              </div>

              {/* Scrollable preview list */}
              <div className="flex gap-3 overflow-x-auto pb-1 -mx-2 px-2 scrollbar-hide">
                {NEARBY_STAYS.map(stay => (
                  <button
                    key={stay.id}
                    onClick={() => setActiveStay(stay.id)}
                    className="flex-shrink-0 flex flex-col bg-surface-container-low rounded-xl p-3 w-36 items-start gap-1 border border-outline-variant/20 hover:bg-surface-container transition-colors active:scale-95"
                  >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: `${stay.pinColor}20` }}>
                      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1", color: stay.pinColor }}>{stay.pinIcon}</span>
                    </div>
                    <p className="font-semibold text-on-surface text-xs leading-tight">{stay.name}</p>
                    <p className="text-primary font-bold text-sm">₹{stay.price}<span className="text-on-surface-variant font-normal text-[10px]">/n</span></p>
                  </button>
                ))}
              </div>

              <Link href="/stay/compare" className="w-full h-14 bg-gradient-to-br from-[#1D9E75] to-[#008560] text-on-primary rounded-full font-semibold text-[1rem] shadow-[0_8px_24px_rgba(29,158,117,0.25)] hover:opacity-90 active:scale-95 transition-all flex items-center justify-center">
                Compare All Stays
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
