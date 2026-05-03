"use client";

import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Download,
  ArrowDown,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "./SocialIcons";

const ROLES = [
  "Full-Stack Developer",
  "UI/UX Designer",
  "React Specialist",
  "Problem Solver",
];

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: TwitterXIcon, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:rida@example.com", label: "Email" },
];

const stats = [
  { value: "3+", label: "Years Exp." },
  { value: "25+", label: "Projects" },
  { value: "15+", label: "Clients" },
  { value: "99%", label: "Satisfaction" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = isDeleting ? 50 : 80;

    timerRef.current = setTimeout(() => {
      if (!isDeleting) {
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(current.slice(0, displayed.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Radial glow blobs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Floating decorative elements */}
      <div
        className="animate-float absolute top-24 left-10 hidden lg:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium pointer-events-none"
        style={{
          background: "rgba(108,99,255,0.1)",
          border: "1px solid rgba(108,99,255,0.2)",
          color: "var(--accent-light)",
          animationDelay: "0s",
        }}
      >
        <Sparkles size={12} />
        Open to opportunities
      </div>

      <div
        className="animate-float absolute bottom-32 right-10 hidden lg:block px-4 py-3 rounded-xl text-xs pointer-events-none"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          color: "var(--text-secondary)",
          animationDelay: "2s",
        }}
      >
        <div className="flex items-center gap-2 mb-1">
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: "#22c55e" }}
          />
          <span style={{ color: "#22c55e", fontWeight: 600 }}>Available</span>
        </div>
        <p>for freelance projects</p>
      </div>

      {/* Main Content */}
      <div
        className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="section-label" style={{ marginBottom: 0 }}>
            <Sparkles size={12} />
            Welcome to my portfolio
          </span>
        </div>

        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight mb-4 leading-none"
          style={{
            transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
          }}
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Rida Hassan</span>
        </h1>

        {/* Typewriter role */}
        <div
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 h-12 flex items-center justify-center"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent-light)" }}>{displayed}</span>
          <span
            className="animate-blink ml-0.5 w-0.5 h-8 inline-block"
            style={{ background: "var(--accent)" }}
          />
        </div>

        {/* Description */}
        <p
          className="max-w-2xl mx-auto text-base sm:text-lg mb-10 leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          I craft <strong style={{ color: "var(--text-primary)" }}>beautiful, performant web experiences</strong> that
          blend elegant design with clean code. Passionate about turning ideas
          into digital reality with modern technologies.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="#projects" className="btn-primary w-full sm:w-auto">
            View My Work
            <ArrowDown size={16} />
          </a>
          <a href="/resume.pdf" className="btn-outline w-full sm:w-auto" download>
            <Download size={16} />
            Download CV
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3 mb-16">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-1"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-light)";
                (e.currentTarget as HTMLAnchorElement).style.background = "var(--accent-glow)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)";
                (e.currentTarget as HTMLAnchorElement).style.background = "var(--bg-card)";
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-2xl p-4 text-center"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="text-2xl sm:text-3xl font-extrabold gradient-text"
              >
                {value}
              </div>
              <div
                className="text-xs sm:text-sm mt-1"
                style={{ color: "var(--text-muted)" }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity hover:opacity-80"
        style={{ color: "var(--text-muted)" }}
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-xs font-medium">Scroll down</span>
        <div
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center p-1"
          style={{ borderColor: "var(--border)" }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{
              background: "var(--accent)",
              animation: "float 1.5s ease-in-out infinite",
            }}
          />
        </div>
      </a>
    </section>
  );
}
