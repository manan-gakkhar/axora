'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AnimatedSubscribeButton } from '@/components/magicui/animated-subscribe-button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-24 sm:py-32 md:py-40 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100 
            }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500">
                AXORA
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="mt-6 text-xl md:text-2xl text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Elevating gaming events, hackathons, and tech experiences
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <AnimatedSubscribeButton className="bg-orange-500 hover:bg-orange-600 text-white">
              <span>Join Community</span>
              <span>Welcome Aboard!</span>
            </AnimatedSubscribeButton>
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500/10">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#FFA500_100%)]" />
      
      {/* Animated shapes */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange-500/10 blur-xl"
            style={{
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 10 + 10,
            }}
          />
        ))}
      </div>
    </section>
  );
}