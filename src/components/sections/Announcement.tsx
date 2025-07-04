'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { ScratchToReveal } from '@/components/magicui/scratch-to-reveal';
import { Badge } from '@/components/ui/badge';

export default function Announcement() {
  return (
    <section id="announcement" className="py-24 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-amber-500/5 to-orange-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Announcement Card */}
          <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 p-1 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-black rounded-xl p-8 md:p-12 text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,165,0,0.1)_25%,rgba(255,165,0,0.1)_75%,transparent_75%)] bg-[size:20px_20px]" />
              </div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <Badge variant="orange" className="text-sm px-4 py-2">
                  🚨 BREAKING NEWS 🚨
                </Badge>
              </motion.div>

              {/* Main Title */}
              <motion.h2 
                className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-300">
                  BIG ANNOUNCEMENT
                </span>
                <br />
                <span className="text-2xl md:text-4xl font-bold text-gray-300">
                  COMING SOON! ✨
                </span>
              </motion.h2>
              
              {/* Description */}
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Something <span className="text-orange-400 font-bold">EXTRAORDINARY</span> is brewing at AXORA 🔥
                <br />
                We can't wait to share this <span className="text-amber-300 font-bold">REVOLUTIONARY</span> news with you! 🙌🏼
              </motion.p>

              {/* Scratch to Reveal Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="bg-gray-900/50 rounded-lg p-6 border border-orange-500/20">
                  <p className="text-gray-400 mb-4 text-sm">👆 Scratch below to reveal a hint:</p>
                  <div className="flex justify-center">
                    <ScratchToReveal
                      width={300}
                      height={80}
                      className="text-2xl font-bold text-orange-400 flex items-center justify-center"
                      gradientColors={["#FF8C00", "#FFA500", "#FFD700"]}
                    >
                      🎮 GAMING REVOLUTION 🎮
                    </ScratchToReveal>
                  </div>
                </div>
              </motion.div>
              
              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <RainbowButton className="text-lg px-8 py-4">
                  🎯 Stay Tuned
                </RainbowButton>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 text-lg px-8 py-4"
                >
                  💭 Drop Your Guess
                </Button>
              </motion.div>
              
              {/* Info Section */}
              <motion.div 
                className="bg-gray-900/30 rounded-lg p-6 border border-gray-700/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📣</span>
                    <div>
                      <p className="text-white font-semibold">Stay Updated</p>
                      <p className="text-gray-400 text-sm">Turn on notifications</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📅</span>
                    <div>
                      <p className="text-white font-semibold">Save the Date</p>
                      <p className="text-gray-400 text-sm">Be the first to know</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Hashtags */}
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-400 text-sm mb-4">Join the conversation:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    '#Axora', '#ComingSoon', '#StayTuned', '#BigReveal', 
                    '#LaunchAlert', '#GamingRevolution', '#TechEvents'
                  ].map((tag, index) => (
                    <motion.span 
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="inline-block bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 px-3 py-1 rounded-full text-xs text-orange-300 hover:bg-orange-500/30 transition-colors duration-300 cursor-pointer"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 