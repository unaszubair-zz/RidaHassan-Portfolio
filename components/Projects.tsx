"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Sparkles, Star, GitFork } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

type Project = {
  title: string;
  description: string;
  longDesc: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  stars: number;
  forks: number;
  color: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "ShopSphere — E-Commerce Platform",
    description: "Full-stack e-commerce with real-time inventory, Stripe payments, and an admin dashboard.",
    longDesc:
      "A multi-vendor marketplace built with Next.js 14, Prisma, and PostgreSQL. Features real-time stock updates, dynamic pricing, advanced search with Elasticsearch, and a robust admin panel.",
    image: "🛒",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Elasticsearch", "Docker"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    stars: 284,
    forks: 47,
    color: "#6c63ff",
    featured: true,
  },
  {
    title: "TaskFlow — Project Management App",
    description: "Collaborative Kanban-style PM tool with real-time updates and team workspaces.",
    longDesc:
      "Built with React, Socket.io and Node.js. Supports drag-and-drop boards, multi-team workspaces, Gantt charts, role-based access, and Slack/GitHub integrations.",
    image: "📋",
    tags: ["React", "Socket.io", "Node.js", "MongoDB", "Redis"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    stars: 156,
    forks: 28,
    color: "#a855f7",
    featured: true,
  },
  {
    title: "ArtifAI — AI Image Generator",
    description: "Generate, edit, and share AI artwork powered by Stable Diffusion and DALL-E APIs.",
    longDesc:
      "A creative platform wrapping Stable Diffusion and OpenAI DALL-E APIs with a beautiful gallery UI, prompt engineering tools, style presets, and community sharing features.",
    image: "🎨",
    tags: ["Next.js", "OpenAI", "Python", "FastAPI", "AWS S3"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    stars: 432,
    forks: 89,
    color: "#ec4899",
    featured: true,
  },
  {
    title: "HealthTrack — Wellness Dashboard",
    description: "Personal health analytics dashboard with wearable device integrations.",
    longDesc:
      "Connects to Fitbit and Apple Health APIs to aggregate health data, providing ML-powered insights and beautiful data visualizations using Recharts.",
    image: "❤️",
    tags: ["React", "TypeScript", "Python", "ML", "Recharts"],
    github: "https://github.com",
    stars: 98,
    forks: 15,
    color: "#f59e0b",
  },
  {
    title: "DevDocs — API Documentation Tool",
    description: "Auto-generate beautiful API docs from OpenAPI specs with interactive playgrounds.",
    longDesc:
      "Parse OpenAPI/Swagger specs and render interactive documentation with live API testing, code samples in 10+ languages, and team collaboration features.",
    image: "📖",
    tags: ["React", "Node.js", "OpenAPI", "Monaco Editor"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    stars: 211,
    forks: 34,
    color: "#22c55e",
  },
  {
    title: "CryptoWatch — Portfolio Tracker",
    description: "Real-time cryptocurrency portfolio tracker with alerts and tax reports.",
    longDesc:
      "Live portfolio valuation with WebSocket price feeds from Binance and Coinbase. Features price alerts, P&L tracking, tax-loss harvesting suggestions, and CSV exports.",
    image: "₿",
    tags: ["Next.js", "WebSockets", "CoinGecko API", "Chart.js"],
    github: "https://github.com",
    stars: 173,
    forks: 41,
    color: "#f97316",
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState<"all" | "featured">("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const displayed =
    filter === "featured" ? projects.filter((p) => p.featured) : projects;

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className="text-center mb-10"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="section-label">
            <Sparkles size={12} />
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p
            className="max-w-xl mx-auto mt-4 text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            A selection of projects that showcase my skills across full-stack
            development, UI/UX design, and cloud architecture.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          className="flex justify-center mb-10"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 0.1s",
          }}
        >
          <div
            className="flex rounded-xl p-1 gap-1"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
          >
            {(["all", "featured"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className="px-5 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-200"
                style={{
                  background: filter === tab ? "var(--accent)" : "transparent",
                  color:
                    filter === tab ? "white" : "var(--text-secondary)",
                }}
              >
                {tab === "all" ? "All Projects" : "Featured"}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((project, idx) => (
            <div
              key={project.title}
              className="rounded-2xl overflow-hidden flex flex-col card-hover"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.7s ease ${idx * 0.08}s, transform 0.7s ease ${idx * 0.08}s`,
              }}
            >
              {/* Image area */}
              <div
                className="h-44 flex items-center justify-center text-5xl relative"
                style={{
                  background: `linear-gradient(135deg, ${project.color}20, ${project.color}08)`,
                }}
              >
                <span className="animate-float" style={{ animationDelay: `${idx * 0.3}s` }}>
                  {project.image}
                </span>
                {project.featured && (
                  <span
                    className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      background: `${project.color}25`,
                      color: project.color,
                      border: `1px solid ${project.color}40`,
                    }}
                  >
                    ★ Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3
                  className="font-bold text-base mb-2 leading-snug"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4 flex-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="tech-tag"
                      style={{
                        background: `${project.color}12`,
                        color: project.color,
                        borderColor: `${project.color}25`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span
                      className="tech-tag"
                      style={{ color: "var(--text-muted)", borderColor: "var(--border)" }}
                    >
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Bottom row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex items-center gap-1 text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <Star size={12} />
                      {project.stars}
                    </span>
                    <span
                      className="flex items-center gap-1 text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <GitFork size={12} />
                      {project.forks}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                        style={{
                          background: "var(--bg-secondary)",
                          border: "1px solid var(--border)",
                          color: "var(--text-muted)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.borderColor = project.color;
                          (e.currentTarget as HTMLAnchorElement).style.color = project.color;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                          (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
                        }}
                      >
                        <GithubIcon size={14} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live demo"
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                        style={{
                          background: `${project.color}15`,
                          border: `1px solid ${project.color}30`,
                          color: project.color,
                        }}
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div
          className="text-center mt-10"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 0.5s",
          }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <GithubIcon size={16} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
