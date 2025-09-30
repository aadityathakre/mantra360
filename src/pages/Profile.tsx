import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { FooterSection } from '@/components/FooterSection';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Settings, 
  Bell, 
  Shield, 
  Eye, 
  MapPin, 
  Activity, 
  MessageSquare,
  Heart,
  Star,
  Award,
  Clock
} from 'lucide-react';

const privacyControls = [
  { name: 'Profile Visibility', description: 'Control who can see your profile', enabled: true },
  { name: 'Location Sharing', description: 'Share your meditation locations', enabled: false },
  { name: 'Activity Status', description: 'Show your spiritual activity', enabled: true },
  { name: 'Message Requests', description: 'Allow messages from other pilgrims', enabled: true }
];

const safetyFeatures = [
  {
    title: 'Women-Friendly Mode',
    description: 'Enhanced safety features for female travelers',
    features: [
      'Women-Only Groups - Join exclusive female pilgrimage groups',
      'Safe Route Planning - Curated paths with safety checkpoints', 
      '24/7 Support Hotline - Dedicated women\'s safety helpline',
      'Anonymous Reporting - Secure incident reporting system'
    ],
    icon: '🛡️',
    color: 'bg-pink-500'
  }
];

const communityGuidelines = [
  { title: 'Respect & Kindness', description: 'Treat all community members with compassion and understanding', icon: '🤝', color: 'bg-accent' },
  { title: 'Inclusive Environment', description: 'Welcome seekers from all backgrounds, traditions, and beliefs', icon: '🌍', color: 'bg-primary' },
  { title: 'Mindful Communication', description: 'Share wisdom thoughtfully and listen with an open heart', icon: '💬', color: 'bg-green-500' },
  { title: 'Zero Tolerance', description: 'No harassment, discrimination, or inappropriate behavior', icon: '⚡', color: 'bg-purple-500' }
];

const safetyResources = [
  { name: 'Emergency', subtitle: '24/7 Support', color: 'bg-red-500', icon: '🚨' },
  { name: 'Report Issue', subtitle: 'Anonymous', color: 'bg-blue-500', icon: '💬' },
  { name: 'Safety Guide', subtitle: 'Best Practices', color: 'bg-green-500', icon: '📖' },
  { name: 'Support Group', subtitle: 'Peer Help', color: 'bg-purple-500', icon: '🤝' }
];

const Profile = () => {
  const [safetyMode, setSafetyMode] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-12 px-4 bg-gradient-sacred">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Avatar */}
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-spiritual rounded-full flex items-center justify-center shadow-spiritual">
                  <User className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-4 border-background">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="text-center md:text-left flex-1">
                <h1 className="text-3xl font-bold mb-2">Spiritual Seeker</h1>
                <p className="text-muted-foreground mb-4">
                  Journey started in 2023 • 47 virtual tours completed • Meditation Master level
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Badge className="bg-accent text-white">🏔️ Himalayan Explorer</Badge>
                  <Badge className="bg-primary text-white">🧘 Meditation Master</Badge>
                  <Badge className="bg-green-500 text-white">🌿 Mindful Walker</Badge>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-accent">47</div>
                  <div className="text-sm text-muted-foreground">Tours</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">156</div>
                  <div className="text-sm text-muted-foreground">Hours</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-500">23</div>
                  <div className="text-sm text-muted-foreground">Artifacts</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Safe & Inclusive Journey */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Safe & Inclusive Spiritual Journey</h2>
                  <p className="text-muted-foreground mb-8">
                    We prioritize creating a secure, respectful environment for all spiritual seekers,
                    with specialized features for women's safety and comfort.
                  </p>

                  {/* Women-Friendly Features */}
                  {safetyFeatures.map((feature, index) => (
                    <Card key={index} className="p-6 mb-6 shadow-gentle">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center text-white text-xl`}>
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground mb-4">{feature.description}</p>
                          <div className="grid md:grid-cols-2 gap-4">
                            {feature.features.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                <div>
                                  <p className="font-medium text-sm">{item.split(' - ')[0]}</p>
                                  <p className="text-xs text-muted-foreground">{item.split(' - ')[1]}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}

                  {/* Community Guidelines */}
                  <Card className="p-6 shadow-gentle">
                    <h3 className="text-xl font-semibold mb-4">Community Guidelines</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {communityGuidelines.map((guideline, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                          <div className={`w-10 h-10 ${guideline.color} rounded-full flex items-center justify-center text-white text-sm`}>
                            {guideline.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm mb-1">{guideline.title}</h4>
                            <p className="text-xs text-muted-foreground">{guideline.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Safety Resources */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Safety Resources</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    {safetyResources.map((resource, index) => (
                      <Button
                        key={index}
                        variant="serene"
                        className="h-auto py-4 flex-col gap-2"
                      >
                        <div className={`w-12 h-12 ${resource.color} rounded-full flex items-center justify-center text-white text-xl`}>
                          {resource.icon}
                        </div>
                        <div className="text-center">
                          <p className="font-semibold text-sm">{resource.name}</p>
                          <p className="text-xs text-muted-foreground">{resource.subtitle}</p>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Safety Mode Toggle */}
                <Card className="p-6 shadow-gentle">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-accent" />
                      <span className="font-semibold">Safety Mode</span>
                    </div>
                    <Switch checked={safetyMode} onCheckedChange={setSafetyMode} />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-3 h-3 ${safetyMode ? 'bg-green-500' : 'bg-gray-400'} rounded-full`}></div>
                    <span className="text-sm font-medium">
                      {safetyMode ? 'Safety Mode: ON' : 'Safety Mode: OFF'}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Your spiritual journey is protected with enhanced safety features and community guidelines.
                  </p>
                </Card>

                {/* Privacy Controls */}
                <Card className="p-6 shadow-gentle">
                  <h3 className="text-lg font-semibold mb-4">Privacy Controls</h3>
                  <div className="space-y-4">
                    {privacyControls.map((control, index) => (
                      <div key={index} className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <p className="font-medium text-sm">{control.name}</p>
                          <p className="text-xs text-muted-foreground">{control.description}</p>
                        </div>
                        <Switch defaultChecked={control.enabled} />
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Spiritual Progress */}
                <Card className="p-6 bg-gradient-spiritual text-white shadow-spiritual">
                  <h3 className="text-lg font-semibold mb-4">Spiritual Progress</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm opacity-90">Meditation Streak</span>
                      <span className="font-semibold">12 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm opacity-90">Tours Completed</span>
                      <span className="font-semibold">47/50</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm opacity-90">Community Karma</span>
                      <span className="font-semibold">4.9/5.0</span>
                    </div>
                  </div>
                  <div className="mt-4 bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-4/5"></div>
                  </div>
                  <p className="text-xs opacity-90 mt-2">94% to Enlightened level</p>
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

export default Profile;