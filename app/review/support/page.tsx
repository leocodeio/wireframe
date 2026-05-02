'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SupportReview() {
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      router.push('/');
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-[#FCF9F5] px-6">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        </div>
        <h1 className="text-2xl font-bold text-on-surface mb-2">Feedback Received</h1>
        <p className="text-on-surface-variant text-center">Thank you for rating our local guardian. Your input ensures community safety.</p>
        <p className="text-primary text-sm mt-8 animate-pulse">Redirecting home...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[#FCF9F5]">
      <div className="w-full max-w-lg relative flex flex-col min-h-screen shadow-2xl bg-surface mx-auto">
        {/* Header */}
        <header className="sticky top-0 z-40 w-full bg-[#FCF9F5]/80 backdrop-blur-xl border-b border-outline-variant/10">
          <div className="flex items-center justify-between px-6 h-16 w-full">
            <button onClick={() => router.back()} className="text-on-surface-variant">
              <span className="material-symbols-outlined">close</span>
            </button>
            <h1 className="font-semibold text-lg text-on-surface">Review Support</h1>
            <div className="w-6"></div>
          </div>
        </header>

        <main className="flex-1 px-6 pt-8 pb-20 flex flex-col items-center">
          <div className="w-20 h-20 bg-primary-container/20 rounded-2xl flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-primary text-[42px]" style={{ fontVariationSettings: "'FILL' 1" }}>person_pin</span>
          </div>
          
          <h2 className="text-2xl font-bold text-on-surface text-center mb-1">Rate Elena Rodriguez</h2>
          <p className="text-on-surface-variant text-sm text-center mb-8">How helpful was your local guardian during your session?</p>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
            {/* Star Rating */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="transition-transform active:scale-90"
                  >
                    <span 
                      className={`material-symbols-outlined text-[48px] ${rating >= star ? 'text-primary' : 'text-outline-variant'}`}
                      style={{ fontVariationSettings: `'FILL' ${rating >= star ? 1 : 0}` }}
                    >
                      star
                    </span>
                  </button>
                ))}
              </div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider h-5">
                {rating === 1 && 'Unsatisfactory'}
                {rating === 2 && 'Below Average'}
                {rating === 3 && 'Helpful'}
                {rating === 4 && 'Very Helpful'}
                {rating === 5 && 'Outstanding Support'}
              </p>
            </div>

            {/* Support Specifics */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'quick', label: 'Quick Response', icon: 'speed' },
                { id: 'kind', label: 'Kind & Patient', icon: 'mood' },
                { id: 'knowledge', label: 'Local Expert', icon: 'map' },
                { id: 'resource', label: 'Great Advice', icon: 'lightbulb' },
              ].map(opt => (
                <button
                  key={opt.id}
                  type="button"
                  className="flex items-center gap-2 p-3 rounded-xl border border-outline-variant/30 bg-surface-container-low hover:bg-primary/5 hover:border-primary/30 transition-all text-left"
                >
                  <span className="material-symbols-outlined text-on-surface-variant text-[18px]">{opt.icon}</span>
                  <span className="text-[13px] font-medium text-on-surface">{opt.label}</span>
                </button>
              ))}
            </div>

            {/* Comment */}
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-semibold text-on-surface-variant uppercase tracking-wide">Write a review</label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="What made this guardian helpful?"
                className="w-full h-32 p-4 bg-surface-container rounded-2xl border border-outline-variant/30 text-on-surface text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={rating === 0}
              className="w-full h-14 bg-gradient-to-br from-[#1D9E75] to-[#008560] text-on-primary rounded-full font-bold text-[1rem] shadow-lg hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              Submit Review
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
