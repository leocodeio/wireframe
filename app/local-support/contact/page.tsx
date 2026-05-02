import Link from 'next/link';

export default function LocalPersonContact() {
  return (
    <div className="bg-surface flex justify-center items-center min-h-screen">
      <div className="w-full max-w-lg md:max-w-4xl relative flex flex-col min-h-screen shadow-2xl bg-surface mx-auto">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-surface-bright/85 backdrop-blur-2xl no-border tonal-shift w-full shadow-[0_8px_24px_rgba(26,26,24,0.08)]">
          <div className="flex items-center justify-between px-6 py-4 h-16">
            <Link href="/local-support" className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container transition-colors active:scale-95">
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </Link>
            <h1 className="text-on-surface font-semibold text-[1.125rem] tracking-tight">Local Contact</h1>
            <div className="w-10"></div>
          </div>
        </header>

        {/* Main Content Canvas */}
        <main className="flex-1 overflow-y-auto pb-32 px-6 bg-surface">
          {/* Profile Hero Section */}
          <section className="flex flex-col items-center mt-10">
            <div className="relative flex justify-center">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg bg-surface-container ring-4 ring-surface-container-lowest">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Elena Rodriguez Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_mhbTmulxMhvBuvqGWREijz1oX0SQv5SimFi8xKo0EhFXibABC5XIadugEvDC3_P1GkKipvKIYcvpwmmBwK5kxUvHcIrde8yP0LSGahDjC1fevSOAxjEZuQiiIGOHc2kW5sgCHPrZJCxwzXC9vTwsoJH6HqDDcln4DXdlWxC8J6qIKFpLiBjawHWRfXnv9r-PmdmujB0JVnkUDgLZUYeLeCQbkkJmznsJaUckjqKRL2wZkgkxDHg0JAjAPiTeF5Ejrur-VLMepls"/>
              </div>
              {/* Connectivity Badge */}
              <div className="absolute bottom-1 right-1 transform translate-x-2 bg-surface/70 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 border border-outline-variant/15">
                <span className="w-2 h-2 rounded-full bg-[#1D9E75] block animate-pulse"></span>
                <span className="text-[0.65rem] font-semibold tracking-wide uppercase text-on-surface">Available</span>
              </div>
            </div>
            
            <h2 className="text-[1.5rem] font-semibold text-on-surface tracking-tight mt-6 text-center">Elena Rodriguez</h2>
            <p className="text-[1rem] text-on-surface-variant mt-1 flex items-center justify-center gap-1">
              <span className="material-symbols-outlined text-[18px]">location_on</span>
              Downtown District Coordinator
            </p>
          </section>

          {/* Contact Information Card */}
          <section className="mt-8 bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/10">
            <h3 className="text-[1.125rem] font-semibold text-on-surface mb-6">Contact Details</h3>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                </div>
                <div>
                  <p className="text-[0.75rem] font-medium tracking-wide uppercase text-on-surface-variant mb-0.5">Email</p>
                  <p className="text-[1rem] text-on-surface">elena.r@guardianpulse.org</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>phone</span>
                </div>
                <div>
                  <p className="text-[0.75rem] font-medium tracking-wide uppercase text-on-surface-variant mb-0.5">Direct Line</p>
                  <p className="text-[1rem] text-on-surface">+1 (555) 019-8234</p>
                </div>
              </div>
            </div>
          </section>

          {/* Languages Card */}
          <section className="mt-6 bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/10 mb-8">
            <h3 className="text-[1.125rem] font-semibold text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">translate</span>
              Languages Spoken
            </h3>
            <div className="flex flex-wrap gap-2">
              <div className="bg-surface-container text-on-surface px-4 py-2 rounded-full text-[0.875rem] font-medium border border-outline-variant/30">
                English
              </div>
              <div className="bg-surface-container text-on-surface px-4 py-2 rounded-full text-[0.875rem] font-medium border border-outline-variant/30">
                Spanish (Native)
              </div>
              <div className="bg-surface-container text-on-surface px-4 py-2 rounded-full text-[0.875rem] font-medium border border-outline-variant/30">
                ASL
              </div>
            </div>
          </section>
        </main>

        {/* Fixed Bottom Action Area */}
        <div className="sticky bottom-0 left-0 w-full bg-gradient-to-t from-surface via-surface/90 to-transparent pt-8 pb-8 px-6 z-40 flex flex-col gap-3">
          <button className="w-full bg-primary text-white font-semibold text-[1.125rem] py-4 rounded-full shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform duration-200">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
            Message Elena
          </button>
          <Link href="/review/support" className="w-full bg-surface-container-high text-on-surface font-semibold text-[1rem] py-3.5 rounded-full border border-outline-variant/30 flex items-center justify-center gap-2 active:scale-95 transition-transform duration-200">
            <span className="material-symbols-outlined text-[20px]">done_all</span>
            End Session & Review
          </Link>
        </div>
      </div>
    </div>
  );
}
