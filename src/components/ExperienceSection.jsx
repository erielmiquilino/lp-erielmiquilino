import React, { useEffect, useRef, useState } from 'react';
import { useSanity } from '../context/SanityDataContext';
import { Swords, ChevronRight } from 'lucide-react';

const ExperienceSection = () => {
  const { experience } = useSanity();
  const [visibleEntries, setVisibleEntries] = useState([]);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          experience.forEach((_, index) => {
            setTimeout(() => {
              setVisibleEntries((prev) => [...prev, index]);
            }, index * 250);
          });
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [experience]);

  const getLevelColor = (level) => {
    const num = parseInt(level?.replace(/\D/g, '') || '0', 10);
    if (num >= 90) return '#00ff41';
    if (num >= 60) return '#00f0ff';
    return '#a855f7';
  };

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="section-header">
        <p className="section-label">// QUEST_LOG</p>
        <h2 className="section-title neon-amber">CAMPAIGN MODE</h2>
        <p className="section-subtitle">
          Career progression through the levels of software engineering
        </p>
      </div>

      <div className="quest-timeline">
        <div className="timeline-line" />

        {experience.map((exp, index) => {
          const levelColor = getLevelColor(exp.level);
          const isVisible = visibleEntries.includes(index);

          return (
            <div
              key={exp._id || index}
              className={`quest-node ${isVisible ? 'quest-visible' : ''}`}
              style={{ '--quest-color': levelColor }}
            >
              <div className="quest-marker">
                <div className="marker-ring" />
                <div className="marker-dot" />
              </div>

              <div className="quest-card">
                <div className="quest-card-inner">
                  <div className="quest-header">
                    <span className="quest-level">{exp.level}</span>
                    <span className="quest-period">{exp.period}</span>
                  </div>

                  <div className="quest-body">
                    <h3 className="quest-role">
                      <ChevronRight size={14} className="quest-arrow" />
                      {exp.role}
                    </h3>
                    <p className="quest-company">
                      <Swords size={12} />
                      {exp.company}
                    </p>
                    <p className="quest-desc">{exp.description}</p>
                  </div>

                  <div className="quest-xp-bar">
                    <div
                      className="xp-fill"
                      style={{
                        width: isVisible
                          ? `${Math.min(100, parseInt(exp.level?.replace(/\D/g, '') || '0', 10))}%`
                          : '0%',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
