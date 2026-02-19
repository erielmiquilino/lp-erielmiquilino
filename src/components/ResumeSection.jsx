import React, { useState, useEffect, useRef } from 'react';
import { useSanity } from '../context/SanityDataContext';
import { Trophy } from 'lucide-react';

const ResumeSection = () => {
  const { skills } = useSanity();
  const [visibleRows, setVisibleRows] = useState([]);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          skills.forEach((_, index) => {
            setTimeout(() => {
              setVisibleRows(prev => [...prev, index]);
            }, index * 120);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [skills]);

  const getRowColor = (rank) => {
    if (rank <= 3) return '#00ff41';
    if (rank <= 6) return '#00f0ff';
    return '#a855f7';
  };

  return (
    <section id="scores" className="resume-section" ref={sectionRef}>
      <div className="section-header">
        <p className="section-label">// LEADERBOARD</p>
        <h2 className="section-title neon-green">HIGH SCORES</h2>
        <p className="section-subtitle">Skills ranked by proficiency</p>
      </div>

      <div className="leaderboard-monitor">
        <div className="lb-bezel">
          <div className="lb-screen">
            <div className="screen-scanlines" />

            <div className="lb-content">
              <div className="score-table-header">
                <span className="sth-rank">RNK</span>
                <span className="sth-name">SKILL</span>
                <span className="sth-cat">TYPE</span>
                <span className="sth-score">SCORE</span>
              </div>
              <div className="score-table-body">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`score-row ${visibleRows.includes(index) ? 'row-visible' : ''}`}
                    style={{ '--row-color': getRowColor(skill.rank) }}
                  >
                    <span className="sr-rank">#{String(skill.rank).padStart(2, '0')}</span>
                    <span className="sr-name">{skill.name}</span>
                    <span className="sr-category">{skill.category}</span>
                    <span className="sr-score">{skill.score.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lb-bottom-bar">
            <div className="power-led led-green" />
            <span className="crt-brand">SCORE-BOARD v1.0</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
