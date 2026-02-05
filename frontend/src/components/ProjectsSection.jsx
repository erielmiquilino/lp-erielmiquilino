import React, { useState, useRef } from 'react';
import { projects } from '../data/mock';
import { Badge } from './ui/badge';
import { ChevronLeft, ChevronRight, Code2, Cpu, Zap } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

const ProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -340 : 340,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <p className="section-label">// PLAYER_SELECT</p>
        <h2 className="section-title neon-magenta">SELECT YOUR GAME</h2>
        <p className="section-subtitle">Navigate the arcade and explore each project</p>
      </div>

      <div className="carousel-wrapper">
        <button className="carousel-arrow arrow-left" onClick={() => scroll('left')}>
          <ChevronLeft size={28} />
        </button>

        <div className="arcade-carousel" ref={scrollRef}>
          <TooltipProvider delayDuration={200}>
            {projects.map((project) => (
              <div
                key={project.id}
                className={`arcade-cabinet ${project.type} ${hoveredId === project.id ? 'cabinet-active' : ''}`}
                style={{ '--cab-color': project.color }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="cabinet-marquee">
                  <span className="marquee-text">{project.title}</span>
                </div>

                <div className="cabinet-screen">
                  <div className="cab-screen-scanlines" />
                  <div className="cab-screen-content">
                    <div className="cab-icon-wrap">
                      {project.type === 'creative' ? <Code2 size={28} /> : <Cpu size={28} />}
                    </div>
                    <p className="cab-subtitle">{project.subtitle}</p>
                    <p className="cab-description">{project.description}</p>
                    <div className="cab-role">
                      <Zap size={12} />
                      <span>{project.role}</span>
                    </div>
                  </div>
                  <div className="cab-powerup-flash" />
                </div>

                <div className="cabinet-tech">
                  {project.techStack.map((tech) => (
                    <Tooltip key={tech}>
                      <TooltipTrigger asChild>
                        <div>
                          <Badge variant="outline" className="tech-badge">
                            {tech}
                          </Badge>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="tech-tooltip">
                        <p>{tech}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>

                <div className="cabinet-controls">
                  <div className="cab-joystick">
                    <div className="joystick-ball" />
                    <div className="joystick-stick" />
                  </div>
                  <div className="cab-buttons-row">
                    <span className="cab-button btn-a" />
                    <span className="cab-button btn-b" />
                  </div>
                </div>

                <div className="cabinet-year">{project.year}</div>
              </div>
            ))}
          </TooltipProvider>
        </div>

        <button className="carousel-arrow arrow-right" onClick={() => scroll('right')}>
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
