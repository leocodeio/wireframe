"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <div className="w-full max-w-lg md:max-w-4xl relative flex flex-col min-h-screen shadow-2xl bg-surface overflow-hidden">

<div className="w-full max-w-[400px] min-h-screen flex flex-col relative overflow-hidden bg-background shadow-2xl mx-auto">
{/*  TopAppBar  */}
<header className="bg-[#FCF9F5]/80  backdrop-blur-xl docked full-width top-0 shadow-[0_8px_24px_rgba(26,26,24,0.08)]  flex justify-between items-center w-full px-6 py-4 sticky z-40 no-border">
<button aria-label="Back" className="text-on-surface hover:opacity-80 transition-opacity active:scale-95 duration-200" onClick={() => router.back()}>
<span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
</button>
<h1 className="text-[#1D9E75]  font-['Inter'] font-semibold tracking-tight text-xl font-bold">Pulse Translate</h1>
<div className="w-10"></div>
</header>
{/*  Main Canvas  */}
<main className="flex-1 overflow-y-auto px-5 py-6 space-y-6 flex flex-col w-full relative z-10">
{/*  Connectivity Banner  */}
<div className="bg-surface-container-high/60 backdrop-blur-md rounded-full py-2 px-4 flex items-center justify-center gap-2 self-center inline-flex shrink-0">
<div aria-hidden="true" className="w-2 h-2 rounded-full bg-error"></div>
<span className="font-label text-xs font-medium text-on-surface-variant tracking-wide">Offline Mode - Local Translation Active</span>
</div>
{/*  Language Selector  */}
<div className="flex items-center justify-between bg-surface-container-lowest rounded-DEFAULT p-3 shadow-[0_4px_12px_rgba(26,26,24,0.04)] shrink-0">
<button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg hover:bg-surface-container-low transition-colors text-on-surface font-medium text-sm">
                    English
                    <span className="material-symbols-outlined text-[20px]" data-icon="arrow_drop_down">arrow_drop_down</span>
</button>
<button aria-label="Swap languages" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0 hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="sync_alt">sync_alt</span>
</button>
<button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg hover:bg-surface-container-low transition-colors text-on-surface font-medium text-sm">
                    Hindi
                    <span className="material-symbols-outlined text-[20px]" data-icon="arrow_drop_down">arrow_drop_down</span>
</button>
</div>
{/*  Tap to Translate Area  */}
<div className="flex flex-col items-center justify-center py-4 shrink-0">
<button className="w-32 h-32 shrink-0 rounded-full bg-gradient-to-br from-[#1D9E75] to-[#008560] flex items-center justify-center shadow-[0_12px_32px_rgba(29,158,117,0.3)] text-on-primary hover:opacity-90 active:scale-95 transition-all relative">
<div className="absolute inset-0 rounded-full bg-white/10 blur-xl opacity-0 hover:opacity-100 transition-opacity"></div>
<span className="material-symbols-outlined text-[48px]" data-icon="mic" data-weight="fill" style={{ fontVariationSettings: '\'FILL\' 1' }}>mic</span>
</button>
<p className="mt-6 font-headline text-lg font-semibold text-on-surface">Tap to Translate</p>
{/*  Visual wave-form indicator  */}
<div className="flex items-center justify-center gap-1.5 mt-4 h-6">
<div className="w-1 h-2 bg-primary/20 rounded-full"></div>
<div className="w-1 h-4 bg-primary/40 rounded-full"></div>
<div className="w-1 h-3 bg-primary/30 rounded-full"></div>
<div className="w-1.5 h-6 bg-primary rounded-full"></div>
<div className="w-1 h-3 bg-primary/30 rounded-full"></div>
<div className="w-1 h-4 bg-primary/40 rounded-full"></div>
<div className="w-1 h-2 bg-primary/20 rounded-full"></div>
</div>
</div>
{/*  Translated Text Area  */}
<div className="bg-surface-container-lowest rounded-DEFAULT p-6 shadow-[0_4px_16px_rgba(26,26,24,0.06)] flex flex-col gap-4 shrink-0">
<div className="flex flex-col gap-2 min-h-[4rem]">
<span className="font-label text-xs text-on-surface-variant font-medium tracking-wide">English</span>
<p className="font-body text-base text-on-surface opacity-60">Listening...</p>
</div>
<div className="h-px w-full bg-surface-container-high shrink-0"></div>
<div className="flex flex-col gap-2 min-h-[4rem]">
<span className="font-label text-xs text-primary font-medium tracking-wide">Hindi</span>
<p className="font-body text-lg text-on-surface font-medium text-surface-dim">Translation will appear here</p>
</div>
</div>
{/*  Quick Phrases Section  */}
<div className="flex flex-col gap-4 pt-2 pb-8 shrink-0">
<h3 className="font-headline text-sm font-semibold text-on-surface-variant px-1">Quick Phrases</h3>
<div className="flex flex-wrap gap-2">
<button className="bg-surface-container-low border border-outline-variant/20 rounded-full px-4 py-2 font-label text-sm text-on-surface hover:bg-surface-container transition-colors shadow-sm">
                        Where is the police station?
                    </button>
<button className="bg-surface-container-low border border-outline-variant/20 rounded-full px-4 py-2 font-label text-sm text-on-surface hover:bg-surface-container transition-colors shadow-sm">
                        I need help
                    </button>
<button className="bg-surface-container-low border border-outline-variant/20 rounded-full px-4 py-2 font-label text-sm text-on-surface hover:bg-surface-container transition-colors shadow-sm">
                        Call a doctor
                    </button>
<button className="bg-surface-container-low border border-outline-variant/20 rounded-full px-4 py-2 font-label text-sm text-on-surface hover:bg-surface-container transition-colors shadow-sm">
                        Lost my passport
                    </button>
</div>
</div>
</main>
  </div>

      </div>
    </div>
  );
}
