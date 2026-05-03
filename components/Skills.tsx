"use client";

import { useEffect, useRef, useState } from "react";
import { Layers, Code, Database, Wrench, Sparkles } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend",
    color: "#6c63ff",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 75 },
      { name: "HTML & CSS", level: 98 },
    ],
  },
  {
    icon: Database,
    title: "Backend",
    color: "#a855f7",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "Python / Django", level: 82 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "REST & GraphQL", level: 87 },
    ],
  },
  {
    icon: Layers,
    title: "Design & UX",
    color: "#ec4899",
    skills: [
      { name: "Figma", level: 90 },
      { name: "UI/UX Principles", level: 88 },
      { name: "Framer Motion", level: 80 },
      { name: "Design Systems", level: 85 },
      { name: "Accessibility", level: 82 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & DevOps",
    color: "#f59e0b",
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "Docker", level: 78 },
      { name: "CI/CD Pipelines", level: 75 },
      { name: "AWS / Vercel", level: 80 },
      { name: "Linux", level: 82 },
    ],
  },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "PostgreSQL", "MongoDB", "Docker", "AWS", "Figma",
  "Tailwind", "GraphQL", "Redis", "Prisma", "Stripe",
];

function SkillBar({
  name,
  level,
  color,
  animate,
}: {
  name: string;
  level: number;
  color: string;
  animate: boolean;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
          {name}
        </span>
        <span className="text-xs font-semibold" style={{ color }}>
          {level}%
        </span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: "var(--border)" }}
      >
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${level}%` : "0%",
            background: `linear-gradient(90deg, ${color}, ${color}cc)`,
            transitionDelay: "0.2s",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="section-label">
            <Sparkles size={12} />
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-2">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <p
            className="max-w-xl mx-auto mt-4 text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            A curated set of technologies I&apos;ve mastered across the full
            development stack — from pixel-perfect UIs to scalable backends.
          </p>
        </div>

        {/* Skill categories grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="rounded-2xl p-6 card-hover"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.7s ease ${idx * 0.1}s, transform 0.7s ease ${idx * 0.1}s`,
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${cat.color}1a` }}
                  >
                    <Icon size={18} style={{ color: cat.color }} />
                  </div>
                  <h3
                    className="font-bold text-lg"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {cat.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={cat.color}
                      animate={visible}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech stack marquee */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 0.4s",
          }}
        >
          <p
            className="text-center text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: "var(--text-muted)" }}
          >
            Technologies I Work With
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
