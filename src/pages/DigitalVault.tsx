import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { FooterSection } from '@/components/FooterSection';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, TrendingUp, Eye, Gift } from 'lucide-react';

const artifacts = [
  {
    id: 1,
    name: 'Prayer Wheel of Wisdom',
    rarity: 'Rare',
    image: '🎭',
    color: 'bg-amber-500',
    verified: true
  },
  {
    id: 2,
    name: 'Lotus Mandala',
    rarity: 'Epic',
    image: '🪷',
    color: 'bg-purple-500',
    verified: false
  },
  {
    id: 3,
    name: 'Temple Bell',
    rarity: 'Common',
    image: '🔔',
    color: 'bg-gray-500',
    verified: true
  },
  {
    id: 4,
    name: 'Golden Buddha Essence',
    rarity: 'Legendary',
    image: '🏛️',
    color: 'bg-gradient-spiritual',
    verified: true,
    source: 'Captured from Potala Palace meditation hall'
  },
  {
    id: 5,
    name: 'Zen Garden Serenity',
    rarity: 'Rare',
    image: '🌸',
    color: 'bg-green-500',
    verified: true,
    source: 'From Kinkaku-ji Temple grounds'
  }
];

const vaultStats = [
  { label: 'Total Value', value: '2,847 SP', color: 'text-accent' },
  { label: 'Rare Items', value: '23', color: 'text-primary' },
  { label: 'Legendary', value: '3', color: 'text-yellow-500' },
  { label: 'Trading Score', value: 'A+', color: 'text-green-500' }
];

const recentActivity = [
  { action: 'New Artifact', item: 'Prayer Flag collected', time: '2h', icon: '✨' },
  { action: 'Trade Complete', item: 'Meditation Cushion', time: '1d', icon: '🔄' },
  { action: 'Rare Discovery', item: 'Ancient Scroll', time: '3d', icon: '💎' }
];

const DigitalVault = () => {
  const [filter, setFilter] = useState('all');

  const filteredArtifacts = filter === 'all' 
    ? artifacts 
    : artifacts.filter(a => a.rarity.toLowerCase() === filter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-12 px-4 bg-gradient-sacred">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Digital Artifact Vault</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Collect, preserve, and trade authentic digital artifacts from your spiritual journeys.
              Each piece is blockchain-verified and carries the essence of sacred spaces.
            </p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Collection Stats */}
                <Card className="p-6 bg-gradient-spiritual text-white shadow-spiritual">
                  <h3 className="text-xl font-bold mb-1">Your Sacred Collection</h3>
                  <p className="text-sm opacity-90 mb-4">Blockchain-verified spiritual artifacts</p>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold mb-1">247</div>
                    <div className="text-sm opacity-90">Total Artifacts</div>
                  </div>
                </Card>

                {/* Vault Statistics */}
                <Card className="p-6 shadow-gentle">
                  <h3 className="text-lg font-semibold mb-4">Vault Statistics</h3>
                  <div className="space-y-3">
                    {vaultStats.map((stat, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{stat.label}</span>
                        <span className={`font-semibold ${stat.color}`}>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 bg-muted rounded-full h-2">
                    <div className="bg-gradient-spiritual h-2 rounded-full w-3/4"></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Collection Progress: 73%</p>
                </Card>

                {/* Recent Activity */}
                <Card className="p-6 shadow-gentle">
                  <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                          <span className="text-sm">{activity.icon}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{activity.action}</p>
                          <p className="text-xs text-muted-foreground">{activity.item}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* CTA */}
                <Card className="p-6 bg-gradient-serene shadow-gentle">
                  <h3 className="text-lg font-semibold mb-2">Unlock Premium</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get access to legendary artifacts and exclusive trading features.
                  </p>
                  <Button variant="sacred" className="w-full">
                    Upgrade Vault
                  </Button>
                </Card>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Filters & Actions */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex gap-2">
                    {['all', 'common', 'rare', 'epic', 'legendary'].map((type) => (
                      <Button
                        key={type}
                        variant={filter === type ? "spiritual" : "ghost"}
                        size="sm"
                        onClick={() => setFilter(type)}
                        className="capitalize"
                      >
                        {type}
                      </Button>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="serene" size="sm" className="gap-2">
                      <Plus className="h-4 w-4" />
                      Add Artifact
                    </Button>
                    <Button variant="sacred" size="sm" className="gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Trade
                    </Button>
                  </div>
                </div>

                {/* Artifacts Grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredArtifacts.map((artifact) => (
                    <Card key={artifact.id} className="group overflow-hidden shadow-gentle hover:shadow-spiritual transition-all duration-300 hover:scale-105">
                      <div className="aspect-square relative bg-gradient-serene p-6 flex items-center justify-center">
                        <div className="text-6xl">{artifact.image}</div>
                        {artifact.verified && (
                          <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                        <Badge 
                          className={`absolute top-2 left-2 ${
                            artifact.rarity === 'Legendary' ? 'bg-gradient-spiritual text-white' :
                            artifact.rarity === 'Epic' ? 'bg-purple-500 text-white' :
                            artifact.rarity === 'Rare' ? 'bg-amber-500 text-white' :
                            'bg-gray-500 text-white'
                          }`}
                        >
                          {artifact.rarity}
                        </Badge>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold mb-1">{artifact.name}</h3>
                        {artifact.source && (
                          <p className="text-xs text-muted-foreground mb-3">{artifact.source}</p>
                        )}
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" className="flex-1 gap-1">
                            <Eye className="h-3 w-3" />
                            View
                          </Button>
                          <Button variant="serene" size="sm" className="gap-1">
                            <Gift className="h-3 w-3" />
                            Trade
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* View All */}
                <div className="text-center mt-8">
                  <Button variant="serene" className="gap-2">
                    <Eye className="h-4 w-4" />
                    View All Artifacts
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default DigitalVault;