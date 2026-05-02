import Link from 'next/link';

export default function TravelPrice() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <div className="w-full max-w-lg md:max-w-4xl relative flex flex-col min-h-screen shadow-2xl bg-surface bg-background text-on-background pb-[100px]" style={{ minHeight: 'max(884px, 100dvh)' }}>
        {/* Header */}
        <header className="sticky top-0 z-40 w-full bg-[#FCF9F5]/80 backdrop-blur-xl shadow-[0_8px_24px_rgba(26,26,24,0.04)]">
          <div className="flex items-center justify-between px-6 h-16 w-full max-w-lg md:max-w-4xl mx-auto">
            <div className="w-10 flex items-center">
              <Link href="/" className="text-[#1A1A18]/60 hover:opacity-80 transition-opacity active:scale-95 duration-200 flex items-center">
                <span className="material-symbols-outlined">arrow_back</span>
              </Link>
            </div>
            <h1 className="text-center flex-1 font-semibold text-xl text-[#1D9E75] font-['Inter'] tracking-tight">Travel Price</h1>
            <div className="w-10 flex items-center justify-end">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-high border-outline-variant/15 border flex items-center justify-center">
                <img alt="User profile avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAt3qCVOe87Tbu0MWNdNgAH25J6lV_4Qh2_xRZ7hFQInM-hD9z6EcXik8hXDCntS0JPN3j7NH438oMhipwFUsgK3EqAEE94f61Fmac_hYXQsF4HIRVCTwfpMALEIJ_YvH6-mOVGBytkqpnfdB-GXUsBk63COLvblYYCq0y_sZr5JB2StD-234lRvqw0odU9tdJRfxXfLfW_Jb1B6MjFpYgk3e4j_txmezI0LTK1iQs3w1lMSCSo4OoZ2WDdapbifqu1tNfl0pT6DU"/>
              </div>
            </div>
          </div>
        </header>

        <main className="px-6 pt-6 pb-24 w-full flex flex-col gap-4 flex-grow">
          <div className="mb-6">
            <p className="text-on-surface-variant text-sm mt-1">Compare and track your rides safely.</p>
          </div>
          {/* Current Address Card */}
          <section>
            <div className="bg-surface-container-lowest rounded-DEFAULT p-5 shadow-[0_4px_16px_rgba(26,26,24,0.04)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              <div className="flex gap-4 relative z-10 items-center">
                <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-[20px] font-[300]" style={{ fontVariationSettings: "'FILL' 1" }}>my_location</span>
                </div>
                <div className="flex-grow">
                  <h2 className="text-on-surface-variant text-[0.75rem] font-medium tracking-wider uppercase mb-1">Current address</h2>
                  <p className="text-on-surface text-[1rem] leading-relaxed font-medium">123 Sentinel Road, Sector 7<br/>Neo-Veridian City, NV 80921</p>
                </div>
                <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container transition-colors active:scale-95 shrink-0" title="Offline Maps">
                  <span className="material-symbols-outlined text-[24px]">download_for_offline</span>
                </button>
              </div>
            </div>
          </section>

          {/* Functional Map Component */}
          <div className="rounded-DEFAULT overflow-hidden min-h-[320px] bg-[#e8eae6] relative border border-outline-variant/20 shadow-inner group cursor-pointer flex-grow">
            {/* Faux Map Background / Roads */}
            <svg className="absolute inset-0 w-full h-full text-white" preserveAspectRatio="none" viewBox="0 0 100 100">
              {/* Minor roads */}
              <path className="opacity-50" d="M 10 0 L 25 100 M 60 0 L 45 100 M 90 0 L 80 100 M 0 30 L 100 40 M 0 80 L 100 70" fill="none" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke"></path>
              {/* Major roads */}
              <path d="M -10 60 Q 50 40 110 50" fill="none" stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke"></path>
              <path d="M 35 -10 Q 40 50 20 110" fill="none" stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke"></path>
              <path d="M -10 85 Q 50 90 110 65" fill="none" stroke="#f2e8d5" strokeWidth="4" vectorEffect="non-scaling-stroke"></path>
              {/* The Route Line */}
              <path className="drop-shadow-sm" d="M 20 70 C 40 70 50 25 75 25" fill="none" stroke="#008560" strokeDasharray="6 6" strokeLinecap="round" strokeWidth="3" vectorEffect="non-scaling-stroke"></path>
            </svg>

            {/* Pulsing Blue Dot (Origin) */}
            <div className="absolute left-[20%] top-[70%] -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-4 h-4 bg-[#4285F4] rounded-full border-[2.5px] border-white shadow-md relative">
                <div className="absolute inset-0 bg-[#4285F4] rounded-full animate-ping opacity-60 scale-150"></div>
              </div>
            </div>

            {/* Brand Teal Pin (Destination) */}
            <div className="absolute left-[75%] top-[25%] -translate-x-1/2 -translate-y-full z-10 flex flex-col items-center">
              <span className="material-symbols-outlined text-primary text-[36px] drop-shadow-md" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              <div className="w-2 h-1 bg-black/20 rounded-[100%] blur-[1px] mt-[-6px]"></div>
            </div>
          </div>

          <section className="bg-surface-container-lowest rounded-DEFAULT p-4 shadow-[0_4px_16px_rgba(26,26,24,0.04)] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-surface-container-low px-3 py-2 rounded-lg border border-outline-variant/20 hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-primary text-[20px]">directions_car</span>
                <span className="text-on-surface font-medium text-[0.875rem]">Car</span>
                <span className="material-symbols-outlined text-on-surface-variant text-[18px]">expand_more</span>
              </button>
            </div>
            <div className="text-right">
              <p className="text-on-surface-variant text-[0.75rem] font-medium uppercase tracking-wider">Estimate</p>
              <p className="text-primary font-bold text-[1.125rem]">₹420</p>
            </div>
          </section>
        </main>

        {/* Bottom Actions flex footer */}
        <div className="w-full p-6 mt-auto flex justify-center z-30 bg-background md:bg-transparent">
          <Link href="/travel/compare" className="w-full max-w-md h-14 bg-gradient-to-br from-[#1D9E75] to-[#008560] text-on-primary rounded-full font-semibold text-[1rem] shadow-[0_8px_24px_rgba(29,158,117,0.25)] hover:opacity-90 active:scale-95 transition-all flex items-center justify-center">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}
