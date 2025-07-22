'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { socialLinks } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-black/80 backdrop-blur-md py-3 shadow-sm'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center">
              <img 
                src="/logo-2.png" 
                alt="AXORA Logo" 
                className="h-12 md:h-16" 
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Link to="/" className="text-foreground/80 hover:text-orange-400 transition-colors">
                Home
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Link to="/events" className="text-foreground/80 hover:text-orange-400 transition-colors">
                Events
              </Link>
            </motion.div>
            {isHomePage && (
              <>
                <motion.button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    const el = document.getElementById('community');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-foreground/80 hover:text-orange-400 transition-colors cursor-pointer"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  Community
                </motion.button>
              </>
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white"
                asChild
              >
                <a href={socialLinks.whatsapp.url} target="_blank" rel="noopener noreferrer">
                  Join Now
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-border/50 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="text-foreground/80 hover:text-orange-400 py-2 transition-colors text-left flex items-center justify-between"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>Home</span>
                </Link>
                <Link 
                  to="/events" 
                  className="text-foreground/80 hover:text-orange-400 py-2 transition-colors text-left flex items-center justify-between"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>Events</span>
                </Link>
                {isHomePage && (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      const el = document.getElementById('community');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-foreground/80 hover:text-orange-400 py-2 transition-colors text-left flex items-center justify-between"
                  >
                    <span>Community</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                )}
                <Button 
                  className="bg-orange-500 hover:bg-orange-600 text-white w-full mt-2"
                  asChild
                >
                  <a href={socialLinks.whatsapp.url} target="_blank" rel="noopener noreferrer">
                    Join Now
                  </a>
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}