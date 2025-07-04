'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/magicui/rainbow-button';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join the AXORA Experience?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of our growing community of gamers, developers, and tech enthusiasts. 
            Don't miss out on our upcoming events and announcements!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <RainbowButton 
              className="text-lg px-8 py-6"
              onClick={() => window.open('https://discord.gg/TqAnQCWJ', '_blank')}
            >
              Join Discord
            </RainbowButton>
            <Button 
              className="text-lg px-8 py-6 bg-black hover:bg-black/80 text-white"
              onClick={() => window.open('https://t.me/+Ouh8sRHtoX05OThl', '_blank')}
            >
              Join Telegram
            </Button>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-black text-white p-8 rounded-2xl shadow-xl max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-orange-400">AXORA</span> Newsletter
            </h3>
            <p className="mb-6">
              Subscribe to our newsletter and be the first to know about our upcoming events, 
              exclusive offers, and community updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              By subscribing, you agree to receive emails from AXORA. You can unsubscribe at any time.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}