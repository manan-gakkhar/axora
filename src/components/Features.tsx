'use client';

import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

export default function Features() {
  const features: Feature[] = [
    {
      title: "Gaming Events",
      description: "Competitive tournaments and casual gaming sessions for all skill levels. Join our community of gamers and compete for exciting prizes.",
      icon: "🎮"
    },
    {
      title: "Hackathons",
      description: "Collaborative coding events to build innovative solutions. Connect with fellow developers and create something amazing together.",
      icon: "💻"
    },
    {
      title: "Community",
      description: "Connect with like-minded individuals in our growing community. Share ideas, collaborate on projects, and make lasting connections.",
      icon: "🤝"
    },
    {
      title: "Workshops",
      description: "Learn new skills and enhance your knowledge with our expert-led workshops. Stay ahead of the curve in the rapidly evolving tech landscape.",
      icon: "🧠"
    },
    {
      title: "Networking",
      description: "Expand your professional network and connect with industry leaders. Discover new opportunities and grow your career.",
      icon: "🌐"
    },
    {
      title: "Exclusive Content",
      description: "Get access to exclusive content, early announcements, and special offers. Be the first to know about our upcoming events and initiatives.",
      icon: "🔑"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AXORA brings you premium experiences in gaming and tech events
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border border-orange-100"
            >
              <div className="text-4xl mb-4 bg-orange-100 w-16 h-16 flex items-center justify-center rounded-full">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}