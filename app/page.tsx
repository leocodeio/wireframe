import Link from 'next/link';
import BottomNavBar from './components/BottomNavBar';

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <div className="w-full max-w-lg md:max-w-4xl relative flex flex-col min-h-screen shadow-2xl bg-surface">
        <header className="sticky top-0 w-full z-50 bg-[#FCF9F5]/85 backdrop-blur-md shadow-sm flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-semibold text-lg overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                alt="Avatar" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhKPljF2V3EBh0FwvqFVzoPM5ls6dHVlwSPfjaHYCcQT3CvkFc9E3MTZVjR_i8YLclHR-etQ7HrYt93v4kj-a_20CYKTuneZGDJCKp703xNjb9Kb0bD361LHZbjUvcgU0PoJZLeZ-NjjsIwIR_vZ_z0Xb1LFYGfiy5EMgaap9tRvKJx2Cl_7Fnfq8JHcr70Z5qaWDjGgxCd-9Mkvm7gJsEpUbkG6lSA212aztFrQdykbbm_OQ6KjFOi69t6039jTRXkIhZoVhMvBw"
              />
            </div>
            <h1 className="font-inter text-title-md font-semibold text-on-surface">Hello, Traveler</h1>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-fixed/20 backdrop-blur-xl">
            <span className="w-2 h-2 rounded-full bg-primary-fixed"></span>
            <span className="text-xs font-medium text-primary">Online</span>
          </div>
        </header>

        {/* Main Content Canvas */}
        <main className="px-6 pt-6 pb-20 w-full flex flex-col gap-8 flex-1">
          {/* Welcome Hero */}
          <section>
            <h2 className="text-[3.5rem] font-bold tracking-[-0.02em] leading-tight text-on-surface mb-2">
              Good morning,<br/>Alex.
            </h2>
          </section>

          {/* Hero Card (Brand Teal Gradient) */}
          <section className="rounded-xl overflow-hidden bg-gradient-to-br from-[#1D9E75] to-[#008560] p-6 text-on-primary shadow-sm relative">
            <div className="relative z-10">
              <h3 className="text-[1.5rem] font-semibold tracking-[-0.01em] mb-1">Where to today?</h3>
              <p className="text-sm font-medium opacity-90 flex items-center gap-2 mt-4">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                You&apos;re safe. Signal: strong.
              </p>
            </div>
            {/* Decorative blur */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 blur-3xl rounded-full"></div>
          </section>

          {/* Bento Grid */}
          <section className="grid grid-cols-2 gap-4">
            {/* Travel */}
            <Link className="bg-surface-container-lowest p-5 rounded-xl flex flex-col items-start gap-4 transition-transform active:scale-95 text-left group" href="/travel">
              <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-primary-fixed/20 transition-colors">
                <span className="material-symbols-outlined text-primary">train</span>
              </div>
              <div>
                <h4 className="font-semibold text-title-md mb-1">Travel</h4>
                <p className="text-sm text-on-surface-variant">Compare & track rides</p>
              </div>
            </Link>
            
            {/* Stay */}
            <Link className="bg-surface-container-lowest p-5 rounded-xl flex flex-col items-start gap-4 transition-transform active:scale-95 text-left group" href="/stay">
              <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-primary-fixed/20 transition-colors">
                <span className="material-symbols-outlined text-primary">bed</span>
              </div>
              <div>
                <h4 className="font-semibold text-title-md mb-1">Stay</h4>
                <p className="text-sm text-on-surface-variant">Find safe places</p>
              </div>
            </Link>

            {/* Navigate */}
            <Link className="bg-surface-container-lowest p-5 rounded-xl flex flex-col items-start gap-4 transition-transform active:scale-95 text-left group" href="/navigate">
              <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-primary-fixed/20 transition-colors">
                <span className="material-symbols-outlined text-primary">explore</span>
              </div>
              <div>
                <h4 className="font-semibold text-title-md mb-1">Navigate</h4>
                <p className="text-sm text-on-surface-variant">Offline-ready maps</p>
              </div>
            </Link>

            {/* Safety Toolkit (Danger Accent) */}
            <Link className="bg-[#FFF5F5] p-5 rounded-xl flex flex-col items-start gap-4 transition-transform active:scale-95 text-left border-[1.5px] border-[#E24B4A]/30 hover:border-[#E24B4A]/60" href="/toolkit">
              <div className="w-10 h-10 rounded-full bg-[#E24B4A]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#E24B4A]" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
              </div>
              <div>
                <h4 className="font-semibold text-title-md text-[#E24B4A] mb-1">Safety Toolkit</h4>
                <p className="text-sm text-on-surface-variant">Fake call, SOS, pinging</p>
              </div>
            </Link>

            {/* Local Support (Full Width) */}
            <Link className="col-span-2 bg-surface-container-lowest p-5 rounded-xl flex items-center gap-4 transition-transform active:scale-95 text-left group mt-2" href="/local-support">
              <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-primary-fixed/20 transition-colors shrink-0">
                <span className="material-symbols-outlined text-primary">group</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-title-md mb-1">Local Support</h4>
                <p className="text-sm text-on-surface-variant">Connect with nearby guides</p>
              </div>
              <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
            </Link>
          </section>

          {/* Action Banner */}
          <section>
            <Link className="w-full bg-surface-container-high py-4 px-6 rounded-full flex items-center justify-center gap-2 text-primary font-semibold transition-colors hover:bg-surface-container-highest active:scale-95" href="#">
              <span className="material-symbols-outlined text-lg">download</span>
              Show offline maps
            </Link>
          </section>
        </main>

        {/* BottomNavBar */}
        <BottomNavBar />
      </div>
    </div>
  );
}
