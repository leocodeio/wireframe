"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <div className="w-full max-w-lg md:max-w-4xl relative flex flex-col min-h-screen shadow-2xl bg-surface overflow-hidden">

{/*  TopAppBar  */}
<header className="sticky top-0 z-40 w-full bg-[#FCF9F5]/80 backdrop-blur-xl shadow-[0_8px_24px_rgba(26,26,24,0.04)]">
  <div className="flex items-center justify-between px-6 h-16 w-full max-w-lg md:max-w-4xl mx-auto">
    <div className="w-10 flex items-center">
      <Link href="/" className="text-[#1A1A18]/60 hover:opacity-80 transition-opacity active:scale-95 duration-200 flex items-center">
        <span className="material-symbols-outlined">arrow_back</span>
      </Link>
    </div>
    <h1 className="text-center flex-1 font-semibold text-xl text-[#1D9E75] font-['Inter'] tracking-tight">Offline Maps</h1>
    <div className="w-10 flex items-center justify-end">
      <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-high border-outline-variant/15 border flex items-center justify-center">
        <img alt="User profile avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAt3qCVOe87Tbu0MWNdNgAH25J6lV_4Qh2_xRZ7hFQInM-hD9z6EcXik8hXDCntS0JPN3j7NH438oMhipwFUsgK3EqAEE94f61Fmac_hYXQsF4HIRVCTwfpMALEIJ_YvH6-mOVGBytkqpnfdB-GXUsBk63COLvblYYCq0y_sZr5JB2StD-234lRvqw0odU9tdJRfxXfLfW_Jb1B6MjFpYgk3e4j_txmezI0LTK1iQs3w1lMSCSo4OoZ2WDdapbifqu1tNfl0pT6DU"/>
      </div>
    </div>
  </div>
</header>
{/*  Main Content Canvas  */}
<main className="flex-1 flex flex-col pb-24 overflow-y-auto">
  <div className="px-6 pt-6 mb-4">
    <p className="text-on-surface-variant text-sm mt-1">Navigate even without an internet connection.</p>
  </div>
{/*  Offline Indicator  */}
<div className="px-6 py-3 bg-error-container/60 backdrop-blur-md flex items-center gap-2">
<span className="material-symbols-outlined text-on-error-container text-sm" style={{ fontVariationSettings: '\'FILL\' 1' }}>wifi_off</span>
<p className="text-on-error-container font-label text-sm font-medium tracking-wide">Offline mode — Routing from cached data</p>
</div>
{/*  Map Area  */}
<div className="w-full h-[300px] relative bg-surface-variant/50 overflow-hidden">
<img alt="Map View" className="w-full h-full object-cover opacity-60 grayscale" data-alt="Monochrome textured map showing street grids and topography, soft lighting, desaturated, functional UI style" data-location="Tokyo, Japan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_mNtg-w-pCs5mkhZHjvsnJP8Z0RINg_iVB5nTjQqZNmPXcXW14lE613T-PikfP8PiG81aNCZYaYnZABMqQP6Hyg68mKFJHQmSwcjwFbO8wfv9zXq4qUmRDBIb-6xu6SEGXGGpiRxj2-7VOzWVCsY0O0Ym0txtvkMVzj-7ha_G69PkQg6eTiJATe_VM3PZ6DXr5sq-L1LYFypEJqrurZyKaBgqDlQ6agD_orybJkGJDa_9tZQ_WrR7g4xoOsuERA8771sjNWeomjs"/>
{/*  Current Location Pin  */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<div className="w-12 h-12 bg-primary-container/20 rounded-full flex items-center justify-center animate-pulse">
<div className="w-4 h-4 bg-primary rounded-full border-2 border-surface-container-lowest shadow-sm shadow-primary/20"></div>
</div>
</div>
{/*  Floating Action - Recenter  */}
<button className="absolute bottom-4 right-4 w-12 h-12 bg-surface-container-lowest/90 backdrop-blur-md rounded-full shadow-[0_8px_24px_rgba(26,26,24,0.08)] flex items-center justify-center text-on-surface active:scale-95 transition-transform">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>my_location</span>
</button>
</div>
{/*  Scrollable Content Below Map  */}
<div className="flex-1 px-6 pt-8 pb-12 flex flex-col gap-8">
{/*  Recent Locations  */}
<section className="flex flex-col gap-4">
<h2 className="font-headline text-lg font-semibold tracking-tight text-on-surface">Recent Destinations</h2>
<div className="flex flex-col gap-3">
{/*  Row 1  */}
<div className="bg-surface-container-lowest rounded-DEFAULT p-4 flex items-center gap-4 active:scale-[0.98] transition-transform">
<div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant shrink-0">
<span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: '\'FILL\' 0' }}>history</span>
</div>
<div className="flex-1 min-w-0">
<h3 className="font-body font-semibold text-on-surface truncate">Shibuya Crossing</h3>
<p className="font-label text-sm text-on-surface-variant truncate">2-2-1 Dogenzaka, Shibuya City</p>
</div>
<div className="flex flex-col items-end gap-1 shrink-0">
<span className="font-label text-xs font-medium text-on-surface-variant">2.4 km</span>
<button className="text-primary font-label text-sm font-semibold flex items-center gap-1 group">
                                Route
                                <span className="material-symbols-outlined text-sm group-active:translate-x-1 transition-transform" style={{ fontVariationSettings: '\'FILL\' 0' }}>arrow_forward</span>
</button>
</div>
</div>
{/*  Row 2  */}
<div className="bg-surface-container-lowest rounded-DEFAULT p-4 flex items-center gap-4 active:scale-[0.98] transition-transform">
<div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant shrink-0">
<span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: '\'FILL\' 0' }}>history</span>
</div>
<div className="flex-1 min-w-0">
<h3 className="font-body font-semibold text-on-surface truncate">Meiji Jingu</h3>
<p className="font-label text-sm text-on-surface-variant truncate">1-1 Yoyogikamizonocho, Shibuya City</p>
</div>
<div className="flex flex-col items-end gap-1 shrink-0">
<span className="font-label text-xs font-medium text-on-surface-variant">5.1 km</span>
<button className="text-primary font-label text-sm font-semibold flex items-center gap-1 group">
                                Route
                                <span className="material-symbols-outlined text-sm group-active:translate-x-1 transition-transform" style={{ fontVariationSettings: '\'FILL\' 0' }}>arrow_forward</span>
</button>
</div>
</div>
</div>
</section>
{/*  Offline Tools Grid  */}
<section className="flex flex-col gap-4 mt-2">
<h2 className="font-headline text-lg font-semibold tracking-tight text-on-surface">Offline Toolkit</h2>
<div className="grid grid-cols-2 gap-4">
{/*  Tool 1  */}
<button className="bg-transparent border border-outline-variant/20 rounded-DEFAULT p-4 flex flex-col items-start gap-3 active:scale-95 transition-transform hover:bg-surface-container-low">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>map</span>
</div>
<div className="text-left">
<h3 className="font-body font-semibold text-on-surface text-sm">Cached Maps</h3>
<p className="font-label text-xs text-on-surface-variant mt-0.5">Manage downloads</p>
</div>
</button>
{/*  Tool 2  */}
<Link className="bg-transparent border border-outline-variant/20 rounded-DEFAULT p-4 flex flex-col items-start gap-3 active:scale-95 transition-transform hover:bg-surface-container-low" href="/navigate/voice">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>translate</span>
</div>
<div className="text-left">
<h3 className="font-body font-semibold text-on-surface text-sm">Voice Translation</h3>
<p className="font-label text-xs text-on-surface-variant mt-0.5">Offline packs</p>
</div>
</Link>
</div>
</section>
</div>
</main>
{/*  BottomNavBar (Suppressed due to sub-page/focused journey intent, as per 'The Destination Rule' and 'Automatic Suppression' for task-focused sub-pages with back action)  */}

      </div>
    </div>
  );
}
