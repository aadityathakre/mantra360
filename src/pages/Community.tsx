import React from 'react';
import { Header } from '@/components/Header';
import { FooterSection } from '@/components/FooterSection';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  TrendingUp, 
  Globe, 
  Calendar, 
  Star,
  MessageCircle,
  UserPlus,
  Search,
  Filter
} from 'lucide-react';

const communityStats = [
  { 
    icon: <Users className="h-6 w-6 text-primary" />, 
    value: '12,847', 
    label: 'Active Pilgrims',
    change: '+234 today',
    color: 'text-green-500'
  },
  { 
    icon: <Globe className="h-6 w-6 text-accent" />, 
    value: '1,592', 
    label: 'Tours Completed',
    change: '+49 today',
    color: 'text-green-500'
  },
  { 
    icon: <Calendar className="h-6 w-6 text-purple-500" />, 
    value: '8,429', 
    label: 'Hours Meditated',
    change: '+156 today',
    color: 'text-green-500'
  },
  { 
    icon: <MessageCircle className="h-6 w-6 text-green-500" />, 
    value: '73', 
    label: 'Countries',
    change: '+2 this week',
    color: 'text-green-500'
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: 'Global Meditation Day',
    description: 'Join 10,000+ pilgrims in synchronized meditation',
    date: 'Dec 21, 2024',
    time: '6:00 AM UTC',
    participants: 500,
    status: 'Join Early',
    color: 'bg-primary'
  },
  {
    id: 2,
    title: 'Virtual Pilgrimage',
    description: 'Mount Kailash circumambulation experience',
    date: 'Dec 28, 2024',
    time: '500 participants',
    participants: 500,
    status: 'Register',
    color: 'bg-accent'
  },
  {
    id: 3,
    title: 'Dharma Discussion',
    description: 'Weekly wisdom sharing circle',
    date: 'Every Sunday',
    time: 'Live Audio',
    participants: 0,
    status: 'Attend',
    color: 'bg-green-500'
  }
];

const popularSites = [
  { name: 'Potala Palace', visits: '2,847 visits', icon: '🏛️', badge: '1' },
  { name: 'Kinkaku-ji', visits: '2,103 visits', icon: '🏯', badge: '2' },
  { name: 'Rishikesh Ashram', visits: '1,856 visits', icon: '🧘', badge: '3' }
];

const achievements = [
  { 
    name: 'Sarah M.',
    achievement: 'Completed 100-day meditation streak',
    location: 'San Francisco, CA',
    time: 'Member since 2023',
    icon: '🏆',
    color: 'bg-yellow-500'
  },
  { 
    name: 'David L.',
    achievement: 'Discovered legendary artifact',
    location: 'Mumbai, India',
    time: '1,247 meditation hours',
    icon: '💎',
    color: 'bg-purple-500'
  },
  { 
    name: 'Maria K.',
    achievement: 'Completed all Himalayan tours',
    location: 'Barcelona, Spain',
    time: 'Member since 2023',
    icon: '🎖️',
    color: 'bg-green-500'
  }
];

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-12 px-4 bg-gradient-sacred">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Global Spiritual Community</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Connect with fellow seekers worldwide. Track community activities, join events,
              and witness the collective spiritual journey of our global family.
            </p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto">
            {/* Live Community Stats */}
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Live - Last 24 Hours</span>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6">
                {communityStats.map((stat, index) => (
                  <Card key={index} className="p-6 shadow-gentle hover:shadow-spiritual transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-gentle">
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                    <div className={`text-sm ${stat.color} flex items-center gap-1`}>
                      <TrendingUp className="h-3 w-3" />
                      {stat.change}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Upcoming Events */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <Card key={event.id} className="p-6 shadow-gentle hover:shadow-spiritual transition-all duration-300">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <div className={`w-3 h-3 ${event.color} rounded-full`}></div>
                              <h3 className="font-semibold">{event.title}</h3>
                              <Badge variant="outline">{event.status}</Badge>
                            </div>
                            <p className="text-muted-foreground mb-3">{event.description}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>📅 {event.date}</span>
                              <span>⏰ {event.time}</span>
                              {event.participants > 0 && <span>👥 {event.participants} participants</span>}
                            </div>
                          </div>
                          <Button variant="spiritual" size="sm">
                            {event.status}
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Popular Sacred Sites */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Popular Sacred Sites</h2>
                  <div className="space-y-3">
                    {popularSites.map((site, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                        <div className="w-8 h-8 bg-gradient-spiritual rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {site.badge}
                        </div>
                        <span className="text-2xl">{site.icon}</span>
                        <div className="flex-1">
                          <h3 className="font-semibold">{site.name}</h3>
                          <p className="text-sm text-muted-foreground">{site.visits}</p>
                        </div>
                        <Button variant="ghost" size="sm">Visit</Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Community Wellness */}
                <Card className="p-6 shadow-gentle">
                  <h3 className="text-lg font-semibold mb-4">Community Wellness</h3>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🌟</div>
                      <div className="text-2xl font-bold text-accent">4.9</div>
                      <div className="text-sm text-muted-foreground">Community Harmony Score</div>
                    </div>
                  </div>
                </Card>

                {/* Recent Achievements */}
                <Card className="p-6 shadow-gentle">
                  <h3 className="text-lg font-semibold mb-4">Recent Achievements</h3>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className={`w-8 h-8 ${achievement.color} rounded-full flex items-center justify-center text-white text-sm`}>
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{achievement.name}</p>
                          <p className="text-xs text-muted-foreground">{achievement.achievement}</p>
                          <p className="text-xs text-muted-foreground">{achievement.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Join Community CTA */}
                <Card className="p-6 bg-gradient-spiritual text-white shadow-spiritual">
                  <h3 className="text-lg font-semibold mb-2">Join the Community</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Connect with 12,000+ spiritual seekers from around the world
                  </p>
                  <div className="space-y-2">
                    <Button variant="serene" className="w-full gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30">
                      <UserPlus className="h-4 w-4" />
                      Join Discord
                    </Button>
                    <Button variant="serene" className="w-full gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30">
                      <Search className="h-4 w-4" />
                      Find Local Groups
                    </Button>
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

export default Community;