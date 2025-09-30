import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AIGuidanceSection } from '@/components/AIGuidanceSection';
import { VirtualToursSection } from '@/components/VirtualToursSection';
import { FooterSection } from '@/components/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AIGuidanceSection />
        <VirtualToursSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
