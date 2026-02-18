import React from 'react';
import { contentItems, socialLinks, profileData } from '../data/mock';
import { Play, FileText, Mic, Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

const typeIconMap = {
  video: Play,
  article: FileText,
  talk: Mic,
};

const socialIconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Email: Mail,
};

const sizeClassMap = {
  large: 'monitor-large',
  tall: 'monitor-tall',
  wide: 'monitor-wide',
  small: 'monitor-small',
};

const ContentHub = () => {
  return (
    <>
      <section id="content" className="content-section">
        <div className="section-header">
          <p className="section-label">// SURVEILLANCE_FEED</p>
          <h2 className="section-title neon-purple">THE WALL OF SCREENS</h2>
          <p className="section-subtitle">Content streams from across the digital landscape</p>
        </div>

        <div className="bento-grid">
          {contentItems.map((item) => {
            const Icon = typeIconMap[item.type];
            return (
              <div
                key={item.id}
                className={`monitor-card ${sizeClassMap[item.size]}`}
                style={{ '--mon-color': item.color }}
              >
                <div className="monitor-bezel">
                  <div className="monitor-screen">
                    <div className="screen-scanlines" />
                    <div className="mon-content">
                      <div className="mon-icon">
                        <Icon size={22} />
                      </div>
                      <h3 className="mon-title">{item.title}</h3>
                      <div className="mon-meta">
                        <span className="mon-platform">{item.platform}</span>
                        <span className="mon-type">{item.type.toUpperCase()}</span>
                      </div>
                    </div>
                    <div className="mon-static-overlay" />
                  </div>
                  <div className="mon-bottom">
                    <div className="power-led" style={{ background: item.color, boxShadow: `0 0 6px ${item.color}` }} />
                  </div>
                </div>
                <div className="mon-hover-indicator">
                  <ExternalLink size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="arcade-footer">
        <div className="footer-inner">
          <div className="footer-top-row">
            <div className="footer-credits">
              <p className="game-over">GAME OVER</p>
              <p className="footer-name">{profileData.name}</p>
              <p className="footer-role">{profileData.title}</p>
              <p className="footer-cta">Thanks for playing. Insert coin to continue...</p>
            </div>
            <div className="footer-social">
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.label];
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={18} />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="footer-bottom-row">
            <p className="footer-copyright">2025 ERIEL MIQUILINO. ALL RIGHTS RESERVED.</p>
            <p className="footer-tech">BUILT WITH REACT + NEON LIGHTS</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContentHub;
