"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.slice(1));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass border-b"
          : "bg-transparent border-b border-transparent"
      }`}
      style={{ borderColor: isScrolled ? "var(--border)" : "transparent" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold transition-all duration-200 group-hover:scale-110"
            style={{ background: "var(--accent)" }}
          >
            <Code2 size={16} />
          </div>
          <span className="font-bold text-lg hidden sm:block" style={{ color: "var(--text-primary)" }}>
            Rida<span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === link.href.slice(1)
                  ? "text-white"
                  : "hover:text-white"
              }`}
              style={{
                color:
                  activeSection === link.href.slice(1)
                    ? "var(--accent-light)"
                    : "var(--text-secondary)",
                background:
                  activeSection === link.href.slice(1)
                    ? "var(--accent-glow)"
                    : "transparent",
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#contact");
            }}
            className="ml-2 btn-primary text-sm px-5 py-2"
            style={{ padding: "0.5rem 1.25rem" }}
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: "var(--text-secondary)" }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden glass border-t transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ borderColor: "var(--border)" }}
      >
        <nav className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors"
              style={{ color: "var(--text-secondary)" }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#contact");
            }}
            className="btn-primary mt-2 text-sm"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}
