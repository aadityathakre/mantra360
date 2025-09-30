import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Map, Users, Star, MapPin } from 'lucide-react';
import heroImage from '@/assets/spiritual-hero.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-serene">
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm">
        <span className="text-accent">🌸</span>
      </div>
      <div className="absolute top-32 right-16 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
        <span className="text-primary text-xl">🕉</span>
      </div>
      <div className="absolute bottom-40 left-20 w-10 h-10 bg-accent/30 rounded-full flex items-center justify-center backdrop-blur-sm">
        <span className="text-accent">✨</span>
      </div>
      <div className="absolute bottom-60 right-10 w-14 h-14 bg-primary/25 rounded-full flex items-center justify-center backdrop-blur-sm">
        <span className="text-primary">🪷</span>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Central Om Symbol */}
        <div className="w-20 h-20 mx-auto mb-8 bg-gradient-spiritual rounded-full flex items-center justify-center shadow-spiritual">
          <span className="text-white text-2xl">🕉</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Journey Into Sacred{' '}
          <span className="bg-gradient-spiritual bg-clip-text text-transparent">
            Spaces
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Experience the world's most sacred monasteries through immersive 360° virtual tours,
          discover ancient wisdom, and connect with a global community of spiritual seekers.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="spiritual" size="lg" className="gap-2">
            <Play className="h-5 w-5" />
            Start Virtual Tour
          </Button>
          <Button variant="serene" size="lg" className="gap-2">
            <Map className="h-5 w-5" />
            Explore Map
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
              <MapPin className="h-4 w-4 text-accent" />
            </div>
            <span className="text-muted-foreground">50+ Sacred Sites</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
              <Users className="h-4 w-4 text-primary" />
            </div>
            <span className="text-muted-foreground">10K+ Pilgrims</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
              <Star className="h-4 w-4 text-accent" />
            </div>
            <span className="text-muted-foreground">Authentic Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};