import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { AnimatedSubscribeButton } from '@/components/magicui/animated-subscribe-button';

// import { VideoText } from '@/components/magicui/video-text';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* <SmoothCursor /> */}
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 py-24 sm:py-32 md:py-40 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500">
                  AXORA
                </span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground">
                Hosting premium gaming events, hackathons, and more.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedSubscribeButton className="bg-orange-500 hover:bg-orange-600">
                  <span>Join Community</span>
                  <span>Welcome Aboard!</span>
                </AnimatedSubscribeButton>
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500/10">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
          <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#FFA500_100%)]" />
        </section>

        {/* Announcement Section */}
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  🛑✨ BIG ANNOUNCEMENT COMING SOON! ✨🛑
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Something exciting is on its way at AXORA 🔥<br />
                  We can't wait to share it with you all. 🙌🏼
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <RainbowButton>
                    Stay Tuned
                  </RainbowButton>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Drop Your Guess
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-beige-50">
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Gaming Events",
                  description: "Competitive tournaments and casual gaming sessions for all skill levels",
                  icon: "🎮"
                },
                {
                  title: "Hackathons",
                  description: "Collaborative coding events to build innovative solutions",
                  icon: "💻"
                },
                {
                  title: "Community",
                  description: "Connect with like-minded individuals in our growing community",
                  icon: "🤝"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-xl"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
                <p className="text-xl text-gray-300 mb-6">
                  Be the first to know about our upcoming events and announcements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Discord
                  </Button>
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                    Telegram
                  </Button>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-full max-w-md"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Subscribe to Updates</h3>
                  <div className="space-y-4">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      {/* <footer className="bg-black border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-white">AXORA</h2>
              <p className="text-gray-400 mt-2">Premium Gaming & Tech Events</p>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Events</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              <a href="https://discord.gg/TqAnQCWJ" className="text-gray-400 hover:text-white transition-colors">Discord</a>
              <a href="https://t.me/+Ouh8sRHtoX05OThl" className="text-gray-400 hover:text-white transition-colors">Telegram</a>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} AXORA. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}