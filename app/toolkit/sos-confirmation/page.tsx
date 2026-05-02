"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const [progress, setProgress] = React.useState(0);
  const [showToast, setShowToast] = React.useState(false);
  const startTime = React.useRef(null);
  const animationFrame = React.useRef(null);

  const startHold = () => {
    startTime.current = Date.now();
    const updateProgress = () => {
      const elapsed = Date.now() - startTime.current;
      const newProgress = Math.min((elapsed / 1500) * 100, 100);
      setProgress(newProgress);
      if (newProgress >= 100) {
        setShowToast(true);
        setTimeout(() => {
            router.push('/toolkit');
        }, 2000);
      } else {
        animationFrame.current = requestAnimationFrame(updateProgress);
      }
    };
    animationFrame.current = requestAnimationFrame(updateProgress);
  };

  const cancelHold = () => {
    if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
    }
    setProgress(0);
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <div className="w-full max-w-lg md:max-w-4xl relative flex flex-col min-h-screen shadow-2xl bg-[#E24B4A] overflow-hidden">

{/*  Fake Background Content to show overlay  */}
<div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, var(--tw-colors-surface-container-high) 0%, var(--tw-colors-background) 100%)' }}></div>
<div className="absolute top-10 left-6 w-32 h-32 bg-surface-container rounded-full blur-3xl z-0"></div>
<div className="absolute bottom-20 right-10 w-48 h-48 bg-surface-container-low rounded-full blur-3xl z-0"></div>
{/*  Full-screen Modal Overlay  */}
<div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-on-surface/85 backdrop-blur-[2px]">
{/*  Center Card  */}
<div className="w-full max-w-sm bg-surface-container-lowest rounded-xl shadow-[0_8px_32px_rgba(28,28,26,0.12)] p-8 flex flex-col items-center text-center relative overflow-hidden">
{/*  Red bell icon  */}
<div className="w-[88px] h-[88px] rounded-full bg-[#E24B4A]/20 flex items-center justify-center mb-6 relative">
{/*  Dual-ring pulse effect simulation (static for HTML output)  */}
<div className="absolute inset-0 rounded-full border-[1.5px] border-[#E24B4A]/20 opacity-50 scale-125"></div>
<div className="absolute inset-0 rounded-full border border-[#E24B4A]/20 opacity-25 scale-150"></div>
<span className="material-symbols-outlined text-[#E24B4A]" style={{ fontSize: '56px', fontVariationSettings: '\'FILL\' 1' }}>
                    notifications_active
                </span>
</div>
{/*  Headline  */}
<h1 className="font-headline text-[1.5rem] font-semibold text-[#E24B4A] leading-tight mb-3 tracking-[-0.01em]">
                Send Emergency SOS?
            </h1>
{/*  Body text  */}
<p className="font-body text-[1rem] text-on-surface-variant mb-8 px-2">
                This will immediately alert your 3 emergency contacts with your current location.
            </p>
{/*  Contacts Preview  */}
<div className="flex items-center justify-center -space-x-3 mb-10">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border-2 border-surface-container-lowest font-label text-[0.875rem] font-medium text-on-surface">
                    JD
                </div>
<div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center border-2 border-surface-container-lowest font-label text-[0.875rem] font-medium text-on-surface">
                    MK
                </div>
<div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center border-2 border-surface-container-lowest font-label text-[0.875rem] font-medium text-on-surface">
                    SL
                </div>
</div>
{/*  Actions  */}
<div className="w-full flex flex-col gap-4">
{/*  Hold to Confirm SOS  */}
<button 
    className="w-full h-14 rounded-full bg-[#E24B4A] text-on-error font-label text-[1rem] font-semibold tracking-wide relative overflow-hidden flex items-center justify-center group active:scale-[0.98] transition-transform select-none touch-none" 
    onMouseDown={startHold}
    onMouseUp={cancelHold}
    onMouseLeave={cancelHold}
    onTouchStart={startHold}
    onTouchEnd={cancelHold}
>
<div className="absolute left-0 top-0 bottom-0 bg-white/20" style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}></div>
<span className="relative z-10">Hold to Confirm SOS</span>
</button>
{/*  Cancel  */}
<Link className="w-full h-14 rounded-full bg-transparent border border-outline-variant/20 text-on-surface-variant font-label text-[1rem] font-medium tracking-wide active:bg-surface-container-low transition-colors flex items-center justify-center" href="/toolkit">
                    Cancel — I&apos;m safe
                </Link>
</div>
</div>
</div>
{/*  Toast Notification  */}
<div className={`fixed top-10 left-1/2 transform -translate-x-1/2 bg-surface-container-highest text-on-surface px-6 py-3 rounded-full shadow-lg transition-opacity duration-300 z-[100] flex items-center gap-2 ${showToast ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
<span className="material-symbols-outlined text-[#E24B4A]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<span className="font-medium font-body text-sm">SOS sent! Help is on the way.</span>
</div>


      </div>
    </div>
  );
}
