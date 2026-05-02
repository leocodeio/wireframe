import Link from 'next/link';

export default function CompareProviders() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <div className="w-full max-w-lg md:max-w-4xl relative flex flex-col min-h-screen shadow-2xl bg-surface text-on-surface pb-8" style={{ minHeight: 'max(884px, 100dvh)' }}>
        {/* TopAppBar */}
        <header className="bg-[#FCF9F5] text-[#1D9E75] font-['Inter'] font-semibold tracking-tight sticky top-0 flex justify-between items-center w-full px-6 py-4 z-50">
          <Link href="/travel" className="hover:bg-[#F6F3EF] rounded-full transition-colors p-2 -ml-2">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-lg font-bold text-[#1D9E75]">Compare Transport</h1>
          <div className="w-10"></div> {/* Placeholder to keep title centered */}
        </header>

        {/* Main Content */}
        <main className="flex-1 w-full px-6 py-6 space-y-6">
          {/* Header area below TopAppBar for extra context */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="font-headline text-[1.5rem] font-semibold text-on-surface leading-tight tracking-[-0.01em]">Compare Providers</h2>
              <p className="font-body text-[1rem] text-on-surface-variant mt-1">Select your preferred ride</p>
            </div>
            {/* Connectivity Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-fixed/60 backdrop-blur-[20px]">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="font-label text-[0.75rem] font-medium text-on-secondary-fixed tracking-[0.02em]">Live Rates</span>
            </div>
          </div>

          {/* Provider Cards */}
          <div className="space-y-4">
            {/* Uber Card */}
            <Link href="/travel/tracking" className="bg-surface-container-lowest rounded-DEFAULT p-5 shadow-[0_4px_12px_rgba(26,26,24,0.03)] hover:shadow-[0_8px_24px_rgba(26,26,24,0.06)] transition-all cursor-pointer relative overflow-hidden group block">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="Uber Logo Placeholder" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4uiwO2FtS1Ebjv_X0kgKajnNi_AZoSJln4ljx7f9sPBkteO36ZyCoC45vRYlh0BeonoRe2tlKqpq_2uHQKUyt1ghnims87kGiH_0n83uZQTHth4esACL0qjS_-4MMc-GRtCUFPNSM_myIznzFbg4ljyPvVp3GctuyXxxcKbPWZEVeDJHhXi4C1SNkjXypygWxi3R9kG-X_XVHaHNZOw-xx4C6Fj5kI26pg7dqXTTdBnSi20WnQJgHwZSsYS9ncioTh_bJi621jh0"/>
                  </div>
                  <div>
                    <h3 className="font-headline text-[1.125rem] font-semibold text-on-surface">Uber</h3>
                    <div className="flex items-center gap-1 mt-0.5 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[14px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="font-label text-[0.75rem] font-medium">4.8</span>
                      <span className="mx-1">•</span>
                      <span className="font-label text-[0.75rem] font-medium">3 mins away</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="font-headline text-[1.5rem] font-semibold text-on-surface">₹420</div>
                    <p className="font-label text-[0.75rem] text-on-surface-variant mt-0.5">Est. Total</p>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                </div>
              </div>
            </Link>

            {/* Rapido Card */}
            <Link href="/travel/tracking" className="bg-surface-container-lowest rounded-DEFAULT p-5 shadow-[0_4px_12px_rgba(26,26,24,0.03)] hover:shadow-[0_8px_24px_rgba(26,26,24,0.06)] transition-all cursor-pointer relative overflow-hidden group border border-outline-variant/20 block">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {/* Highlight Badge for cheapest */}
              <div className="absolute top-0 right-0 bg-secondary-fixed text-on-secondary-fixed font-label text-[0.65rem] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">Lowest Price</div>
              <div className="flex items-center justify-between relative z-10 mt-1">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#fde047]/20 flex items-center justify-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="Rapido Logo Placeholder" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMJnAaCVriG-9XETROCl8yem2TOzmBXUNsbiS1Zu9LDu5P4Qqz-G95GfiXUgOAtWfPYjT5qWmUj5hVTZOFzBo74zG5iNCR_zz3JHdtiMSfFi63Zwm6KBL_F4oyz1tOG-hETPcJuPCfi378PoYO1S5QqNdfRR8A3QBu5WM4Ot9nQNsTvNMFHlfSLWlgM0UQ4Qc5-ZcV1heA4KjdpXdEjr6jsUFmC1YmDJwGAYH57ffaSrSGSuUIIMJ_TBF8wLHBMPsuPPEUqD_JYMw"/>
                  </div>
                  <div>
                    <h3 className="font-headline text-[1.125rem] font-semibold text-on-surface">Rapido</h3>
                    <div className="flex items-center gap-1 mt-0.5 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[14px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="font-label text-[0.75rem] font-medium">4.7</span>
                      <span className="mx-1">•</span>
                      <span className="font-label text-[0.75rem] font-medium">5 mins away</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="font-headline text-[1.5rem] font-semibold text-on-surface">₹380</div>
                    <p className="font-label text-[0.75rem] text-on-surface-variant mt-0.5">Est. Total</p>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                </div>
              </div>
            </Link>

            {/* Ola Card */}
            <Link href="/travel/tracking" className="bg-surface-container-lowest rounded-DEFAULT p-5 shadow-[0_4px_12px_rgba(26,26,24,0.03)] hover:shadow-[0_8px_24px_rgba(26,26,24,0.06)] transition-all cursor-pointer relative overflow-hidden group block">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#84cc16]/20 flex items-center justify-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="Ola Logo Placeholder" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7DqKSgf13OQB6awGqNlrg7vsmidessCrptfL_p5SazjliLSlQLjAzW42Jb199cxpU6tv7rMXVcUcO9RcgyilxwRLVFsG7Ci1Re5dYVaxM9-8uIc-TfGoR3x2NfJxQ_p8gNtissUuAMKL9hFwi20swJTbnTqWQD2CKmyIvhB5HUoGHY7_wb8uVBTsni8A75mE52Rb1ZbCxAh964mQPMbBmfzIPtUlkWGjbrA_nqfikWvwoZ31OoYAKhmH8_TTqsLqQu7q5J1M60ac"/>
                  </div>
                  <div>
                    <h3 className="font-headline text-[1.125rem] font-semibold text-on-surface">Ola</h3>
                    <div className="flex items-center gap-1 mt-0.5 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[14px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="font-label text-[0.75rem] font-medium">4.5</span>
                      <span className="mx-1">•</span>
                      <span className="font-label text-[0.75rem] font-medium">4 mins away</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="font-headline text-[1.5rem] font-semibold text-on-surface">₹410</div>
                    <p className="font-label text-[0.75rem] text-on-surface-variant mt-0.5">Est. Total</p>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                </div>
              </div>
            </Link>

            {/* BluSmart Card (Premium option) */}
            <Link href="/travel/tracking" className="bg-surface-container-lowest rounded-DEFAULT p-5 shadow-[0_4px_12px_rgba(26,26,24,0.03)] hover:shadow-[0_8px_24px_rgba(26,26,24,0.06)] transition-all cursor-pointer relative overflow-hidden group block">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 right-0 bg-surface-container-low text-on-surface-variant font-label text-[0.65rem] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">Premium EV</div>
              <div className="flex items-center justify-between relative z-10 mt-1">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#3b82f6]/20 flex items-center justify-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="BluSmart Logo Placeholder" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArCqp2rxy8nHm763hwkK0L_I9LxCUr64uU6sxRNsIWJ23v6h1QUKMfTk6VCb05QIFEugrL2awjbUQUJgDZ7xI-AkE8tyYdFZQVc06R48QQaGQ91eqWM_o-jcPeTNZE_i7sIjUKUlHjyM6Ak7aRKh4uvHb35PeizNvX3M8LlULMFv90QsF6JqinTVHCZ3MvoSnLfgf16bXAi7Rz5U69kWpTSgqiDiYwBO6Gd5ggzWvFKBPJ0ECl7whWTzjvJlQap1EMyEMEeO1WALQ"/>
                  </div>
                  <div>
                    <h3 className="font-headline text-[1.125rem] font-semibold text-on-surface">BluSmart</h3>
                    <div className="flex items-center gap-1 mt-0.5 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[14px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="font-label text-[0.75rem] font-medium">4.9</span>
                      <span className="mx-1">•</span>
                      <span className="font-label text-[0.75rem] font-medium">8 mins away</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="font-headline text-[1.5rem] font-semibold text-on-surface">₹550</div>
                    <p className="font-label text-[0.75rem] text-on-surface-variant mt-0.5">Est. Total</p>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                </div>
              </div>
            </Link>
          </div>
        </main>


      </div>
    </div>
  );
}
