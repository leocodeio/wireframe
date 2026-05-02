'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const STAYS = [
  {
    id: 'stay-1',
    name: 'Sentinel Inn',
    type: 'Budget Hotel',
    rating: 4.2,
    reviews: 312,
    distance: '0.3 km',
    price: 850,
    tag: null,
    color: '#1D9E75',
    icon: 'bed',
    amenities: ['WiFi', 'Breakfast', 'AC'],
    safetyScore: 87,
    googleMapsUrl: '#',
  },
  {
    id: 'stay-2',
    name: 'Horizon Suites',
    type: 'Comfort Stay',
    rating: 4.6,
    reviews: 187,
    distance: '0.8 km',
    price: 1800,
    tag: 'Top Rated',
    color: '#008560',
    icon: 'hotel',
    amenities: ['WiFi', 'Pool', 'Gym', 'Restaurant'],
    safetyScore: 92,
    googleMapsUrl: '#',
  },
  {
    id: 'stay-3',
    name: 'The Verdant Boutique',
    type: 'Boutique Hotel',
    rating: 4.8,
    reviews: 94,
    distance: '1.2 km',
    price: 3200,
    tag: null,
    color: '#3b82f6',
    icon: 'villa',
    amenities: ['WiFi', 'Spa', 'Valet', 'Bar'],
    safetyScore: 95,
    googleMapsUrl: '#',
  },
  {
    id: 'stay-4',
    name: 'Grand Apex Tower',
    type: 'Luxury Suite',
    rating: 4.9,
    reviews: 58,
    distance: '2.1 km',
    price: 6500,
    tag: 'Premium',
    color: '#6750A4',
    icon: 'apartment',
    amenities: ['WiFi', 'Butler', 'Pool', 'Spa', 'Fine Dining'],
    safetyScore: 98,
    googleMapsUrl: '#',
  },
];

export default function StayCompare() {
  const router = useRouter();
  const [selectedStay, setSelectedStay] = useState<string | null>(null);

  const active = STAYS.find(s => s.id === selectedStay);

  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <div className="w-full max-w-lg md:max-w-4xl relative flex flex-col min-h-screen shadow-2xl bg-surface text-on-surface pb-8" style={{ minHeight: 'max(884px, 100dvh)' }}>

        {/* TopAppBar */}
        <header className="sticky top-0 z-50 w-full bg-[#FCF9F5]/85 backdrop-blur-md shadow-sm">
          <div className="flex items-center justify-between px-6 h-16 w-full max-w-lg md:max-w-4xl mx-auto">
            <div className="w-12 flex items-center">
              <button 
                onClick={() => router.back()} 
                className="w-10 h-10 flex items-center justify-center rounded-full text-[#1A1A18]/60 hover:bg-[#F6F3EF] transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-[24px]">arrow_back</span>
              </button>
            </div>
            <h1 className="text-center flex-1 font-semibold text-xl text-[#1D9E75] font-['Inter'] tracking-tight">Compare Stays</h1>
            <div className="w-12 flex items-center justify-end">
              {/* Spacer for centering */}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 w-full px-6 py-6 space-y-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="font-headline text-[1.5rem] font-semibold text-on-surface leading-tight tracking-[-0.01em]">Available Stays</h2>
              <p className="font-body text-[1rem] text-on-surface-variant mt-1">Tap a stay to view details & book</p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-fixed/60 backdrop-blur-[20px]">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="font-label text-[0.75rem] font-medium text-on-secondary-fixed tracking-[0.02em]">Live Rates</span>
            </div>
          </div>

          {/* Stay Cards */}
          <div className="space-y-4">
            {STAYS.map(stay => (
              <button
                key={stay.id}
                onClick={() => setSelectedStay(stay.id)}
                className="w-full bg-surface-container-lowest rounded-DEFAULT p-5 shadow-[0_4px_12px_rgba(26,26,24,0.03)] hover:shadow-[0_8px_24px_rgba(26,26,24,0.06)] transition-all cursor-pointer relative overflow-hidden group text-left block"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {stay.tag && (
                  <div className="absolute top-0 right-0 font-label text-[0.65rem] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider text-white" style={{ backgroundColor: stay.color }}>
                    {stay.tag}
                  </div>
                )}
                <div className="flex items-center justify-between relative z-10" style={{ marginTop: stay.tag ? '0.25rem' : 0 }}>
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${stay.color}20` }}>
                      <span className="material-symbols-outlined text-[26px]" style={{ fontVariationSettings: "'FILL' 1", color: stay.color }}>{stay.icon}</span>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-headline text-[1.125rem] font-semibold text-on-surface leading-snug">{stay.name}</h3>
                      <div className="flex items-center gap-1 mt-0.5 text-on-surface-variant">
                        <span className="material-symbols-outlined text-[14px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="font-label text-[0.75rem] font-medium">{stay.rating}</span>
                        <span className="mx-1 opacity-50">•</span>
                        <span className="font-label text-[0.75rem] font-medium">{stay.reviews} reviews</span>
                        <span className="mx-1 opacity-50">•</span>
                        <span className="font-label text-[0.75rem] font-medium">{stay.distance}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 ml-4">
                    <div className="text-right flex flex-col justify-center">
                      <div className="font-headline text-[1.5rem] font-semibold text-on-surface leading-none">₹{stay.price}</div>
                      <p className="font-label text-[0.75rem] text-on-surface-variant mt-1">/ night</p>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant text-[24px] flex items-center justify-center">chevron_right</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </main>
      </div>

      {/* Detail / Pricing Popup */}
      {active && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 animate-fade-in"
            onClick={() => setSelectedStay(null)}
          />

          {/* Bottom Sheet */}
          <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg z-50 bg-surface-container-lowest rounded-t-3xl shadow-[0_-16px_48px_rgba(28,28,26,0.16)] animate-slide-up overflow-hidden">
            {/* Drag Handle */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 rounded-full bg-outline-variant"></div>
            </div>

            <div className="px-6 pb-10 pt-3 flex flex-col gap-5">
              {/* Stay Identity */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${active.color}20` }}>
                  <span className="material-symbols-outlined text-[30px]" style={{ fontVariationSettings: "'FILL' 1", color: active.color }}>{active.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-headline text-[1.25rem] font-bold text-on-surface">{active.name}</h3>
                  <p className="text-on-surface-variant text-sm">{active.type}</p>
                </div>
                <button onClick={() => setSelectedStay(null)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container text-on-surface-variant">
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>

              {/* Rating + Safety Score */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-surface-container-low rounded-xl p-3 flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <p className="font-bold text-on-surface text-sm">{active.rating}</p>
                  <p className="text-on-surface-variant text-[10px]">{active.reviews} reviews</p>
                </div>
                <div className="bg-surface-container-low rounded-xl p-3 flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-secondary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  <p className="font-bold text-on-surface text-sm">{active.distance}</p>
                  <p className="text-on-surface-variant text-[10px]">away</p>
                </div>
                <div className="bg-surface-container-low rounded-xl p-3 flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-tertiary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>health_and_safety</span>
                  <p className="font-bold text-on-surface text-sm">{active.safetyScore}/100</p>
                  <p className="text-on-surface-variant text-[10px]">Safety score</p>
                </div>
              </div>

              {/* Amenities */}
              <div>
                <p className="text-on-surface-variant text-xs font-medium uppercase tracking-wider mb-2">Amenities</p>
                <div className="flex flex-wrap gap-2">
                  {active.amenities.map(a => (
                    <span key={a} className="bg-surface-container text-on-surface-variant rounded-full px-3 py-1 text-xs font-medium">{a}</span>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-primary/5 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-on-surface-variant text-xs uppercase tracking-wider mb-1">Price per night</p>
                  <p className="text-primary font-bold text-2xl">₹{active.price}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    href={`/stay/detail?id=${active.id}`}
                    className="flex items-center gap-2 bg-surface-container-low text-on-surface-variant rounded-full px-4 py-2 text-sm hover:bg-surface-container transition-colors"
                  >
                    <span className="material-symbols-outlined text-[16px]">map</span>
                    Location
                  </Link>
                  <Link
                    href={`/stay/detail?id=${active.id}&tab=reviews`}
                    className="flex items-center gap-2 bg-surface-container-low text-on-surface-variant rounded-full px-4 py-2 text-sm hover:bg-surface-container transition-colors"
                  >
                    <span className="material-symbols-outlined text-[16px]">reviews</span>
                    Reviews
                  </Link>
                </div>
              </div>

              {/* Book CTA */}
              <Link
                href={`/stay/detail?id=${active.id}`}
                className="w-full h-14 bg-gradient-to-br from-[#1D9E75] to-[#008560] text-on-primary rounded-full font-semibold text-[1rem] shadow-[0_8px_24px_rgba(29,158,117,0.25)] hover:opacity-90 active:scale-95 transition-all flex items-center justify-center"
              >
                View Stay Details
              </Link>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from { transform: translateX(-50%) translateY(100%); }
          to { transform: translateX(-50%) translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.3s cubic-bezier(0.32, 0.72, 0, 1);
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease;
        }
      `}</style>
    </div>
  );
}
