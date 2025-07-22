'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp, FaTelegram, FaInstagram, FaDiscord, FaLinkedin, FaLink } from 'react-icons/fa';
import { socialLinks } from '@/lib/utils';

const socials = [
  { ...socialLinks.whatsapp, icon: <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { ...socialLinks.telegram, icon: <FaTelegram className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { ...socialLinks.instagram, icon: <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { ...socialLinks.discord, icon: <FaDiscord className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { ...socialLinks.linkedin, icon: <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { ...socialLinks.linktree, icon: <FaLink className="w-5 h-5 sm:w-6 sm:h-6" /> },
];

export default function Community() {
  return (
    <section id="community" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500">
            Join Our Community
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 px-2">
            Connect with us on your favorite platform:
          </p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 justify-items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center gap-2 rounded-xl w-full max-w-[120px] py-4 border border-white/10 bg-white/5 hover:bg-white/20 transition-all duration-300 ${social.textColor} hover:scale-105`}
              aria-label={social.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 border border-white/10 mb-1 sm:mb-2">
                {social.icon}
              </span>
              <span className="text-sm sm:text-base font-medium text-white">{social.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 