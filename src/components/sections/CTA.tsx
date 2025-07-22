'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Trophy, Clock } from 'lucide-react';
import { IconWrapper } from '@/components/ui/icon-wrapper';
import { socialLinks } from '@/lib/utils';

export default function CTA() {
  return (
    <section id="join" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-90" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,165,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,165,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        {/* Radial gradients */}
        <div className="absolute top-1/4 right-1/3 w-1/3 h-1/3 bg-orange-500/5 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-1/4 h-1/4 bg-amber-500/5 rounded-full filter blur-[100px]" />
      </div>
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 md:p-12 lg:p-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Glowing elements */}
          <div className="absolute -inset-40 bg-orange-500/5 rounded-full filter blur-[100px] z-0" />
          <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-full blur-lg animate-pulse" />
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative z-10">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16">
                <IconWrapper 
                  icon={Trophy}
                  gradientFrom="from-amber-500" 
                  gradientTo="to-orange-500"
                  glowColor="rgba(245, 158, 11, 0.6)"
                  size={36}
                />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500">
              Ready to Join the AXORA Revolution?
            </h2>
            <p className="text-xl text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Be the first to access our exclusive gaming events, hackathons, and tech meetups. 
              Join our community of innovators and enthusiasts today!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <motion.div 
                className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-orange-500/30 transition-colors duration-300 group"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12">
                    <IconWrapper 
                      icon={Zap}
                      gradientFrom="from-amber-500" 
                      gradientTo="to-yellow-500"
                      glowColor="rgba(245, 158, 11, 0.5)"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">Early Access</h3>
                </div>
                <p className="text-gray-400 ml-16">Get first dibs on event registrations, exclusive content, and special offers.</p>
              </motion.div>
              <motion.div 
                className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-orange-500/30 transition-colors duration-300 group"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12">
                    <IconWrapper 
                      icon={Clock}
                      gradientFrom="from-orange-500" 
                      gradientTo="to-red-500"
                      glowColor="rgba(249, 115, 22, 0.5)"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">Limited Time</h3>
                </div>
                <p className="text-gray-400 ml-16">Our founding member benefits are only available for a limited time. Don't miss out!</p>
              </motion.div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                asChild
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-lg px-8 py-4 relative group overflow-hidden"
              >
                <a href={socialLinks.whatsapp.url} target="_blank" rel="noopener noreferrer">
                  Join Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="border-orange-500 text-orange-500 hover:bg-orange-500/10 text-lg px-8 py-4 relative overflow-hidden group"
              >
                <span className="relative z-10">Learn More</span>
                <span className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 transition-colors duration-300"></span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 