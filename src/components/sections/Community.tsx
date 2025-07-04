'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Users, MessageSquare, Share2, Heart, Sparkles, Zap, Globe } from 'lucide-react';
import { IconWrapper } from '@/components/ui/icon-wrapper';
import { toast } from 'sonner';

const stats = [
  { 
    value: '2,500+', 
    label: 'Community Members', 
    icon: Users,
    colorFrom: 'from-orange-500',
    colorTo: 'to-red-500',
    glowColor: 'rgba(249, 115, 22, 0.5)',
  },
  { 
    value: '100+', 
    label: 'Events Planned', 
    icon: Sparkles,
    colorFrom: 'from-amber-500',
    colorTo: 'to-yellow-500',
    glowColor: 'rgba(245, 158, 11, 0.5)',
  },
  { 
    value: '30+', 
    label: 'Global Locations', 
    icon: Globe,
    colorFrom: 'from-blue-500',
    colorTo: 'to-indigo-500',
    glowColor: 'rgba(59, 130, 246, 0.5)',
  },
  { 
    value: '15K+', 
    label: 'Social Media Reach', 
    icon: Share2,
    colorFrom: 'from-purple-500',
    colorTo: 'to-pink-500',
    glowColor: 'rgba(168, 85, 247, 0.5)',
  },
];

const testimonials = [
  {
    content: "AXORA's events bring together the most talented gamers and developers I've ever met. The energy is incredible!",
    author: "Sarah J.",
    role: "Game Developer",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    content: "The hackathons organized by AXORA pushed me to create my best work yet. The community support is unmatched.",
    author: "Michael T.",
    role: "Software Engineer",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    content: "I've made lifelong friends and professional connections through AXORA's networking events. A must for any tech enthusiast!",
    author: "Elena R.",
    role: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/100?img=3",
  }
];

export default function Community() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email');
      return;
    }
    toast.success('Thanks for subscribing! We\'ll keep you updated.');
    setEmail('');
  };

  return (
    <section id="community" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900 opacity-90" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,165,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,165,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        
        {/* Radial gradients */}
        <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-orange-500/5 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/3 w-1/4 h-1/4 bg-amber-500/5 rounded-full filter blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="orange" className="mb-4">Community</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500">
            Join Our Growing Network
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-300">
            Connect with thousands of gamers, developers, and tech enthusiasts from around the world.
          </p>
        </motion.div>
        
        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 text-center hover:border-orange-500/30 transition-colors duration-300 relative group"
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-amber-500/0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl" />
              
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <IconWrapper 
                    icon={stat.icon}
                    gradientFrom={stat.colorFrom}
                    gradientTo={stat.colorTo}
                    glowColor={stat.glowColor}
                    size={28}
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="mb-20">
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-center mb-10 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            What Our Community Says
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-orange-500/30 transition-colors duration-300 relative group"
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-amber-500/0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl" />
                
                <div className="mb-4">
                  <IconWrapper 
                    icon={MessageSquare}
                    gradientFrom="from-amber-500"
                    gradientTo="to-orange-500"
                    glowColor="rgba(245, 158, 11, 0.5)"
                    size={22}
                  />
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-10 h-10 rounded-full mr-3 border-2 border-orange-500/20"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.author}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div 
          className="max-w-3xl mx-auto bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 md:p-10 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Glowing background effect */}
          <div className="absolute -inset-40 bg-orange-500/5 rounded-full filter blur-[100px] z-0" />
          
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <IconWrapper 
                icon={Heart}
                gradientFrom="from-red-500"
                gradientTo="to-pink-500"
                glowColor="rgba(239, 68, 68, 0.5)"
                size={28}
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-3 text-white">Stay Updated</h3>
            <p className="text-gray-300 text-center mb-6">
              Subscribe to our newsletter for early access, exclusive updates and special offers.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-black/50 border-gray-700 focus:border-orange-500 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
              >
                Subscribe
                <Zap className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <p className="text-xs text-gray-500 mt-4 text-center">
              By subscribing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 