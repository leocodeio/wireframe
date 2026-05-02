'use client';

import Link from 'next/link';
import { useState } from 'react';
import BottomNavBar from '../components/BottomNavBar';

type Host = {
  id: number;
  name: string;
  avatar: string;
  location: string;
  city: string;
  country: string;
  rating: number;
  reviewCount: number;
  languages: string[];
  accommodationType: string;
  capacity: number;
  availability: 'available' | 'limited' | 'full';
  perks: string[];
  bio: string;
  isVerified: boolean;
  responseTime: string;
  hosted: number;
};

const hosts: Host[] = [
  {
    id: 1,
    name: 'Kavitha N.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-N_mwaOm-7QAh4-sOdUeddd58_LRxGO-sreWCAQTSZ5Vy0I952naEXEekRzQuRWsuBL-IC3quZ67iSNUzsI0JXWQ7P3r0SfrXKpUdxrX85s7jmSUtvXfGJCStcz00k3kzTeqAAou5KHk2abcFRRTxySqsmuQ9JAYqFA8tKeOzbvjPN9pKUsYsNlmD3ZfpA-FYkaVkBzSZUA8zlQe2aUrY1c6pzkAnOY_KjjF711HIRerzGydSgrJAxVlseD1wom6-KDvdE7IX8_g',
    location: 'Indiranagar, Bengaluru',
    city: 'Bengaluru',
    country: 'India',
    rating: 4.9,
    reviewCount: 38,
    languages: ['English', 'Kannada', 'Hindi'],
    accommodationType: 'Private Room',
    capacity: 2,
    availability: 'available',
    perks: ['Home-cooked meals', 'City tours', 'Airport pickup', 'Laundry'],
    bio: 'I love hosting solo women travellers! You\'ll get a peaceful private room, home-cooked South Indian food, and a genuine Bengaluru experience. I\'ve hosted 38 guests and counting.',
    isVerified: true,
    responseTime: '< 1 hour',
    hosted: 38,
  },
  {
    id: 2,
    name: 'Marco V.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhKPljF2V3EBh0FwvqFVzoPM5ls6dHVlwSPfjaHYCcQT3CvkFc9E3MTZVjR_i8YLclHR-etQ7HrYt93v4kj-a_20CYKTuneZGDJCKp703xNjb9Kb0bD361LHZbjUvcgU0PoJZLeZ-NjjsIwIR_vZ_z0Xb1LFYGfiy5EMgaap9tRvKJx2Cl_7Fnfq8JHcr70Z5qaWDjGgxCd-9Mkvm7gJsEpUbkG6lSA212aztFrQdykbbm_OQ6KjFOi69t6039jTRXkIhZoVhMvBw',
    location: 'Alfama District, Lisbon',
    city: 'Lisbon',
    country: 'Portugal',
    rating: 4.8,
    reviewCount: 61,
    languages: ['English', 'Portuguese', 'Spanish'],
    accommodationType: 'Shared Apartment',
    capacity: 3,
    availability: 'limited',
    perks: ['Wifi + co-working desk', 'Local guide', 'Rooftop terrace', 'Bike rental'],
    bio: 'Living in Alfama since birth. I host travellers who want the real Lisbon — not the tourist traps. Join me for Fado nights and explore the city like a local.',
    isVerified: true,
    responseTime: '< 2 hours',
    hosted: 61,
  },
  {
    id: 3,
    name: 'Wayan S.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASWgdvkY8_LmDtjzq72LzMn5cOa68PLREMo-AjqH4pN-y-1Mngs-eVi73Z2GdPvNwwwXRJN6n-tvy6cYcREfBDTqiy11nuW5yDMM1mIYZ7bvT0ndzErOAg74-_aRxgyt_c064aLJkcUO1Ps_CVeVeCf24Au5Lm_rTR4drCMccrJTvxLXqEppYSX8kbIedOxpotlPX1tLja8x6BMoDpOl-DwBXaHB3i13a40RaQASZc2Sjlh44dhJ7ik2r1K0Z_vZg7UAgMy_9f6qg',
    location: 'Ubud, Bali',
    city: 'Ubud',
    country: 'Indonesia',
    rating: 5.0,
    reviewCount: 92,
    languages: ['English', 'Balinese', 'Indonesian'],
    accommodationType: 'Traditional Villa Room',
    capacity: 1,
    availability: 'full',
    perks: ['Yoga sessions', 'Breakfast included', 'Temple visits', 'Motorbike rental'],
    bio: 'Balinese artist offering a room in our family compound surrounded by rice paddies. Experience authentic Balinese rituals, ceremonies and culture. Full board available.',
    isVerified: true,
    responseTime: '< 3 hours',
    hosted: 92,
  },
  {
    id: 4,
    name: 'Amina B.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhKPljF2V3EBh0FwvqFVzoPM5ls6dHVlwSPfjaHYCcQT3CvkFc9E3MTZVjR_i8YLclHR-etQ7HrYt93v4kj-a_20CYKTuneZGDJCKp703xNjb9Kb0bD361LHZbjUvcgU0PoJZLeZ-NjjsIwIR_vZ_z0Xb1LFYGfiy5EMgaap9tRvKJx2Cl_7Fnfq8JHcr70Z5qaWDjGgxCd-9Mkvm7gJsEpUbkG6lSA212aztFrQdykbbm_OQ6KjFOi69t6039jTRXkIhZoVhMvBw',
    location: 'Medina, Marrakech',
    city: 'Marrakech',
    country: 'Morocco',
    rating: 4.7,
    reviewCount: 44,
    languages: ['English', 'Arabic', 'French', 'Darija'],
    accommodationType: 'Riad Room',
    capacity: 2,
    availability: 'available',
    perks: ['Rooftop breakfast', 'Souk tours', 'Hammam visits', 'Cooking class'],
    bio: 'We open our riad to travellers seeking authentic Morocco. Our family is multi-generational Marrakchi. You\'ll feel at home while exploring the magic of the Medina.',
    isVerified: true,
    responseTime: '< 4 hours',
    hosted: 44,
  },
];

const availabilityStyle: Record<Host['availability'], { label: string; color: string; bg: string }> = {
  available:  { label: 'Available', color: '#00694C', bg: '#F0FBF5' },
  limited:    { label: 'Limited',   color: '#E65100', bg: '#FFF8F0' },
  full:       { label: 'Full',      color: '#757575', bg: '#F5F5F5' },
};

const cityOptions = ['All Cities', 'Bengaluru', 'Lisbon', 'Ubud', 'Marrakech'];

export default function VolunteerStayPage() {
  const [cityFilter, setCityFilter] = useState('All Cities');
  const [toast, setToast] = useState<{ msg: string; visible: boolean }>({ msg: '', visible: false });

  const showToast = (msg: string) => {
    setToast({ msg, visible: true });
    setTimeout(() => setToast({ msg: '', visible: false }), 2500);
  };

  const displayed = cityFilter === 'All Cities'
    ? hosts
    : hosts.filter(h => h.city === cityFilter);

  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <div className="w-full max-w-lg md:max-w-4xl relative flex flex-col min-h-screen shadow-2xl bg-surface mx-auto">

        {/* Header */}
        <header className="sticky top-0 z-40 bg-[#FCF9F5]/90 backdrop-blur-2xl shadow-[0_4px_20px_rgba(26,26,24,0.07)] w-full">
          <div className="flex items-center justify-between px-6 py-4 h-16">
            <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container transition-colors active:scale-95">
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </Link>
            <h1 className="text-on-surface font-semibold text-[1.125rem] tracking-tight">Volunteer Stays</h1>
            <div className="w-10" />
          </div>
        </header>

        {/* Main */}
        <main className="flex-1 pb-28 pt-4 px-5 flex flex-col gap-4">

          {/* Hero Banner */}
          <div className="bg-gradient-to-br from-[#005EA4] to-[#1D9E75] rounded-2xl p-6 text-white relative overflow-hidden shadow-md">
            <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-white/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>home_heart</span>
                <span className="text-[11px] font-bold uppercase tracking-widest opacity-80">Community Hosting</span>
              </div>
              <h2 className="text-[1.5rem] font-bold leading-tight">Stay with locals,<br/>not strangers.</h2>
              <p className="text-[13px] opacity-85 mt-2 leading-relaxed">
                Verified community volunteers open their homes to fellow travellers. 100% free or donation-based.
              </p>
              <div className="flex items-center gap-4 mt-4 text-[12px]">
                <span className="flex items-center gap-1 bg-white/20 px-2.5 py-1 rounded-full">
                  <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  ID Verified
                </span>
                <span className="flex items-center gap-1 bg-white/20 px-2.5 py-1 rounded-full">
                  <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
                  Community Vetted
                </span>
              </div>
            </div>
          </div>

          {/* City Filter */}
          <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1">
            {cityOptions.map(city => (
              <button
                key={city}
                onClick={() => setCityFilter(city)}
                className={`shrink-0 px-4 py-2 rounded-full text-[13px] font-semibold border transition-all active:scale-95 ${
                  cityFilter === city
                    ? 'bg-primary text-white border-primary shadow-sm'
                    : 'bg-surface-container-lowest text-on-surface-variant border-outline-variant/30 hover:border-primary/40'
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Host Cards */}
          {displayed.map(host => {
            const avail = availabilityStyle[host.availability];
            return (
              <div key={host.id} className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-sm overflow-hidden">
                {/* Top section */}
                <div className="p-5 flex flex-col gap-4">
                  {/* Profile Row */}
                  <div className="flex items-start gap-4">
                    <div className="relative shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={host.avatar}
                        alt={host.name}
                        className="w-16 h-16 rounded-2xl object-cover border-2 border-surface shadow-md"
                      />
                      {host.isVerified && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full border-2 border-surface flex items-center justify-center">
                          <span className="material-symbols-outlined text-white text-[11px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-bold text-[16px] text-on-surface">{host.name}</h3>
                          <p className="text-on-surface-variant text-[12px] flex items-center gap-1 mt-0.5">
                            <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                            {host.location}
                          </p>
                        </div>
                        {/* Availability badge */}
                        <span
                          className="text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full border"
                          style={{ color: avail.color, background: avail.bg, borderColor: avail.color + '40' }}
                        >
                          {avail.label}
                        </span>
                      </div>

                      {/* Rating + stats */}
                      <div className="flex items-center gap-3 mt-2 text-[12px]">
                        <span className="flex items-center gap-1 font-semibold text-on-surface">
                          <span className="material-symbols-outlined text-[14px] text-[#E65100]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          {host.rating} ({host.reviewCount})
                        </span>
                        <span className="w-1 h-1 rounded-full bg-outline-variant" />
                        <span className="text-on-surface-variant">{host.hosted} guests hosted</span>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-on-surface text-[13px] leading-relaxed line-clamp-3">{host.bio}</p>

                  {/* Accommodation info */}
                  <div className="flex items-center gap-4 text-[12px]">
                    <span className="flex items-center gap-1.5 bg-surface-container px-3 py-1.5 rounded-full text-on-surface font-medium border border-outline-variant/20">
                      <span className="material-symbols-outlined text-[14px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>bed</span>
                      {host.accommodationType}
                    </span>
                    <span className="flex items-center gap-1.5 bg-surface-container px-3 py-1.5 rounded-full text-on-surface font-medium border border-outline-variant/20">
                      <span className="material-symbols-outlined text-[14px] text-primary">people</span>
                      Up to {host.capacity}
                    </span>
                    <span className="flex items-center gap-1.5 bg-surface-container px-3 py-1.5 rounded-full text-on-surface font-medium border border-outline-variant/20">
                      <span className="material-symbols-outlined text-[14px] text-primary">schedule</span>
                      {host.responseTime}
                    </span>
                  </div>

                  {/* Languages */}
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant mb-2">Speaks</p>
                    <div className="flex flex-wrap gap-1.5">
                      {host.languages.map(lang => (
                        <span key={lang} className="px-2.5 py-1 bg-surface-container text-on-surface-variant rounded-full text-[11px] font-medium border border-outline-variant/30">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Perks */}
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant mb-2">What&apos;s Included</p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {host.perks.map(perk => (
                        <span key={perk} className="flex items-center gap-1.5 text-[12px] text-on-surface">
                          <span className="material-symbols-outlined text-[14px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                          {perk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex border-t border-outline-variant/20">
                  <button
                    onClick={() => showToast(`Message sent to ${host.name}!`)}
                    className="flex-1 py-3.5 text-[13px] font-semibold text-on-surface-variant hover:bg-surface-container transition-colors flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    <span className="material-symbols-outlined text-[18px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                    Message
                  </button>
                  <div className="w-px bg-outline-variant/20" />
                  <button
                    disabled={host.availability === 'full'}
                    onClick={() => showToast(host.availability === 'full' ? '' : `Stay request sent to ${host.name}!`)}
                    className={`flex-1 py-3.5 text-[13px] font-semibold transition-colors flex items-center justify-center gap-1.5 active:scale-95 ${
                      host.availability === 'full'
                        ? 'text-outline-variant cursor-not-allowed'
                        : 'text-primary hover:bg-primary/5'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
                    {host.availability === 'full' ? 'Unavailable' : 'Request Stay'}
                  </button>
                </div>
              </div>
            );
          })}

          {/* Register as Host CTA */}
          <div className="mt-2 bg-surface-container-lowest border border-primary/20 rounded-2xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[24px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>add_home</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-[15px] text-on-surface">Become a Host</h3>
              <p className="text-on-surface-variant text-[12px] mt-0.5">Open your home to fellow travellers in your community.</p>
            </div>
            <button
              onClick={() => showToast('Host registration coming soon!')}
              className="shrink-0 bg-primary text-white px-4 py-2.5 rounded-xl text-[13px] font-bold active:scale-95 transition-transform shadow-sm"
            >
              Join
            </button>
          </div>
        </main>

        {/* Toast */}
        {toast.visible && (
          <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[100] bg-on-surface text-surface px-5 py-3 rounded-full text-[14px] font-medium shadow-xl flex items-center gap-2 animate-dropdown">
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            {toast.msg}
          </div>
        )}

        <BottomNavBar />
      </div>
    </div>
  );
}
