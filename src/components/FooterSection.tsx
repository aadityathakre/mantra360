import React from 'react';
import { Heart, Mail, Globe, Shield, Users } from 'lucide-react';

export const FooterSection = () => {
  return (
    <footer className="bg-gradient-serene py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-spiritual flex items-center justify-center shadow-gentle">
                <span className="text-white font-bold">🕉</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Spiritual Journey</h3>
                <p className="text-sm text-muted-foreground">Inner Peace & Discovery</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Connecting souls with sacred spaces through immersive virtual experiences, 
              fostering global spiritual community and inner transformation.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <Heart className="h-4 w-4 text-primary" />
              </div>
              <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                <Globe className="h-4 w-4 text-accent" />
              </div>
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <Users className="h-4 w-4 text-primary" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Virtual Tours</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Sacred Sites Map</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Digital Vault</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">AI Guide</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Spiritual Journey. Made with 🕉 for global spiritual community.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-accent" />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};