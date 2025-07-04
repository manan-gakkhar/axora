'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/magicui/rainbow-button';

export default function Announcement() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 p-1 rounded-xl overflow-hidden"
        >
          <div className="bg-black rounded-lg p-8 md:p-12 text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              🛑✨ BIG ANNOUNCEMENT COMING SOON! ✨🛑
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Something exciting is on its way at AXORA 🔥<br />
              We can't wait to share it with you all. 🙌🏼
            </motion.p>
            
            <motion.div 
              className="flex flex-col md:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <RainbowButton>
                Stay Tuned
              </RainbowButton>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Drop Your Guess
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-8 text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p>
                📣 Stay tuned for updates.<br />
                📅 Save this page and turn on notifications to be the first to know!
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {['#Axora', '#ComingSoon', '#StayTuned', '#BigReveal', '#LaunchAlert'].map((tag) => (
                  <span key={tag} className="inline-block bg-white/10 px-2 py-1 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}