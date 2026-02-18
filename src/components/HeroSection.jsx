import React, { useState, useEffect } from 'react';
import { profileData, navItems } from '../data/mock';
import { Gamepad2, LayoutGrid, Trophy, Monitor, ChevronDown } from 'lucide-react';

const iconMap = {
  hero: Gamepad2,
  projects: LayoutGrid,
  scores: Trophy,
  content: Monitor,
};

const colorMap = {
  hero: { border: '#00f0ff', shadow: 'rgba(0,240,255,0.3)', bg: 'rgba(0,240,255,0.08)' },
  projects: { border: '#ff00aa', shadow: 'rgba(255,0,170,0.3)', bg: 'rgba(255,0,170,0.08)' },
  scores: { border: '#00ff41', shadow: 'rgba(0,255,65,0.3)', bg: 'rgba(0,255,65,0.08)' },
  content: { border: '#a855f7', shadow: 'rgba(168,85,247,0.3)', bg: 'rgba(168,85,247,0.08)' },
};

const HeroSection = () => {
  const [coinVisible, setCoinVisible] = useState(true);
  const [typedName, setTypedName] = useState('');
  const fullName = profileData.name;

  useEffect(() => {
    const blinkInterval = setInterval(() => setCoinVisible(prev => !prev), 700);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i <= fullName.length) {
        setTypedName(fullName.slice(0, i));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 80);
    return () => clearInterval(typeInterval);
  }, [fullName]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-ambient">
        <div className="ambient-orb orb-1" />
        <div className="ambient-orb orb-2" />
        <div className="ambient-orb orb-3" />
      </div>

      <div className="hero-content">
        <div className="crt-monitor">
          <div className="crt-bezel">
            <div className="crt-screen">
              <div className="screen-scanlines" />
              <div className="screen-content">
                <p className="hero-greeting">// WELCOME_TO</p>
                <h1 className="hero-name">
                  {typedName}
                  <span className="cursor-blink">_</span>
                </h1>
                <div className="hero-divider">
                  <span className="divider-line" />
                  <Gamepad2 size={16} className="divider-icon" />
                  <span className="divider-line" />
                </div>
                <p className="hero-title">{profileData.title}</p>
                <p className="hero-tagline">{profileData.tagline}</p>
                <p className={`insert-coin ${coinVisible ? '' : 'coin-hidden'}`}>
                  INSERT COIN TO CONTINUE
                </p>
              </div>
            </div>
            <div className="crt-bottom-bar">
              <div className="power-led" />
              <span className="crt-brand">ERIEL-OS v2.5</span>
            </div>
          </div>
        </div>

        <nav className="hero-nav">
          {navItems.map((item) => {
            const Icon = iconMap[item.id];
            const colors = colorMap[item.id];
            return (
              <button
                key={item.id}
                className="arcade-btn"
                onClick={() => scrollTo(item.id)}
                style={{
                  '--btn-border': colors.border,
                  '--btn-shadow': colors.shadow,
                  '--btn-bg': colors.bg,
                }}
              >
                <Icon size={18} />
                <span className="arcade-btn-label">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <button className="scroll-hint" onClick={() => scrollTo('projects')}>
          <ChevronDown size={22} className="scroll-arrow" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
