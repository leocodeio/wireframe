'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    localStorage.setItem('sr_authed', 'user');
    setTimeout(() => router.push('/'), 800);
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[#FCF9F5]">
      <div className="w-full max-w-lg relative flex flex-col min-h-screen shadow-2xl bg-surface mx-auto">

        {/* Hero */}
        <div className="flex flex-col items-center pt-12 pb-8 px-6">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-md mb-5 bg-[#F0FBF5]">
            <span className="material-symbols-outlined text-[42px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              luggage
            </span>
          </div>
          <h1 className="text-[2rem] font-bold text-on-surface tracking-tight text-center leading-tight">
            Join SafeRoam
          </h1>
          <p className="text-on-surface-variant text-[14px] mt-1 text-center">Your safe travel companion starts here.</p>
        </div>

        {/* Form */}
        <div className="flex-1 px-6 pb-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-on-surface-variant uppercase tracking-wide" htmlFor="name">Full Name</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[18px] text-on-surface-variant">person</span>
                <input
                  id="name" type="text" required placeholder="Alex Johnson"
                  value={name} onChange={e => setName(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-surface-container rounded-xl border border-outline-variant/40 text-on-surface text-[15px] placeholder:text-outline-variant focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-on-surface-variant uppercase tracking-wide" htmlFor="email">Email</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[18px] text-on-surface-variant">mail</span>
                <input
                  id="email" type="email" required placeholder="you@example.com"
                  value={email} onChange={e => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-surface-container rounded-xl border border-outline-variant/40 text-on-surface text-[15px] placeholder:text-outline-variant focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-on-surface-variant uppercase tracking-wide" htmlFor="password">Password</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[18px] text-on-surface-variant">lock</span>
                <input
                  id="password" type="password" required placeholder="••••••••"
                  value={password} onChange={e => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-surface-container rounded-xl border border-outline-variant/40 text-on-surface text-[15px] placeholder:text-outline-variant focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>

            <button
              type="submit" disabled={loading}
              className="w-full py-4 rounded-xl font-bold text-[16px] text-white bg-primary flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md mt-2 disabled:opacity-70"
            >
              {loading
                ? <span className="material-symbols-outlined text-[22px] animate-spin">progress_activity</span>
                : <><span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>person_add</span> Create Account</>
              }
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-2">
              <div className="flex-1 h-px bg-outline-variant/40" />
              <span className="text-[12px] text-on-surface-variant font-medium">or join with</span>
              <div className="flex-1 h-px bg-outline-variant/40" />
            </div>

            {/* Social buttons */}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => {
                  setLoading(true);
                  localStorage.setItem('sr_authed', 'user');
                  setTimeout(() => router.push('/'), 600);
                }}
                className="flex-1 py-3 rounded-xl border border-outline-variant/40 bg-surface-container-lowest flex items-center justify-center gap-2 text-[14px] font-semibold text-on-surface hover:bg-surface-container transition-colors active:scale-95"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
              <button
                type="button"
                onClick={() => {
                  setLoading(true);
                  localStorage.setItem('sr_authed', 'user');
                  setTimeout(() => router.push('/'), 600);
                }}
                className="flex-1 py-3 rounded-xl border border-outline-variant/40 bg-surface-container-lowest flex items-center justify-center gap-2 text-[14px] font-semibold text-on-surface hover:bg-surface-container transition-colors active:scale-95"
              >
                <svg viewBox="0 0 384 512" className="w-4 h-4 fill-on-surface">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-53.8-21-89.4-21-47.1 0-89.8 26.6-114.1 69-49.9 86.7-12.8 214.3 35.1 283.4 23.5 33.9 51.5 72.1 88.5 70.7 35.8-1.4 47.5-23.2 91.4-23.2 43.8 0 54.4 23.2 91.4 21.8 38.3-1.4 62.6-34.6 86-68.5 26.2-38.3 36.8-75.1 37.3-77.1-1.1-.4-71.5-27.5-71.6-107.4zM240.4 57.3C261.3 32.3 250.7 11.2 249.7 10c-35.8 3.5-73.3 23.2-83.3 43.1-23.2 26.4-14.8 45.4-14.2 46.7 39.4 3.1 76.8-17.6 88.2-42.5z"/>
                </svg>
                Apple
              </button>
            </div>

            <p className="text-center text-[13px] text-on-surface-variant mt-3">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-primary font-semibold hover:underline">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
