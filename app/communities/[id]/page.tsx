'use client';

import Link from 'next/link';
import { useState } from 'react';
import BottomNavBar from '../../components/BottomNavBar';

// ---------- types ----------
type Review = {
  id: number;
  author: string;
  avatar: string;
  rating: number;
  location: string;
  body: string;
  tags: string[];
  helpful: number;
  timeAgo: string;
};

type VibeMatch = {
  id: number;
  name: string;
  avatar: string;
  matchPct: number;
  sharedInterests: string[];
  currentLocation: string;
  goingTo: string;
  bio: string;
  isOnline: boolean;
};

// ---------- data ----------
const vibeMatches: VibeMatch[] = [
  {
    id: 1,
    name: 'Priya S.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-N_mwaOm-7QAh4-sOdUeddd58_LRxGO-sreWCAQTSZ5Vy0I952naEXEekRzQuRWsuBL-IC3quZ67iSNUzsI0JXWQ7P3r0SfrXKpUdxrX85s7jmSUtvXfGJCStcz00k3kzTeqAAou5KHk2abcFRRTxySqsmuQ9JAYqFA8tKeOzbvjPN9pKUsYsNlmD3ZfpA-FYkaVkBzSZUA8zlQe2aUrY1c6pzkAnOY_KjjF711HIRerzGydSgrJAxVlseD1wom6-KDvdE7IX8_g',
    matchPct: 94,
    sharedInterests: ['Solo Travel', 'Street Food', 'Photography'],
    currentLocation: 'Hyderabad, India',
    goingTo: 'Bali, Indonesia',
    bio: 'Budget traveller, photography nerd. Always chasing golden hour.',
    isOnline: true,
  },
  {
    id: 2,
    name: 'Lena M.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhKPljF2V3EBh0FwvqFVzoPM5ls6dHVlwSPfjaHYCcQT3CvkFc9E3MTZVjR_i8YLclHR-etQ7HrYt93v4kj-a_20CYKTuneZGDJCKp703xNjb9Kb0bD361LHZbjUvcgU0PoJZLeZ-NjjsIwIR_vZ_z0Xb1LFYGfiy5EMgaap9tRvKJx2Cl_7Fnfq8JHcr70Z5qaWDjGgxCd-9Mkvm7gJsEpUbkG6lSA212aztFrQdykbbm_OQ6KjFOi69t6039jTRXkIhZoVhMvBw',
    matchPct: 87,
    sharedInterests: ['Safety-First', 'Slow Travel', 'Night Markets'],
    currentLocation: 'Berlin, Germany',
    goingTo: 'Lisbon, Portugal',
    bio: 'Introvert who loves long walks and cosy bookshops. Slow travel evangelist.',
    isOnline: false,
  },
  {
    id: 3,
    name: 'Amara K.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASWgdvkY8_LmDtjzq72LzMn5cOa68PLREMo-AjqH4pN-y-1Mngs-eVi73Z2GdPvNwwwXRJN6n-tvy6cYcREfBDTqiy11nuW5yDMM1mIYZ7bvT0ndzErOAg74-_aRxgyt_c064aLJkcUO1Ps_CVeVeCf24Au5Lm_rTR4drCMccrJTvxLXqEppYSX8kbIedOxpotlPX1tLja8x6BMoDpOl-DwBXaHB3i13a40RaQASZc2Sjlh44dhJ7ik2r1K0Z_vZg7UAgMy_9f6qg',
    matchPct: 81,
    sharedInterests: ['Cultural Immersion', 'Solo Female Travel', 'Budgeting'],
    currentLocation: 'Nairobi, Kenya',
    goingTo: 'Marrakech, Morocco',
    bio: 'First-gen world explorer. Chasing stories, not selfies.',
    isOnline: true,
  },
];

const travelReviews: Review[] = [
  {
    id: 1,
    author: 'Sophie R.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-N_mwaOm-7QAh4-sOdUeddd58_LRxGO-sreWCAQTSZ5Vy0I952naEXEekRzQuRWsuBL-IC3quZ67iSNUzsI0JXWQ7P3r0SfrXKpUdxrX85s7jmSUtvXfGJCStcz00k3kzTeqAAou5KHk2abcFRRTxySqsmuQ9JAYqFA8tKeOzbvjPN9pKUsYsNlmD3ZfpA-FYkaVkBzSZUA8zlQe2aUrY1c6pzkAnOY_KjjF711HIRerzGydSgrJAxVlseD1wom6-KDvdE7IX8_g',
    rating: 5,
    location: 'Bali, Indonesia',
    body: 'Ubud was absolutely dreamy for solo women. Stayed in Canggu and felt completely safe walking around late. The community here directed me to the best warungs. Highly recommend the Monkey Forest after sunrise.',
    tags: ['Safe', 'Budget-Friendly', 'Scenic'],
    helpful: 47,
    timeAgo: '2 days ago',
  },
  {
    id: 2,
    author: 'Riya T.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhKPljF2V3EBh0FwvqFVzoPM5ls6dHVlwSPfjaHYCcQT3CvkFc9E3MTZVjR_i8YLclHR-etQ7HrYt93v4kj-a_20CYKTuneZGDJCKp703xNjb9Kb0bD361LHZbjUvcgU0PoJZLeZ-NjjsIwIR_vZ_z0Xb1LFYGfiy5EMgaap9tRvKJx2Cl_7Fnfq8JHcr70Z5qaWDjGgxCd-9Mkvm7gJsEpUbkG6lSA212aztFrQdykbbm_OQ6KjFOi69t6039jTRXkIhZoVhMvBw',
    rating: 4,
    location: 'Lisbon, Portugal',
    body: "Alfama is beautiful but hilly — wear good shoes! I had no issues as a solo woman. Nights in Bairro Alto were lively and well-lit. Some areas near Intendente felt a bit sketchy after midnight. Tram 28 is a must!",
    tags: ['Night Life', 'Walkable', 'Historic'],
    helpful: 34,
    timeAgo: '5 days ago',
  },
  {
    id: 3,
    author: 'Nadia C.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASWgdvkY8_LmDtjzq72LzMn5cOa68PLREMo-AjqH4pN-y-1Mngs-eVi73Z2GdPvNwwwXRJN6n-tvy6cYcREfBDTqiy11nuW5yDMM1mIYZ7bvT0ndzErOAg74-_aRxgyt_c064aLJkcUO1Ps_CVeVeCf24Au5Lm_rTR4drCMccrJTvxLXqEppYSX8kbIedOxpotlPX1tLja8x6BMoDpOl-DwBXaHB3i13a40RaQASZc2Sjlh44dhJ7ik2r1K0Z_vZg7UAgMy_9f6qg',
    rating: 5,
    location: 'Goa, India',
    body: "North Goa beach shacks are perfect for budget solo travel. The women's community here connected me with a local guide who took me to hidden beaches in Arambol. Safety was good during the day. Stay closer to main roads at night.",
    tags: ['Beach', 'Community-Led', 'Budget'],
    helpful: 58,
    timeAgo: '1 week ago',
  },
  {
    id: 4,
    author: 'Ingrid B.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhKPljF2V3EBh0FwvqFVzoPM5ls6dHVlwSPfjaHYCcQT3CvkFc9E3MTZVjR_i8YLclHR-etQ7HrYt93v4kj-a_20CYKTuneZGDJCKp703xNjb9Kb0bD361LHZbjUvcgU0PoJZLeZ-NjjsIwIR_vZ_z0Xb1LFYGfiy5EMgaap9tRvKJx2Cl_7Fnfq8JHcr70Z5qaWDjGgxCd-9Mkvm7gJsEpUbkG6lSA212aztFrQdykbbm_OQ6KjFOi69t6039jTRXkIhZoVhMvBw',
    rating: 3,
    location: 'Tokyo, Japan',
    body: "Super safe, almost shockingly so. Language barrier is real though — download Google Translate offline. Shinjuku nightlife was buzzing but respectful. Capsule hotels for women-only floors are a gem.",
    tags: ['Ultra-Safe', 'Language Gap', 'Urban'],
    helpful: 29,
    timeAgo: '2 weeks ago',
  },
];

const locationOptions = ['All Destinations', 'Bali', 'Lisbon', 'Goa', 'Tokyo'];

export default function CommunityDetailPage() {
  const [activeTab, setActiveTab] = useState<'vibes' | 'reviews'>('vibes');
  const [locationFilter, setLocationFilter] = useState('All Destinations');
  const [toast, setToast] = useState<{ msg: string; visible: boolean }>({ msg: '', visible: false });

  const showToast = (msg: string) => {
    setToast({ msg, visible: true });
    setTimeout(() => setToast({ msg: '', visible: false }), 2500);
  };

  const filteredReviews = locationFilter === 'All Destinations'
    ? travelReviews
    : travelReviews.filter(r => r.location.includes(locationFilter));

  const ratingColor = (r: number) => {
    if (r >= 5) return 'text-[#00694C]';
    if (r >= 4) return 'text-[#1565C0]';
    return 'text-[#E65100]';
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <div className="w-full max-w-lg md:max-w-4xl relative flex flex-col min-h-screen shadow-2xl bg-surface mx-auto">

        {/* Header */}
        <header className="sticky top-0 z-40 bg-[#FCF9F5]/90 backdrop-blur-2xl shadow-[0_4px_20px_rgba(26,26,24,0.07)] w-full">
          <div className="flex items-center justify-between px-6 py-4 h-16">
            <Link href="/communities" className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container transition-colors active:scale-95">
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </Link>
            <div className="flex flex-col items-center">
              <h1 className="text-on-surface font-semibold text-[1rem] tracking-tight leading-tight">Solo Women Travelers</h1>
              <p className="text-on-surface-variant text-[11px]">4,820 members</p>
            </div>
            <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-[22px]">more_vert</span>
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-outline-variant/20 px-6">
            {([
              { key: 'vibes', label: 'Vibe Matchers', icon: 'favorite' },
              { key: 'reviews', label: 'Place Reviews', icon: 'star' },
            ] as const).map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 py-3 text-[13px] font-semibold tracking-wide transition-colors border-b-2 -mb-px flex items-center justify-center gap-1.5 ${
                  activeTab === tab.key
                    ? 'border-primary text-primary'
                    : 'border-transparent text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]" style={activeTab === tab.key ? { fontVariationSettings: "'FILL' 1" } : {}}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </header>

        {/* Main */}
        <main className="flex-1 pb-28 pt-4 px-5 flex flex-col gap-4">

          {/* ——— VIBE MATCHERS ——— */}
          {activeTab === 'vibes' && (
            <>
              {/* Profile Match Banner */}
              <div className="bg-gradient-to-br from-[#1D9E75] to-[#005EA4] rounded-2xl p-5 text-white relative overflow-hidden shadow-md">
                <div className="absolute -top-6 -right-6 w-28 h-28 bg-white/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <p className="text-[11px] font-bold uppercase tracking-widest opacity-80">Based on your profile</p>
                  <h2 className="text-[1.4rem] font-bold mt-1 leading-tight">Your Vibe Matches</h2>
                  <p className="text-[13px] opacity-85 mt-1">Matched on: Safety-First · Solo Travel · Street Food</p>
                </div>
              </div>

              {/* Vibe Cards */}
              {vibeMatches.map(match => (
                <div key={match.id} className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-sm overflow-hidden">
                  <div className="p-5">
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      <div className="relative shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={match.avatar}
                          alt={match.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-surface shadow-md"
                        />
                        <div className={`absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full border-2 border-surface ${match.isOnline ? 'bg-[#1D9E75]' : 'bg-outline-variant'}`} />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-[16px] text-on-surface">{match.name}</h3>
                          {/* Match % pill */}
                          <span className={`text-[13px] font-black px-3 py-1 rounded-full ${
                            match.matchPct >= 90 ? 'bg-[#1D9E75]/15 text-[#00694C]' :
                            match.matchPct >= 85 ? 'bg-[#1565C0]/15 text-[#1565C0]' :
                            'bg-surface-container text-on-surface-variant'
                          }`}>
                            {match.matchPct}% Match
                          </span>
                        </div>

                        <p className="text-on-surface-variant text-[12px] mt-1 line-clamp-2 leading-relaxed">{match.bio}</p>

                        {/* Locations */}
                        <div className="flex items-center gap-3 mt-2 text-[12px] text-on-surface-variant">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[13px]">location_on</span>
                            {match.currentLocation}
                          </span>
                          <span className="text-outline-variant">→</span>
                          <span className="flex items-center gap-1 text-primary font-medium">
                            <span className="material-symbols-outlined text-[13px]">flight_takeoff</span>
                            {match.goingTo}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Match % bar */}
                    <div className="mt-4">
                      <div className="flex justify-between text-[11px] text-on-surface-variant mb-1.5">
                        <span>Compatibility</span>
                        <span className="font-semibold text-primary">{match.matchPct}%</span>
                      </div>
                      <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#1D9E75] to-[#005EA4] transition-all duration-700"
                          style={{ width: `${match.matchPct}%` }}
                        />
                      </div>
                    </div>

                    {/* Shared Interests */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {match.sharedInterests.map(i => (
                        <span key={i} className="px-2.5 py-1 bg-primary/10 text-primary rounded-full text-[11px] font-semibold border border-primary/20">
                          {i}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex border-t border-outline-variant/20">
                    <button
                      onClick={() => showToast(`Message sent to ${match.name}!`)}
                      className="flex-1 py-3 text-[13px] font-semibold text-on-surface-variant hover:bg-surface-container transition-colors flex items-center justify-center gap-1.5 active:scale-95"
                    >
                      <span className="material-symbols-outlined text-[18px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                      Message
                    </button>
                    <div className="w-px bg-outline-variant/20" />
                    <button
                      onClick={() => showToast(`Travel request sent to ${match.name}!`)}
                      className="flex-1 py-3 text-[13px] font-semibold text-primary hover:bg-primary/5 transition-colors flex items-center justify-center gap-1.5 active:scale-95"
                    >
                      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>travel_explore</span>
                      Travel Together
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}

          {/* ——— PLACE REVIEWS ——— */}
          {activeTab === 'reviews' && (
            <>
              {/* Location Filter Chips */}
              <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1">
                {locationOptions.map(loc => (
                  <button
                    key={loc}
                    onClick={() => setLocationFilter(loc)}
                    className={`shrink-0 px-4 py-2 rounded-full text-[13px] font-semibold border transition-all active:scale-95 ${
                      locationFilter === loc
                        ? 'bg-primary text-white border-primary shadow-sm'
                        : 'bg-surface-container-lowest text-on-surface-variant border-outline-variant/30 hover:border-primary/40'
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>

              {filteredReviews.length === 0 && (
                <div className="flex flex-col items-center gap-3 py-16 text-center">
                  <span className="material-symbols-outlined text-[40px] text-on-surface-variant">reviews</span>
                  <p className="text-on-surface-variant text-[14px]">No reviews for this destination yet.<br/>Be the first to share!</p>
                </div>
              )}

              {filteredReviews.map(review => (
                <div key={review.id} className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-sm p-5 flex flex-col gap-3">
                  {/* Author Row */}
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={review.avatar} alt={review.author} className="w-10 h-10 rounded-full object-cover border border-outline-variant/30" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[14px] text-on-surface">{review.author}</span>
                        <span className="text-[11px] text-on-surface-variant">{review.timeAgo}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span
                              key={i}
                              className={`material-symbols-outlined text-[14px] ${i < review.rating ? 'text-[#E65100]' : 'text-outline-variant'}`}
                              style={i < review.rating ? { fontVariationSettings: "'FILL' 1" } : {}}
                            >
                              star
                            </span>
                          ))}
                        </div>
                        <span className={`text-[12px] font-semibold ${ratingColor(review.rating)}`}>{review.rating}.0</span>
                      </div>
                    </div>
                  </div>

                  {/* Location Pill */}
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                    <span className="text-[13px] font-semibold text-primary">{review.location}</span>
                  </div>

                  {/* Body */}
                  <p className="text-on-surface text-[14px] leading-relaxed">{review.body}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {review.tags.map(t => (
                      <span key={t} className="px-2.5 py-1 bg-surface-container text-on-surface-variant rounded-full text-[11px] font-medium border border-outline-variant/30">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Helpful */}
                  <div className="flex items-center justify-between border-t border-outline-variant/15 pt-3">
                    <button
                      onClick={() => showToast('Marked as helpful!')}
                      className="flex items-center gap-1.5 text-[12px] font-medium text-on-surface-variant hover:text-primary transition-colors active:scale-95"
                    >
                      <span className="material-symbols-outlined text-[16px]">thumb_up</span>
                      Helpful ({review.helpful})
                    </button>
                    <button
                      onClick={() => showToast('Reply feature coming soon!')}
                      className="flex items-center gap-1 text-[12px] font-medium text-on-surface-variant hover:text-primary transition-colors active:scale-95"
                    >
                      <span className="material-symbols-outlined text-[16px]">reply</span>
                      Reply
                    </button>
                  </div>
                </div>
              ))}

              {/* Add Review CTA */}
              <button
                onClick={() => showToast('Review form coming soon!')}
                className="w-full py-4 bg-primary text-white rounded-2xl font-bold text-[15px] flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-md mt-2"
              >
                <span className="material-symbols-outlined text-[20px]">rate_review</span>
                Write a Review
              </button>
            </>
          )}
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
