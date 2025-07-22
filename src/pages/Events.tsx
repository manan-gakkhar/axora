import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Search } from 'lucide-react';
import { useState } from 'react';

// Mock data - in a real app, this would come from an API
const eventsData = [
  {
    id: 'chakravyuh',
    title: 'CHAKRAVYUH',
    subtitle: 'The Ultimate BGMI Challenge',
    description: 'Think your squad has the skill and strategy to conquer the deadliest formation? It\'s time to prove it in a battle where only the best survive.',
    date: 'August 23-24, 2025',
    location: 'Online',
    image: '/chakravyuh1.0.jpg',
    registrationLink: 'https://forms.gle/fbQ9LeDSkpYC2W9P7',
    whatsappLink: 'https://chat.whatsapp.com/DLVh66jm0JUCZIAE1qi5kW',
    prizePool: 'To be revealed soon',
    game: 'BGMI',
    status: 'upcoming'
  },
  // Placeholder for more events
];

export default function EventsPage() {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter events based on status and search query
  const filteredEvents = eventsData.filter(event => {
    const matchesFilter = filter === 'all' || event.status === filter;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Gaming Events & Tournaments | AXORA</title>
        <meta name="description" content="Browse and register for upcoming gaming tournaments, hackathons, and tech events organized by AXORA. Find BGMI tournaments, coding competitions, and more." />
        <meta name="keywords" content="gaming events, tournaments, BGMI, hackathons, tech meetups, esports, AXORA events" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://axora.garcade.in/events" />
        <meta property="og:title" content="Gaming Events & Tournaments | AXORA" />
        <meta property="og:description" content="Browse and register for upcoming gaming tournaments, hackathons, and tech events organized by AXORA." />
        <meta property="og:image" content="https://axora.garcade.in/logo.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://axora.garcade.in/events" />
        <meta property="twitter:title" content="Gaming Events & Tournaments | AXORA" />
        <meta property="twitter:description" content="Browse and register for upcoming gaming tournaments, hackathons, and tech events organized by AXORA." />
        <meta property="twitter:image" content="https://axora.garcade.in/logo.png" />
        
        {/* EventList structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": filteredEvents.map((event, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Event",
                "name": event.title,
                "description": event.description,
                "startDate": event.date,
                "location": {
                  "@type": "Place",
                  "name": event.location
                },
                "image": `https://axora.garcade.in${event.image}`,
                "url": `https://axora.garcade.in/events/${event.id}`,
                "organizer": {
                  "@type": "Organization",
                  "name": "AXORA",
                  "url": "https://axora.garcade.in"
                }
              }
            }))
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-black relative">
        {/* Glassmorphism background effect */}
        <div className="fixed inset-0 bg-gradient-to-br from-orange-500/10 via-black/60 to-orange-400/10 blur-3xl" />
        
        <div className="relative z-10">
          {/* Hero section */}
          <div className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  Upcoming Events
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Discover and register for our exciting gaming tournaments and hackathons
                </p>
                
                {/* Search and filter */}
                <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search events..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      aria-label="Search events"
                    />
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant={filter === 'all' ? 'default' : 'outline'} 
                      onClick={() => setFilter('all')}
                      className={filter === 'all' ? 'bg-orange-500 hover:bg-orange-600' : 'border-white/20 text-white hover:bg-white/10'}
                    >
                      All
                    </Button>
                    <Button 
                      variant={filter === 'upcoming' ? 'default' : 'outline'} 
                      onClick={() => setFilter('upcoming')}
                      className={filter === 'upcoming' ? 'bg-orange-500 hover:bg-orange-600' : 'border-white/20 text-white hover:bg-white/10'}
                    >
                      Upcoming
                    </Button>
                    <Button 
                      variant={filter === 'past' ? 'default' : 'outline'} 
                      onClick={() => setFilter('past')}
                      className={filter === 'past' ? 'bg-orange-500 hover:bg-orange-600' : 'border-white/20 text-white hover:bg-white/10'}
                    >
                      Past
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Events listing */}
          <div className="container mx-auto px-4 pb-20">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-20">
                <h3 className="text-2xl font-medium text-white mb-2">No events found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl transform group-hover:scale-[1.01] transition-all duration-300" />
                    <div className="relative bg-black/80 backdrop-blur-xl m-[1px] rounded-2xl p-1 overflow-hidden h-full">
                      <div className="flex flex-col h-full">
                        <div className="relative h-48 overflow-hidden rounded-xl">
                          <img 
                            src={event.image} 
                            alt={event.title} 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <span className="inline-flex items-center rounded-full bg-orange-500/20 px-2.5 py-0.5 text-xs font-medium text-orange-500 backdrop-blur-sm">
                              {event.game}
                            </span>
                            <h3 className="text-xl font-bold text-white mt-2">{event.title}</h3>
                            <p className="text-gray-300 text-sm">{event.subtitle}</p>
                          </div>
                        </div>
                        
                        <div className="p-4 flex-1 flex flex-col">
                          <div className="flex-1">
                            <div className="grid grid-cols-2 gap-3 mb-4">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-orange-500" />
                                <span className="text-sm text-gray-300">{event.date}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-orange-500" />
                                <span className="text-sm text-gray-300">{event.location}</span>
                              </div>
                            </div>
                            <p className="text-gray-400 text-sm line-clamp-2 mb-4">{event.description}</p>
                          </div>
                          
                          <div className="flex gap-2 mt-auto">
                            <Button asChild className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white flex-1 text-sm py-1 h-auto">
                              <Link to={`/events/${event.id}`}>
                                View Details
                              </Link>
                            </Button>
                            <Button asChild variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500/10 flex-1 text-sm py-1 h-auto">
                              <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                                Register
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
} 