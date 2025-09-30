import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Brain, Palette, Settings } from 'lucide-react';

export const AIGuidanceSection = () => {
  const features = [
    {
      icon: <Heart className="h-6 w-6 text-accent" />,
      title: 'Emotion Recognition',
      subtitle: 'Real-time emotional state analysis',
      description: 'Advanced AI technology reads your emotional responses and adapts the spiritual experience to match your current state of mind, ensuring each journey is deeply personal and meaningful.'
    },
    {
      icon: <Brain className="h-6 w-6 text-primary" />,
      title: 'Adaptive Narration',
      subtitle: 'Personalized spiritual storytelling',
      description: 'Experience dynamic narration that changes based on your emotional journey, offering comfort during reflection and inspiration during moments of spiritual awakening.'
    },
    {
      icon: <Palette className="h-6 w-6 text-accent" />,
      title: 'Visual Harmony',
      subtitle: 'Color therapy integration',
      description: 'The interface subtly shifts colors and lighting to promote inner peace and spiritual connection, creating a harmonious visual environment that supports your meditation and reflection.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-sacred">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            AI-Powered Spiritual Guidance
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our advanced Emotion AI adapts to your spiritual state, providing personalized
            narration and guidance throughout your journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-gentle group-hover:shadow-spiritual transition-all duration-300">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-primary mb-2">{feature.subtitle}</p>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Emotional State Display */}
          <div className="bg-background rounded-3xl p-8 shadow-gentle">
            <h3 className="text-2xl font-bold mb-6 text-center">Current Emotional State</h3>
            
            {/* Mood Circle */}
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 bg-gradient-spiritual rounded-full flex items-center justify-center shadow-spiritual">
                <Heart className="h-12 w-12 text-white" />
              </div>
            </div>

            <div className="text-center mb-6">
              <p className="text-xl font-semibold text-primary mb-2">Peaceful & Contemplative</p>
              <div className="flex justify-center gap-2 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                "Your peaceful energy suggests you're ready for deep meditation. I recommend starting with the Himalayan Sunrise experience..."
              </p>
            </div>

            <div className="flex gap-3">
              <Button variant="spiritual" className="flex-1">
                Continue Journey
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};