import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSelector } from './LanguageSelector';
import { SafetyModeToggle } from './SafetyModeToggle';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Interactive Map', href: '/interactive-map' },
    { name: 'Digital Vault', href: '/digital-vault' },
    { name: 'Community', href: '/community' },
    { name: 'Profile', href: '/profile' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-spiritual flex items-center justify-center shadow-gentle">
              <span className="text-white font-bold text-lg">🕉</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg text-foreground">Spiritual Journey</h1>
              <p className="text-xs text-muted-foreground">Inner Peace & Discovery</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.href 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <LanguageSelector />
            <SafetyModeToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};