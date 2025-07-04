'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gamepad2, Code, Globe, Users, Zap, Trophy, Lightbulb, Cpu, Activity } from 'lucide-react';
import { IconWrapper } from '@/components/ui/icon-wrapper';

const featuresList = [
  {
    icon: Gamepad2,
    title: 'Epic Gaming Tournaments',
    description: 'Compete in high-stakes gaming events with players from around the world',
    colorFrom: 'from-orange-500',
    colorTo: 'to-red-500',
    glowColor: 'rgba(249, 115, 22, 0.5)',
  },
  {
    icon: Code,
    title: 'Hackathons',
    description: 'Build innovative solutions with fellow developers in time-limited coding challenges',
    colorFrom: 'from-amber-500',
    colorTo: 'to-yellow-500',
    glowColor: 'rgba(245, 158, 11, 0.5)',
  },
  {
    icon: Globe,
    title: 'Worldwide Community',
    description: 'Connect with tech enthusiasts and gamers from across the globe',
    colorFrom: 'from-blue-500',
    colorTo: 'to-indigo-500',
    glowColor: 'rgba(59, 130, 246, 0.5)',
  },
  {
    icon: Users,
    title: 'Networking Opportunities',
    description: 'Meet industry professionals and forge lasting connections',
    colorFrom: 'from-purple-500',
    colorTo: 'to-pink-500',
    glowColor: 'rgba(168, 85, 247, 0.5)',
  },
  {
    icon: Zap,
    title: 'Workshops & Training',
    description: 'Level up your skills with expert-led sessions and hands-on learning',
    colorFrom: 'from-green-500',
    colorTo: 'to-emerald-500',
    glowColor: 'rgba(16, 185, 129, 0.5)',
  },
  {
    icon: Trophy,
    title: 'Exciting Prizes',
    description: 'Win recognition and rewards for your gaming and coding talents',
    colorFrom: 'from-pink-500',
    colorTo: 'to-rose-500',
    glowColor: 'rgba(236, 72, 153, 0.5)',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Showcases',
    description: 'Discover cutting-edge technologies and creative solutions',
    colorFrom: 'from-cyan-500',
    colorTo: 'to-sky-500',
    glowColor: 'rgba(6, 182, 212, 0.5)',
  },
  {
    icon: Cpu,
    title: 'Tech Demos',
    description: 'Experience the latest hardware and software advancements firsthand',
    colorFrom: 'from-indigo-500',
    colorTo: 'to-violet-500',
    glowColor: 'rgba(99, 102, 241, 0.5)',
  },
  {
    icon: Activity,
    title: 'Live Streaming',
    description: 'Follow all events live with professional commentary and interactive chats',
    colorFrom: 'from-red-500',
    colorTo: 'to-orange-500',
    glowColor: 'rgba(239, 68, 68, 0.5)',
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,165,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,165,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        
        {/* Radial gradients */}
        <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-orange-500/10 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 bg-amber-500/10 rounded-full filter blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="orange" className="mb-4">Features</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500">
            What Makes AXORA Special
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-300">
            We're building a revolutionary platform to unite gamers and developers in unprecedented ways.
          </p>
        </motion.div>
        
        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="border border-gray-800 bg-black/50 backdrop-blur-sm hover:border-orange-500/50 transition-colors duration-300 overflow-hidden group relative h-full">
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-amber-500/0 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                
                <div className="p-6 relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg flex-shrink-0">
                      <IconWrapper 
                        icon={feature.icon} 
                        gradientFrom={feature.colorFrom}
                        gradientTo={feature.colorTo}
                        glowColor={feature.glowColor}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-100 group-hover:text-orange-400 transition-colors duration-300">{feature.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Gradient line at bottom */}
                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300 ease-out" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 