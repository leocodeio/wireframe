import Link from 'next/link';

export default function PostTripReview() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <div className="w-full max-w-lg md:max-w-4xl relative flex flex-col min-h-screen shadow-2xl bg-surface text-on-surface font-body antialiased relative overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container pb-40" style={{ minHeight: 'max(884px, 100dvh)' }}>
        {/* TopAppBar */}
        <header className="bg-[#FCF9F5] docked full-width top-0 flex items-center justify-between px-6 py-4 w-full no-border tonal-shift-bg-surface-container-low flat no shadows sticky z-40">
          <Link href="/travel/tracking" aria-label="Back" className="text-[#1D9E75] hover:opacity-80 transition-opacity active:scale-95 duration-200 flex items-center justify-center p-2 -ml-2 rounded-full">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="font-['Inter'] font-semibold text-xl tracking-tight text-[#1A1A18]">Trip Summary</h1>
          {/* Invisible Spacer to preserve flex layout */}
          <div className="w-10 h-10 -mr-2"></div>
        </header>

        {/* Main Canvas */}
        <main className="px-6 pt-8 pb-48 flex flex-col gap-10">
          {/* Hero Editorial Moment */}
          <section className="flex flex-col gap-2 relative">
            {/* Decorative gradient blur for depth */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
            <h2 className="text-[3.5rem] leading-[1.1] font-bold tracking-[-0.02em] text-primary font-headline max-w-[12ch]">You&apos;ve Arrived!</h2>
            <p className="text-[1.125rem] font-semibold text-on-surface-variant font-headline mt-2">Destination reached</p>
          </section>

          {/* Arrived Status Card */}
          <section className="bg-surface-container-lowest rounded-DEFAULT p-8 flex flex-col items-center gap-6 relative overflow-hidden shadow-[0_4px_24px_rgba(28,28,26,0.03)]">
            {/* Inner tonal ground */}
            <div className="absolute inset-0 bg-surface-container-low/40 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-center gap-6 w-full">
              {/* Large Checkmark */}
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[64px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>

              {/* Data Pills */}
              <div className="flex flex-row flex-wrap gap-4 w-full justify-center">
                <div className="bg-surface rounded-full px-5 py-2.5 flex items-center gap-2 shadow-[inset_0_0_0_1px_rgba(188,202,193,0.15)]">
                  <span className="material-symbols-outlined text-[20px] text-on-surface-variant">schedule</span>
                  <span className="text-[0.875rem] font-medium tracking-[0.02em] text-on-surface font-label">1h 18m taken</span>
                </div>
                <div className="bg-surface rounded-full px-5 py-2.5 flex items-center gap-2 shadow-[inset_0_0_0_1px_rgba(188,202,193,0.15)]">
                  <span className="material-symbols-outlined text-[20px] text-on-surface-variant">payments</span>
                  <span className="text-[0.875rem] font-medium tracking-[0.02em] text-on-surface font-label">₹420 paid</span>
                </div>
              </div>
            </div>
          </section>

          {/* Review Interactions */}
          <section className="flex flex-col gap-8 bg-surface-container-low rounded-DEFAULT p-6 shadow-[inset_0_0_0_1px_rgba(188,202,193,0.1)]">
            <h3 className="text-[1.5rem] font-semibold tracking-[-0.01em] text-on-surface font-headline">Rate your trip</h3>

            {/* 5-Star Rating */}
            <div className="flex flex-row justify-center gap-3">
              <button aria-label="Rate 1 star" className="text-primary hover:opacity-80 transition-opacity active:scale-90 duration-200 p-1"><span className="material-symbols-outlined text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span></button>
              <button aria-label="Rate 2 stars" className="text-primary hover:opacity-80 transition-opacity active:scale-90 duration-200 p-1"><span className="material-symbols-outlined text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span></button>
              <button aria-label="Rate 3 stars" className="text-primary hover:opacity-80 transition-opacity active:scale-90 duration-200 p-1"><span className="material-symbols-outlined text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span></button>
              <button aria-label="Rate 4 stars" className="text-primary hover:opacity-80 transition-opacity active:scale-90 duration-200 p-1"><span className="material-symbols-outlined text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span></button>
              <button aria-label="Rate 5 stars" className="text-outline-variant hover:text-primary transition-colors active:scale-90 duration-200 p-1"><span className="material-symbols-outlined text-[40px]" style={{ fontVariationSettings: "'FILL' 0" }}>star</span></button>
            </div>

            <div className="h-px w-full bg-surface-container-highest my-2"></div>

            {/* Safety Experience Chips */}
            <div className="flex flex-col gap-4">
              <label className="text-[0.875rem] font-medium tracking-[0.02em] text-on-surface-variant font-label">How did the journey feel?</label>
              <div className="flex flex-row flex-wrap gap-3">
                <button className="bg-primary-container text-on-primary-container rounded-full px-6 py-3 text-[0.875rem] font-medium transition-colors shadow-[0_2px_8px_rgba(0,105,76,0.15)]">Felt safe</button>
                <button className="bg-surface-container text-on-surface-variant rounded-full px-6 py-3 text-[0.875rem] font-medium transition-colors hover:bg-surface-variant">Neutral</button>
                <button className="bg-surface-container text-on-surface-variant rounded-full px-6 py-3 text-[0.875rem] font-medium transition-colors hover:bg-surface-variant">Felt unsafe</button>
              </div>
            </div>

            {/* Currency Input */}
            <div className="flex flex-col gap-4 mt-2">
              <label className="text-[0.875rem] font-medium tracking-[0.02em] text-on-surface-variant font-label" htmlFor="amount">Final amount paid</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <span className="text-on-surface-variant font-medium text-lg">₹</span>
                </div>
                <input className="block w-full bg-surface-container-lowest border-0 rounded-DEFAULT py-4 pl-12 pr-5 text-on-surface text-lg focus:bg-surface-container-lowest focus:ring-0 shadow-[inset_0_0_0_1px_rgba(188,202,193,0.15)] focus:shadow-[inset_0_0_0_2px_rgba(0,105,76,0.3)] transition-all font-body" id="amount" type="text" defaultValue="420" />
              </div>
            </div>

            {/* Text Area */}
            <div className="flex flex-col gap-4 mt-2">
              <textarea className="block w-full bg-surface-container-lowest border-0 rounded-DEFAULT p-5 text-on-surface text-base placeholder:text-outline focus:bg-surface-container-lowest focus:ring-0 shadow-[inset_0_0_0_1px_rgba(188,202,193,0.15)] focus:shadow-[inset_0_0_0_2px_rgba(0,105,76,0.3)] transition-all font-body resize-none" placeholder="Share tips for other solo travelers..." rows={4}></textarea>
            </div>
          </section>
        </main>

        {/* Pinned Bottom Actions */}
        <div className="fixed md:absolute bottom-0 w-full px-6 pt-6 pb-10 bg-surface/85 backdrop-blur-[24px] flex flex-col gap-4 z-50 shadow-[0_-8px_32px_rgba(28,28,26,0.04)]">
          <Link href="/" className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full py-4 px-8 text-[1rem] font-semibold font-headline shadow-[0_8px_24px_rgba(0,105,76,0.15)] active:scale-[0.98] hover:opacity-90 transition-all flex items-center justify-center gap-2">
            Submit Review
          </Link>
          <Link href="/" className="w-full text-on-surface-variant hover:text-primary py-2 flex items-center justify-center text-[0.875rem] font-medium tracking-[0.02em] font-label active:opacity-70 transition-colors">
            Skip for now
          </Link>
        </div>
      </div>
    </div>
  );
}
