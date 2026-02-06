import React, { useEffect, useRef } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ResumeSection from "./components/ResumeSection";
import ContentHub from "./components/ContentHub";

/* ---- Cursor Trail (Tron light-cycle style) ---- */
const CursorTrail = () => {
  const dotsRef = useRef([]);
  const mouse = useRef({ x: -100, y: -100 });
  const positions = useRef(Array.from({ length: 12 }, () => ({ x: -100, y: -100 })));

  useEffect(() => {
    let frameId;

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      positions.current[0] = { ...mouse.current };

      for (let i = 1; i < positions.current.length; i++) {
        const prev = positions.current[i - 1];
        const curr = positions.current[i];
        positions.current[i] = {
          x: curr.x + (prev.x - curr.x) * 0.32,
          y: curr.y + (prev.y - curr.y) * 0.32,
        };
      }

      dotsRef.current.forEach((dot, i) => {
        if (dot) {
          dot.style.transform = `translate(${positions.current[i].x - 5}px, ${positions.current[i].y - 5}px)`;
        }
      });

      frameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="cursor-trail-wrap">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          className="cursor-dot"
          style={{
            width: `${Math.max(3, 11 - i)}px`,
            height: `${Math.max(3, 11 - i)}px`,
            background:
              i === 0
                ? "#00f0ff"
                : `rgba(0, 240, 255, ${Math.max(0.08, 0.55 - i * 0.045)})`,
            boxShadow:
              i === 0
                ? "0 0 8px #00f0ff, 0 0 18px #00f0ff, 0 0 35px rgba(0,240,255,0.4)"
                : `0 0 ${Math.max(2, 7 - i * 0.5)}px rgba(0,240,255,${Math.max(0.05, 0.35 - i * 0.03)})`,
          }}
        />
      ))}
    </div>
  );
};

/* ---- Main Portfolio Page ---- */
const PortfolioPage = () => {
  return (
    <div className="arcade-world">
      <CursorTrail />
      <div className="scanline-overlay" />
      <div className="noise-overlay" />
      <div className="vignette-overlay" />

      <main>
        <HeroSection />
        <ProjectsSection />
        <ResumeSection />
        <ContentHub />
      </main>
    </div>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
