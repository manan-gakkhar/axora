import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Trophy, 
  ChevronLeft,
  ExternalLink,
  Info
} from 'lucide-react';
import { FaWhatsapp, FaTelegram, FaInstagram, FaDiscord, FaLinkedin, FaLink, FaTwitter, FaYoutube } from 'react-icons/fa';
import { socialLinks } from '@/lib/utils';

// Define types for event data
interface Round {
  name: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;
  color: string;
}

interface EventData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  date: string;
  time: string;
  location: string;
  image: string;
  registrationLink: string;
  socialLinks: SocialLink[];
  prizePool: string;
  game: string;
  teamSize: string;
  format: string;
  rounds: Round[];
  rules: string[];
  faqs: FAQ[];
}

type EventsDataRecord = Record<string, EventData>;

// Mock data - in a real app, this would come from an API
const eventsData: EventsDataRecord = {
  chakravyuh: {
    id: 'chakravyuh',
    title: 'CHAKRAVYUH',
    subtitle: 'The Ultimate BGMI Challenge',
    description: 'Think your squad has the skill and strategy to conquer the deadliest formation? It\'s time to prove it in a battle where only the best survive.',
    longDescription: `
      The Ultimate BGMI Challenge is HERE!
      
      Axora presents CHAKRAVYUH!
      
      Think your squad has the skill and strategy to conquer the deadliest formation? It's time to prove it in a battle where only the best survive.
      
      Join us for an intense competition where teams will battle it out in custom rooms with specially designed rules and challenges. Only the most strategic and skilled teams will make it to the final rounds!
      
      Form your squad of 4 players and register now to secure your spot in this epic tournament.
    `,
    date: 'August 23-24, 2025',
    time: '6:00 PM - 10:00 PM IST',
    location: 'Online',
    image: '/chakravyuh1.0.jpg',
    registrationLink: 'https://forms.gle/fbQ9LeDSkpYC2W9P7',
    socialLinks: [
      {
        name: 'WhatsApp',
        url: 'https://chat.whatsapp.com/DLVh66jm0JUCZIAE1qi5kW',
        icon: <FaWhatsapp />,
        color: 'bg-[#25D366] hover:bg-[#128C7E]'
      },
      {
        name: 'Discord',
        url: 'https://discord.gg/axora',
        icon: <FaDiscord />,
        color: 'bg-[#5865F2] hover:bg-[#4752C4]'
      },
      {
        name: 'Telegram',
        url: 'https://t.me/axoraevents',
        icon: <FaTelegram />,
        color: 'bg-[#0088cc] hover:bg-[#0077b5]'
      }
    ],
    prizePool: 'To be revealed soon',
    game: 'BGMI',
    teamSize: '4 players',
    format: 'Custom Rooms',
    rounds: [
      {
        name: 'Qualifiers',
        description: 'Multiple qualifier rounds where teams compete in custom rooms'
      },
      {
        name: 'Semi-Finals',
        description: 'Top teams from qualifiers battle it out'
      },
      {
        name: 'Grand Finals',
        description: 'The best teams compete for the championship'
      }
    ],
    rules: [
      'All players must be registered before the event',
      'Teams must join the WhatsApp group for announcements',
      'Be online 15 minutes before your scheduled match',
      'No emulators allowed - only mobile devices',
      'Teaming with other squads will result in disqualification',
      'Tournament admins have final say on all disputes'
    ],
    faqs: [
      {
        question: 'How do I register my team?',
        answer: 'Fill out the registration form and join the WhatsApp group for further instructions.'
      },
      {
        question: 'Is there an entry fee?',
        answer: 'No, participation is completely free!'
      },
      {
        question: 'Can I participate if I don\'t have a full squad?',
        answer: 'We recommend having a full squad of 4 players, but you can register with fewer and potentially find teammates in our community.'
      },
      {
        question: 'How will the winners be determined?',
        answer: 'Teams will earn points based on placement and eliminations. The team with the highest points after the final round wins.'
      }
    ]
  }
};

export default function EventDetails() {
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState<EventData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    // In a real app, this would be an API call
    setTimeout(() => {
      if (eventId && eventsData[eventId]) {
        setEvent(eventsData[eventId]);
      }
      setLoading(false);
    }, 500);
  }, [eventId]);

  // SEO metadata based on event
  const seoTitle = event ? `${event.title} - ${event.subtitle} | AXORA` : 'Event Details | AXORA';
  const seoDescription = event ? `${event.description} Join us on ${event.date} for this exciting ${event.game} event.` : 'View details about our upcoming gaming events and tournaments.';
  const seoKeywords = event ? `${event.game}, ${event.title}, gaming event, tournament, AXORA, ${event.location}` : 'gaming events, tournaments, AXORA events';
  const seoImage = event ? event.image : '/logo.png';

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading event details...</div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
        <Helmet>
          <title>Event Not Found | AXORA</title>
          <meta name="description" content="The requested event could not be found." />
        </Helmet>
        <h1 className="text-3xl font-bold text-white mb-4">Event Not Found</h1>
        <p className="text-gray-300 mb-8">The event you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    );
  }

  const socials = [
    { ...socialLinks.whatsapp, icon: <FaWhatsapp className="w-5 h-5" /> },
    { ...socialLinks.telegram, icon: <FaTelegram className="w-5 h-5" /> },
    { ...socialLinks.instagram, icon: <FaInstagram className="w-5 h-5" /> },
    { ...socialLinks.discord, icon: <FaDiscord className="w-5 h-5" /> },
    { ...socialLinks.linkedin, icon: <FaLinkedin className="w-5 h-5" /> },
    { ...socialLinks.linktree, icon: <FaLink className="w-5 h-5" /> },
  ];

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://axora.garcade.in/events/${event.id}`} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={`https://axora.garcade.in${seoImage}`} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://axora.garcade.in/events/${event.id}`} />
        <meta property="twitter:title" content={seoTitle} />
        <meta property="twitter:description" content={seoDescription} />
        <meta property="twitter:image" content={`https://axora.garcade.in${seoImage}`} />
        
        {/* Event structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": event.title,
            "description": event.description,
            "startDate": event.date,
            "endDate": event.date,
            "location": {
              "@type": "Place",
              "name": event.location,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": event.location
              }
            },
            "image": `https://axora.garcade.in${event.image}`,
            "performer": {
              "@type": "Organization",
              "name": "AXORA"
            },
            "organizer": {
              "@type": "Organization",
              "name": "AXORA",
              "url": "https://axora.garcade.in"
            },
            "offers": {
              "@type": "Offer",
              "url": event.registrationLink,
              "price": "0",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-black relative">
        {/* Glassmorphism background effect */}
        <div className="fixed inset-0 bg-gradient-to-br from-orange-500/10 via-black/60 to-orange-400/10 blur-3xl" />
        
        <div className="relative z-10">
          {/* Hero section with event banner */}
          <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
              <div className="container mx-auto">
                <Link to="/" className="inline-flex items-center text-white mb-4 hover:text-orange-500 transition-colors">
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  Back to Home
                </Link>
                
                <div>
                  <span className="inline-flex items-center rounded-full bg-orange-500/20 px-2.5 py-0.5 text-xs font-medium text-orange-500 backdrop-blur-sm">
                    {event.game}
                  </span>
                  <h1 className="text-4xl md:text-6xl font-bold text-white mt-2">{event.title}</h1>
                  <p className="text-xl text-gray-300 mt-2">{event.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left column - Event details */}
              <div className="lg:col-span-2">
                {/* Navigation tabs */}
                <div className="flex overflow-x-auto gap-4 mb-8 pb-2">
                  {['overview', 'rules', 'schedule', 'faqs'].map((section) => (
                    <button
                      key={section}
                      onClick={() => setActiveSection(section)}
                      className={`px-4 py-2 rounded-full whitespace-nowrap ${
                        activeSection === section 
                          ? 'bg-orange-500 text-white' 
                          : 'bg-white/5 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  ))}
                </div>
                
                {/* Content sections */}
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-8">
                  {activeSection === 'overview' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl font-bold text-white mb-4">Event Overview</h2>
                      <div className="text-gray-300 space-y-4 whitespace-pre-line">
                        {event.longDescription}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <Card className="bg-white/5 border-white/10">
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Tournament Format</h3>
                            <div className="space-y-4">
                              {event.rounds.map((round: Round, index: number) => (
                                <div key={index} className="flex gap-3">
                                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                                    {index + 1}
                                  </div>
                                  <div>
                                    <h4 className="text-white font-medium">{round.name}</h4>
                                    <p className="text-gray-400 text-sm">{round.description}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Card>
                        
                        <Card className="bg-white/5 border-white/10">
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Prize Pool</h3>
                            <div className="flex items-center gap-3 mb-4">
                              <Trophy className="w-8 h-8 text-orange-500" />
                              <div>
                                <h4 className="text-white font-medium">Total Prize</h4>
                                <p className="text-gray-300">{event.prizePool}</p>
                              </div>
                            </div>
                            <p className="text-gray-400 text-sm">
                              Full prize distribution will be announced soon. Stay tuned for updates!
                            </p>
                          </div>
                        </Card>
                      </div>
                    </motion.div>
                  )}
                  
                  {activeSection === 'rules' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl font-bold text-white mb-4">Tournament Rules</h2>
                      <div className="bg-white/5 rounded-xl p-6">
                        <ul className="list-disc pl-5 space-y-3 text-gray-300">
                          {event.rules.map((rule: string, index: number) => (
                            <li key={index}>{rule}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                  
                  {activeSection === 'schedule' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl font-bold text-white mb-4">Event Schedule</h2>
                      <div className="bg-white/5 rounded-xl p-6">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-medium text-white">Day 1: August 23, 2025</h3>
                            <div className="mt-3 space-y-3">
                              <div className="flex gap-3">
                                <div className="text-orange-500 font-medium w-20">6:00 PM</div>
                                <div className="text-gray-300">Registration Confirmation</div>
                              </div>
                              <div className="flex gap-3">
                                <div className="text-orange-500 font-medium w-20">6:30 PM</div>
                                <div className="text-gray-300">Qualifier Rounds Begin</div>
                              </div>
                              <div className="flex gap-3">
                                <div className="text-orange-500 font-medium w-20">10:00 PM</div>
                                <div className="text-gray-300">Day 1 Concludes</div>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-medium text-white">Day 2: August 24, 2025</h3>
                            <div className="mt-3 space-y-3">
                              <div className="flex gap-3">
                                <div className="text-orange-500 font-medium w-20">6:00 PM</div>
                                <div className="text-gray-300">Semi-Finals</div>
                              </div>
                              <div className="flex gap-3">
                                <div className="text-orange-500 font-medium w-20">8:00 PM</div>
                                <div className="text-gray-300">Grand Finals</div>
                              </div>
                              <div className="flex gap-3">
                                <div className="text-orange-500 font-medium w-20">9:30 PM</div>
                                <div className="text-gray-300">Winners Announcement</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  {activeSection === 'faqs' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                      <div className="space-y-6">
                        {event.faqs.map((faq: FAQ, index: number) => (
                          <div key={index} className="bg-white/5 rounded-xl p-6">
                            <h3 className="text-lg font-medium text-white mb-2">{faq.question}</h3>
                            <p className="text-gray-300">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
              
              {/* Right column - Registration and info */}
              <div>
                <div className="sticky top-8 space-y-6">
                  {/* Registration card */}
                  <Card className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 border-white/10 backdrop-blur-xl overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Registration</h3>
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-orange-500" />
                          <div>
                            <div className="text-sm text-gray-400">Event date</div>
                            <div className="text-white">{event.date}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-orange-500" />
                          <div>
                            <div className="text-sm text-gray-400">Time</div>
                            <div className="text-white">{event.time}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-orange-500" />
                          <div>
                            <div className="text-sm text-gray-400">Venue</div>
                            <div className="text-white">{event.location}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <Users className="w-5 h-5 text-orange-500" />
                          <div>
                            <div className="text-sm text-gray-400">Team Size</div>
                            <div className="text-white">{event.teamSize}</div>
                          </div>
                        </div>
                      </div>
                      
                      <Button asChild className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 mb-4">
                        <a href={event.registrationLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                          Register Now
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                      
                      {/* Community Links */}
                      <div className="mt-6">
                        <h4 className="text-white font-medium mb-3">Join Our Community</h4>
                        <div className="grid grid-cols-3 gap-3">
                          {socials.map((social, index) => (
                            <Button 
                              key={index} 
                              asChild 
                              className={`bg-white/5 border-white/10 text-white w-full flex items-center justify-center gap-2 hover:bg-white/20 ${social.textColor}`}
                              size="sm"
                            >
                              <a 
                                href={social.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center"
                                aria-label={social.name}
                              >
                                <span className="text-lg">{social.icon}</span>
                              </a>
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                  
                  {/* Share card */}
                  <Card className="bg-white/5 border-white/10">
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-white mb-4">Share This Event</h3>
                      <div className="flex flex-wrap gap-2">
                        <Button variant="outline" size="icon" className="rounded-full border-white/20 text-white hover:bg-white/10">
                          <FaTwitter className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full border-white/20 text-white hover:bg-white/10">
                          <FaWhatsapp className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full border-white/20 text-white hover:bg-white/10">
                          <FaLinkedin className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full border-white/20 text-white hover:bg-white/10">
                          <FaLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                  
                  {/* Organizer info */}
                  <Card className="bg-white/5 border-white/10">
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-white mb-4">Organized By</h3>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg">
                          A
                        </div>
                        <div>
                          <div className="text-white font-medium">AXORA</div>
                          <div className="text-gray-400 text-sm">Gaming Events & Hackathons</div>
                        </div>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <Button variant="outline" size="icon" className="rounded-full border-white/20 text-white hover:bg-white/10 h-8 w-8">
                          <FaTwitter className="w-3 h-3" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full border-white/20 text-white hover:bg-white/10 h-8 w-8">
                          <FaInstagram className="w-3 h-3" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full border-white/20 text-white hover:bg-white/10 h-8 w-8">
                          <FaYoutube className="w-3 h-3" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full border-white/20 text-white hover:bg-white/10 h-8 w-8">
                          <FaDiscord className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                  
                  {/* Need help */}
                  <div className="bg-white/5 rounded-xl p-4 flex items-center gap-3">
                    <Info className="w-5 h-5 text-orange-500" />
                    <p className="text-sm text-gray-300">
                      Need help? Contact us at <span className="text-white">support@axora.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 