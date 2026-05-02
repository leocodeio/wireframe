'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const STAYS_DATA: Record<string, {
  id: string;
  name: string;
  type: string;
  rating: number;
  reviews: number;
  distance: string;
  price: number;
  color: string;
  icon: string;
  amenities: string[];
  safetyScore: number;
  address: string;
  description: string;
  googleReviews: { author: string; rating: number; comment: string; date: string }[];
}> = {
  'stay-1': {
    id: 'stay-1',
    name: 'Sentinel Inn',
    type: 'Budget Hotel',
    rating: 4.2,
    reviews: 312,
    distance: '0.3 km',
    price: 850,
    color: '#1D9E75',
    icon: 'bed',
    amenities: ['Free WiFi', 'Breakfast Included', 'AC', '24h Reception'],
    safetyScore: 87,
    address: '12A, Sentinel Road, Sector 7, Neo-Veridian City',
    description: 'A clean, comfortable budget hotel perfect for solo travelers. Located in a well-lit area with 24/7 security staff and excellent public transport links.',
    googleReviews: [
      { author: 'Priya M.', rating: 5, comment: 'Very safe neighborhood, staff were incredibly helpful. Would stay again!', date: '2 days ago' },
      { author: 'Rohan K.', rating: 4, comment: 'Good value for money, clean rooms, safe area.', date: '1 week ago' },
      { author: 'Sarah T.', rating: 4, comment: 'Felt very safe as a solo traveler. Friendly staff.', date: '3 weeks ago' },
    ],
  },
  'stay-2': {
    id: 'stay-2',
    name: 'Horizon Suites',
    type: 'Comfort Stay',
    rating: 4.6,
    reviews: 187,
    distance: '0.8 km',
    price: 1800,
    color: '#008560',
    icon: 'hotel',
    amenities: ['Free WiFi', 'Pool', 'Gym', 'Restaurant', 'Room Service'],
    safetyScore: 92,
    address: '55, Horizon Boulevard, Central District, NV 80920',
    description: 'Modern comfort suites with excellent safety facilities. The hotel has CCTV coverage, key-card access, and a dedicated female-only floor.',
    googleReviews: [
      { author: 'Ananya R.', rating: 5, comment: 'Best hotel for solo female travelers! Female-only floor was a great feature.', date: '3 days ago' },
      { author: 'David L.', rating: 5, comment: 'Excellent security and amazing pool. Highly recommend.', date: '2 weeks ago' },
      { author: 'Meera P.', rating: 4, comment: 'Very comfortable and safe. The restaurant is excellent.', date: '1 month ago' },
    ],
  },
  'stay-3': {
    id: 'stay-3',
    name: 'The Verdant Boutique',
    type: 'Boutique Hotel',
    rating: 4.8,
    reviews: 94,
    distance: '1.2 km',
    price: 3200,
    color: '#3b82f6',
    icon: 'villa',
    amenities: ['Free WiFi', 'Spa', 'Valet Parking', 'Bar', 'Concierge'],
    safetyScore: 95,
    address: '8, Verdant Lane, Arts Quarter, NV 80922',
    description: 'An intimate boutique experience with exceptional personalized service. Located in the safe Arts Quarter with 24/7 concierge and biometric room access.',
    googleReviews: [
      { author: 'Isabelle F.', rating: 5, comment: 'Absolute gem! Felt pampered and completely safe.', date: '5 days ago' },
      { author: 'Arjun S.', rating: 5, comment: 'The spa is world-class and the neighborhood is very safe.', date: '3 weeks ago' },
      { author: 'Nadia B.', rating: 4, comment: 'Beautiful property in a great location. Slightly pricey but worth it.', date: '2 months ago' },
    ],
  },
  'stay-4': {
    id: 'stay-4',
    name: 'Grand Apex Tower',
    type: 'Luxury Suite',
    rating: 4.9,
    reviews: 58,
    distance: '2.1 km',
    price: 6500,
    color: '#6750A4',
    icon: 'apartment',
    amenities: ['Free WiFi', 'Personal Butler', 'Infinity Pool', 'Spa', 'Fine Dining', 'Airport Transfer'],
    safetyScore: 98,
    address: '1, Apex Tower, Financial Hub, NV 80915',
    description: 'The pinnacle of luxury and safety. Each suite has panic button integration with SafeRoam, dedicated security personnel, and 360° CCTV coverage.',
    googleReviews: [
      { author: 'Victoria H.', rating: 5, comment: 'Unmatched luxury and the safest I have ever felt at a hotel.', date: '1 week ago' },
      { author: 'Rahul G.', rating: 5, comment: 'The butler service is incredible. Absolute 5-star experience.', date: '1 month ago' },
      { author: 'Sophie M.', rating: 5, comment: 'SafeRoam panic button integration is a brilliant feature!', date: '2 months ago' },
    ],
  },
};

function StayDetailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id') || 'stay-1';
  const initialTab = searchParams.get('tab') === 'reviews' ? 'reviews' : 'overview';

  const [tab, setTab] = useState<'overview' | 'reviews' | 'location'>(initialTab as 'overview' | 'reviews' | 'location');

  const stay = STAYS_DATA[id] || STAYS_DATA['stay-1'];

  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <div className="w-full max-w-lg md:max-w-4xl relative flex flex-col min-h-screen shadow-2xl bg-surface text-on-surface pb-32" style={{ minHeight: 'max(884px, 100dvh)' }}>

        {/* Header */}
        <header className="sticky top-0 z-40 w-full bg-[#FCF9F5]/80 backdrop-blur-xl shadow-[0_8px_24px_rgba(26,26,24,0.04)]">
          <div className="flex items-center justify-between px-6 h-16 w-full">
            <div className="w-10 flex items-center">
              <button onClick={() => router.back()} className="text-[#1A1A18]/60 hover:opacity-80 transition-opacity active:scale-95">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
            </div>
            <h1 className="text-center flex-1 font-semibold text-xl text-[#1D9E75] font-['Inter'] tracking-tight">{stay.name}</h1>
            <div className="w-10"></div>
          </div>

          {/* Tab Bar */}
          <div className="flex border-b border-outline-variant/20">
            {(['overview', 'reviews', 'location'] as const).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 py-3 text-sm font-medium capitalize tracking-wide transition-colors ${
                  tab === t
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </header>

        <main className="px-6 pt-6 pb-10 flex flex-col gap-5">

          {/* Overview Tab */}
          {tab === 'overview' && (
            <>
              {/* Hero Identity */}
              <section className="flex items-center gap-4 p-5 bg-surface-container-lowest rounded-DEFAULT shadow-[0_4px_16px_rgba(26,26,24,0.04)]">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${stay.color}20` }}>
                  <span className="material-symbols-outlined text-[36px]" style={{ fontVariationSettings: "'FILL' 1", color: stay.color }}>{stay.icon}</span>
                </div>
                <div className="flex-1">
                  <h2 className="font-headline text-[1.25rem] font-bold text-on-surface">{stay.name}</h2>
                  <p className="text-on-surface-variant text-sm">{stay.type}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map(s => (
                      <span key={s} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: `'FILL' ${s <= Math.round(stay.rating) ? 1 : 0}`, color: '#1D9E75' }}>star</span>
                    ))}
                    <span className="text-on-surface-variant text-xs ml-1">({stay.reviews})</span>
                  </div>
                </div>
              </section>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-surface-container-low rounded-xl p-3 flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  <p className="font-bold text-on-surface text-sm">{stay.distance}</p>
                  <p className="text-on-surface-variant text-[10px] text-center">from you</p>
                </div>
                <div className="bg-surface-container-low rounded-xl p-3 flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-secondary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>health_and_safety</span>
                  <p className="font-bold text-on-surface text-sm">{stay.safetyScore}/100</p>
                  <p className="text-on-surface-variant text-[10px] text-center">Safety score</p>
                </div>
                <div className="bg-surface-container-low rounded-xl p-3 flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-tertiary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
                  <p className="font-bold text-on-surface text-sm">₹{stay.price}</p>
                  <p className="text-on-surface-variant text-[10px] text-center">/night</p>
                </div>
              </div>

              {/* Description */}
              <section className="bg-surface-container-lowest rounded-DEFAULT p-5 shadow-[0_4px_16px_rgba(26,26,24,0.04)]">
                <h3 className="font-semibold text-on-surface mb-2">About this stay</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{stay.description}</p>
              </section>

              {/* Amenities */}
              <section className="bg-surface-container-lowest rounded-DEFAULT p-5 shadow-[0_4px_16px_rgba(26,26,24,0.04)]">
                <h3 className="font-semibold text-on-surface mb-3">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {stay.amenities.map(a => (
                    <div key={a} className="flex items-center gap-1.5 bg-surface-container rounded-full px-3 py-1.5">
                      <span className="material-symbols-outlined text-primary text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <span className="text-on-surface text-xs font-medium">{a}</span>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          {/* Reviews Tab */}
          {tab === 'reviews' && (
            <>
              <section className="flex items-center gap-4 p-5 bg-surface-container-lowest rounded-DEFAULT shadow-[0_4px_16px_rgba(26,26,24,0.04)]">
                <div className="flex flex-col items-center gap-1">
                  <p className="text-4xl font-bold text-on-surface">{stay.rating}</p>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(s => (
                      <span key={s} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: `'FILL' ${s <= Math.round(stay.rating) ? 1 : 0}`, color: '#1D9E75' }}>star</span>
                    ))}
                  </div>
                  <p className="text-on-surface-variant text-xs">{stay.reviews} reviews</p>
                </div>
                <div className="flex-1 flex flex-col gap-1.5">
                  {[5, 4, 3, 2, 1].map(stars => {
                    const pct = stars === 5 ? 72 : stars === 4 ? 20 : stars === 3 ? 6 : stars === 2 ? 1 : 1;
                    return (
                      <div key={stars} className="flex items-center gap-2">
                        <span className="text-on-surface-variant text-xs w-3">{stars}</span>
                        <div className="flex-1 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: `${pct}%` }}></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              <div className="space-y-4">
                {stay.googleReviews.map((review, i) => (
                  <div key={i} className="bg-surface-container-lowest rounded-DEFAULT p-5 shadow-[0_4px_12px_rgba(26,26,24,0.03)]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-primary font-bold text-sm">{review.author[0]}</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-on-surface text-sm">{review.author}</p>
                        <div className="flex items-center gap-0.5 mt-0.5">
                          {[1,2,3,4,5].map(s => (
                            <span key={s} className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: `'FILL' ${s <= review.rating ? 1 : 0}`, color: '#1D9E75' }}>star</span>
                          ))}
                        </div>
                      </div>
                      <span className="text-on-surface-variant text-xs">{review.date}</span>
                    </div>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Location Tab */}
          {tab === 'location' && (
            <>
              {/* Address Card */}
              <section className="bg-surface-container-lowest rounded-DEFAULT p-5 shadow-[0_4px_16px_rgba(26,26,24,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  <h3 className="font-semibold text-on-surface">Address</h3>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed pl-8">{stay.address}</p>
              </section>

              {/* Faux Map */}
              <div className="rounded-DEFAULT overflow-hidden h-56 bg-[#e8eae6] relative border border-outline-variant/20 shadow-inner">
                <svg className="absolute inset-0 w-full h-full text-white" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path className="opacity-50" d="M 10 0 L 25 100 M 60 0 L 45 100 M 90 0 L 80 100 M 0 30 L 100 40 M 0 80 L 100 70" fill="none" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke"></path>
                  <path d="M -10 60 Q 50 40 110 50" fill="none" stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke"></path>
                  <path d="M 35 -10 Q 40 50 20 110" fill="none" stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke"></path>
                  <path d="M -10 85 Q 50 90 110 65" fill="none" stroke="#f2e8d5" strokeWidth="4" vectorEffect="non-scaling-stroke"></path>
                </svg>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full z-10 flex flex-col items-center">
                  <span className="material-symbols-outlined text-[40px] drop-shadow-md" style={{ fontVariationSettings: "'FILL' 1", color: stay.color }}>location_on</span>
                </div>
                {/* User location */}
                <div className="absolute left-[35%] top-[65%] -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-3 h-3 bg-[#4285F4] rounded-full border-2 border-white shadow-md relative">
                    <div className="absolute inset-0 bg-[#4285F4] rounded-full animate-ping opacity-60 scale-150"></div>
                  </div>
                </div>
              </div>

              {/* Nearby Facilities */}
              <section className="bg-surface-container-lowest rounded-DEFAULT p-5 shadow-[0_4px_16px_rgba(26,26,24,0.04)]">
                <h3 className="font-semibold text-on-surface mb-3">Nearby Safety Facilities</h3>
                <div className="space-y-3">
                  {[
                    { icon: 'local_police', label: 'Police Station', dist: '0.4 km', color: '#3b82f6' },
                    { icon: 'local_hospital', label: 'Hospital', dist: '1.1 km', color: '#ef4444' },
                    { icon: 'directions_transit', label: 'Metro Station', dist: '0.2 km', color: '#8b5cf6' },
                  ].map(f => (
                    <div key={f.label} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: `${f.color}20` }}>
                        <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1", color: f.color }}>{f.icon}</span>
                      </div>
                      <span className="flex-1 text-on-surface text-sm font-medium">{f.label}</span>
                      <span className="text-on-surface-variant text-sm">{f.dist}</span>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}
        </main>

        {/* Bottom CTA */}
        <div className="fixed md:absolute bottom-0 w-full max-w-lg px-6 pt-4 pb-8 bg-surface/90 backdrop-blur-xl z-40 shadow-[0_-8px_32px_rgba(28,28,26,0.06)]">
          <div className="flex gap-3">
            <Link href="/review/stay" className="flex-1 h-14 bg-gradient-to-br from-[#1D9E75] to-[#008560] text-on-primary rounded-full font-semibold text-[1rem] shadow-[0_8px_24px_rgba(29,158,117,0.25)] hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[20px]">done_all</span>
              Complete Stay
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StayDetail() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><span className="text-primary">Loading...</span></div>}>
      <StayDetailContent />
    </Suspense>
  );
}
