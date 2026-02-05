import React, { useState, useEffect, useRef } from 'react';
import { skills, experience } from '../data/mock';
import { Trophy, Briefcase } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const ResumeSection = () => {
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
  }, []);

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
        <p className="section-subtitle">Skills and experience ranked by proficiency</p>
      </div>

      <div className="leaderboard-monitor">
        <div className="lb-bezel">
          <div className="lb-screen">
            <div className="screen-scanlines" />

            <Tabs defaultValue="skills" className="lb-tabs">
              <TabsList className="lb-tab-list">
                <TabsTrigger value="skills" className="lb-tab-trigger">
                  <Trophy size={14} />
                  <span>SKILLS</span>
                </TabsTrigger>
                <TabsTrigger value="career" className="lb-tab-trigger">
                  <Briefcase size={14} />
                  <span>CAREER</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="skills" className="lb-content">
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
              </TabsContent>

              <TabsContent value="career" className="lb-content">
                <div className="career-entries">
                  {experience.map((exp, index) => (
                    <div key={index} className="career-entry">
                      <div className="career-level">
                        <span className="level-badge">{exp.level}</span>
                      </div>
                      <div className="career-details">
                        <h3 className="career-role">{exp.role}</h3>
                        <p className="career-company">{exp.company}</p>
                        <p className="career-period">{exp.period}</p>
                        <p className="career-desc">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
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
