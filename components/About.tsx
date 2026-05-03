"use client";

import { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  Coffee,
  Heart,
  Globe,
  Zap,
  Award,
  BookOpen,
} from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "Fast Learner",
    desc: "Always keeping up with the latest tech trends",
  },
  {
    icon: Heart,
    title: "Passionate",
    desc: "Love crafting seamless user experiences",
  },
  {
    icon: Coffee,
    title: "Hard Worker",
    desc: "Dedicated to delivering quality solutions",
  },
  {
    icon: Globe,
    title: "Remote-Ready",
    desc: "Available for worldwide collaboration",
  },
];

const education = [
  {
    degree: "B.Sc. Computer Science",
    school: "University of Engineering & Technology",
    year: "2019 – 2023",
    grade: "CGPA 3.8/4.0",
  },
  {
    degree: "Frontend Development Bootcamp",
    school: "Meta Professional Certificate",
    year: "2022",
    grade: "Certificate of Completion",
  },
];

export default function About() {
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
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: "var(--bg-secondary)" }}
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
            <Award size={12} />
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-2">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — avatar + highlights */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            {/* Avatar card */}
            <div
              className="relative rounded-3xl overflow-hidden mb-8"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="h-64 sm:h-80 flex items-center justify-center relative"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(108,99,255,0.15) 0%, rgba(168,85,247,0.1) 50%, rgba(236,72,153,0.08) 100%)",
                }}
              >
                {/* Abstract avatar */}
                <div className="relative animate-float">
                  <div
                    className="w-32 h-32 rounded-full flex items-center justify-center text-5xl font-extrabold"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--accent), #a855f7)",
                      color: "white",
                    }}
                  >
                    RH
                  </div>
                  <div
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: "#22c55e" }}
                  >
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>
                </div>

                {/* Floating badge */}
                <div
                  className="absolute bottom-4 left-4 right-4 rounded-xl px-4 py-3 flex items-center gap-3 glass"
                >
                  <Sparkles size={16} style={{ color: "var(--accent)" }} />
                  <div>
                    <div className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>
                      Rida Hassan
                    </div>
                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                      Full-Stack Developer & Designer
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-xl p-4 card-hover"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-2"
                    style={{ background: "var(--accent-glow)" }}
                  >
                    <Icon size={16} style={{ color: "var(--accent-light)" }} />
                  </div>
                  <div className="text-sm font-semibold mb-0.5" style={{ color: "var(--text-primary)" }}>
                    {title}
                  </div>
                  <div className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — bio + education */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <p
              className="text-base sm:text-lg leading-loose mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              I&apos;m a{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                Full-Stack Developer
              </strong>{" "}
              with a passion for building fast, accessible, and beautiful web
              applications. I specialize in the{" "}
              <strong style={{ color: "var(--accent-light)" }}>
                React / Next.js
              </strong>{" "}
              ecosystem and love blending great UX with solid engineering
              practices.
            </p>
            <p
              className="text-base sm:text-lg leading-loose mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              When I&apos;m not coding, you can find me exploring design systems,
              contributing to open-source, or experimenting with new frameworks.
              I believe that{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                great software is the intersection of art and engineering.
              </strong>
            </p>

            {/* Education */}
            <div>
              <h3
                className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                <BookOpen size={14} />
                Education
              </h3>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="rounded-xl p-4 flex items-start gap-4"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5"
                      style={{ background: "var(--accent-glow)" }}
                    >
                      <BookOpen size={16} style={{ color: "var(--accent-light)" }} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
                        {edu.degree}
                      </div>
                      <div className="text-xs mt-0.5" style={{ color: "var(--accent-light)" }}>
                        {edu.school}
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                          {edu.year}
                        </span>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{
                            background: "rgba(34,197,94,0.1)",
                            color: "#22c55e",
                          }}
                        >
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
