import { useEffect, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
// import Announcement from './components/sections/Announcement';
import Community from './components/sections/Community';
import CTA from './components/sections/CTA';
import Footer from './components/sections/Footer';
import Events from './components/sections/Events';
import { SmoothCursor } from './components/ui/smooth-cursor';
import EventsPage from './pages/Events';
import EventDetails from './pages/EventDetails';
import ScrollToTop from './components/ui/ScrollToTop';

// SEO component for dynamic meta tags
interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

function SEO({ 
  title = 'AXORA - Gaming Events & Hackathons',
  description = 'AXORA is a platform for gaming events, hackathons, and tech meetups. Join our community to participate in exciting tournaments and coding challenges.',
  keywords = 'gaming events, hackathons, BGMI tournaments, tech meetups, esports, coding challenges, Axora',
  image = '/logo.png',
  url = 'https://axora.garcade.in'
}: SEOProps) {
  const location = useLocation();
  const currentUrl = `${url}${location.pathname}`;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${url}${image}`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
}

// Force dark theme on body
export default function App() {
  useEffect(() => {
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
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-background flex flex-col relative overflow-x-hidden">
          <SmoothCursor />
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <SEO />
                <main className="flex-1 flex flex-col gap-0">
                  <Hero />
                  {/* <Announcement /> */}
                  <Features />
                  <Events />
                  <Community />
                  {/* <Community /> */}
                  <CTA />
                </main>
              </>
            } />
            <Route path="/events" element={
              <>
                <SEO 
                  title="Events - AXORA Gaming & Hackathons" 
                  description="Browse upcoming and past gaming events and hackathons organized by AXORA. Register for tournaments and join our community."
                  keywords="AXORA events, gaming tournaments, hackathons, BGMI, tech events, esports competitions"
                />
                <EventsPage />
              </>
            } />
            <Route path="/events/:eventId" element={
              <EventDetails />
            } />
          </Routes>
          <Footer />
          {/* Glassmorphism background effect */}
          <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-br from-orange-500/10 via-black/60 to-orange-400/10 blur-2xl opacity-80" aria-hidden="true" />
        </div>
      </Router>
    </HelmetProvider>
  );
}