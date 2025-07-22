import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaTelegram, FaInstagram, FaDiscord, FaLinkedin, FaLink } from 'react-icons/fa';
import { socialLinks } from '@/lib/utils';

const event = {
  id: 'chakravyuh',
  title: 'CHAKRAVYUH',
  subtitle: 'The Ultimate BGMI Challenge',
  description: "Think your squad has the skill and strategy to conquer the deadliest formation? It's time to prove it in a battle where only the best survive.",
  date: 'August 23-24, 2025',
  location: 'Online',
  image: '/chakravyuh1.0.jpg',
  registrationLink: 'https://forms.gle/fbQ9LeDSkpYC2W9P7',
  prizePool: 'To be revealed soon',
  game: 'BGMI',
};

const socials = [
  { ...socialLinks.whatsapp, icon: <FaWhatsapp className="w-5 h-5" /> },
  { ...socialLinks.telegram, icon: <FaTelegram className="w-5 h-5" /> },
  { ...socialLinks.instagram, icon: <FaInstagram className="w-5 h-5" /> },
  { ...socialLinks.discord, icon: <FaDiscord className="w-5 h-5" /> },
  { ...socialLinks.linkedin, icon: <FaLinkedin className="w-5 h-5" /> },
  { ...socialLinks.linktree, icon: <FaLink className="w-5 h-5" /> },
];

export default function Events() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-black/60 to-orange-400/10 blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">Upcoming Event</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Join our exciting gaming events and competitions
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative group shadow-xl rounded-2xl sm:rounded-3xl overflow-hidden bg-black/70 backdrop-blur-xl border border-white/10"
          >
            <div className="relative h-56 sm:h-64 md:h-80 overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-col items-start">
                <span className="inline-flex items-center rounded-full bg-orange-500/20 px-2 sm:px-3 py-1 text-xs font-medium text-orange-500 backdrop-blur-sm">
                  {event.game}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 drop-shadow-lg">{event.title}</h3>
                <p className="text-sm text-gray-300 drop-shadow">{event.subtitle}</p>
              </div>
            </div>
            <div className="p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
              <p className="text-sm sm:text-base text-gray-300 mb-1 sm:mb-2">{event.description}</p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                  <span className="text-xs sm:text-sm text-gray-300">{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                  <span className="text-xs sm:text-sm text-gray-300">{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                  <span className="text-xs sm:text-sm text-gray-300">Prize Pool: {event.prizePool}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                  <span className="text-xs sm:text-sm text-gray-300">Team Event</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center rounded-full w-8 h-8 sm:w-10 sm:h-10 border border-white/10 bg-white/5 hover:bg-white/20 transition-colors ${social.textColor}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-1 sm:mt-2">
                <Button asChild className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white flex-1 text-xs sm:text-sm h-9 sm:h-10">
                  <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                    Register Now
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500/10 flex-1 text-xs sm:text-sm h-9 sm:h-10">
                  <Link to={`/events/${event.id}`}>
                    View Details
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10 flex-1 text-xs sm:text-sm h-9 sm:h-10">
                  <a href={socialLinks.whatsapp.url} target="_blank" rel="noopener noreferrer">
                    Join Community
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 