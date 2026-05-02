'use client';

import Link from 'next/link';
import { useState } from 'react';
import BottomNavBar from '../components/BottomNavBar';

type Community = {
  id: string;
  name: string;
  description: string;
  members: number;
  tags: string[];
  icon: string;
  color: string;
  bgColor: string;
  joined: boolean;
  destinations: string[];
};

const allCommunities: Community[] = [
  {
    id: 'solo-women',
    name: 'Solo Women Travelers',
    description: 'A safe space for women exploring the world alone. Share tips, find vibe matches & stay connected.',
    members: 4820,
    tags: ['Safety', 'Sisterhood', 'Adventure'],
    icon: 'group',
    color: '#D4507A',
    bgColor: '#FFF0F4',
    joined: true,
    destinations: ['Bali', 'Lisbon', 'Tokyo', 'Goa'],
  },
  {
    id: 'budget-explorers',
    name: 'Budget Explorers',
    description: 'Travel more, spend less. Hacks, deals, and companions for the thrifty wanderer.',
    members: 9210,
    tags: ['Budget', 'Backpacking', 'Hostels'],
    icon: 'savings',
    color: '#00694C',
    bgColor: '#F0FBF5',
    joined: true,
    destinations: ['Southeast Asia', 'Eastern Europe', 'Morocco'],
  },
  {
    id: 'digital-nomads',
    name: 'Digital Nomads',
    description: 'Work from anywhere. Find co-working spaces, wifi cafés and long-stay accommodation worldwide.',
    members: 13450,
    tags: ['Remote Work', 'Cafés', 'Coliving'],
    icon: 'laptop_mac',
    color: '#1565C0',
    bgColor: '#F0F4FF',
    joined: false,
    destinations: ['Chiang Mai', 'Medellín', 'Tbilisi'],
  },
  {
    id: 'heritage-trails',
    name: 'Heritage & Culture Trails',
    description: 'For travellers who seek history, architecture, local cuisine and authentic cultural immersion.',
    members: 6730,
    tags: ['Culture', 'History', 'Food'],
    icon: 'account_balance',
    color: '#6D4C41',
    bgColor: '#FDF5F0',
    joined: false,
    destinations: ['India', 'Italy', 'Egypt', 'Peru'],
  },
  {
    id: 'adventure-seekers',
    name: 'Adventure Seekers',
    description: 'Treks, dives, climbs and everything in between. Connect with adrenaline-loving explorers.',
    members: 7890,
    tags: ['Trekking', 'Diving', 'Extreme'],
    icon: 'hiking',
    color: '#E65100',
    bgColor: '#FFF8F0',
    joined: false,
    destinations: ['Nepal', 'Patagonia', 'New Zealand'],
  },
  {
    id: 'slow-travel',
    name: 'Slow Travel Movement',
    description: 'Live like a local. Stay longer, explore deeper, connect more meaningfully wherever you are.',
    members: 3150,
    tags: ['Slow Living', 'Community', 'Immersive'],
    icon: 'spa',
    color: '#00838F',
    bgColor: '#F0FBFC',
    joined: true,
    destinations: ['Portugal', 'Sri Lanka', 'Oaxaca'],
  },
];

export default function CommunitiesPage() {
  const [communities, setCommunities] = useState(allCommunities);
  const [activeTab, setActiveTab] = useState<'mine' | 'discover'>('mine');
  const [toast, setToast] = useState<{ msg: string; visible: boolean }>({ msg: '', visible: false });

  const showToast = (msg: string) => {
    setToast({ msg, visible: true });
    setTimeout(() => setToast({ msg: '', visible: false }), 2800);
  };

  const toggleJoin = (id: string) => {
    setCommunities(prev =>
      prev.map(c => {
        if (c.id !== id) return c;
        const next = { ...c, joined: !c.joined };
        showToast(next.joined ? `Joined "${c.name}"` : `Left "${c.name}"`);
        return next;
      })
    );
  };

  const displayed = activeTab === 'mine'
    ? communities.filter(c => c.joined)
    : communities.filter(c => !c.joined);

  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <div className="w-full max-w-lg md:max-w-4xl relative flex flex-col min-h-screen shadow-2xl bg-surface mx-auto">
        
        {/* Header */}
        <header className="sticky top-0 z-40 bg-[#FCF9F5]/90 backdrop-blur-2xl shadow-[0_4px_20px_rgba(26,26,24,0.07)] w-full">
          <div className="flex items-center justify-between px-6 py-4 h-16">
            <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container transition-colors active:scale-95">
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </Link>
            <h1 className="text-on-surface font-semibold text-[1.125rem] tracking-tight">Communities</h1>
            <div className="w-10" />
          </div>

          {/* Tabs */}
          <div className="flex border-b border-outline-variant/20 px-6">
            {(['mine', 'discover'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 text-[14px] font-semibold tracking-wide transition-colors border-b-2 -mb-px ${
                  activeTab === tab
                    ? 'border-primary text-primary'
                    : 'border-transparent text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {tab === 'mine' ? 'My Communities' : 'Discover'}
              </button>
            ))}
          </div>
        </header>

        {/* Main */}
        <main className="flex-1 pb-28 pt-4 px-5 flex flex-col gap-4">

          {displayed.length === 0 && (
            <div className="flex flex-col items-center gap-4 py-20 text-center">
              <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center">
                <span className="material-symbols-outlined text-[36px] text-on-surface-variant">group_off</span>
              </div>
              <p className="text-on-surface-variant text-[15px] max-w-[240px]">
                {activeTab === 'mine'
                  ? "You haven't joined any communities yet. Discover some below!"
                  : "You've joined all available communities!"}
              </p>
              {activeTab === 'mine' && (
                <button
                  onClick={() => setActiveTab('discover')}
                  className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold text-[14px] active:scale-95 transition-transform"
                >
                  Discover Communities
                </button>
              )}
            </div>
          )}

          {displayed.map(community => (
            <div
              key={community.id}
              className="rounded-2xl overflow-hidden border border-outline-variant/20 shadow-sm bg-surface-container-lowest"
            >
              {/* Card Header */}
              <div className="p-5 flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: community.bgColor }}
                >
                  <span
                    className="material-symbols-outlined text-[24px]"
                    style={{ color: community.color, fontVariationSettings: "'FILL' 1" }}
                  >
                    {community.icon}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h2 className="font-bold text-[16px] text-on-surface leading-tight">{community.name}</h2>
                      <p className="text-on-surface-variant text-[13px] mt-0.5 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px]">group</span>
                        {community.members.toLocaleString()} members
                      </p>
                    </div>
                    {community.joined && (
                      <span className="shrink-0 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full border border-primary/20">
                        Joined
                      </span>
                    )}
                  </div>

                  <p className="text-on-surface-variant text-[13px] mt-2 leading-relaxed line-clamp-2">
                    {community.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {community.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-surface-container text-on-surface-variant rounded-full text-[11px] font-medium border border-outline-variant/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Destinations */}
              <div className="px-5 pb-3 flex items-center gap-2 overflow-x-auto scrollbar-none">
                <span className="material-symbols-outlined text-[14px] text-on-surface-variant shrink-0">pin_drop</span>
                <div className="flex gap-2">
                  {community.destinations.map(d => (
                    <span
                      key={d}
                      className="shrink-0 px-2.5 py-1 rounded-full text-[11px] font-semibold border"
                      style={{ color: community.color, borderColor: community.color + '40', background: community.bgColor }}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 px-5 pb-5 pt-2">
                {community.joined && (
                  <Link
                    href={`/communities/${community.id}`}
                    className="flex-1 py-3 bg-primary text-white rounded-xl text-[14px] font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-sm"
                  >
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    Enter
                  </Link>
                )}
                <button
                  onClick={() => toggleJoin(community.id)}
                  className={`flex-1 py-3 rounded-xl text-[14px] font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition-all border ${
                    community.joined
                      ? 'bg-surface-container border-outline-variant text-error hover:bg-error-container/30'
                      : 'bg-primary text-white border-transparent shadow-sm'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {community.joined ? 'exit_to_app' : 'add'}
                  </span>
                  {community.joined ? 'Leave' : 'Join'}
                </button>
              </div>
            </div>
          ))}
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
