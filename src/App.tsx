import { useEffect, useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Announcement from './components/sections/Announcement';
import Community from './components/sections/Community';
import CTA from './components/sections/CTA';
import Footer from './components/sections/Footer';
import { SmoothCursor } from './components/ui/smooth-cursor';

// Force dark theme on body
export default function App() {
  useEffect(() => {
    document.title = 'AXORA - Gaming Events & Hackathons';
    
    // Add global style to hide default cursor
    const style = document.createElement('style');
    style.textContent = `* { cursor: none !important; }`;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useLayoutEffect(() => {
    document.body.classList.add('dark');
    return () => document.body.classList.remove('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-x-hidden">
      <SmoothCursor />
      <Navbar />
      <main className="flex-1 flex flex-col gap-0">
        <Hero />
        <Announcement />
        <Features />
        <Community />
        <CTA />
      </main>
      <Footer />
      {/* Glassmorphism background effect */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-br from-orange-500/10 via-black/60 to-orange-400/10 blur-2xl opacity-80" aria-hidden="true" />
    </div>
  );
}