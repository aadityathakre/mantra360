import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { FooterSection } from '@/components/FooterSection';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Play, Navigation, Bookmark, Share, Calendar } from 'lucide-react';

const pilgrimageRoutes = [
  { name: 'Himalayan Circuit', color: 'bg-accent', icon: '⛰️' },
  { name: 'Buddhist Trail', color: 'bg-primary', icon: '🧘' },
  { name: 'Meditation Centers', color: 'bg-green-500', icon: '🕉️' }
];

const journeyTokens = [
  { 
    name: 'Himalayan Explorer', 
    description: 'Completed 5 tours', 
    xp: '+50 XP', 
    icon: '⛰️',
    color: 'bg-accent'
  },
  { 
    name: 'Meditation Master', 
    description: '1 hour daily practice', 
    xp: '+25 XP', 
    icon: '🧘',
    color: 'bg-primary'
  },
  { 
    name: 'Mindful Walker', 
    description: 'Connected to nature', 
    xp: '+15 XP', 
    icon: '🌿',
    color: 'bg-green-500'
  }
];

const quickActions = [
  { name: 'Plan Route', icon: Navigation, color: 'bg-gradient-spiritual' },
  { name: 'Save Location', icon: Bookmark, color: 'bg-accent' },
  { name: 'Share Journey', icon: Share, color: 'bg-green-500' },
  { name: 'Schedule Visit', icon: Calendar, color: 'bg-primary' }
];

const InteractiveMap = () => {
  const [selectedRoute, setSelectedRoute] = useState('Mount Kailash Pilgrimage');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-12 px-4 bg-gradient-sacred">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sacred Sites Interactive Map</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover pilgrimage routes and sacred locations across the globe. Each path tells
              a story of spiritual awakening and divine connection.
            </p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Map Area */}
              <div className="lg:col-span-2">
                {/* Route Legend */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4">Active Pilgrimage Routes</h3>
                  <div className="flex flex-wrap gap-4">
                    {pilgrimageRoutes.map((route) => (
                      <div key={route.name} className="flex items-center gap-2">
                        <div className={`w-4 h-4 ${route.color} rounded-full`}></div>
                        <span className="text-sm">{route.icon} {route.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Map */}
                <Card className="p-0 overflow-hidden shadow-gentle hover:shadow-spiritual transition-all duration-300">
                  <div className="aspect-video bg-gradient-serene relative">
                    {/* Simulated World Map */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20">
                      {/* Map Points */}
                      <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-accent rounded-full animate-pulse shadow-spiritual flex items-center justify-center">
                        <span className="text-xs">⛰️</span>
                      </div>
                      <div className="absolute top-1/3 left-2/3 w-4 h-4 bg-primary rounded-full animate-pulse shadow-spiritual flex items-center justify-center">
                        <span className="text-xs">🕉️</span>
                      </div>
                      <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-spiritual flex items-center justify-center">
                        <span className="text-xs">🧘</span>
                      </div>
                      
                      {/* Sacred Path Lines */}
                      <svg className="absolute inset-0 w-full h-full">
                        <path 
                          d="M200,100 Q300,150 400,120" 
                          stroke="hsl(var(--primary))" 
                          strokeWidth="2" 
                          fill="none" 
                          strokeDasharray="5,5"
                          className="animate-pulse"
                        />
                        <path 
                          d="M300,200 Q400,180 500,160" 
                          stroke="hsl(var(--accent))" 
                          strokeWidth="2" 
                          fill="none" 
                          strokeDasharray="5,5"
                          className="animate-pulse"
                        />
                      </svg>
                    </div>

                    {/* Selected Location Info */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <Card className="p-4 bg-background/80 backdrop-blur-sm border shadow-gentle">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold">{selectedRoute}</h4>
                            <p className="text-sm text-muted-foreground">Sacred journey around Tibet's holy mountain</p>
                          </div>
                          <Button variant="spiritual" size="sm" className="gap-2">
                            <Play className="h-4 w-4" />
                            Explore Path
                          </Button>
                        </div>
                      </Card>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Journey Tokens */}
                <Card className="p-6 shadow-gentle">
                  <h3 className="text-lg font-semibold mb-4">Journey Tokens</h3>
                  <div className="space-y-3">
                    {journeyTokens.map((token, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                        <div className={`w-10 h-10 ${token.color} rounded-full flex items-center justify-center text-white`}>
                          <span>{token.icon}</span>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{token.name}</p>
                          <p className="text-xs text-muted-foreground">{token.description}</p>
                        </div>
                        <span className="text-xs font-medium text-accent">{token.xp}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="sacred" className="w-full mt-4">
                    View All Achievements
                  </Button>
                </Card>

                {/* Quick Actions */}
                <Card className="p-6 shadow-gentle">
                  <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {quickActions.map((action, index) => (
                      <Button
                        key={index}
                        variant="serene"
                        className="flex-col h-auto py-4 gap-2"
                      >
                        <div className={`w-8 h-8 ${action.color} rounded-full flex items-center justify-center`}>
                          <action.icon className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-xs">{action.name}</span>
                      </Button>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default InteractiveMap;