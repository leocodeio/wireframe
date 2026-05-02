import Link from 'next/link';

export default function LocalSupportShowcase() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <div className="w-full max-w-lg md:max-w-4xl relative flex flex-col min-h-screen shadow-2xl bg-surface-container-low mx-auto">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-surface-bright/85 backdrop-blur-2xl no-border tonal-shift w-full shadow-[0_8px_24px_rgba(26,26,24,0.08)]">
          <div className="flex items-center justify-between px-6 py-4 h-16">
            <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container transition-colors active:scale-95">
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </Link>
            <h1 className="text-on-surface font-semibold text-[1.125rem] tracking-tight">Local Support</h1>
            <div className="w-10"></div>
          </div>
        </header>

        {/* Main Content Canvas */}
        <main className="flex-1 overflow-y-auto pb-28 pt-2 px-6 flex flex-col gap-6">
          {/* Page Header */}
          <div className="mt-2">
            <h1 className="text-[2rem] leading-tight font-bold font-headline tracking-tight text-on-surface">Local Support</h1>
            <p className="text-on-surface-variant text-[15px] mt-2">Connect with verified guardians in your area.</p>
          </div>

          {/* Map Widget Component */}
          <div className="relative w-full h-[320px] rounded-xl overflow-hidden shadow-sm border border-outline-variant/30 bg-surface-container isolate group">
            {/* Map Background */}
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBuan7AdSQNXGbEaEcuvSwjYHTBZusKarhk55MDMwOVj7Jrotzr-s_JLGPoYQ-mvEbN2zD6z8mq17fVMUbUbTp_Y9dxJ5Lyjjbml7pr2Aqq94o8yueyvx-4yVTxjhAbHSLcgnLNu1nZ02RNX4TI3Bjk9ESoV48LuHK2u6WdZepOOD33mFmNr0cyCOwRHAqKCKI7QsJGZ0gSMuj4ebH3iNM0DNmZUR9LFKtZw5jdIohQvGEQlOuffgWdS96DlbamZrzkRU7VJ_FO6lc')" }}></div>
            {/* Map Overlay Gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-container/40 pointer-events-none"></div>

            {/* User Location Pin */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
              <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md relative">
                <div className="absolute inset-0 rounded-full border border-blue-500 animate-ping opacity-75"></div>
              </div>
              <div className="mt-1 px-2 py-0.5 bg-surface/90 rounded text-[10px] font-bold text-blue-600 shadow-sm backdrop-blur-sm">You</div>
            </div>

            {/* Verified Helper Pin 1 */}
            <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="bg-primary text-on-primary rounded-full p-1.5 shadow-md backdrop-blur-sm bg-opacity-95">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>person_pin</span>
              </div>
            </div>

            {/* Verified Helper Pin 2 */}
            <div className="absolute bottom-1/4 right-1/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="bg-primary text-on-primary rounded-full p-1.5 shadow-md backdrop-blur-sm bg-opacity-95">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>person_pin</span>
              </div>
            </div>

            {/* Verified Helper Pin 3 */}
            <div className="absolute top-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-pulse">
              <div className="bg-primary text-on-primary rounded-full p-1.5 shadow-md backdrop-blur-sm bg-opacity-95">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>person_pin</span>
              </div>
            </div>

            {/* Float Action over map */}
            <button className="absolute bottom-3 right-3 bg-surface/90 backdrop-blur-md text-on-surface rounded-full p-2 shadow-sm border border-outline-variant/30 hover:bg-surface transition-colors z-10">
              <span className="material-symbols-outlined text-[20px]">my_location</span>
            </button>
          </div>

          {/* Filter / Toggle Section */}
          <div className="flex items-center justify-between bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-error-container/50 flex items-center justify-center text-error">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>notifications_active</span>
              </div>
              <span className="font-medium text-[15px] text-on-surface tracking-wide">Show urgent helpers only</span>
            </div>
            {/* Visual Toggle (CSS only representation) */}
            <div className="w-12 h-6 bg-surface-container-high rounded-full relative cursor-pointer border border-outline-variant/30 transition-colors duration-300">
              <div className="absolute left-1 top-[3px] w-[16px] h-[16px] bg-outline rounded-full transition-transform duration-300"></div>
            </div>
          </div>

          {/* Helper Detailed Showcase */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/20 flex flex-col gap-5 relative overflow-hidden group">
            {/* Subtle tonal shift background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container opacity-[0.03] rounded-bl-[100px] pointer-events-none"></div>

            {/* Profile Photo, Name, Distance, Badge */}
            <div className="flex flex-col items-center text-center gap-3 relative z-10">
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Marcus T." className="w-24 h-24 rounded-full object-cover border-4 border-surface shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-N_mwaOm-7QAh4-sOdUeddd58_LRxGO-sreWCAQTSZ5Vy0I952naEXEekRzQuRWsuBL-IC3quZ67iSNUzsI0JXWQ7P3r0SfrXKpUdxrX85s7jmSUtvXfGJCStcz00k3kzTeqAAou5KHk2abcFRRTxySqsmuQ9JAYqFA8tKeOzbvjPN9pKUsYsNlmD3ZfpA-FYkaVkBzSZUA8zlQe2aUrY1c6pzkAnOY_KjjF711HIRerzGydSgrJAxVlseD1wom6-KDvdE7IX8_g"/>
                <div className="absolute bottom-1 right-1 w-5 h-5 bg-primary rounded-full border-[3px] border-surface-container-lowest"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-on-surface font-headline tracking-tight">Marcus T.</h3>
                <span className="text-[14px] font-medium text-on-surface-variant flex items-center justify-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-[16px]">distance</span>
                  0.8 mi away
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/10 mt-1">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="text-[12px] font-bold tracking-wide uppercase">Verified Guardian</span>
              </div>
            </div>

            {/* Languages */}
            <div className="flex flex-col gap-3 border-t border-outline-variant/20 pt-4 relative z-10">
              <h4 className="text-[13px] font-semibold text-on-surface-variant uppercase tracking-wider">Languages Spoken</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-1.5 bg-surface-container text-on-surface rounded-full text-[14px] font-medium border border-outline-variant/30">English</span>
                <span className="px-4 py-1.5 bg-surface-container text-on-surface rounded-full text-[14px] font-medium border border-outline-variant/30">Spanish</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-2 relative z-10">
              <button className="flex-1 bg-surface-container-low border border-outline-variant text-on-surface py-3 rounded-xl text-[15px] font-semibold hover:bg-surface-container transition-colors active:scale-95 duration-200 flex justify-center items-center gap-2 shadow-sm">
                <span className="material-symbols-outlined text-[20px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
                Message
              </button>
              <button className="flex-1 bg-surface-container-low border border-outline-variant text-on-surface py-3 rounded-xl text-[15px] font-semibold hover:bg-surface-container transition-colors active:scale-95 duration-200 flex justify-center items-center gap-2 shadow-sm">
                <span className="material-symbols-outlined text-[20px]">call</span>
                Call
              </button>
            </div>
            
            <Link href="/local-support/contact" className="w-full bg-primary text-white py-4 rounded-xl text-[16px] font-bold shadow-md hover:shadow-lg transition-shadow active:scale-95 duration-200 flex justify-center items-center gap-2 mt-1 relative z-10">
              Contact Now
            </Link>
          </div>
          
          {/* Spacer for bottom nav */}
          <div className="h-8 w-full"></div>
        </main>

        {/* BottomNavBar */}
        <nav className="fixed md:sticky bottom-0 md:bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:w-full md:mx-auto h-[72px] z-50 md:rounded-full rounded-t-3xl bg-[#FCF9F5]/85 backdrop-blur-md shadow-[0_-8px_24px_rgba(26,26,24,0.08)] flex justify-around items-center px-4 md:px-8 pb-safe md:pb-0 w-full max-w-lg md:max-w-4xl">
          {/* Home */}
          <Link className="flex flex-col items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors active:scale-90 transition-all duration-200 px-4 py-1 rounded-full" href="/">
            <span className="material-symbols-outlined">home</span>
            <span className="font-inter text-[10px] font-medium tracking-wide mt-1">Home</span>
          </Link>
          
          {/* Travel */}
          <Link className="flex flex-col items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors active:scale-90 transition-all duration-200 px-4 py-1 rounded-full" href="/travel">
            <span className="material-symbols-outlined">explore</span>
            <span className="font-inter text-[10px] font-medium tracking-wide mt-1">Travel</span>
          </Link>
          
          {/* Stay */}
          <Link className="flex flex-col items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors active:scale-90 transition-all duration-200 px-4 py-1 rounded-full" href="#">
            <span className="material-symbols-outlined">bed</span>
            <span className="font-inter text-[10px] font-medium tracking-wide mt-1">Stay</span>
          </Link>
          
          {/* Navigate */}
          <Link className="flex flex-col items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors active:scale-90 transition-all duration-200 px-4 py-1 rounded-full" href="/navigate">
            <span className="material-symbols-outlined">near_me</span>
            <span className="font-inter text-[10px] font-medium tracking-wide mt-1">Navigate</span>
          </Link>
          
          {/* Toolkit */}
          <Link className="flex flex-col items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors active:scale-90 transition-all duration-200 px-4 py-1 rounded-full" href="/toolkit">
            <span className="material-symbols-outlined">handyman</span>
            <span className="font-inter text-[10px] font-medium tracking-wide mt-1">Toolkit</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
