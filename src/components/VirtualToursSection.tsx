import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Gift } from 'lucide-react';
import potalaImage from '@/assets/potala-palace.jpg';
import kinkakuImage from '@/assets/kinkaku-temple.jpg';
import rishikeshImage from '@/assets/rishikesh-ashram.jpg';

const tourLocations = [
  {
    id: 1,
    title: 'Potala Palace',
    subtitle: "Tibet's most iconic spiritual fortress",
    image: potalaImage,
    hotspots: 12,
    icon: '🏛️'
  },
  {
    id: 2,
    title: 'Kinkaku-ji Temple',
    subtitle: 'Golden Pavilion of Kyoto',
    image: kinkakuImage,
    hotspots: 8,
    icon: '🏯'
  },
  {
    id: 3,
    title: 'Rishikesh Ashram',
    subtitle: 'Yoga capital of the World',
    image: rishikeshImage,
    hotspots: 15,
    icon: '🧘'
  }
];

export const VirtualToursSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Immersive 360° Virtual Tours
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Step into the world's most sacred spaces with our cutting-edge virtual reality
            technology. Experience the profound peace of ancient monasteries from
            anywhere in the world.
          </p>
        </div>

        {/* Tour Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tourLocations.map((location) => (
            <div
              key={location.id}
              className="group relative overflow-hidden rounded-2xl shadow-gentle hover:shadow-spiritual transition-all duration-500 hover:scale-105"
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={location.image}
                  alt={location.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Hotspots indicator */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-accent text-sm">✨</span>
                  <span className="text-white text-sm font-medium">{location.hotspots} Interactive Hotspots</span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{location.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold">{location.title}</h3>
                      <p className="text-sm text-white/80">{location.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <Play className="h-6 w-6 text-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-spiritual p-8 md:p-12 text-center text-white">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Experience the Full Journey
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join over 10,000 spiritual seekers who have found inner peace through our immersive virtual tours
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="serene" size="lg" className="gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30">
                <Play className="h-5 w-5" />
                Start Free Tour
              </Button>
              <Button variant="sacred" size="lg" className="gap-2 bg-accent">
                <Gift className="h-5 w-5" />
                Premium Access
              </Button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full" />
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full" />
        </div>
      </div>
    </section>
  );
};