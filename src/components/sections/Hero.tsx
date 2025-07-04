'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Sparkles, Gamepad2, Code, Globe, Star, MessageSquare, Share2 } from 'lucide-react';
import { IconWrapper } from '@/components/ui/icon-wrapper';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,165,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,165,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
        
        {/* Floating Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-xl"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 
                ? 'radial-gradient(circle, rgba(255,165,0,0.15) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(245,245,220,0.1) 0%, transparent 70%)',
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 15 + 10,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 3D-like floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Tech-inspired floating elements */}
        <motion.div 
          className="absolute w-32 h-32 md:w-40 md:h-40 rounded-xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 backdrop-blur-sm"
          style={{ top: '15%', left: '10%' }}
          animate={{ 
            y: [0, -20, 0], 
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16">
              <IconWrapper 
                icon={Gamepad2} 
                size={32} 
                gradientFrom="from-orange-500" 
                gradientTo="to-red-500" 
                glowColor="rgba(249, 115, 22, 0.5)"
                hoverEffect={false}
              />
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20 backdrop-blur-sm"
          style={{ top: '25%', right: '15%' }}
          animate={{ 
            y: [0, 20, 0], 
            rotate: [0, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14">
              <IconWrapper 
                icon={Code} 
                size={28} 
                gradientFrom="from-amber-500" 
                gradientTo="to-yellow-500" 
                glowColor="rgba(245, 158, 11, 0.5)"
                hoverEffect={false}
              />
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute w-20 h-20 md:w-28 md:h-28 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm"
          style={{ bottom: '20%', right: '20%' }}
          animate={{ 
            y: [0, -15, 0], 
            rotate: [0, -3, 0],
            scale: [1, 1.03, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12">
              <IconWrapper 
                icon={Globe} 
                size={24} 
                gradientFrom="from-blue-500" 
                gradientTo="to-purple-500" 
                glowColor="rgba(59, 130, 246, 0.5)"
                hoverEffect={false}
              />
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute w-16 h-16 md:w-24 md:h-24 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 backdrop-blur-sm"
          style={{ bottom: '30%', left: '15%' }}
          animate={{ 
            y: [0, 12, 0], 
            rotate: [0, 4, 0],
            scale: [1, 1.04, 1]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10">
              <IconWrapper 
                icon={Star} 
                size={20} 
                gradientFrom="from-green-500" 
                gradientTo="to-emerald-500" 
                glowColor="rgba(16, 185, 129, 0.5)"
                hoverEffect={false}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-24 sm:py-32 md:py-40 relative z-10">
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
            <Badge variant="orange" className="text-sm px-4 py-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Coming Soon - Join the Revolution
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
            className="mb-8 relative"
          >
            {/* 3D-like title with perspective */}
            <div className="perspective-[1000px]">
              <motion.h1 
                className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-4 relative z-10 transform-gpu"
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
            
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
          </motion.div>
          
          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Where <span className="text-orange-400 font-semibold">Gaming</span> Meets{' '}
            <span className="text-amber-300 font-semibold">Innovation</span>
          </motion.p>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Hosting epic gaming events, hackathons, and tech experiences that bring together 
            the brightest minds in the industry. Get ready for something extraordinary.
          </motion.p>
          
          {/* Feature Icons */}
          <motion.div
            className="flex justify-center gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-12 h-12 mb-2">
                <IconWrapper 
                  icon={Gamepad2} 
                  gradientFrom="from-orange-500" 
                  gradientTo="to-red-500"
                  glowColor="rgba(249, 115, 22, 0.5)"
                />
              </div>
              <span className="text-sm text-gray-400">Gaming Events</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-12 h-12 mb-2">
                <IconWrapper 
                  icon={Code}
                  gradientFrom="from-amber-500" 
                  gradientTo="to-yellow-500"
                  glowColor="rgba(245, 158, 11, 0.5)"
                />
              </div>
              <span className="text-sm text-gray-400">Hackathons</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-12 h-12 mb-2">
                <IconWrapper 
                  icon={Sparkles}
                  gradientFrom="from-blue-500" 
                  gradientTo="to-indigo-500"
                  glowColor="rgba(59, 130, 246, 0.5)"
                />
              </div>
              <span className="text-sm text-gray-400">Tech Meetups</span>
            </motion.div>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <RainbowButton className="text-lg px-8 py-4 relative group overflow-hidden">
              <span className="relative z-10">Join the Community</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </RainbowButton>
            <Button 
              variant="outline" 
              className="border-orange-500 text-orange-500 hover:bg-orange-500/10 text-lg px-8 py-4 relative overflow-hidden group"
            >
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 transition-colors duration-300"></span>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="mt-12 flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.a 
              href="https://discord.gg/TqAnQCWJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex items-center space-x-2">
                <IconWrapper 
                  icon={MessageSquare} 
                  className="w-8 h-8"
                  gradientFrom="from-indigo-500" 
                  gradientTo="to-purple-500"
                  glowColor="rgba(99, 102, 241, 0.5)"
                />
                <span className="text-sm font-medium">Discord</span>
              </div>
            </motion.a>
            <motion.a 
              href="https://t.me/+Ouh8sRHtoX05OThl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex items-center space-x-2">
                <IconWrapper 
                  icon={Share2} 
                  className="w-8 h-8"
                  gradientFrom="from-blue-500" 
                  gradientTo="to-cyan-500"
                  glowColor="rgba(59, 130, 246, 0.5)"
                />
                <span className="text-sm font-medium">Telegram</span>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-10 h-10"
          >
            <IconWrapper 
              icon={ArrowDown} 
              gradientFrom="from-orange-500" 
              gradientTo="to-orange-600"
              glowColor="rgba(249, 115, 22, 0.5)"
              size={18}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
} 