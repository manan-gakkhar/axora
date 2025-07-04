'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Community() {
  return (
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
              Be the first to know about our upcoming events and announcements. Connect with like-minded individuals and be part of something special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-[#5865F2] hover:bg-[#4752C4] text-white flex items-center gap-2"
                onClick={() => window.open('https://discord.gg/TqAnQCWJ', '_blank')}
              >
                <DiscordIcon />
                Discord
              </Button>
              <Button 
                className="bg-[#0088cc] hover:bg-[#0077b5] text-white flex items-center gap-2"
                onClick={() => window.open('https://t.me/+Ouh8sRHtoX05OThl', '_blank')}
              >
                <TelegramIcon />
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
                <p className="text-xs text-gray-400 mt-2">
                  By subscribing, you agree to receive emails from AXORA. You can unsubscribe at any time.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Why Join Our Community?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Connect", description: "Meet like-minded individuals", icon: "👥" },
              { title: "Learn", description: "Gain new skills and knowledge", icon: "📚" },
              { title: "Compete", description: "Participate in exciting events", icon: "🏆" },
              { title: "Grow", description: "Expand your network and opportunities", icon: "🌱" },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                viewport={{ once: true }}
                className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DiscordIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="currentColor"/>
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.2581 2.99785C21.9303 2.70728 21.4932 2.56999 21.0511 2.62211L2.95539 5.32544C2.48562 5.38246 2.08098 5.64326 1.83821 6.03949C1.59543 6.43571 1.54453 6.92116 1.70222 7.35874C1.85991 7.79632 2.20648 8.13614 2.64921 8.28542L7.6001 9.93571L9.74244 17.2346C9.83246 17.5397 10.0253 17.8091 10.2931 17.9998C10.5608 18.1905 10.8865 18.2912 11.2189 18.2855C11.5513 18.2798 11.8732 18.168 12.1342 17.9682C12.3952 17.7684 12.5788 17.4923 12.6583 17.1846L15.9786 4.64542C16.0778 4.25276 16.0103 3.83765 15.7941 3.50271C15.5779 3.16777 15.2343 2.94444 14.8416 2.89542L9.52009 2.14785L20.7581 1.10785C21.0511 1.07855 21.3441 1.14785 21.5906 1.30785C21.8371 1.46785 22.0301 1.70785 22.1301 1.99785C22.2301 2.28785 22.2301 2.59785 22.1301 2.88785C22.0301 3.17785 21.8511 3.42785 21.5906 3.58785L8.6001 12.2879L7.6001 9.93571L20.5906 3.58785C21.1371 3.23785 21.3836 2.52785 21.0371 1.98785C20.8441 1.65785 20.5511 1.42785 20.2021 1.32785C19.8511 1.22785 19.4766 1.27855 19.1581 1.46785L5.6001 9.03571L2.6001 8.28542C2.0511 8.13571 1.6511 7.63571 1.6511 7.06785C1.6511 6.49999 2.0511 5.99999 2.6001 5.84999L20.6906 3.14785C21.0371 3.09785 21.3836 3.17785 21.6581 3.39785C21.9326 3.61785 22.1021 3.93571 22.1301 4.28542C22.1581 4.63571 22.0301 4.97855 21.7906 5.22855C21.5511 5.47855 21.2301 5.61785 20.8836 5.61785L10.1581 6.61785C9.7581 6.65785 9.4001 6.35785 9.3581 5.95785C9.3161 5.55785 9.6161 5.19999 10.0161 5.15785L20.7416 4.15785C20.8836 4.14785 21.0161 4.09785 21.1161 3.99785C21.2161 3.89785 21.2581 3.76785 21.2581 3.62785C21.2581 3.48785 21.2021 3.35785 21.1021 3.26785C21.0021 3.17785 20.8696 3.12785 20.7276 3.13571L2.6371 5.83571C2.5371 5.85785 2.4511 5.93571 2.4161 6.03571C2.3811 6.13571 2.4001 6.24542 2.4696 6.32855C2.5371 6.41168 2.6441 6.45785 2.7511 6.44999L8.0696 6.19999C8.4696 6.17785 8.8161 6.47785 8.8371 6.87785C8.8581 7.27785 8.5581 7.62542 8.1581 7.64542L2.8371 7.89542C2.4371 7.93542 2.0371 7.79542 1.7371 7.49542C1.4371 7.19542 1.2836 6.79542 1.3371 6.39542C1.3906 5.99542 1.6371 5.64542 2.0001 5.44542C2.3631 5.24542 2.8001 5.21785 3.1836 5.37785L3.2836 5.42785L20.9301 2.78785C21.1766 2.74785 21.4301 2.79785 21.6371 2.92785C21.8441 3.05785 21.9906 3.25785 22.0511 3.49785C22.1116 3.73785 22.0836 3.99785 21.9696 4.21785C21.8556 4.43785 21.6581 4.60785 21.4161 4.68785L8.4696 10.9879L10.2301 16.9879C10.2581 17.0879 10.3301 17.1646 10.4231 17.1979C10.5161 17.2312 10.6196 17.2179 10.7001 17.1646C10.7806 17.1112 10.8301 17.0246 10.8301 16.9312L7.5096 4.39542C7.4096 4.00276 7.6096 3.59785 7.9696 3.42785C8.3296 3.25785 8.7581 3.39542 8.9836 3.72855C9.2091 4.06168 9.1371 4.49785 8.8371 4.74785L5.6001 9.03571" fill="currentColor"/>
    </svg>
  );
}