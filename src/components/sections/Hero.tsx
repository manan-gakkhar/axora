'use client';

import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Sparkles, Gamepad2, Code } from 'lucide-react';
import { IconWrapper } from '@/components/ui/icon-wrapper';
import { socialLinks } from '@/lib/utils';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center">
      <Helmet>
        {/* Organization structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AXORA",
            "url": "https://axora.garcade.in",
            "logo": "https://axora.garcade.in/logo.png",
            "sameAs": [
              socialLinks.whatsapp.url,
              socialLinks.telegram.url,
              socialLinks.instagram.url,
              socialLinks.discord.url,
              socialLinks.linkedin.url,
              socialLinks.linktree.url
            ],
            "description": "AXORA is a platform for gaming events, hackathons, and tech meetups. Join our community to participate in exciting tournaments and coding challenges."
          })}
        </script>
      </Helmet>
      
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,165,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,165,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 sm:py-24 md:py-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 flex justify-center"
          >
            <Badge variant="orange" className="text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 flex items-center gap-1 sm:gap-2">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" /> Coming Soon - Join the Revolution
            </Badge>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 1,
              type: "spring",
              stiffness: 100,
              delay: 0.3
            }}
            className="mb-6 sm:mb-8 relative"
          >
            {/* 3D-like title with perspective */}
            <div className="perspective-[1000px]">
              <motion.h1 
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 relative z-10 transform-gpu"
                animate={{ 
                  rotateX: [0, 2, 0, -2, 0], 
                  rotateY: [0, -2, 0, 2, 0],
                }}
                transition={{ 
                  duration: 8, 
                  ease: "easeInOut", 
                  repeat: Infinity 
                }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600">
                  AXORA
                </span>
              </motion.h1>
            </div>
            
            {/* Enhanced glow effect */}
            <div className="absolute -inset-10 bg-orange-500/10 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            <div className="absolute -inset-10 bg-amber-500/5 rounded-full filter blur-3xl opacity-20 animate-pulse" 
                style={{ 
                  animation: 'pulse 8s infinite alternate',
                  top: '50%', 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)' 
                }} 
            />
            
            <div className="h-1 w-20 sm:w-32 mx-auto bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
          </motion.div>
          
          {/* Subtitle */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 sm:mb-6 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Where <span className="text-orange-400 font-semibold">Gaming</span> Meets{' '}
            <span className="text-amber-300 font-semibold">Innovation</span>
          </motion.p>

          {/* Description */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Hosting epic gaming events, hackathons, and tech experiences that bring together 
            the brightest minds in the industry. Get ready for something extraordinary.
          </motion.p>
          
          {/* Feature Icons */}
          <motion.div
            className="flex justify-center gap-4 sm:gap-8 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 mb-2">
                <IconWrapper 
                  icon={Gamepad2} 
                  gradientFrom="from-orange-500" 
                  gradientTo="to-red-500"
                  glowColor="rgba(249, 115, 22, 0.5)"
                  size={24}
                />
              </div>
              <span className="text-xs sm:text-sm text-gray-400">Gaming Events</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 mb-2">
                <IconWrapper 
                  icon={Code}
                  gradientFrom="from-amber-500" 
                  gradientTo="to-yellow-500"
                  glowColor="rgba(245, 158, 11, 0.5)"
                  size={24}
                />
              </div>
              <span className="text-xs sm:text-sm text-gray-400">Hackathons</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 mb-2">
                <IconWrapper 
                  icon={Sparkles}
                  gradientFrom="from-blue-500" 
                  gradientTo="to-indigo-500"
                  glowColor="rgba(59, 130, 246, 0.5)"
                  size={24}
                />
              </div>
              <span className="text-xs sm:text-sm text-gray-400">Tech Meetups</span>
            </motion.div>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <RainbowButton
              asChild
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 relative group overflow-hidden w-full sm:w-auto"
            >
              <a href={socialLinks.whatsapp.url} target="_blank" rel="noopener noreferrer">
                Join the Community
              </a>
            </RainbowButton>
            <Button 
              asChild
              variant="outline" 
              className="border-orange-500 text-orange-500 hover:bg-orange-500/10 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 relative overflow-hidden group w-full sm:w-auto"
            >
              <a href={socialLinks.linktree.url} target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-8 h-8 sm:w-10 sm:h-10"
          >
            <IconWrapper 
              icon={ArrowDown} 
              gradientFrom="from-orange-500" 
              gradientTo="to-orange-600"
              glowColor="rgba(249, 115, 22, 0.5)"
              size={16}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
} 