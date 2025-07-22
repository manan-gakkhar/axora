'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  FaDiscord, 
  FaTelegram, 
  FaInstagram, 
  FaLinkedin,
  FaWhatsapp,
  FaLink
} from 'react-icons/fa';
import type { ReactNode } from 'react';
import { socialLinks } from '@/lib/utils';

const footerLinks = {
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Our Mission', href: '#' },
    { name: 'Team', href: '#' },
    { name: 'Careers', href: '#' }
  ],
  events: [
    { name: 'Gaming Events', href: '#' },
    { name: 'Hackathons', href: '#' },
    { name: 'Tech Meetups', href: '#' },
    { name: 'Workshops', href: '#' }
  ],
  community: [
    { name: 'Discord', href: socialLinks.discord.url, icon: <FaDiscord /> },
    { name: 'Telegram', href: socialLinks.telegram.url, icon: <FaTelegram /> },
    { name: 'WhatsApp', href: socialLinks.whatsapp.url, icon: <FaWhatsapp /> },
    { name: 'Instagram', href: socialLinks.instagram.url, icon: <FaInstagram /> }
  ],
  support: [
    { name: 'Help Center', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' }
  ]
};

interface SocialLinkItem {
  name: string;
  icon: ReactNode;
  href: string;
  color: string;
}

const footerSocialLinks: SocialLinkItem[] = [
  { 
    name: 'Discord', 
    icon: <FaDiscord className="w-5 h-5" />, 
    href: socialLinks.discord.url,
    color: socialLinks.discord.textColor
  },
  { 
    name: 'Telegram', 
    icon: <FaTelegram className="w-5 h-5" />, 
    href: socialLinks.telegram.url,
    color: socialLinks.telegram.textColor
  },
  { 
    name: 'WhatsApp', 
    icon: <FaWhatsapp className="w-5 h-5" />, 
    href: socialLinks.whatsapp.url,
    color: socialLinks.whatsapp.textColor
  },
  { 
    name: 'Instagram', 
    icon: <FaInstagram className="w-5 h-5" />, 
    href: socialLinks.instagram.url,
    color: socialLinks.instagram.textColor
  },
  { 
    name: 'LinkedIn', 
    icon: <FaLinkedin className="w-5 h-5" />, 
    href: socialLinks.linkedin.url,
    color: socialLinks.linkedin.textColor
  },
  { 
    name: 'Linktree', 
    icon: <FaLink className="w-5 h-5" />, 
    href: socialLinks.linktree.url,
    color: socialLinks.linktree.textColor
  }
];

export default function Footer() {
  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,165,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,165,0,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500 mb-4">
                  AXORA
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Revolutionizing the gaming and tech event industry. We bring together 
                  the brightest minds to create extraordinary experiences that inspire 
                  innovation and foster meaningful connections.
                </p>
                <Badge variant="orange" className="mb-4">
                  Coming Soon
                </Badge>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                {footerSocialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-900/50 border border-gray-800 rounded-lg flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:bg-gray-800`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Events Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Events</h4>
              <ul className="space-y-3">
                {footerLinks.events.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Community Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Community</h4>
              <ul className="space-y-3">
                {footerLinks.community.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2"
                    >
                      <span className="text-sm">{link.icon}</span>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <Separator className="bg-orange-500/20" />

        {/* Newsletter Section */}
        <motion.div 
          className="py-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay in the Loop
          </h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Get the latest updates about our events, community news, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-900/50 border border-orange-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/40 transition-colors duration-300"
            />
            <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3">
              Subscribe
            </Button>
          </div>
        </motion.div>

        <Separator className="bg-orange-500/20" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p 
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              © 2024 AXORA. All rights reserved. Revolutionizing gaming events and tech innovation.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {footerLinks.support.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
} 