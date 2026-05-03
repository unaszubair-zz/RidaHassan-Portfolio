"use client";

import { useEffect, useRef, useState } from "react";
import { Briefcase, MapPin, Calendar, Sparkles } from "lucide-react";

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "TechVision Solutions",
    location: "Remote",
    period: "Jan 2023 – Present",
    type: "Full-time",
    color: "#6c63ff",
    description:
      "Lead frontend development for a SaaS dashboard serving 50k+ users. Architected a component library using React + TypeScript that reduced development time by 40%.",
    achievements: [
      "Built a real-time analytics dashboard with WebSockets and React Query",
      "Improved Core Web Vitals scores from 68 to 94 (Lighthouse)",
      "Mentored 3 junior developers and established code review practices",
      "Integrated 10+ third-party APIs including Stripe, Mapbox, and Twilio",
    ],
    tags: ["React", "TypeScript", "Next.js", "AWS", "GraphQL"],
  },
  {
    role: "Full-Stack Developer",
    company: "Creative Digital Agency",
    location: "Lahore, PK",
    period: "Jun 2021 – Dec 2022",
    type: "Full-time",
    color: "#a855f7",
    description:
      "Developed bespoke web solutions for 15+ clients across e-commerce, healthcare, and education verticals. Owned end-to-end delivery from design to deployment.",
    achievements: [
      "Delivered 12 client projects on time with 100% client satisfaction",
      "Built a multi-tenant e-commerce platform processing $2M+ annual revenue",
      "Reduced API response times by 60% via Redis caching and query optimization",
      "Designed and implemented CI/CD pipelines using GitHub Actions",
    ],
    tags: ["Node.js", "React", "PostgreSQL", "Docker", "Redis"],
  },
  {
    role: "Frontend Developer (Intern → Junior)",
    company: "StartupHQ",
    location: "Remote",
    period: "Aug 2020 – May 2021",
    type: "Contract",
    color: "#ec4899",
    description:
      "Started as an intern and was promoted to a junior developer role after 3 months. Built and maintained React applications for an early-stage fintech startup.",
    achievements: [
      "Developed mobile-responsive UI from Figma designs with pixel accuracy",
      "Implemented end-to-end testing suite using Cypress, covering 80% of user flows",
      "Contributed to open-source component library with 500+ GitHub stars",
    ],
    tags: ["React", "CSS Modules", "Cypress", "Figma"],
  },
];

export default function Experience() {
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
      id="experience"
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-4xl mx-auto px-6">
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
            Work History
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-2">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p
            className="max-w-xl mx-auto mt-4 text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            A track record of building impactful products across diverse
            industries and team sizes.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 sm:left-6 top-0 bottom-0 w-px hidden sm:block"
            style={{
              background:
                "linear-gradient(to bottom, var(--accent), rgba(108,99,255,0.1))",
            }}
          />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative sm:pl-16"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.7s ease ${idx * 0.15}s, transform 0.7s ease ${idx * 0.15}s`,
                }}
              >
                {/* Timeline dot */}
                <div
                  className="hidden sm:flex absolute left-0 top-6 w-12 h-12 rounded-xl items-center justify-center z-10"
                  style={{
                    background: `${exp.color}1a`,
                    border: `2px solid ${exp.color}`,
                  }}
                >
                  <Briefcase size={18} style={{ color: exp.color }} />
                </div>

                {/* Card */}
                <div
                  className="rounded-2xl p-6 sm:p-8 card-hover"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {/* Top row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3
                        className="text-lg sm:text-xl font-bold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1">
                        <span
                          className="font-semibold text-sm"
                          style={{ color: exp.color }}
                        >
                          {exp.company}
                        </span>
                        <span
                          className="flex items-center gap-1 text-xs"
                          style={{ color: "var(--text-muted)" }}
                        >
                          <MapPin size={11} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1.5">
                      <span
                        className="flex items-center gap-1.5 text-xs font-medium"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <Calendar size={11} />
                        {exp.period}
                      </span>
                      <span
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{
                          background: `${exp.color}1a`,
                          color: exp.color,
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-5">
                    {exp.achievements.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: exp.color }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tech-tag"
                        style={{
                          background: `${exp.color}15`,
                          color: exp.color,
                          borderColor: `${exp.color}30`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
