"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNavBar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', icon: 'home', label: 'Home' },
    { href: '/travel', icon: 'explore', label: 'Travel' },
    { href: '/stay', icon: 'bed', label: 'Stay' },
    { href: '/navigate', icon: 'near_me', label: 'Navigate' },
    { href: '/toolkit', icon: 'handyman', label: 'Toolkit', fill: true },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-[72px] z-50 rounded-t-3xl bg-[#FCF9F5]/85 backdrop-blur-md shadow-[0_-8px_24px_rgba(26,26,24,0.08)] flex justify-around items-center px-4 pb-safe w-full max-w-lg mx-auto md:sticky md:bottom-6 md:max-w-4xl md:rounded-full">
      {navItems.map((item) => {
        const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
        
        return (
          <Link 
            key={item.label}
            className={`flex flex-col items-center justify-center transition-all duration-200 p-2 rounded-full px-4 py-1 active:scale-90 ${
              isActive 
                ? 'bg-[#1D9E75]/10 text-[#1D9E75]' 
                : 'text-slate-400 hover:bg-slate-100'
            }`} 
            href={item.href}
          >
            <span 
              className="material-symbols-outlined mb-1" 
              style={item.fill || isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              {item.icon}
            </span>
            <span className="font-inter text-[10px] font-medium tracking-wide">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
