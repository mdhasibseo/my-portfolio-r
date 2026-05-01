import { useState, useRef, useEffect } from "react";

import { motion } from "motion/react";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaGit } from "react-icons/fa";



import { GrMysql } from "react-icons/gr";
import { BsTypescript } from "react-icons/bs";
import { SiDjango } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { s } from "motion/react-client";

const skills = [
  {
    name: "React",
    desc: "Component-based UI with hooks, state management & SSR",
    color: "#61DAFB",
    bg: "rgba(97,218,251,0.12)",
    border: "rgba(97,218,251,0.2)",
    level: 5,
    icon:<FaReact  className="size-1/2 text-[#087EA4]"/> ,
  },
  {
    name: "django",
    desc: "Python web framework, ORM & database management",
    color: "#61DAFB",
    bg: "rgba(97,218,251,0.12)",
    border: "rgba(97,218,251,0.2)",
    level: 5,
    icon:<SiDjango  className="size-1/2 text-[#087EA4]"/> ,
  },

  {
    name: "Next.js",
    desc: "Server-side rendering, routing & data fetching",
    color: "#000000",
    bg: "white",
    border: "rgba(0,0,0,0.2)",
    level: 4,
    icon: <RiNextjsFill  className=" size-1/2" />,

  },
  {
    name: "Bootstrap",
    desc: "Component-based UI with hooks, state management & SSR",
    color: "#61DAFB",
    bg: "blue",
    border: "rgba(97,218,251,0.2)",
    level: 5,
    icon:<FaBootstrap className="text-white size-1/2" /> ,
  },
  {
    name: "Python",
    desc: "Data science, automation & backend scripting",
    color: "#FFD43B",
    bg: "rgba(255,212,59,0.12)",
    border: "rgba(255,212,59,0.2)",
    level: 4,
    icon: <FaPython className="text-white size-1/2 " />,
  },
  {
    name: "Node.js",
    desc: "Server-side JS, REST APIs & real-time apps",
    color: "#68A063",
    bg: "rgba(104,160,99,0.12)",
    border: "rgba(104,160,99,0.2)",
    level: 4,
    icon: <FaNodeJs className="text-[#519D43] size-1/2 " />,
  },
  {
    name: "JavaScript",
    desc: "Client-side JS, browser extensions & web apps",
    color: "#F7DF1E",
    bg: "rgba(247,223,30,0.12)",
    border: "rgba(247,223,30,0.2)",
    level: 5,
    icon: <FaJs className="text-white size-1/2 " />,
  },
  {
    name: "HTML",
    desc: "Semantic markup, accessibility & SEO",
    color: "#E34F26",
    bg: "rgba(227,79,38,0.12)",
    border: "rgba(227,79,38,0.2)",
    level: 5,
    icon: <FaHtml5 className="text-white size-1/2 " />,
  },
  {
    name: "CSS/UI",
    desc: "Animations, responsive layouts & design systems",
    color: "#FF6B9D",
    bg: "rgba(255,107,157,0.12)",
    border: "rgba(255,107,157,0.2)",
    level: 5,
    icon:<FaCss3 className="text-white size-1/2 " />
  },
  {
    name: "SQL",
    desc: "Complex queries, optimization & database design",
    color: "#F29111",
    bg: "rgba(242,145,17,0.12)",
    border: "rgba(242,145,17,0.2)",
    level: 4,
    icon:<GrMysql className="text-white size-1/2 " />,
  },
  {
    name: "Git",
    desc: "Version control, branching strategies & CI/CD",
    color: "#F05032",
    bg: "rgba(240,80,50,0.12)",
    border: "rgba(240,80,50,0.2)",
    level: 5,
    icon:<FaGit className="text-white size-1/2 " />,
  },
  {
    name: "TypeScript",
    desc: "Type-safe JS, generics & advanced patterns",
    color: "#3178C6",
    bg: "rgba(49,120,198,0.12)",
    border: "rgba(49,120,198,0.2)",
    level: 4,
    icon: <BsTypescript className=" text-yellow-300 size-1/2 " />,
  },
  {
    name: "AI/ML",
    desc: "Model integration, LLM prompting & ML pipelines",
    color: "#A855F7",
    bg: "rgba(168,85,247,0.12)",
    border: "rgba(168,85,247,0.2)",
    level: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <circle cx="12" cy="12" r="3" fill="rgba(168,85,247,0.2)" stroke="#A855F7" strokeWidth="1.2" />
        <circle cx="4" cy="8" r="1.8" fill="rgba(168,85,247,0.15)" stroke="#A855F7" strokeWidth="1" />
        <circle cx="20" cy="8" r="1.8" fill="rgba(168,85,247,0.15)" stroke="#A855F7" strokeWidth="1" />
        <circle cx="4" cy="16" r="1.8" fill="rgba(168,85,247,0.15)" stroke="#A855F7" strokeWidth="1" />
        <circle cx="20" cy="16" r="1.8" fill="rgba(168,85,247,0.15)" stroke="#A855F7" strokeWidth="1" />
        <line x1="5.8" y1="8.8" x2="9.5" y2="10.8" stroke="#A855F7" strokeWidth="0.8" />
        <line x1="18.2" y1="8.8" x2="14.5" y2="10.8" stroke="#A855F7" strokeWidth="0.8" />
        <line x1="5.8" y1="15.2" x2="9.5" y2="13.2" stroke="#A855F7" strokeWidth="0.8" />
        <line x1="18.2" y1="15.2" x2="14.5" y2="13.2" stroke="#A855F7" strokeWidth="0.8" />
      </svg>
    ),
  },
];

const RADIUS = 170;
const CENTER = 210;
const ICON_SIZE = 56;
const ORBIT_DURATION = 30; // seconds

const levelLabels = ["", "", "beginner", "intermediate", "advanced", "expert"];

function SkillIcon({ skill, index, total, paused, onEnter, onLeave, onMove }) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  const x = CENTER + RADIUS * Math.cos(angle) - ICON_SIZE / 2;
  const y = CENTER + RADIUS * Math.sin(angle) - ICON_SIZE / 2;

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: ICON_SIZE,
        height: ICON_SIZE,
        borderRadius: "50%",
        background: skill.bg,
        border: `1px solid ${skill.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        zIndex: 2,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.3)"; onEnter(skill); }}
      onMouseMove={onMove}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; onLeave(); }}
    >
      <div
        style={{
          animation: `counterSpin ${ORBIT_DURATION}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
        }}
      >
        {skill.icon}
      </div>
    </div>
  );
}

function Tooltip({ skill, position }) {
  if (!skill) return null;
  return (
    <div
      style={{
        position: "fixed",
        left: position.x + 16,
        top: position.y + 16,
        background: "#0f1117",
        border: `0.5px solid ${skill.color}55`,
        borderRadius: 10,
        padding: "12px 16px",
        pointerEvents: "none",
        zIndex: 999,
        maxWidth: 200,
        boxShadow: `0 0 20px ${skill.color}14`,
      }}
    >
      <p style={{ fontFamily: "monospace", fontSize: 11, color: skill.color, margin: "0 0 4px", letterSpacing: 1 }}>
        {skill.name}
      </p>
      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", lineHeight: 1.5, margin: "0 0 8px", fontFamily: "sans-serif" }}>
        {skill.desc}
      </p>
      <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: i < skill.level ? skill.color : "rgba(255,255,255,0.12)",
            }}
          />
        ))}
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", marginLeft: 4, fontFamily: "sans-serif" }}>
          {levelLabels[skill.level]}
        </span>
      </div>
    </div>
  );
}

export default function CircularSkills() {
  const [paused, setPaused] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const orbitRef = useRef(null);

  const handleEnter = (skill) => {
    setPaused(true);
    setHoveredSkill(skill);
  };

  const handleLeave = () => {
    setPaused(false);
    setHoveredSkill(null);
  };

  const handleMove = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    if (x + 220 > window.innerWidth) x = e.clientX - 230;
    if (y + 130 > window.innerHeight) y = e.clientY - 130;
    setMousePos({ x, y });
  };

  return (
    <>
      <style>{`
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counterSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes pulseRing {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.15); opacity: 0.15; }
        }
      `}</style>

      <motion.div className=" bg-radial-[at_100%_0%] from-white via-black to-zinc-900 to-90%"
        style={{
          minHeight: "100vh",
          
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem 1rem",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* Decorative rings */}
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", border: "1px solid rgba(0,200,255,0.25)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 340, height: 340, borderRadius: "50%", border: "1px solid rgba(0,200,255,0.18)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />

        {/* Section title */}
       <motion.h2
       initial={{ opacity: 0, y: -20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{delay:0.5}}
       className="text-[rgba(0,200,255,0.6)] text-5xl font-bold mb-10 -mt-10" >My Skills</motion.h2>

        {/* Orbit container */}
        <motion.div 
        initial={{ opacity: 0 , scale: 0 }}
        whileInView={{opacity:1 , translateY: 50 , scale: 1}}
        transition={{animation:"ease-in-out", duration:0.5, delay:0.3}}
        style={{ position: "relative", width: 420, height: 420, margin: "0 auto" }}>
          {/* Rotating ring */}
          <div
            ref={orbitRef}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              animation: `orbitSpin ${ORBIT_DURATION}s linear infinite`,
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {skills.map((skill, i) => (
              <SkillIcon
                key={skill.name}
                skill={skill}
                index={i}
                total={skills.length}
                paused={paused}
                onEnter={handleEnter}
                onLeave={handleLeave}
                onMove={handleMove}
              />
            ))}
          </div>

          {/* Center info */}
          <motion.div
           

            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              width: 160,
              pointerEvents: "none",
              transition: "opacity 0.3s ease",
              opacity: hoveredSkill ? 0 : 1,
            }}
          >
            <div
              style={{
                width: 90,
                height: 90,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(0,200,255,0.15) 0%, transparent 70%)",
                margin: "0 auto 8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(0,200,255,0.2)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  border: "1px solid rgba(0,200,255,0.1)",
                  animation: "pulseRing 2s ease-in-out infinite",
                }}
              />
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <circle cx="15" cy="15" r="6" fill="rgba(0,200,255,0.3)" stroke="rgba(0,200,255,0.6)" strokeWidth="1" />
                <circle cx="15" cy="5" r="2.5" fill="rgba(0,200,255,0.5)" />
                <circle cx="23.7" cy="20" r="2.5" fill="rgba(0,200,255,0.5)" />
                <circle cx="6.3" cy="20" r="2.5" fill="rgba(0,200,255,0.5)" />
                <ellipse cx="15" cy="15" rx="14" ry="5.5" stroke="rgba(0,200,255,0.3)" strokeWidth="0.8" fill="none" />
                <ellipse cx="15" cy="15" rx="14" ry="5.5" stroke="rgba(0,200,255,0.2)" strokeWidth="0.8" fill="none" transform="rotate(60 15 15)" />
                <ellipse cx="15" cy="15" rx="14" ry="5.5" stroke="rgba(0,200,255,0.2)" strokeWidth="0.8" fill="none" transform="rotate(120 15 15)" />
              </svg>
            </div>
            <p style={{ fontFamily: "monospace", fontSize: 11, color: "rgba(255,255,255,0.9)", margin: "0 0 4px", letterSpacing: 1 }}>hover an icon</p>
            <p style={{ fontFamily: "sans-serif", fontSize: 11, color: "rgba(255,255,255,0.45)", lineHeight: 1.4, margin: 0 }}>to explore my skills</p>
          </motion.div>
        </motion.div>

        {/* Legend */}
        <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9, rotate: 5,translateY:100 , transition: { duration: 0.3 } }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0, transition: { duration: 0.3 } }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 8,
            marginTop: "1.5rem",
            maxWidth: 520,
            width: "100%",
          }}
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.04)",
                border: "0.5px solid rgba(255,255,255,0.08)",
                borderRadius: 8,
                padding: "6px 10px",
                cursor: "default",
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: skill.color, flexShrink: 0 }} />
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", fontWeight: 600, letterSpacing: 0.5 }}>{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <Tooltip skill={hoveredSkill} position={mousePos} />
    </>
  );
}